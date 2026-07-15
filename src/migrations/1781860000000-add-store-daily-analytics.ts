import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStoreDailyAnalytics1781860000000 implements MigrationInterface {
    name = 'AddStoreDailyAnalytics1781860000000';
    transaction = false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "store_daily_analytics" (
                "id" SERIAL PRIMARY KEY,
                "channelId" integer NOT NULL,
                "date" date NOT NULL,
                "totalOrders" integer NOT NULL DEFAULT 0,
                "totalRevenue" integer NOT NULL DEFAULT 0,
                "totalUnits" integer NOT NULL DEFAULT 0,
                "avgOrderValue" double precision NOT NULL DEFAULT 0,
                "newCustomers" integer NOT NULL DEFAULT 0,
                "productsSold" integer NOT NULL DEFAULT 0,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX IF NOT EXISTS "idx_sda_channel_date"
             ON "store_daily_analytics" ("channelId", "date")`,
        );
        await queryRunner.query(
            `CREATE INDEX IF NOT EXISTS "idx_sda_date"
             ON "store_daily_analytics" ("date")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_sda_channel_date"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_sda_date"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "store_daily_analytics"`);
    }
}
