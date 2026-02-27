import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTermsField1771814655543 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsAcceptedtermsandprivacy" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsConfirmedlegalage" boolean DEFAULT false`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsConfirmedlegalage"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsAcceptedtermsandprivacy"`, undefined);
   }

}
