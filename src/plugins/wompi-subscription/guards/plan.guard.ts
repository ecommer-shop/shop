import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CustomerService, Permission, RequestContext } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { PLAN_HIERARCHY } from '../constants';
import { REQUIRED_PLAN_KEY } from '../decorators/requires-plan.decorator';

@Injectable()
export class PlanGuard implements CanActivate {
    constructor(
        private subscriptionService: SubscriptionService,
        private customerService: CustomerService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const requiredPlan = this.reflector.get<string>(REQUIRED_PLAN_KEY, context.getHandler());
        if (!requiredPlan) {
            return true;
        }

        const customerId = await this.resolveCustomerId(context);
        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        const subscription = await this.subscriptionService.getSubscriptionByCustomerId(customerId);
        if (!subscription) {
            throw new ForbiddenException('No active subscription found');
        }

        if (subscription.status !== SubscriptionStatus.ACTIVE) {
            throw new ForbiddenException('Subscription is not active.');
        }

        const planName = subscription.plan?.name;
        if (!planName) {
            throw new ForbiddenException('No plan assigned.');
        }

        const userLevel = PLAN_HIERARCHY[planName];
        const requiredLevel = PLAN_HIERARCHY[requiredPlan];

        if (userLevel === undefined) {
            throw new ForbiddenException(`Unknown plan: ${planName}`);
        }

        if (requiredLevel === undefined) {
            throw new ForbiddenException(`Unknown required plan: ${requiredPlan}`);
        }

        if (userLevel < requiredLevel) {
            throw new ForbiddenException(
                `This action requires the "${requiredPlan}" plan or higher. Your current plan is "${planName}".`,
            );
        }

        return true;
    }

    private async isSuperAdmin(context: ExecutionContext): Promise<boolean> {
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const ctx = gqlCtx.getContext() as unknown as RequestContext;
            return ctx?.userHasPermissions?.([Permission.SuperAdmin]) ?? false;
        } catch {
            return false;
        }
    }

    private async resolveCustomerId(context: ExecutionContext): Promise<number | null> {
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
