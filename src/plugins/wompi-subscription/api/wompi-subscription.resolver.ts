import { Inject, Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { RequestContext, CustomerService } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { WompiService } from '../services/wompi.service';
import { FEATURE_CODES } from '../constants';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { Plan, BillingInterval } from '../entities/plan.entity';
import { PlanFeature } from '../entities/plan-feature.entity';
import { CustomerSubscription } from '../entities/customer-subscription.entity';

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
        };
    }

    @Mutation('createSubscriptionWithPayment')
    async createSubscriptionWithPayment(
        @Context() ctx: RequestContext,
        @Args('token') token: string,
        @Args('planId') planId: number,
    ) {
        const customerId = await this.resolveCustomerId(ctx);
        if (!customerId) {
            throw new Error('Not authenticated');
        }

        const customer = await this.customerService.findOne(ctx, customerId);
        if (!customer || !customer.emailAddress) {
            throw new Error('Customer not found or no email');
        }

        const paymentSource = await this.wompiService.createPaymentSource(token, customer.emailAddress);

        const subscription = await this.subscriptionService.createSubscription(
            customerId,
            planId,
            paymentSource.id,
            customer.emailAddress,
        );

        const plan = subscription.plan;
        const amountInCents = Math.round(plan.price * 100);
        const reference = `SUB-${subscription.id}-${Date.now()}`;

        try {
            const transaction = await this.wompiService.createRecurringTransaction(
                paymentSource.id,
                amountInCents,
                reference,
                customer.emailAddress,
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
            productLimit: productLimitValue ? parseInt(productLimitValue, 10) : 0,
            variationLimit: variationLimitValue ? parseInt(variationLimitValue, 10) : 0,
            hasAIAccess: aiAccess,
            hasElectronicBilling: billingAccess,
        };
    }
}