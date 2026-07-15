import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChannelBillingDianResolution1774900000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocdianresolution" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatedocdianresolution"`,
    );
  }
}
