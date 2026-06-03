import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { RequestContext, TransactionalConnection, Administrator, Logger } from '@vendure/core';
import { PlanManagementService } from '../services/plan-management.service';
import { SubscriptionQueryService } from '../services/subscription-query.service';
import { SubscriptionWriteService } from '../services/subscription-write.service';
import { SubscriptionLifecycleService } from '../services/subscription-lifecycle.service';
import { FeatureCheckService } from '../services/feature-check.service';
import { WompiService } from '../services/wompi.service';
import { FEATURE_CODES } from '../constants';
import { PAYMENT_METHOD_FLOW, PaymentFlowType } from '../payment-methods';

@Injectable()
@Resolver()
export class SubscriptionResolver {
    constructor(
        private planManagementService: PlanManagementService,
        private subscriptionQueryService: SubscriptionQueryService,
        private subscriptionWriteService: SubscriptionWriteService,
        private lifecycleService: SubscriptionLifecycleService,
        private featureCheckService: FeatureCheckService,
        private wompiService: WompiService,
        private connection: TransactionalConnection,
    ) { }

    private async resolveAdministratorId(ctx: RequestContext, customerEmail?: string): Promise<number | null> {
        if (ctx.activeUserId) {
            const repo = this.connection.rawConnection.getRepository(Administrator);
            const admin = await repo.findOne({
                where: { user: { id: Number(ctx.activeUserId) } },
                relations: ['user'],
            });
            if (admin) return Number(admin.id);
        }
        if (customerEmail) {
            const repo = this.connection.rawConnection.getRepository(Administrator);
            const admin = await repo.findOne({ where: { emailAddress: customerEmail } });
            if (admin) return Number(admin.id);
        }
        return null;
    }

    @Query('mySubscription')
    async getMySubscription(
        @Context() ctx: RequestContext,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            return null;
        }

        const subscription = await this.subscriptionQueryService.getSubscriptionByAdministratorId(administratorId);
        if (!subscription) {
            return null;
        }

        const [plan, productLimitValue, variationLimitValue, aiAccess, billingAccess] = await Promise.all([
            subscription.planId ? this.planManagementService.getPlanById(subscription.planId) : Promise.resolve(null),
            this.featureCheckService.getFeatureValue(administratorId, FEATURE_CODES.MAX_PRODUCTS),
            this.featureCheckService.getFeatureValue(administratorId, FEATURE_CODES.MAX_VARIATIONS),
            this.featureCheckService.checkFeatureAccess(administratorId, FEATURE_CODES.AI_ACCESS),
            this.featureCheckService.checkFeatureAccess(administratorId, FEATURE_CODES.ELECTRONIC_BILLING),
        ]);

