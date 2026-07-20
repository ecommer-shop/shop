import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Vendure 3.6 moved the `name` field on Asset from a direct column to a
 * translation entity (asset_translation). The previous migration
 * 1774400000002 had added `name NOT NULL` to the `asset` table, but
 * Vendure's AssetService no longer writes `name` there — causing a
 * NOT NULL constraint violation on every createAssets call.
 *
 * This migration drops the now-unused `name` column from `asset`.
 */
export class DropAssetNameColumn1774500000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Check if the column exists before dropping to make this idempotent
    const columnExists = await queryRunner.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'asset'
        AND column_name = 'name'
      LIMIT 1
    `);

    if (columnExists.length > 0) {
      await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN "name"`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Restore the column (nullable so existing rows aren't broken)
    await queryRunner.query(
      `ALTER TABLE "asset" ADD COLUMN IF NOT EXISTS "name" character varying`,
    );
  }
}
