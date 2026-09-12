import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { Administrator } from '@vendure/core';
import { CustomerSubscription, SubscriptionStatus } from '../entities/customer-subscription.entity';
import { Plan } from '../entities/plan.entity';
import { GRACE_PERIOD_DAYS, MANUAL_RENEWAL_REMINDER_DAYS } from '../constants';
import { PaymentFlowType } from '../payment-methods';

@Injectable()
export class SubscriptionQueryService {
    constructor(
        @InjectRepository(CustomerSubscription) private subscriptionRepository: Repository<CustomerSubscription>,
        @InjectRepository(Plan) private planRepository: Repository<Plan>,
    ) { }

    async reloadSubscriptionWithPlan(id: number): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository
            .createQueryBuilder('sub')
            .leftJoinAndSelect('sub.plan', 'plan')
            .leftJoinAndSelect('plan.planFeatures', 'planFeatures')
            .leftJoinAndSelect('planFeatures.feature', 'feature')
            .where('sub.id = :id', { id })
            .getOne();
    }

    async getSubscriptionByAdministratorId(administratorId: number): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository
            .createQueryBuilder('sub')
            .leftJoinAndSelect('sub.plan', 'plan')
            .leftJoinAndSelect('plan.planFeatures', 'planFeatures')
            .leftJoinAndSelect('planFeatures.feature', 'feature')
            .where('sub.administratorId = :adminId', { adminId: administratorId })
            .getOne();
    }

    async getSubscriptionById(subscriptionId: number): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository
            .createQueryBuilder('sub')
            .leftJoinAndSelect('sub.plan', 'plan')
            .leftJoinAndSelect('plan.planFeatures', 'planFeatures')
            .leftJoinAndSelect('planFeatures.feature', 'feature')
            .where('sub.id = :id', { id: subscriptionId })
            .getOne();
    }

    async findByPendingReference(reference: string): Promise<CustomerSubscription | null> {
        return this.subscriptionRepository.findOne({
            where: { pendingPaymentReference: reference, status: SubscriptionStatus.PENDING_PAYMENT },
            relations: ['plan'],
        });
    }

    async getActiveSubscriptionsForRenewal(): Promise<CustomerSubscription[]> {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.ACTIVE,
                autoRenew: true,
                endsAt: LessThanOrEqual(today),
            },
            relations: ['plan'],
        });
    }

    async getGracePeriodSubscriptions(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - GRACE_PERIOD_DAYS);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.GRACE_PERIOD,
                gracePeriodStart: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async getSuspendedSubscriptionsForPurge(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - (GRACE_PERIOD_DAYS * 2));

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.SUSPENDED,
                gracePeriodStart: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async getManualSubscriptionsDueForRenewal(): Promise<CustomerSubscription[]> {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + MANUAL_RENEWAL_REMINDER_DAYS);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.ACTIVE,
                autoRenew: false,
                paymentFlowType: PaymentFlowType.MANUAL,
                endsAt: LessThanOrEqual(futureDate),
            },
            relations: ['plan'],
        });
    }

    async getPendingPaymentSubscriptions(): Promise<CustomerSubscription[]> {
        const cutoffDate = new Date();
        cutoffDate.setHours(cutoffDate.getHours() - 24);

        return this.subscriptionRepository.find({
            where: {
                status: SubscriptionStatus.PENDING_PAYMENT,
                createdAt: LessThanOrEqual(cutoffDate),
            },
            relations: ['plan'],
        });
    }

    async getAdministratorEmail(administratorId: number): Promise<string | null> {
        const admin = await this.planRepository.manager.findOne(Administrator, {
            where: { id: administratorId },
        });
        return admin?.emailAddress ?? null;
    }
}
