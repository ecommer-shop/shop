import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Reparación: si `1773600003000` constaba como ejecutada pero la columna no existe
 * (cambio de BD, restore, etc.), esta migración vuelve a asegurar la FK del banner.
 */
export class EnsureAdministratorStoreBannerFkColumn1773600004000 implements MigrationInterface {
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
    }
}
