import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubscriptionPaymentFields1774000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DO $$ BEGIN
                ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "payment_method_type" character varying;
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "payment_flow_type" character varying;
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "pending_payment_reference" character varying;
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "last_payment_at" TIMESTAMP;
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
        `);

        // Add PENDING_PAYMENT to the status enum
        await queryRunner.query(`
            ALTER TABLE "customer_subscription"
            ALTER COLUMN "status" TYPE text;
        `);
        await queryRunner.query(`
            DROP TYPE IF EXISTS "customer_subscription_status_enum_old";
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                CREATE TYPE "customer_subscription_status_enum" AS ENUM ('ACTIVE', 'PENDING_PAYMENT', 'GRACE_PERIOD', 'SUSPENDED', 'CANCELLED');
            EXCEPTION WHEN duplicate_object THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            ALTER TABLE "customer_subscription"
            ALTER COLUMN "status" TYPE "customer_subscription_status_enum"
            USING "status"::text::"customer_subscription_status_enum";
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_subscription" DROP COLUMN IF EXISTS "payment_method_type"`);
        await queryRunner.query(`ALTER TABLE "customer_subscription" DROP COLUMN IF EXISTS "payment_flow_type"`);
        await queryRunner.query(`ALTER TABLE "customer_subscription" DROP COLUMN IF EXISTS "pending_payment_reference"`);
        await queryRunner.query(`ALTER TABLE "customer_subscription" DROP COLUMN IF EXISTS "last_payment_at"`);
    }
}
