import {MigrationInterface, QueryRunner} from "typeorm";

export class VolumeServientrega1762102645836 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable("product_variant");
        const hasWeight = table?.findColumnByName("customFieldsWeight");
        const hasHeight = table?.findColumnByName("customFieldsHeight");
        const hasWidth = table?.findColumnByName("customFieldsWidth");

        if (!hasWeight) {
            await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsWeight" double precision`, undefined);
        }
        if (!hasHeight) {
            await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsHeight" double precision`, undefined);
        }
        if (!hasWidth) {
            await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsWidth" double precision`, undefined);
        }
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsWidth"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsHeight"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsWeight"`, undefined);
   }

}
