import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSubscriptionTables1773800000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DO $$ BEGIN
                CREATE TYPE "subscription_plan_billinginterval_enum" AS ENUM ('monthly', 'yearly');
            EXCEPTION
                WHEN duplicate_object THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                CREATE TYPE "subscription_feature_type_enum" AS ENUM ('numeric', 'boolean');
            EXCEPTION
                WHEN duplicate_object THEN NULL;
            END $$;
        `);
        await queryRunner.query(`
            DO $$ BEGIN
                CREATE TYPE "customer_subscription_status_enum" AS ENUM ('ACTIVE', 'GRACE_PERIOD', 'SUSPENDED', 'CANCELLED');
            EXCEPTION
                WHEN duplicate_object THEN NULL;
            END $$;
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "subscription_plan" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "price" numeric(10,2) NOT NULL DEFAULT '0',
                "billingInterval" "subscription_plan_billinginterval_enum" NOT NULL DEFAULT 'monthly',
                "isActive" boolean NOT NULL DEFAULT true,
                "description" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_subscription_plan_name" UNIQUE ("name"),
                CONSTRAINT "PK_subscription_plan" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "subscription_feature" (
                "id" SERIAL NOT NULL,
                "code" character varying NOT NULL,
                "name" character varying NOT NULL,
                "description" character varying,
                "type" "subscription_feature_type_enum" NOT NULL DEFAULT 'boolean',
                "isActive" boolean NOT NULL DEFAULT true,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_subscription_feature_code" UNIQUE ("code"),
                CONSTRAINT "PK_subscription_feature" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "subscription_plan_feature" (
                "id" SERIAL NOT NULL,
                "plan_id" integer NOT NULL,
                "feature_id" integer NOT NULL,
                "value" character varying(255) NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_subscription_plan_feature" PRIMARY KEY ("id"),
                CONSTRAINT "FK_subscription_plan_feature_plan" FOREIGN KEY ("plan_id") REFERENCES "subscription_plan"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_subscription_plan_feature_feature" FOREIGN KEY ("feature_id") REFERENCES "subscription_feature"("id") ON DELETE CASCADE
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "customer_subscription" (
                "id" SERIAL NOT NULL,
                "customer_id" integer NOT NULL,
                "plan_id" integer NOT NULL,
                "status" "customer_subscription_status_enum" NOT NULL DEFAULT 'ACTIVE',
                "startsAt" TIMESTAMP,
                "endsAt" TIMESTAMP,
                "gracePeriodStart" TIMESTAMP,
                "autoRenew" boolean NOT NULL DEFAULT true,
                "billing_payment_source_id" character varying,
                "billing_customer_email" character varying,
                "billing_customer_id" character varying,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_customer_subscription_customer" UNIQUE ("customer_id"),
                CONSTRAINT "PK_customer_subscription" PRIMARY KEY ("id"),
                CONSTRAINT "FK_customer_subscription_plan" FOREIGN KEY ("plan_id") REFERENCES "subscription_plan"("id") ON DELETE CASCADE,
                CONSTRAINT "FK_customer_subscription_customer" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "customer_subscription"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "subscription_plan_feature"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "subscription_feature"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "subscription_plan"`);
        await queryRunner.query(`DROP TYPE IF EXISTS "customer_subscription_status_enum"`);
        await queryRunner.query(`DROP TYPE IF EXISTS "subscription_feature_type_enum"`);
        await queryRunner.query(`DROP TYPE IF EXISTS "subscription_plan_billinginterval_enum"`);
    }
}
