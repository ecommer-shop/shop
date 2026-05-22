import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Deshabilita todos los productos que no tienen ninguna variante activa
 * (ni eliminada por soft-delete) en el momento de correr la migración.
 *
 * NOTA: Verificar que los nombres de tabla y columna coincidan con tu schema.
 * En Vendure por defecto: tabla "product", tabla "product_variant", columna "productId".
 * Si usas snake_case en el ORM puede ser "product_id".
 */
export class DisableProductsWithoutVariants1773700000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Verificar nombre de columna real antes de ejecutar
        // Puedes hacer: SELECT column_name FROM information_schema.columns WHERE table_name = 'product_variant';

        await queryRunner.query(`
            UPDATE "product"
            SET "enabled" = false
            WHERE "id" IN (
                SELECT p."id"
                FROM "product" p
                LEFT JOIN "product_variant" pv
                    ON pv."productId" = p."id"          -- ajustar si es "product_id"
                    AND pv."enabled" = true
                    AND pv."deletedAt" IS NULL           -- excluir soft-deleted
                WHERE pv."id" IS NULL                   -- LEFT JOIN sin match = sin variantes activas
            )
        `);

        // Log informativo (no afecta la ejecución)
        const result = await queryRunner.query(`
            SELECT COUNT(*) as total
            FROM "product"
            WHERE "enabled" = false
        `);
        console.log(`[Migration] Productos deshabilitados totales tras migración: ${result[0]?.total ?? 'N/A'}`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Intencionalmente vacío:
        // Revertir esta migración habilitaría productos que pueden seguir sin variantes.
        // Si necesitas revertir, hazlo manualmente por producto.
        console.warn('[Migration] down(): No se revierten productos deshabilitados automáticamente.');
    }
}