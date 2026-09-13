import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubscriptionLastTransactionId1786000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DO $$ BEGIN
                ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "last_transaction_id" character varying;
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_subscription" DROP COLUMN IF EXISTS "last_transaction_id"`);
    }
}