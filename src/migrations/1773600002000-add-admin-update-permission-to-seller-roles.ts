import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAdminUpdatePermissionToSellerRoles1773600002000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" =
                CASE
                    WHEN POSITION('ReadAdministrator' IN COALESCE("permissions", '')) = 0
                    THEN CONCAT_WS(',', NULLIF("permissions", ''), 'ReadAdministrator')
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
                    WHEN POSITION('UpdateAdministrator' IN COALESCE("permissions", '')) = 0
                    THEN CONCAT_WS(',', NULLIF("permissions", ''), 'UpdateAdministrator')
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
            SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',ReadAdministrator,', ','))
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );

        await queryRunner.query(
            `
            UPDATE "role"
            SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',UpdateAdministrator,', ','))
            WHERE "code" LIKE '%-admin';
            `,
            undefined,
        );
    }
}
