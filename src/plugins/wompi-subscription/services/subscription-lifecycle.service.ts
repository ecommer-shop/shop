import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@vendure/core';
import { CustomerSubscription, SubscriptionStatus } from '../entities/customer-subscription.entity';
import { Plan, BillingInterval } from '../entities/plan.entity';
import { WompiService } from './wompi.service';
import { PlanManagementService } from './plan-management.service';
import { SubscriptionQueryService } from './subscription-query.service';
import { BillingEmailService } from './billing-email.service';
import { calculateEndDate } from './utils/date-utils';
import { BifrostService } from '../../bifrost/services/bifrost.service';

@Injectable()
export class SubscriptionLifecycleService {
    constructor(
        @InjectRepository(CustomerSubscription) private subscriptionRepository: Repository<CustomerSubscription>,
        @InjectRepository(Plan) private planRepository: Repository<Plan>,
        private wompiService: WompiService,
        private planManagementService: PlanManagementService,
        private subscriptionQueryService: SubscriptionQueryService,
        private billingEmailService: BillingEmailService,
        private bifrostService: BifrostService,
    ) { }

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
            subscription.endsAt = calculateEndDate(subscription.plan?.billingInterval || BillingInterval.MONTHLY);
        }

        const saved = await this.subscriptionRepository.save(subscription);

        if (status === SubscriptionStatus.GRACE_PERIOD) {
            const adminEmail = await this.subscriptionQueryService.getAdministratorEmail(subscription.administratorId);
            if (adminEmail) {
                await this.billingEmailService.sendGracePeriodNotice(
                    adminEmail,
                    subscription.plan?.name ?? 'Unknown',
                );
            }
        }

        return saved;
    }

    async extendSubscription(subscriptionId: number, transactionId?: string): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: subscriptionId },
            relations: ['plan'],
        });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        if (transactionId && subscription.lastTransactionId === transactionId) {
            Logger.debug(`Subscription ${subscriptionId} already extended by transaction ${transactionId}`, 'SubscriptionLifecycleService');
            return subscription;
        }

        subscription.endsAt = calculateEndDate(subscription.plan.billingInterval, subscription.endsAt ?? undefined);
        subscription.lastPaymentAt = new Date();
        if (transactionId) {
            subscription.lastTransactionId = transactionId;
        }
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

        subscription.endsAt = calculateEndDate(subscription.plan.billingInterval, subscription.endsAt || new Date());
        subscription.lastPaymentAt = new Date();
        return this.subscriptionRepository.save(subscription);
    }

    async stopAutoRenew(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId } });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.autoRenew = false;
        Logger.info(`Stopped auto-renew for subscription ${subscriptionId}`, 'SubscriptionLifecycleService');
        return this.subscriptionRepository.save(subscription);
    }

    async cancelSubscription(subscriptionId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository.findOne({
            where: { id: subscriptionId },
            relations: ['plan'],
        });
        if (!subscription) {
            throw new Error('Subscription not found');
        }

        const administratorId = subscription.administratorId;

        if (subscription.billingPaymentSourceId) {
            await this.wompiService.deletePaymentSource(subscription.billingPaymentSourceId);
        }

        // Cancelación rápida: conservar el plan pagado y los días que faltaban para la
        // próxima renovación (endsAt). Pasa a GRACE_PERIOD; el job degradará a Free
        // (plan + bifrost) cuando se cumpla max(endsAt, graceStart + 7d).
        subscription.status = SubscriptionStatus.GRACE_PERIOD;
        subscription.autoRenew = false;
        subscription.gracePeriodStart = new Date();
        subscription.billingPaymentSourceId = null;
        subscription.billingCustomerEmail = null as any;
        subscription.paymentMethodType = null as any;
        subscription.paymentFlowType = null as any;
        subscription.lastPaymentAt = null as any;

        const saved = await this.subscriptionRepository.save(subscription);

        Logger.info(`Subscription ${subscriptionId} cancelled, grace until ${saved.endsAt?.toISOString()} for administrator ${administratorId}`, 'SubscriptionLifecycleService');
        return saved;
    }

    async cancelAutoRenew(administratorId: number): Promise<CustomerSubscription> {
        const subscription = await this.subscriptionRepository
            .createQueryBuilder('sub')
            .leftJoinAndSelect('sub.plan', 'plan')
            .leftJoinAndSelect('plan.planFeatures', 'planFeatures')
            .leftJoinAndSelect('planFeatures.feature', 'feature')
            .where('sub.administratorId = :adminId', { adminId: administratorId })
            .getOne();

        if (!subscription) {
            throw new Error('No active subscription found');
        }

        subscription.autoRenew = false;
        return this.subscriptionRepository.save(subscription);
    }

    async downgradeToFree(subscriptionId: number): Promise<CustomerSubscription> {
        const freePlan = await this.planManagementService.getFreePlan();
        const subscription = await this.subscriptionRepository.findOne({ where: { id: subscriptionId } });

        if (!subscription) {
            throw new Error('Subscription not found');
        }

        subscription.plan = freePlan;
        subscription.planId = freePlan.id;
        subscription.status = SubscriptionStatus.ACTIVE;
        subscription.autoRenew = false;
        subscription.endsAt = null;
        subscription.gracePeriodStart = null as any;
        subscription.lastTransactionId = null;

        const saved = await this.subscriptionRepository.save(subscription);

        void this.bifrostService.updateSellerVK(subscription.administratorId, freePlan.name).catch((e: any) => {
            Logger.error(`Failed to downgrade bifrost key for administrator ${subscription.administratorId}: ${e?.message}`, 'SubscriptionLifecycleService');
        });

        return saved;
    }
}
