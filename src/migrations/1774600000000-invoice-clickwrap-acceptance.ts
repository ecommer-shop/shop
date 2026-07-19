import { MigrationInterface, QueryRunner } from 'typeorm';

export class InvoiceClickwrapAcceptance1774600000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "invoice_clickwrap_acceptance" (
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "id" SERIAL NOT NULL,
        "administrator_id" integer,
        "administrator_email" character varying(255),
        "user_id" integer,
        "channel_id" integer,
        "channel_code" character varying(255),
        "contract_version" character varying(64) NOT NULL,
        "contract_context" character varying(128) NOT NULL,
        "plan_name" character varying(255) NOT NULL,
        "plan_code" character varying(128),
        "ip_address" character varying(128),
        "user_agent" text,
        "accepted_at" TIMESTAMP WITH TIME ZONE NOT NULL,
        CONSTRAINT "PK_invoice_clickwrap_acceptance" PRIMARY KEY ("id")
      )
    `);
    await queryRunner.query(`
      ALTER TABLE "invoice_clickwrap_acceptance"
      ADD COLUMN IF NOT EXISTS "administrator_email" character varying(255)
    `);
    await queryRunner.query(`
      ALTER TABLE "invoice_clickwrap_acceptance"
      ADD COLUMN IF NOT EXISTS "channel_id" integer
    `);
    await queryRunner.query(`
      ALTER TABLE "invoice_clickwrap_acceptance"
      ADD COLUMN IF NOT EXISTS "channel_code" character varying(255)
    `);
    await queryRunner.query(`
      ALTER TABLE "invoice_clickwrap_acceptance"
      ADD COLUMN IF NOT EXISTS "plan_code" character varying(128)
    `);
    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS "IDX_invoice_clickwrap_acceptance_channel"
      ON "invoice_clickwrap_acceptance" ("channel_id", "accepted_at")
    `);
    await queryRunner.query(`
      CREATE INDEX IF NOT EXISTS "IDX_invoice_clickwrap_acceptance_admin"
      ON "invoice_clickwrap_acceptance" ("administrator_id", "accepted_at")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_invoice_clickwrap_acceptance_admin"`);
    await queryRunner.query(`DROP INDEX IF EXISTS "IDX_invoice_clickwrap_acceptance_channel"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "invoice_clickwrap_acceptance"`);
  }
}
