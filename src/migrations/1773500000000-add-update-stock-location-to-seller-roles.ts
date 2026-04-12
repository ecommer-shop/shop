import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Adds UpdateStockLocation permission to all existing seller roles
 * (roles whose code ends in "-admin" and are not the superadmin role).
 */
export class AddUpdateStockLocationToSellerRoles1773500000000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        // Find all seller admin roles (code ends with "-admin", excluding __super_admin_role__)
        const sellerRoles: { id: string }[] = await queryRunner.query(`
            SELECT id FROM role
            WHERE code LIKE '%-admin'
              AND code != '__super_admin_role__'
        `);

        for (const role of sellerRoles) {
            // Check if UpdateStockLocation already present
            const existing: { count: string }[] = await queryRunner.query(`
                SELECT COUNT(*) AS count FROM role_channels_permission_role
                WHERE "roleId" = $1 AND permission = 'UpdateStockLocation'
            `, [role.id]);

            if (parseInt(existing[0].count, 10) === 0) {
                await queryRunner.query(`
                    INSERT INTO role_channels_permission_role ("roleId", permission)
                    VALUES ($1, 'UpdateStockLocation')
                    ON CONFLICT DO NOTHING
                `, [role.id]);
            }
        }
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM role_channels_permission_role
            WHERE permission = 'UpdateStockLocation'
              AND "roleId" IN (
                SELECT id FROM role
                WHERE code LIKE '%-admin'
                  AND code != '__super_admin_role__'
              )
        `);
    }
}
