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
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_order_line_order"
             ON "order_line" ("orderId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_order_line_variant"
             ON "order_line" ("productVariantId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_variant_translation_base"
             ON "product_variant_translation" ("baseId", "languageCode")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_order_customer"
             ON "order" ("customerId", "state", "orderPlacedAt")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_occ_channel"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_order_state_placed"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_order_line_order"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_order_line_variant"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_variant_translation_base"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_order_customer"`);
    }
}
