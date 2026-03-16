import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddClerkIdCustomer1773100000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsClerkid" character varying`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN IF EXISTS "customFieldsClerkid"`, undefined);
    }

}
