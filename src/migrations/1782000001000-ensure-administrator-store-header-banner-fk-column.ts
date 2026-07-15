import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Reparación: si `1782000000000` constaba como ejecutada pero la columna no existe
 * (cambio de BD, restore, etc.), vuelve a asegurar la FK de la cabecera de tienda.
 */
export class EnsureAdministratorStoreHeaderBannerFkColumn1782000001000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStoreheaderbannerurlid" integer`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStoreheaderbannerurlid"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD CONSTRAINT "FK_administrator_customFieldsStoreheaderbannerurlid" FOREIGN KEY ("customFieldsStoreheaderbannerurlid") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStoreheaderbannerurlid"`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStoreheaderbannerurlid"`,
            undefined,
        );
    }
}
