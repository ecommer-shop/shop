import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Campos de facturación Matias en Channel + columna `asset.name` (Vendure 3.6).
 * Seguro para stage: IF NOT EXISTS + backfill antes de NOT NULL en asset.name.
 */
export class InvoiceMatiasChannelFieldsAndAssetName1774400000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsInvoicebillingactive" boolean NOT NULL DEFAULT false`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsInvoicelimitremaining" integer`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasaccesstoken" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasinvoiceprefix" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasresolutionnumber" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasglobalpooltotal" integer`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasglobalpoolsellable" integer`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatestatus" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatepaymentstatus" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatetype" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificateexpiresat" TIMESTAMP`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatepaidat" TIMESTAMP`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocchamber" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocrut" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocnit" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatereviewnote" character varying`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingplanlastpurchasedat" TIMESTAMP`,
  );
  await queryRunner.query(
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingplanpurchasehistory" text`,
  );

  await queryRunner.query(`ALTER TABLE "asset" ADD COLUMN IF NOT EXISTS "name" character varying`);
  await queryRunner.query(`
    UPDATE "asset"
    SET "name" = COALESCE(
      NULLIF(TRIM("name"), ''),
      NULLIF(TRIM("source"), ''),
      NULLIF(TRIM("preview"), ''),
      'asset-' || "id"::text
    )
    WHERE "name" IS NULL OR TRIM("name") = ''
  `);
  await queryRunner.query(`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM "asset" WHERE "name" IS NULL LIMIT 1
      ) THEN
        RAISE EXCEPTION 'asset.name sigue con NULL; revisa datos antes de NOT NULL';
      END IF;
    END $$;
  `);
  await queryRunner.query(`ALTER TABLE "asset" ALTER COLUMN "name" SET NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "asset" DROP COLUMN IF EXISTS "name"`);
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingplanpurchasehistory"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingplanlastpurchasedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatereviewnote"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatedocnit"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatedocrut"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatedocchamber"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatepaidat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificateexpiresat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatetype"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatepaymentstatus"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatestatus"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsMatiasglobalpoolsellable"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsMatiasglobalpooltotal"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsMatiasresolutionnumber"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsMatiasinvoiceprefix"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsMatiasaccesstoken"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsInvoicelimitremaining"`,
    );
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsInvoicebillingactive"`,
    );
  }
}
