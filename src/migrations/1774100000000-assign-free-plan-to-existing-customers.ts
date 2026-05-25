import { MigrationInterface, QueryRunner } from 'typeorm';
import { Customer } from '@vendure/core';
import { Plan, CustomerSubscription, SubscriptionStatus } from '../plugins/wompi-subscription/entities';

export class AssignFreePlanToExistingCustomers1774100000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const batchSize = 500;

        const freePlan = await queryRunner.manager
            .getRepository(Plan)
            .createQueryBuilder('plan')
            .where('plan.name = :name', { name: 'Free' })
            .getOne();

        if (!freePlan) {
            return;
        }

        let lastId = 0;
        let hasMore = true;

        while (hasMore) {
            const customers = await queryRunner.manager
                .getRepository(Customer)
                .createQueryBuilder('customer')
                .leftJoinAndSelect('customer.user', 'user')
                .leftJoinAndSelect('user.roles', 'roles')
                .leftJoin(CustomerSubscription, 'sub', 'sub.customer_id = customer.id')
                .where('sub.id IS NULL')
                .andWhere('customer.id > :lastId', { lastId })
                .orderBy('customer.id', 'ASC')
                .take(batchSize)
                .getMany();

            if (customers.length === 0) {
                hasMore = false;
                break;
            }

            const newSubs = customers
                .filter(c => !c.user?.roles?.some(
                    r => r.code === '__super_admin_role__'
                ))
                .map(c => ({
                    customerId: Number(c.id),
                    planId: freePlan.id,
                    status: SubscriptionStatus.ACTIVE,
                    startsAt: new Date(),
                    endsAt: new Date(new Date().setMonth(new Date().getMonth() + 1)),
                    autoRenew: false,
                    paymentFlowType: 'MANUAL',
                }));

            if (newSubs.length > 0) {
                await queryRunner.manager
                    .createQueryBuilder()
                    .insert()
                    .into(CustomerSubscription)
                    .values(newSubs)
                    .execute();
            }

            lastId = Number(customers[customers.length - 1].id);
        }
    }

    public async down(_queryRunner: QueryRunner): Promise<void> {
    }
}
