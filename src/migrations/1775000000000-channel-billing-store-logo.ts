import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChannelBillingStoreLogo1775000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocstorelogo" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "channel" DROP COLUMN IF EXISTS "customFieldsBillingcertificatedocstorelogo"`,
    );
  }
}
