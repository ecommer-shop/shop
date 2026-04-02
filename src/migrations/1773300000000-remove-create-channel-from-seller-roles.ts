import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveCreateChannelFromSellerRoles1773300000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name = 'role'
          AND column_name = 'permissions'
    ) THEN
        UPDATE "role"
        SET "permissions" = TRIM(BOTH ',' FROM REGEXP_REPLACE(
            ',' || COALESCE("permissions", '') || ',',
            ',CreateChannel,',
            ',',
            'g'
        ))
        WHERE (
            "code" LIKE '%-admin'
            OR "description" LIKE 'Administrator of %'
        )
          AND COALESCE("permissions", '') <> ''
          AND POSITION('CreateChannel' IN COALESCE("permissions", '')) > 0;
    END IF;
END $$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
-- Intentionally no-op. Re-adding CreateChannel to seller roles on rollback is not safe.
        `);
    }
}
