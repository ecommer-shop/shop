import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual, MoreThan, IsNull } from 'typeorm';
import { Logger, CustomerService, Product, ChannelService, RequestContextService } from '@vendure/core';
import { Plan, BillingInterval } from '../entities/plan.entity';
import { Feature, FeatureType } from '../entities/feature.entity';
import { PlanFeature } from '../entities/plan-feature.entity';
import { CustomerSubscription, SubscriptionStatus } from '../entities/customer-subscription.entity';
import { WompiService } from './wompi.service';
import {
    FEATURE_CODES,
    GRACE_PERIOD_DAYS,
    DEFAULT_PLAN_NAMES,
    MANUAL_RENEWAL_REMINDER_DAYS,
    PaymentFlowType,
} from '../constants';

@Injectable()
export class SubscriptionService implements OnModuleInit {
    constructor(
        @InjectRepository(Plan) private planRepository: Repository<Plan>,
        @InjectRepository(Feature) private featureRepository: Repository<Feature>,
        @InjectRepository(PlanFeature) private planFeatureRepository: Repository<PlanFeature>,
        @InjectRepository(CustomerSubscription) private subscriptionRepository: Repository<CustomerSubscription>,
        @InjectRepository(Product) private productRepository: Repository<Product>,
        private customerService: CustomerService,
        private channelService: ChannelService,
        private requestContextService: RequestContextService,
        private wompiService: WompiService,
    ) { }

    async onModuleInit() {
        await this.ensureDefaultPlansExist();
    }

    async ensureDefaultPlansExist(): Promise<void> {
        const existingFree = await this.getPlanByName(DEFAULT_PLAN_NAMES.FREE);
        if (!existingFree) {
            await this.createDefaultPlans();
            Logger.info('Seeded default subscription plans on startup', 'SubscriptionService');
        }
    }

    async assignFreePlanToCustomer(customerId: number): Promise<CustomerSubscription> {
        const existing = await this.getSubscriptionByCustomerId(customerId);
        if (existing) {
            return existing;
        }

        const freePlan = await this.getFreePlan();
        const subscription = this.subscriptionRepository.create({
            customerId,
            planId: freePlan.id,
            status: SubscriptionStatus.ACTIVE,
            startsAt: new Date(),
            endsAt: this.calculateEndDate(freePlan.billingInterval),
            autoRenew: false,
            paymentFlowType: PaymentFlowType.MANUAL,
        });

        const saved = await this.subscriptionRepository.save(subscription);
        Logger.info(`Assigned free plan to customer ${customerId}`, 'SubscriptionService');
        return saved;
    }

    async syncPlanToAllSubscribers(planId: number): Promise<number> {
        const subscriptions = await this.subscriptionRepository.find({
            where: { planId },
        });

        for (const sub of subscriptions) {
            sub.updatedAt = new Date();
            await this.subscriptionRepository.save(sub);
        }

        Logger.info(`Synced ${subscriptions.length} subscriptions to plan ${planId}`, 'SubscriptionService');
        return subscriptions.length;
    }

    async getPlanById(planId: number): Promise<Plan | null> {
        return this.planRepository.findOne({ where: { id: planId }, relations: ['planFeatures', 'planFeatures.feature'] });
    }

    async getPlanByName(name: string): Promise<Plan | null> {
        return this.planRepository.findOne({ where: { name }, relations: ['planFeatures', 'planFeatures.feature'] });
    }

    async getAllPlans(): Promise<Plan[]> {
        return this.planRepository.find({ relations: ['planFeatures', 'planFeatures.feature'] });
    }

    async getFreePlan(): Promise<Plan> {
        let plan = await this.getPlanByName(DEFAULT_PLAN_NAMES.FREE);
        if (!plan) {
            plan = await this.createDefaultPlans();
        }
        return plan;
    }

