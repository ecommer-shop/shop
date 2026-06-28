import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMetricsIndexes1781840000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_occ_channel"
             ON "order_channels_channel" ("channelId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_order_state_placed"
             ON "order" ("state", "orderPlacedAt")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_occ_channel"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_order_state_placed"`);
    }
}
