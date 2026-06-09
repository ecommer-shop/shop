import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrateCustomerToAdministratorId1774300000000 implements MigrationInterface {
    name = 'MigrateCustomerToAdministratorId1774300000000';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('customer_subscription');
        if (!tableExists) return;

        const hasOldColumn = await queryRunner.hasColumn('customer_subscription', 'customer_id');
        if (!hasOldColumn) return;

        const hasNewColumn = await queryRunner.hasColumn('customer_subscription', 'administrator_id');
        if (hasNewColumn) return;

        // Rename column
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            RENAME COLUMN "customer_id" TO "administrator_id"
        `);

        // Drop old FK constraint (name may vary)
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            DROP CONSTRAINT IF EXISTS "FK_customer_subscription_customer"
        `);

        // Drop old UNIQUE constraint
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            DROP CONSTRAINT IF EXISTS "UQ_customer_subscription_customer"
        `);

        // Remove existing rows that pointed to customer(id) — no valid administrator(id) counterpart
        await queryRunner.query(`
            DELETE FROM "customer_subscription"
        `);

        // Add new UNIQUE constraint
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            ADD CONSTRAINT "UQ_customer_subscription_administrator" 
            UNIQUE ("administrator_id")
        `);

        // Add new FK to administrator table
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            ADD CONSTRAINT "FK_customer_subscription_administrator" 
            FOREIGN KEY ("administrator_id") 
            REFERENCES "administrator"("id") 
            ON DELETE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableExists = await queryRunner.hasTable('customer_subscription');
        if (!tableExists) return;

        const hasNewColumn = await queryRunner.hasColumn('customer_subscription', 'administrator_id');
        if (!hasNewColumn) return;

        // Drop new FK
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            DROP CONSTRAINT IF EXISTS "FK_customer_subscription_administrator"
        `);

        // Drop new UNIQUE
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            DROP CONSTRAINT IF EXISTS "UQ_customer_subscription_administrator"
        `);

        // Rename back
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            RENAME COLUMN "administrator_id" TO "customer_id"
        `);

        // Restore old FK
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            ADD CONSTRAINT "FK_customer_subscription_customer" 
            FOREIGN KEY ("customer_id") 
            REFERENCES "customer"("id") 
            ON DELETE CASCADE
        `);

        // Restore old UNIQUE
        await queryRunner.query(`
            ALTER TABLE "customer_subscription" 
            ADD CONSTRAINT "UQ_customer_subscription_customer" 
            UNIQUE ("customer_id")
        `);
    }
}