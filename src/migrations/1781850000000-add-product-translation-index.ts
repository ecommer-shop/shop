import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductTranslationIndex1781850000000 implements MigrationInterface {
    name = 'AddProductTranslationIndex1781850000000';
    transaction = false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE INDEX CONCURRENTLY IF NOT EXISTS "idx_product_translation_base_lang"
             ON "product_translation" ("baseId", "languageCode")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX IF EXISTS "idx_product_translation_base_lang"`);
    }
}
