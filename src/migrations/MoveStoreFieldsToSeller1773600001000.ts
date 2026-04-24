import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoveStoreFieldsToSeller1773600001000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Mover de administrator → seller
        await queryRunner.query(
            `ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsStoredescription" text`
        );
        await queryRunner.query(
            `ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurl" character varying(255)`
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStoredescription"`
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorebannerurl"`
        );

        // Hacer nullable el campo de product
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "customFieldsStorefeatured" DROP NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "customFieldsStorefeatured" SET NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStoredescription" text`
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurl" character varying(255)`
        );
        await queryRunner.query(
            `ALTER TABLE "seller" DROP COLUMN IF EXISTS "customFieldsStorebannerurl"`
        );
        await queryRunner.query(
            `ALTER TABLE "seller" DROP COLUMN IF EXISTS "customFieldsStoredescription"`
        );
    }
}