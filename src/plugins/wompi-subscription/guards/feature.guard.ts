import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CustomerService, Permission, RequestContext } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { FEATURE_CODE_KEY } from '../decorators/requires-feature.decorator';
import { FEATURE_CODES } from '../constants';

@Injectable()
export class FeatureGuard implements CanActivate {
    constructor(
        protected subscriptionService: SubscriptionService,
        protected customerService: CustomerService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const customerId = await this.resolveCustomerId(context);
        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        let subscription = await this.subscriptionService.getSubscriptionByCustomerId(customerId);

        if (!subscription) {
            await this.subscriptionService.assignFreePlanToCustomer(customerId);
            return true;
        }

        if (subscription.status === SubscriptionStatus.PENDING_PAYMENT) {
            throw new ForbiddenException('Subscription is pending payment. Please complete the payment first.');
        }

        if (subscription.status === SubscriptionStatus.GRACE_PERIOD) {
            throw new ForbiddenException('Subscription is in grace period. Please update your payment method.');
        }

        if (subscription.status === SubscriptionStatus.CANCELLED) {
            throw new ForbiddenException('Subscription has been cancelled.');
        }

        if (subscription.status !== SubscriptionStatus.ACTIVE) {
            throw new ForbiddenException('Subscription is not active.');
        }

        return true;
    }

    protected async isSuperAdmin(context: ExecutionContext): Promise<boolean> {
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const ctx = gqlCtx.getContext() as unknown as RequestContext;
            return ctx?.userHasPermissions?.([Permission.SuperAdmin]) ?? false;
        } catch {
            return false;
        }
    }

    protected async resolveCustomerId(context: ExecutionContext): Promise<number | null> {
        let req: any;
        let requestContext: RequestContext | undefined;
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            requestContext = gqlCtx.getContext() as unknown as RequestContext;
            req = requestContext.req;
        } catch {
            req = context.switchToHttp().getRequest();
        }
        const userId = req?.activeUserId || req?.raw?.activeUserId;
        if (!userId) return null;

        const customer = await this.customerService.findOneByUserId(requestContext as RequestContext, Number(userId));
        return customer ? Number(customer.id) : null;
    }
}

@Injectable()
export class ProductLimitGuard extends FeatureGuard {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const customerId = await this.resolveCustomerId(context);
        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        await super.canActivate(context);

        const { allowed, current, limit } = await this.subscriptionService.checkProductLimit(customerId);
        if (!allowed) {
            throw new ForbiddenException(
                `Product limit reached. You have ${current}/${limit} products. Upgrade your plan to add more.`,
            );
        }

        return true;
    }
}

@Injectable()
export class FeatureAccessGuard extends FeatureGuard {
    constructor(
        subscriptionService: SubscriptionService,
        customerService: CustomerService,
        private reflector: Reflector,
    ) {
        super(subscriptionService, customerService);
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const featureCode = this.reflector.get<string>(FEATURE_CODE_KEY, context.getHandler());
        if (!featureCode) {
            return true;
        }

        const customerId = await this.resolveCustomerId(context);
        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        await super.canActivate(context);

        const hasAccess = await this.subscriptionService.checkFeatureAccess(customerId, featureCode);
        if (!hasAccess) {
            const messages: Record<string, string> = {
                [FEATURE_CODES.AI_ACCESS]: 'AI features are not available on your current plan.',
                [FEATURE_CODES.ELECTRONIC_BILLING]: 'Electronic billing is not available on your current plan.',
            };
            throw new ForbiddenException(messages[featureCode] || `Feature "${featureCode}" is not available on your current plan.`);
        }

        return true;
    }
}
