import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission, RequestContext, Administrator } from '@vendure/core';
import { TransactionalConnection } from '@vendure/core';
import { SubscriptionQueryService } from '../services/subscription-query.service';
import { PlanManagementService } from '../services/plan-management.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';

@Injectable()
export class FeatureGuard implements CanActivate {
    constructor(
        protected subscriptionQueryService: SubscriptionQueryService,
        protected planManagementService: PlanManagementService,
        protected connection: TransactionalConnection,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const administratorId = await this.resolveAdministratorId(context);
        if (!administratorId) {
            throw new ForbiddenException('Authentication required');
        }

        let subscription = await this.subscriptionQueryService.getSubscriptionByAdministratorId(administratorId);

        if (!subscription) {
            await this.planManagementService.assignFreePlanToAdministrator(administratorId);
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

    protected async resolveAdministratorId(context: ExecutionContext): Promise<number | null> {
        let ctx: any;
        let customerEmail: string | undefined;
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            ctx = gqlCtx.getContext();
            customerEmail = gqlCtx.getArgs()?.customerEmail;
        } catch {
            ctx = context.switchToHttp().getRequest() as any;
            customerEmail = ctx?.body?.variables?.customerEmail;
        }

        const userId = ctx?.activeUserId || ctx?.req?.activeUserId || ctx?.req?.raw?.activeUserId || ctx?.session?.activeUserId;
        if (userId) {
            const admin = await this.connection.rawConnection.getRepository(Administrator).findOne({
                where: { user: { id: Number(userId) } },
            });
            if (admin) return Number(admin.id);
        }

        if (customerEmail) {
            const admin = await this.connection.rawConnection.getRepository(Administrator).findOne({
                where: { emailAddress: customerEmail },
            });
            if (admin) return Number(admin.id);
        }

        return null;
    }
}
