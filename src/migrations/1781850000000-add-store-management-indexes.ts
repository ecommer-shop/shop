import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStoreManagementIndexes1781850000000 implements MigrationInterface {
    name = 'AddStoreManagementIndexes1781850000000';
    transaction = false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_channel_created_at_id"
             ON "channel" ("createdAt" DESC, id DESC)`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_channel_seller_id"
             ON "channel" ("sellerId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_role_channels_channel"
             ON "role_channels_channel" ("channelId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_user_roles_role_user"
             ON "user_roles_role" ("userId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_product_channels_channel"
             ON "product_channels_channel" ("channelId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_administrator_created_at"
             ON "administrator" ("createdAt" DESC)`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_administrator_user_id"
             ON "administrator" ("userId")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_seller_name"
             ON "seller" (name)`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_seller_deleted_at"
             ON "seller" ("deletedAt")`,
        );
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_role_channels_role_id"
             ON "role_channels_channel" ("roleId")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_channel_created_at_id"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_channel_seller_id"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_role_channels_channel"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_user_roles_role_user"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_product_channels_channel"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_administrator_created_at"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_administrator_user_id"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_seller_name"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_seller_deleted_at"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_role_channels_role_id"`);
    }
}