    async getSubscriptionByCustomerId(customerId: number): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository.findOne({
            where: { customerId },
            relations: ['plan', 'plan.planFeatures', 'plan.planFeatures.feature'],
        });
    }

    async getSubscriptionById(subscriptionId: number): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository.findOne({
            where: { id: subscriptionId },
            relations: ['plan', 'plan.planFeatures', 'plan.planFeatures.feature'],
        });
    }

    async findByPendingReference(reference: string): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository.findOne({
            where: { pendingPaymentReference: reference, status: SubscriptionStatus.PENDING_PAYMENT },
            relations: ['plan'],
        });
    }

    async createRecurrentSubscription(
        customerId: number,
        planId: number,
        paymentMethodType: string,
        billingPaymentSourceId: string,
        billingCustomerEmail: string,
    ): Promise<CustomerSubscription> {
        const existing = await this.getSubscriptionByCustomerId(customerId);
        if (existing) {
            throw new Error('Customer already has a subscription');
        }

        const plan = await this.getPlanById(planId);
        if (!plan) {
            throw new Error('Plan not found');
        }

        const subscription = this.subscriptionRepository.create({
            customerId,
            planId,
            status: SubscriptionStatus.ACTIVE,
            startsAt: new Date(),
            endsAt: this.calculateEndDate(plan.billingInterval),
            autoRenew: true,
            billingPaymentSourceId,
            billingCustomerEmail,
            paymentMethodType,
            paymentFlowType: PaymentFlowType.RECURRENTE,
            lastPaymentAt: new Date(),
        });

        const saved = await this.subscriptionRepository.save(subscription);
        Logger.info(`Created recurrent subscription ${saved.id} for customer ${customerId} with plan ${plan.name}`, 'SubscriptionService');
        return saved;
    }

    async createPendingSubscription(
        customerId: number,
        planId: number,
        paymentMethodType: string,
    ): Promise<{ subscription: CustomerSubscription; reference: string }> {
        const existing = await this.getSubscriptionByCustomerId(customerId);
        if (existing) {
            throw new Error('Customer already has a subscription');
        }

        const plan = await this.getPlanById(planId);
        if (!plan) {
            throw new Error('Plan not found');
        }

        const reference = `SUB-PENDING-${customerId}-${Date.now()}`;

        const subscription = this.subscriptionRepository.create({
            customerId,
            planId,
            status: SubscriptionStatus.PENDING_PAYMENT,
            startsAt: new Date(),
            endsAt: this.calculateEndDate(plan.billingInterval),
            autoRenew: false,
            paymentMethodType,
            paymentFlowType: PaymentFlowType.MANUAL,
            pendingPaymentReference: reference,
        });

        const saved = await this.subscriptionRepository.save(subscription);
        Logger.info(`Created pending subscription ${saved.id} for customer ${customerId}`, 'SubscriptionService');
        return { subscription: saved, reference };
    }

    async activateSubscriptionAfterPayment(subscriptionId: number, paymentSourceId?: string): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId }, relations: ['plan'] });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.status = SubscriptionStatus.ACTIVE;
        subscription.pendingPaymentReference = null;
        subscription.lastPaymentAt = new Date();
        if (paymentSourceId) {
            subscription.billingPaymentSourceId = paymentSourceId;
        }

        return this.subscriptionRepository.save(subscription);
    }

    async createSubscription(
        customerId: number,
        planId: number,
        billingPaymentSourceId: string,
        billingCustomerEmail: string,
    ): Promise<CustomerSubscription> {
        return this.createRecurrentSubscription(
            customerId,
            planId,
            'CARD',
            billingPaymentSourceId,
            billingCustomerEmail,
        );
    }

    async updateSubscriptionStatus(subscriptionId: number, status: SubscriptionStatus): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId }, relations: ['plan'] });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.status = status;
        if (status === SubscriptionStatus.GRACE_PERIOD) {
            subscription.gracePeriodStart = new Date();
        } else if (status === SubscriptionStatus.ACTIVE) {
            subscription.gracePeriodStart = null;
            subscription.startsAt = new Date();
            subscription.endsAt = this.calculateEndDate(subscription.plan?.billingInterval || BillingInterval.MONTHLY);
        }

        return this.subscriptionRepository.save(subscription);
    }

    async extendSubscription(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: subscriptionId },
            relations: ['plan'],
        });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.endsAt = this.calculateEndDate(subscription.plan.billingInterval, subscription.endsAt);
        subscription.lastPaymentAt = new Date();
        return this.subscriptionRepository.save(subscription);
    }

    async extendManualSubscription(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: subscriptionId },
            relations: ['plan'],
        });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.endsAt = this.calculateEndDate(subscription.plan.billingInterval, subscription.endsAt || new Date());
        subscription.lastPaymentAt = new Date();
        return this.subscriptionRepository.save(subscription);
    }

    async stopAutoRenew(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId } });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.autoRenew = false;
        Logger.info(`Stopped auto-renew for subscription ${subscriptionId}`, 'SubscriptionService');
        return this.subscriptionRepository.save(subscription);
    }

    async cancelSubscription(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId } });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        if (subscription.billingPaymentSourceId) {
            await this.wompiService.deletePaymentSource(subscription.billingPaymentSourceId);
            subscription.billingPaymentSourceId = null;
        }

        subscription.status = SubscriptionStatus.CANCELLED;
        subscription.autoRenew = false;

        const saved = await this.subscriptionRepository.save(subscription);

        const freePlan = await this.getFreePlan();
        await this.downgradeToFree(subscriptionId);

        const limitValue = await this.getFeatureValue(subscription.customerId, FEATURE_CODES.MAX_PRODUCTS);
        const limit = limitValue ? parseInt(limitValue, 10) : 15;
        await this.hideExcessProducts(subscription.customerId, limit);

        Logger.info(`Cancelled subscription ${subscriptionId} for customer ${subscription.customerId}`, 'SubscriptionService');
        return saved;
    }

    async cancelAutoRenew(customerId: number): Promise<CustomerSubscription> {
        const subscription = await this.getSubscriptionByCustomerId(customerId);
        if (!subscription) {
            throw new Error('No active subscription found');
        }

        subscription.autoRenew = false;
        return this.subscriptionRepository.save(subscription);
    }

    async getFeatureValue(customerId: number, featureCode: string): Promise<string | null> {
        const subscription = await this.getSubscriptionByCustomerId(customerId);
        if (!subscription || subscription.status !== SubscriptionStatus.ACTIVE) {
            return null;
        }

        const feature = await this.featureRepository.findOne({ where: { code: featureCode } });
        if (!feature) {
            return null;
        }

        const planFeature = await this.planFeatureRepository.findOne({
            where: { planId: subscription.planId, featureId: feature.id },
        });

        return planFeature?.value || null;
    }

    async checkFeatureAccess(customerId: number, featureCode: string): Promise<boolean> {
        const value = await this.getFeatureValue(customerId, featureCode);
        const feature = await this.featureRepository.findOne({ where: { code: featureCode } });

        if (!feature || !value) {
            return feature?.type === FeatureType.BOOLEAN ? false : false;
        }

        if (feature.type === FeatureType.BOOLEAN) {
            return value.toLowerCase() === 'true';
        }

        return true;
    }

    async checkProductLimit(customerId: number): Promise<{ allowed: boolean; current: number; limit: number }> {
        const subscription = await this.getSubscriptionByCustomerId(customerId);
        if (!subscription || subscription.status !== SubscriptionStatus.ACTIVE) {
            return { allowed: false, current: 0, limit: 0 };
        }

        const limitValue = await this.getFeatureValue(customerId, FEATURE_CODES.MAX_PRODUCTS);
        const limit = limitValue ? parseInt(limitValue, 10) : 0;

        const channel = await this.getChannelBySellerId(customerId);
        if (!channel) {
            return { allowed: limit > 0, current: 0, limit };
        }

        const productCount = await this.productRepository.count({
            where: {
                channels: { id: channel.id },
                deletedAt: IsNull(),
            },
        });

        return {
            allowed: productCount < limit,
            current: productCount,
            limit,
        };
    }

    private async getChannelBySellerId(sellerId: number): Promise<any> {
        const { Channel } = await import('@vendure/core');
        return this.planRepository.manager.findOne(Channel, {
            where: { sellerId },
        });
    }

    async getActiveSubscriptionsForRenewal(): Promise<CustomerSubscription[]> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.ACTIVE,
                autoRenew: true,
                endsAt: LessThanOrEqual(today),
            },
            relations: ['plan'],
        });
    }

    async getGracePeriodSubscriptions(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - GRACE_PERIOD_DAYS);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.GRACE_PERIOD,
                gracePeriodStart: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async getSuspendedSubscriptionsForPurge(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - (GRACE_PERIOD_DAYS * 2));

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.SUSPENDED,
                gracePeriodStart: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async getManualSubscriptionsDueForRenewal(): Promise<CustomerSubscription[]> {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + MANUAL_RENEWAL_REMINDER_DAYS);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.ACTIVE,
                autoRenew: false,
                paymentFlowType: PaymentFlowType.MANUAL,
                endsAt: LessThanOrEqual(futureDate),
            },
            relations: ['plan'],
        });
    }

    async getPendingPaymentSubscriptions(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setHours(cutoffDate.getHours() - 24);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.PENDING_PAYMENT,
                createdAt: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async downgradeToFree(subscriptionId: number): Promise<CustomerSubscription> {
        const freePlan = await this.getFreePlan();
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId } });

        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.planId = freePlan.id;
        subscription.status = SubscriptionStatus.SUSPENDED;

        return this.subscriptionRepository.save(subscription);
    }

    async hideExcessProducts(customerId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelBySellerId(customerId);
        if (!channel) {
            Logger.warn(`No channel found for seller ${customerId}`, 'SubscriptionService');
            return 0;
        }

        const products = await this.productRepository.find({
            where: {
                channels: { id: channel.id },
                deletedAt: IsNull(),
            },
            relations: ['channels'],
            order: { createdAt: 'ASC' },
            take: 1000,
        });

        const productsToHide = products.slice(maxAllowed);
        let hiddenCount = 0;

        for (const product of productsToHide) {
            await this.productRepository.update(product.id, { deletedAt: new Date() });
            hiddenCount++;
        }

        Logger.info(`Hidden ${hiddenCount} products for customer ${customerId}`, 'SubscriptionService');
        return hiddenCount;
    }

    async restoreHiddenProducts(customerId: number, maxAllowed: number): Promise<number> {
        const channel = await this.getChannelBySellerId(customerId);
        if (!channel) {
            Logger.warn(`No channel found for seller ${customerId}`, 'SubscriptionService');
            return 0;
        }

        const products = await this.productRepository.find({
            where: {
                channels: { id: channel.id },
            },
            relations: ['channels'],
            order: { createdAt: 'ASC' },
            take: 1000,
        });

        const productsToRestore = products.slice(0, maxAllowed);
        let restoredCount = 0;

        for (const product of productsToRestore) {
            if (product.deletedAt) {
                await this.productRepository.update(product.id, { deletedAt: null });
                restoredCount++;
            }
        }

        Logger.info(`Restored ${restoredCount} products for customer ${customerId}`, 'SubscriptionService');
        return restoredCount;
    }

    private calculateEndDate(interval: BillingInterval, fromDate?: Date): Date {
        const startDate = fromDate || new Date();
        const endDate = new Date(startDate);

        if (interval === BillingInterval.MONTHLY) {
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (interval === BillingInterval.YEARLY) {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        return endDate;
    }

    async createDefaultPlans(): Promise<Plan> {
        const freePlan = this.planRepository.create({
            name: DEFAULT_PLAN_NAMES.FREE,
            price: 0,
            billingInterval: BillingInterval.MONTHLY,
            isActive: true,
            description: 'Plan gratuito con características limitadas',
        });
        const savedFreePlan = await this.planRepository.save(freePlan);

        const tiendaPlan = this.planRepository.create({
            name: DEFAULT_PLAN_NAMES.TIENDA,
            price: 29900,
            billingInterval: BillingInterval.MONTHLY,
            isActive: true,
            description: 'Plan para tiendas con hasta 500 productos',
        });
        const savedTiendaPlan = await this.planRepository.save(tiendaPlan);

        const omnichannelPlan = this.planRepository.create({
            name: DEFAULT_PLAN_NAMES.OMNICHANNEL,
            price: 99900,
            billingInterval: BillingInterval.MONTHLY,
            isActive: true,
            description: 'Plan multicanal con hasta 1.500 productos',
        });
        const savedOmnichannelPlan = await this.planRepository.save(omnichannelPlan);

        const features = [
            { code: FEATURE_CODES.MAX_PRODUCTS, name: 'Max Products', type: FeatureType.NUMERIC },
            { code: FEATURE_CODES.MAX_VARIATIONS, name: 'Max Variations', type: FeatureType.NUMERIC },
            { code: FEATURE_CODES.AI_ACCESS, name: 'AI Access', type: FeatureType.BOOLEAN },
            { code: FEATURE_CODES.ELECTRONIC_BILLING, name: 'Electronic Billing', type: FeatureType.BOOLEAN },
        ];

        const planConfigs = [
            { planId: savedFreePlan.id, values: { max_products: '15', max_variations: '250', ai_access: 'false', electronic_billing: 'false' } },
            { planId: savedTiendaPlan.id, values: { max_products: '500', max_variations: '5000', ai_access: 'true', electronic_billing: 'true' } },
            { planId: savedOmnichannelPlan.id, values: { max_products: '1500', max_variations: '15000', ai_access: 'true', electronic_billing: 'true' } },
        ];

        for (const featureData of features) {
            let feature = await this.featureRepository.findOne({ where: { code: featureData.code } });
            if (!feature) {
                feature = this.featureRepository.create(featureData);
                feature = await this.featureRepository.save(feature);
            }

            for (const config of planConfigs) {
                await this.planFeatureRepository.save(
                    this.planFeatureRepository.create({
                        planId: config.planId,
                        featureId: feature.id,
                        value: config.values[featureData.code as keyof typeof config.values],
                    })
                );
            }
        }

        Logger.info('Created default subscription plans', 'SubscriptionService');
        return savedFreePlan;
    }
}
