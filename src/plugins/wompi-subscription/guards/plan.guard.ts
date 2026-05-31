import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission, RequestContext, Administrator } from '@vendure/core';
import { TransactionalConnection } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { PLAN_HIERARCHY } from '../constants';
import { REQUIRED_PLAN_KEY } from '../decorators/requires-plan.decorator';

@Injectable()
export class PlanGuard implements CanActivate {
    constructor(
        private subscriptionService: SubscriptionService,
        private connection: TransactionalConnection,
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

        const administratorId = await this.resolveAdministratorId(context);
        if (!administratorId) {
            throw new ForbiddenException('Authentication required');
        }

        const subscription = await this.subscriptionService.getSubscriptionByAdministratorId(administratorId);
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

    private async resolveAdministratorId(context: ExecutionContext): Promise<number | null> {
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