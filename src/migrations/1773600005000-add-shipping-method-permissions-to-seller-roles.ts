import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddShippingMethodPermissionsToSellerRoles1773600005000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        for (const permission of [
            'CreateShippingMethod',
            'UpdateShippingMethod',
            'DeleteShippingMethod',
        ]) {
            await queryRunner.query(
                `
                UPDATE "role"
                SET "permissions" =
                    CASE
                        WHEN POSITION('${permission}' IN COALESCE("permissions", '')) = 0
                        THEN CONCAT_WS(',', NULLIF("permissions", ''), '${permission}')
                        ELSE "permissions"
                    END
                WHERE "code" LIKE '%-admin';
                `,
                undefined,
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        for (const permission of [
            'DeleteShippingMethod',
            'UpdateShippingMethod',
            'CreateShippingMethod',
        ]) {
            await queryRunner.query(
                `
                UPDATE "role"
                SET "permissions" = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', COALESCE("permissions", ''), ','), ',${permission},', ','))
                WHERE "code" LIKE '%-admin';
                `,
                undefined,
            );
        }
    }
}
