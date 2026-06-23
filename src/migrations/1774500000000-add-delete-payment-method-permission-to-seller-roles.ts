import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDeletePaymentMethodPermissionToSellerRoles1774500000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" =
                CASE
                    WHEN POSITION('DeletePaymentMethod' IN COALESCE("permissions", '')) = 0
                    THEN CONCAT_WS(',', NULLIF("permissions", ''), 'DeletePaymentMethod')
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
            SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',DeletePaymentMethod,', ','))
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );
    }
}
