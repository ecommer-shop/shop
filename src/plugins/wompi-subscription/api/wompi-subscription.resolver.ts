import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { RequestContext, CustomerService } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { WompiService } from '../services/wompi.service';
import { FEATURE_CODES, PAYMENT_METHOD_FLOW, PaymentFlowType } from '../constants';

@Injectable()
export class WompiSubscriptionShopResolver {
    constructor(
        private subscriptionService: SubscriptionService,
        private wompiService: WompiService,
        private customerService: CustomerService,
    ) {}

    private async resolveCustomerId(ctx: RequestContext): Promise<number | null> {
        const userId = ctx.activeUserId;
        if (!userId) {
            return null;
        }
        const customer = await this.customerService.findOneByUserId(ctx, Number(userId));
        return customer ? Number(customer.id) : null;
    }

    @Query('mySubscription')
    async getMySubscription(@Context() ctx: RequestContext) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            return null;
        }

        const subscription = await this.subscriptionService.getSubscriptionByCustomerId(customerId);
        if (!subscription) {
            return null;
        }

        const productLimitValue = await this.subscriptionService.getFeatureValue(customerId, FEATURE_CODES.MAX_PRODUCTS);
        const variationLimitValue = await this.subscriptionService.getFeatureValue(customerId, FEATURE_CODES.MAX_VARIATIONS);
        const aiAccess = await this.subscriptionService.checkFeatureAccess(customerId, FEATURE_CODES.AI_ACCESS);
        const billingAccess = await this.subscriptionService.checkFeatureAccess(customerId, FEATURE_CODES.ELECTRONIC_BILLING);

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
            productLimit: productLimitValue ? parseInt(productLimitValue, 10) : 0,
            variationLimit: variationLimitValue ? parseInt(variationLimitValue, 10) : 0,
            hasAIAccess: aiAccess,
            hasElectronicBilling: billingAccess,
        };
    }

    @Query('allPlans')
    async getAllPlans() {
        return this.subscriptionService.getAllPlans();
    }

    @Query('checkProductLimit')
    async checkProductLimit(@Context() ctx: RequestContext) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            return { allowed: false, current: 0, limit: 0 };
        }
        return this.subscriptionService.checkProductLimit(customerId);
    }

    @Query('checkFeatureAccess')
    async checkFeatureAccess(@Context() ctx: RequestContext, @Args('featureCode') featureCode: string) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            return false;
        }
        return this.subscriptionService.checkFeatureAccess(customerId, featureCode);
    }

    @Mutation('cancelAutoRenew')
    async cancelAutoRenew(@Context() ctx: RequestContext) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.subscriptionService.cancelAutoRenew(customerId);
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
    ) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const customer = await this.customerService.findOne(ctx, customerId);
        if (!customer || !customer.emailAddress) {
            throw new Error('Customer not found or no email');
        }

        const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
        if (!flowType) {
            throw new Error(`Invalid payment method: ${paymentMethod}`);
        }

        if (flowType !== PaymentFlowType.RECURRENTE) {
            throw new Error('Use createPendingSubscription for manual payment methods');
        }

        const acceptanceToken = await this.wompiService.getAcceptanceToken();

        const paymentSource = await this.wompiService.createPaymentSource(
            paymentMethod,
            token,
            customer.emailAddress,
            acceptanceToken,
        );

        const subscription = await this.subscriptionService.createRecurrentSubscription(
            customerId,
            planId,
            paymentMethod,
            paymentSource.id,
            customer.emailAddress,
        );

        const amountInCents = Math.round(subscription.plan.price * 100);
        const reference = `SUB-${subscription.id}-${Date.now()}`;

        try {
            const transaction = await this.wompiService.createRecurringTransaction(
                paymentSource.id,
                amountInCents,
                reference,
                customer.emailAddress,
                acceptanceToken,
            );

            if (transaction.status === 'APPROVED') {
                await this.subscriptionService.extendSubscription(subscription.id);
            }
        } catch (error) {
            console.error('Initial charge failed:', error);
        }

        const productLimitValue = await this.subscriptionService.getFeatureValue(customerId, FEATURE_CODES.MAX_PRODUCTS);
        const variationLimitValue = await this.subscriptionService.getFeatureValue(customerId, FEATURE_CODES.MAX_VARIATIONS);
        const aiAccess = await this.subscriptionService.checkFeatureAccess(customerId, FEATURE_CODES.AI_ACCESS);
        const billingAccess = await this.subscriptionService.checkFeatureAccess(customerId, FEATURE_CODES.ELECTRONIC_BILLING);

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
    ) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const customer = await this.customerService.findOne(ctx, customerId);
        if (!customer || !customer.emailAddress) {
            throw new Error('Customer not found or no email');
        }

        const { subscription, reference } = await this.subscriptionService.createPendingSubscription(
            customerId,
            planId,
            paymentMethod,
        );

        const acceptanceToken = await this.wompiService.getAcceptanceToken();
        const amountInCents = Math.round(subscription.plan.price * 100);

        const transaction = await this.wompiService.createTransaction({
            amount_in_cents: amountInCents,
            currency: 'COP',
            reference,
            customer_email: customer.emailAddress,
            payment_method: {
                type: paymentMethod,
            },
            acceptance_token: acceptanceToken,
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
            plan: subscription.plan,
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
    ) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);
        if (!subscription || subscription.customerId !== customerId) {
            throw new Error('Subscription not found');
        }

        const updated = await this.subscriptionService.stopAutoRenew(subscriptionId);
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
    ) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);
        if (!subscription || subscription.customerId !== customerId) {
            throw new Error('Subscription not found');
        }

        const updated = await this.subscriptionService.cancelSubscription(subscriptionId);
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
