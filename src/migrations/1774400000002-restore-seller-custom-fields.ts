import { MigrationInterface, QueryRunner } from 'typeorm';

export class RestoreSellerCustomFields1774400000002 implements MigrationInterface {
    name = 'RestoreSellerCustomFields1774400000002';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsStoredescription" text`,
        );
        await queryRunner.query(
            `ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurl" character varying(255)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "seller" DROP COLUMN IF EXISTS "customFieldsStoredescription"`,
        );
        await queryRunner.query(
            `ALTER TABLE "seller" DROP COLUMN IF EXISTS "customFieldsStorebannerurl"`,
        );
    }
}
