import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * El perfil del dashboard (@vendure/dashboard) pide `storeBannerUrl { id preview }` en
 * `Administrator.customFields`, es decir relación a Asset. Sustituye la columna varchar
 * añadida en 1773600000000 por la FK que genera TypeORM para el custom field relation.
 */
export class AdministratorStoreBannerAssetFk1773600003000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorebannerurl"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurlid" integer`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStorebannerurlid"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_administrator_customFieldsStorebannerurlid" FOREIGN KEY ("customFieldsStorebannerurlid") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStorebannerurlid"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorebannerurlid"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurl" character varying`,
            undefined,
        );
    }
}
