import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSocialLinksToSeller1784000000000 implements MigrationInterface {
    name = 'AddSocialLinksToSeller1784000000000';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsSociallinks" text`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "seller" DROP COLUMN IF EXISTS "customFieldsSociallinks"`,
        );
    }
}
