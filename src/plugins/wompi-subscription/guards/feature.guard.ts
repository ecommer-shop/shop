import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission, RequestContext, Administrator } from '@vendure/core';
import { TransactionalConnection } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { FEATURE_CODE_KEY } from '../decorators/requires-feature.decorator';
import { FEATURE_CODES } from '../constants';

@Injectable()
export class FeatureGuard implements CanActivate {
    constructor(
        protected subscriptionService: SubscriptionService,
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

        let subscription = await this.subscriptionService.getSubscriptionByAdministratorId(administratorId);

        if (!subscription) {
            await this.subscriptionService.assignFreePlanToAdministrator(administratorId);
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

@Injectable()
export class ProductLimitGuard extends FeatureGuard {
    constructor(
        subscriptionService: SubscriptionService,
        connection: TransactionalConnection,
    ) {
        super(subscriptionService, connection);
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const administratorId = await this.resolveAdministratorId(context);
        if (!administratorId) {
            throw new ForbiddenException('Authentication required');
        }

        await super.canActivate(context);

        const { allowed, current, limit } = await this.subscriptionService.checkProductLimit(administratorId);
        if (!allowed) {
            throw new ForbiddenException(
                `Product limit reached. You have ${current}/${limit} products. Upgrade your plan to add more.`,
            );
        }

        return true;
    }
}

@Injectable()
export class ProductVariationLimitGuard extends FeatureGuard {
    constructor(
        subscriptionService: SubscriptionService,
        connection: TransactionalConnection,
    ) {
        super(subscriptionService, connection);
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (await this.isSuperAdmin(context)) {
            return true;
        }

        const administratorId = await this.resolveAdministratorId(context);
        if (!administratorId) {
            throw new ForbiddenException('Authentication required');
        }

        await super.canActivate(context);

        const { allowed, current, limit } = await this.subscriptionService.checkVariationLimit(administratorId);
        if (!allowed) {
            throw new ForbiddenException(
                `Variation limit reached. You have ${current}/${limit} variations. Upgrade your plan to add more.`,
            );
        }

        return true;
    }
}

@Injectable()
export class FeatureAccessGuard extends FeatureGuard {
    constructor(
        subscriptionService: SubscriptionService,
        connection: TransactionalConnection,
        private reflector: Reflector,
    ) {
        super(subscriptionService, connection);
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

        const hasAccess = await this.subscriptionService.checkFeatureAccess(administratorId, featureCode);
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