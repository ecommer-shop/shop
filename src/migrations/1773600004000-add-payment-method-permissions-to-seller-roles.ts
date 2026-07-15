import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPaymentMethodPermissionsToSellerRoles1773600004000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" =
                CASE
                    WHEN POSITION('CreatePaymentMethod' IN COALESCE("permissions", '')) = 0
                    THEN CONCAT_WS(',', NULLIF("permissions", ''), 'CreatePaymentMethod')
                    ELSE "permissions"
                END
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );

        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" =
                CASE
                    WHEN POSITION('UpdatePaymentMethod' IN COALESCE("permissions", '')) = 0
                    THEN CONCAT_WS(',', NULLIF("permissions", ''), 'UpdatePaymentMethod')
                    ELSE "permissions"
                END
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',CreatePaymentMethod,', ','))
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );

        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',UpdatePaymentMethod,', ','))
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );
    }
}
