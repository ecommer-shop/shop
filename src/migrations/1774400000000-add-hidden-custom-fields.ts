import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHiddenCustomFields1774400000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "customFieldsHidden" boolean DEFAULT false`,
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "customFieldsHiddenat" timestamp`,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD COLUMN IF NOT EXISTS "customFieldsHidden" boolean DEFAULT false`,
        );
        await queryRunner.query(
            `ALTER TABLE "product_variant" ADD COLUMN IF NOT EXISTS "customFieldsHiddenat" timestamp`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN IF EXISTS "customFieldsHiddenat"`);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN IF EXISTS "customFieldsHidden"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN IF EXISTS "customFieldsHiddenat"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN IF EXISTS "customFieldsHidden"`);
    }
}
