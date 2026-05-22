import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { RequestContext } from '@vendure/core';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { FEATURE_CODES } from '../constants';

@Injectable()
export class FeatureGuard implements CanActivate {
    constructor(private subscriptionService: SubscriptionService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const customerId = this.getCustomerId(context);

        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        const subscription = await this.subscriptionService.getSubscriptionByCustomerId(customerId);

        if (!subscription) {
            const freePlan = await this.subscriptionService.getFreePlan();
            if (!freePlan) {
                throw new ForbiddenException('No subscription found');
            }
        }

        if (subscription && subscription.status === SubscriptionStatus.GRACE_PERIOD) {
            throw new ForbiddenException('Subscription is in grace period. Please update your payment method.');
        }

        return true;
    }

    private getCustomerId(context: ExecutionContext): number | null {
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            return request.raw?.activeUserId || null;
        }
        return null;
    }
}

@Injectable()
export class ProductLimitGuard implements CanActivate {
    constructor(private subscriptionService: SubscriptionService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const customerId = this.getCustomerId(context);

        if (!customerId) {
            throw new ForbiddenException('Authentication required');
        }

        const { allowed, current, limit } = await this.subscriptionService.checkProductLimit(customerId);

        if (!allowed) {
            throw new ForbiddenException(`Product limit reached. You have ${current}/${limit} products. Upgrade your plan to add more.`);
        }

        return true;
    }

    private getCustomerId(context: ExecutionContext): number | null {
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            return request.raw?.activeUserId || null;
        }
        return null;
    }
}

@Injectable()
export class FeatureAccessGuard implements CanActivate {
    constructor(private subscriptionService: SubscriptionService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const customerId = this.getCustomerId(context);
        const featureCode = this.extractFeatureCode(context);

        if (!customerId || !featureCode) {
            return true;
        }

        const hasAccess = await this.subscriptionService.checkFeatureAccess(customerId, featureCode);

        if (!hasAccess) {
            throw new ForbiddenException(`Feature not available on your current plan: ${featureCode}`);
        }

        return true;
    }

    private getCustomerId(context: ExecutionContext): number | null {
        if (context.getType() === 'http') {
            const request = context.switchToHttp().getRequest();
            return request.raw?.activeUserId || null;
        }
        return null;
    }

    private extractFeatureCode(context: ExecutionContext): string | null {
        return null;
    }
}