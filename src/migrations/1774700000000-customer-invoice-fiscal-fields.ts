import { MigrationInterface, QueryRunner } from 'typeorm';

export class CustomerInvoiceFiscalFields1774700000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsDni" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsIdentitydocumentid" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsMatiascityid" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "address" DROP COLUMN IF EXISTS "customFieldsMatiascityid"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN IF EXISTS "customFieldsIdentitydocumentid"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN IF EXISTS "customFieldsDni"`);
  }
}
