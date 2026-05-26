import { MigrationInterface, QueryRunner } from 'typeorm';
import { Administrator } from '@vendure/core';
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
            const administrators = await queryRunner.manager
                .getRepository(Administrator)
                .createQueryBuilder('admin')
                .leftJoinAndSelect('admin.user', 'user')
                .leftJoinAndSelect('user.roles', 'roles')
                .leftJoin(CustomerSubscription, 'sub', 'sub.administrator_id = admin.id')
                .where('sub.id IS NULL')
                .andWhere('admin.id > :lastId', { lastId })
                .orderBy('admin.id', 'ASC')
                .take(batchSize)
                .getMany();

            if (administrators.length === 0) {
                hasMore = false;
                break;
            }

            const newSubs = administrators
                .filter(a => !a.user?.roles?.some(
                    r => r.code === '__super_admin_role__'
                ))
                .map(a => ({
                    administratorId: Number(a.id),
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

            lastId = Number(administrators[administrators.length - 1].id);
        }
    }

    public async down(_queryRunner: QueryRunner): Promise<void> {
    }
}
