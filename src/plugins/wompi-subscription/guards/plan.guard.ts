import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission, RequestContext, Administrator } from '@vendure/core';
import { TransactionalConnection } from '@vendure/core';
import { SubscriptionQueryService } from '../services/subscription-query.service';
import { PlanManagementService } from '../services/plan-management.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { PLAN_HIERARCHY } from '../constants';
import { REQUIRED_PLAN_KEY } from '../decorators/requires-plan.decorator';

@Injectable()
export class PlanGuard implements CanActivate {
    constructor(
        private subscriptionQueryService: SubscriptionQueryService,
        private planManagementService: PlanManagementService,
        private connection: TransactionalConnection,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const req = gqlCtx.getContext().req;
            const store = req?.['vendureRequestContext'];
            const ctx = (store?.withTransactionManager || store?.default) as RequestContext | undefined;

            if (ctx?.userHasPermissions?.([Permission.SuperAdmin])) {
                return true;
            }

            const { Reflector } = await import('@nestjs/core');
            const reflector = new Reflector();
            const requiredPlanName = reflector.get<string>(REQUIRED_PLAN_KEY, context.getHandler());
            if (!requiredPlanName) {
                return true;
            }

            const administratorId = await this.resolveAdministratorId(context);
            if (!administratorId) {
                throw new ForbiddenException('Authentication required');
            }

            const subscription = await this.subscriptionQueryService.getSubscriptionByAdministratorId(administratorId);
            if (!subscription) {
                await this.planManagementService.assignFreePlanToAdministrator(administratorId);
                throw new ForbiddenException('Free plan does not have access to this feature');
            }

            if (subscription.status !== SubscriptionStatus.ACTIVE) {
                throw new ForbiddenException('Active subscription required');
            }

            const currentPlanName = subscription.plan?.name;
            if (!currentPlanName) {
                throw new ForbiddenException('No plan assigned');
            }

            const currentLevel = PLAN_HIERARCHY[currentPlanName] ?? -1;
            const requiredLevel = PLAN_HIERARCHY[requiredPlanName] ?? -1;

            if (currentLevel < requiredLevel) {
                throw new ForbiddenException(
                    `This feature requires the "${requiredPlanName}" plan or higher. Your current plan is "${currentPlanName}".`
                );
            }

            return true;
        } catch (error) {
            if (error instanceof ForbiddenException) {
                throw error;
            }
            throw new ForbiddenException('Access denied');
        }
    }

    private async resolveAdministratorId(context: ExecutionContext): Promise<number | null> {
        let customerEmail: string | undefined;
        let req: any;
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            req = gqlCtx.getContext().req;
            customerEmail = gqlCtx.getArgs()?.customerEmail;
        } catch {
            req = context.switchToHttp().getRequest();
            customerEmail = req?.body?.variables?.customerEmail;
        }

        const store = req?.['vendureRequestContext'];
        const requestContext = store?.withTransactionManager || store?.default;
        if (requestContext?.activeUserId) {
            const admin = await this.connection.rawConnection.getRepository(Administrator).findOne({
                where: { user: { id: Number(requestContext.activeUserId) } },
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
