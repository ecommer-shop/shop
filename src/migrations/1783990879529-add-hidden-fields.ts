import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHiddenFields1783990879529 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsStoredescription"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsStorebannerurl"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsHidden" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsHiddenat" TIMESTAMP(6)`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsHidden" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" ADD "customFieldsHiddenat" TIMESTAMP(6)`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customFieldsLatitude" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customFieldsLongitude" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customFieldsNeighborhood" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "address" ADD "customFieldsGoogleplaceid" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorebannerurlid" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStoredescription" text`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorepickupaddress" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorepickuplatitude" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorepickuplongitude" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorepickupneighborhood" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD "customFieldsStorepickupgoogleplaceid" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsSociallinks" text`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD CONSTRAINT "FK_266e5e40477bbfeb47d7c11f438" FOREIGN KEY ("customFieldsStorebannerurlid") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "administrator" DROP CONSTRAINT "FK_266e5e40477bbfeb47d7c11f438"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsSociallinks"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorepickupgoogleplaceid"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorepickupneighborhood"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorepickuplongitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorepickuplatitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorepickupaddress"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStoredescription"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN "customFieldsStorebannerurlid"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customFieldsGoogleplaceid"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customFieldsNeighborhood"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customFieldsLongitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "customFieldsLatitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsHiddenat"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_variant" DROP COLUMN "customFieldsHidden"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsHiddenat"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsHidden"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsStorebannerurl" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsStoredescription" text`, undefined);
   }

}
