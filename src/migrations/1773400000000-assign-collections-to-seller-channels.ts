import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Assigns all existing collections to all seller channels (non-default channels).
 * Uses INSERT ... ON CONFLICT DO NOTHING to be idempotent.
 */
export class AssignCollectionsToSellerChannels1773400000000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        // Insert collection-channel pairs for all seller channels (non-default)
        // ON CONFLICT DO NOTHING ensures idempotency
        await queryRunner.query(`
            INSERT INTO collection_channels_channel ("collectionId", "channelId")
            SELECT c.id AS "collectionId", ch.id AS "channelId"
            FROM collection c
            CROSS JOIN channel ch
            WHERE ch.code != '__default_channel__'
            ON CONFLICT DO NOTHING
        `);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        // Remove collection-channel assignments for seller channels
        // (keeps default channel assignments intact)
        await queryRunner.query(`
            DELETE FROM collection_channels_channel
            WHERE "channelId" IN (
                SELECT id FROM channel WHERE code != '__default_channel__'
            )
        `);
    }
}
