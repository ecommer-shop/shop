import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddressGeolocationFields1773900000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsLatitude" double precision`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsLongitude" double precision`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsNeighborhood" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsGoogleplaceid" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickupaddress" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickuplatitude" double precision`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickuplongitude" double precision`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickupneighborhood" character varying`,
            undefined,
        );
        await queryRunner.query(
            `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickupgoogleplaceid" character varying`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorepickupgoogleplaceid"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorepickupneighborhood"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorepickuplongitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorepickuplatitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" DROP COLUMN IF EXISTS "customFieldsStorepickupaddress"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN IF EXISTS "customFieldsGoogleplaceid"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN IF EXISTS "customFieldsNeighborhood"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN IF EXISTS "customFieldsLongitude"`, undefined);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN IF EXISTS "customFieldsLatitude"`, undefined);
    }
}
