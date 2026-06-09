import { Injectable, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TransactionalConnection } from '@vendure/core';
import { SubscriptionQueryService } from '../services/subscription-query.service';
import { FeatureCheckService } from '../services/feature-check.service';
import { PlanManagementService } from '../services/plan-management.service';
import { FEATURE_CODE_KEY } from '../decorators/requires-feature.decorator';
import { FEATURE_CODES } from '../constants';
import { FeatureGuard } from './feature.guard';

@Injectable()
export class FeatureAccessGuard extends FeatureGuard {
    constructor(
        subscriptionQueryService: SubscriptionQueryService,
        private featureCheckService: FeatureCheckService,
        planManagementService: PlanManagementService,
        connection: TransactionalConnection,
        private reflector: Reflector,
    ) {
        super(subscriptionQueryService, planManagementService, connection);
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const featureCode = this.reflector.get<string>(FEATURE_CODE_KEY, context.getHandler());
        if (!featureCode) {
            return true;
        }

        const administratorId = await this.resolveAdministratorId(context);
        if (!administratorId) {
            throw new ForbiddenException('Authentication required');
        }

        await super.canActivate(context);

        const hasAccess = await this.featureCheckService.checkFeatureAccess(administratorId, featureCode);
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