        return {
            id: subscription.id,
            status: subscription.status,
            startsAt: subscription.startsAt,
            endsAt: subscription.endsAt,
            gracePeriodStart: subscription.gracePeriodStart,
            autoRenew: subscription.autoRenew,
            plan,
            paymentMethodType: subscription.paymentMethodType,
            paymentFlowType: subscription.paymentFlowType,
            productLimit: productLimitValue ? parseInt(productLimitValue, 10) : 0,
            variationLimit: variationLimitValue ? parseInt(variationLimitValue, 10) : 0,
            hasAIAccess: aiAccess,
            hasElectronicBilling: billingAccess,
        };
    }

    @Query('checkProductLimit')
    async checkProductLimit(
        @Context() ctx: RequestContext,
        @Args('channelToken') channelToken?: string,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            return { allowed: false, current: 0, limit: 0 };
        }
        return this.featureCheckService.checkProductLimit(administratorId, channelToken);
    }

    @Query('checkVariationLimit')
    async checkVariationLimit(
        @Context() ctx: RequestContext,
        @Args('channelToken') channelToken?: string,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            return { allowed: false, current: 0, limit: 0 };
        }
        return this.featureCheckService.checkVariationLimit(administratorId, channelToken);
    }

    @Query('checkFeatureAccess')
    async checkFeatureAccess(
        @Context() ctx: RequestContext,
        @Args('featureCode') featureCode: string,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            return false;
        }
        return this.featureCheckService.checkFeatureAccess(administratorId, featureCode);
    }

    @Mutation('cancelAutoRenew')
    async cancelAutoRenew(
        @Context() ctx: RequestContext,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.lifecycleService.cancelAutoRenew(administratorId);
        return {
            id: subscription.id,
            status: subscription.status,
            startsAt: subscription.startsAt,
            endsAt: subscription.endsAt,
            gracePeriodStart: subscription.gracePeriodStart,
            autoRenew: subscription.autoRenew,
            plan: subscription.plan,
            paymentMethodType: subscription.paymentMethodType,
            paymentFlowType: subscription.paymentFlowType,
        };
    }

    @Mutation('createSubscriptionWithPayment')
    async createSubscriptionWithPayment(
        @Context() ctx: RequestContext,
        @Args('token') token: string,
        @Args('planId') planId: number,
        @Args('paymentMethod') paymentMethod: string,
        @Args('customerEmail') customerEmail?: string,
        @Args('sessionId') sessionId?: string,
        @Args('deviceId') deviceId?: string,
    ) {
        let administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            throw new Error('Not authenticated');
        }

        const repo = this.connection.rawConnection.getRepository(Administrator);
        const admin = await repo.findOne({ where: { id: administratorId } });
        if (!admin || !admin.emailAddress) {
            throw new Error('Administrator not found or no email');
        }

        const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
        if (!flowType) {
            throw new Error(`Invalid payment method: ${paymentMethod}`);
        }

        if (flowType !== PaymentFlowType.RECURRENTE) {
            throw new Error('Use createPendingSubscription for manual payment methods');
        }

        const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();

        const paymentSource = await this.wompiService.createPaymentSource(
            paymentMethod,
            token,
            admin.emailAddress,
            acceptanceToken,
            personalAuthToken,
            sessionId,
            deviceId,
        );

        const subscription = await this.subscriptionWriteService.createRecurrentSubscription(
            administratorId,
            planId,
            paymentMethod,
            paymentSource.id,
            admin.emailAddress,
        );

        const targetPlan = await this.planManagementService.getPlanById(planId);
        if (!targetPlan) {
            throw new Error(`Plan with id ${planId} not found`);
        }
        const amountInCents = Math.round(targetPlan.price * 100);
        const reference = `SUB-${subscription.id}-${Date.now()}`;

        Logger.debug(`[createSubscriptionWithPayment] amountInCents=${amountInCents} plan.price=${targetPlan.price} plan.name=${targetPlan.name} plan.id=${targetPlan.id} sub.status=${subscription.status}`, 'SubscriptionResolver');

        try {
            const paymentMethodInfo = paymentMethod === 'CARD'
                ? { type: 'CARD', installments: 1 }
                : undefined;

            const transaction = await this.wompiService.createRecurringTransaction(
                paymentSource.id,
                amountInCents,
                reference,
                admin.emailAddress,
                acceptanceToken,
                personalAuthToken,
                paymentMethodInfo,
            );

            if (transaction.status === 'APPROVED') {
                await this.lifecycleService.extendSubscription(subscription.id);
            } else {
                Logger.debug(`Transaction ${transaction.id} initial status: ${transaction.status} — awaiting webhook`, 'SubscriptionResolver');
            }
        } catch (error) {
            Logger.error(`Initial charge failed: ${error}`, 'SubscriptionResolver');
        }

        const productLimitValue = await this.featureCheckService.getFeatureValue(administratorId, FEATURE_CODES.MAX_PRODUCTS);
        const variationLimitValue = await this.featureCheckService.getFeatureValue(administratorId, FEATURE_CODES.MAX_VARIATIONS);
        const aiAccess = await this.featureCheckService.checkFeatureAccess(administratorId, FEATURE_CODES.AI_ACCESS);
        const billingAccess = await this.featureCheckService.checkFeatureAccess(administratorId, FEATURE_CODES.ELECTRONIC_BILLING);

        return {
            id: subscription.id,
            status: subscription.status,
            startsAt: subscription.startsAt,
            endsAt: subscription.endsAt,
            gracePeriodStart: subscription.gracePeriodStart,
            autoRenew: subscription.autoRenew,
            plan: targetPlan,
            paymentMethodType: subscription.paymentMethodType,
            paymentFlowType: subscription.paymentFlowType,
            productLimit: productLimitValue ? parseInt(productLimitValue, 10) : 0,
            variationLimit: variationLimitValue ? parseInt(variationLimitValue, 10) : 0,
            hasAIAccess: aiAccess,
            hasElectronicBilling: billingAccess,
        };
    }

    @Mutation('createPendingSubscription')
    async createPendingSubscription(
        @Context() ctx: RequestContext,
        @Args('planId') planId: number,
        @Args('paymentMethod') paymentMethod: string,
        @Args('customerEmail') customerEmail?: string,
    ) {
        let administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            throw new Error('Not authenticated');
        }

        const repo = this.connection.rawConnection.getRepository(Administrator);
        const admin = await repo.findOne({ where: { id: administratorId } });
        if (!admin || !admin.emailAddress) {
            throw new Error('Administrator not found or no email');
        }

        const { subscription, reference } = await this.subscriptionWriteService.createPendingSubscription(
            administratorId,
            planId,
            paymentMethod,
        );

        const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();
        const targetPlan = await this.planManagementService.getPlanById(planId);
        if (!targetPlan) {
            throw new Error(`Plan with id ${planId} not found`);
        }
        const amountInCents = Math.round(targetPlan.price * 100);

        const transaction = await this.wompiService.createTransaction({
            amount_in_cents: amountInCents,
            currency: 'COP',
            reference,
            customer_email: admin.emailAddress,
            payment_method: {
                type: paymentMethod,
            },
            acceptance_token: acceptanceToken,
            accept_personal_auth: personalAuthToken,
            redirect_url: '',
        });

        const asyncPaymentUrl = transaction.payment_method?.extra?.async_payment_url
            || transaction.payment_method?.extra?.url
            || null;

        const qrImage = transaction.payment_method?.extra?.qr_image || null;

        return {
            id: subscription.id,
            status: subscription.status,
            startsAt: subscription.startsAt,
            endsAt: subscription.endsAt,
            autoRenew: subscription.autoRenew,
            plan: targetPlan,
            paymentMethodType: subscription.paymentMethodType,
            paymentFlowType: subscription.paymentFlowType,
            asyncPaymentUrl,
            qrImage,
            transactionId: transaction.id,
        };
    }

    @Mutation('stopAutoRenew')
    async stopAutoRenew(
        @Context() ctx: RequestContext,
        @Args('subscriptionId') subscriptionId: number,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.subscriptionQueryService.getSubscriptionById(subscriptionId);
        if (!subscription || subscription.administratorId !== administratorId) {
            throw new Error('Subscription not found');
        }

        const updated = await this.lifecycleService.stopAutoRenew(subscriptionId);
        return {
            id: updated.id,
            status: updated.status,
            startsAt: updated.startsAt,
            endsAt: updated.endsAt,
            autoRenew: updated.autoRenew,
            plan: updated.plan,
        };
    }

    @Mutation('cancelSubscription')
    async cancelSubscription(
        @Context() ctx: RequestContext,
        @Args('subscriptionId') subscriptionId: number,
        @Args('customerEmail') customerEmail?: string,
    ) {
        const administratorId = await this.resolveAdministratorId(ctx, customerEmail);
        if (!administratorId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.subscriptionQueryService.getSubscriptionById(subscriptionId);
        if (!subscription || subscription.administratorId !== administratorId) {
            throw new Error('Subscription not found');
        }

        const updated = await this.lifecycleService.cancelSubscription(subscriptionId);
        return {
            id: updated.id,
            status: updated.status,
            startsAt: updated.startsAt,
            endsAt: updated.endsAt,
            autoRenew: updated.autoRenew,
            plan: updated.plan,
        };
    }
}
