import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrderInvoiceLastErrorField1774400000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order" ADD COLUMN IF NOT EXISTS "customFieldsInvoicelasterror" text`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "order" DROP COLUMN IF EXISTS "customFieldsInvoicelasterror"`);
  }
}
