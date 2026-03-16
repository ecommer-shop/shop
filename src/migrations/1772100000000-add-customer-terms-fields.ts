import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCustomerTermsFields1772100000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsAcceptedtermsandprivacy" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsConfirmedlegalage" boolean DEFAULT false`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN IF EXISTS "customFieldsConfirmedlegalage"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN IF EXISTS "customFieldsAcceptedtermsandprivacy"`, undefined);
    }

}
