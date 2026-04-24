import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductStoreFeatured1773600000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "customFieldsStorefeatured" boolean NOT NULL DEFAULT false`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStoredescription" text`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurl" character varying`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorebannerurl"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStoredescription"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN IF EXISTS "customFieldsStorefeatured"`, undefined);
    }
}
