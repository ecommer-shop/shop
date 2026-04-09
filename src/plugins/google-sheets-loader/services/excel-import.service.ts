import { Injectable, Logger } from '@nestjs/common';
import {
    ProductService,
    ProductVariantService,
    RequestContext,
    RequestContextService,
    TransactionalConnection,
} from '@vendure/core';
import pLimit from 'p-limit';

export type ImportProduct = {
    sku: string;
    name: string;
    description?: string;
    price: number;
    stock: number;
};

function slugify(text: string) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

@Injectable()
export class ExcelImportService {
    private readonly logger = new Logger(ExcelImportService.name);

    constructor(
        private productService: ProductService,
        private productVariantService: ProductVariantService,
        private requestContextService: RequestContextService,
        private connection: TransactionalConnection,
    ) { }

    async importProducts(
        ctx: RequestContext,
        channelToken: string,
        products: ImportProduct[],
    ) {
        const adminCtx = await this.requestContextService.create({
            apiType: 'admin',
            channelOrToken: channelToken,
        });

        this.logger.log(`Starting import for ${products.length} products`);

        const limit = pLimit(5);

        let created = 0;
        let updated = 0;
        let skipped = 0;
        let failed = 0;

        const errors: { sku: string; error: string }[] = [];

        // Pre cargar variants por el sku
        const skus = [...new Set(products.map(p => p.sku))];
        this.logger.log(`Searching for ${skus.length} existing SKUs: ${skus.join(', ')}`);

        const existingVariants =
            await this.productVariantService.findAll(adminCtx, {
                filter: {
                    sku: { in: skus },
                },
                skip: 0,
                take: Math.max(skus.length, 100), // Asegurar que busca suficientes
            });

        this.logger.log(`Found ${existingVariants.items.length} existing variants`);

        const variantMap = new Map(
            existingVariants.items.map(v => {
                this.logger.debug(`Variant in map: SKU ${v.sku}`);
                return [v.sku, v];
            }),
        );

        await Promise.all(
            products.map(product =>
                limit(async () => {
                    try {
                        if (
                            !product.sku ||
                            !product.name ||
                            product.price == null ||
                            product.stock == null
                        ) {
                            skipped++;
                            return;
                        }

                        const existingVariant = variantMap.get(product.sku);

                        if (existingVariant) {
                            // Obtener stock actual
                            const raw = await this.connection
                                .getRepository(adminCtx, 'StockMovement')
                                .createQueryBuilder('sm')
                                .select(
                                    'COALESCE(SUM(sm.quantity), 0)',
                                    'stock',
                                )
                                .where(
                                    'sm.productVariantId = :id',
                                    { id: existingVariant.id },
                                )
                                .getRawOne();

                            const currentStock = Number(raw.stock);

                            // Comparar precio y stock
                            const priceChanged = existingVariant.price !== product.price;
                            const stockChanged = currentStock !== product.stock;

                            if (!priceChanged && !stockChanged) {
                                // Sin cambios, saltar
                                skipped++;
                                this.logger.log(
                                    `Skipping SKU ${product.sku} (no changes - price: ${product.price}, stock: ${product.stock})`,
                                );
                                return;
                            }

                            // Hay cambios, actualizar
                            if (priceChanged) {
                                await this.productVariantService.update(adminCtx, [
                                    {
                                        id: existingVariant.id,
                                        price: product.price,
                                    },
                                ]);
                                this.logger.log(
                                    `Updated price for SKU ${product.sku}: ${product.price}`,
                                );
                            }

                            if (stockChanged) {
                                await this.productVariantService.update(adminCtx, [
                                    {
                                        id: existingVariant.id,
                                        stockOnHand: product.stock,
                                    },
                                ]);
                                this.logger.log(
                                    `Updated stock for SKU ${product.sku}: ${currentStock} -> ${product.stock}`,
                                );
                            }

                            updated++;
                            return;
                        }

                        // No existe, crear
                        const slug = slugify(product.name);

                        const newProduct =
                            await this.productService.create(
                                adminCtx,
                                {
                                    enabled: true,
                                    translations: [
                                        {
                                            languageCode:
                                                adminCtx.languageCode,
                                            name: product.name,
                                            description:
                                                product.description,
                                            slug,
                                        },
                                    ],
                                },
                            );

                        await this.productVariantService.create(
                            adminCtx,
                            [
                                {
                                    productId: newProduct.id,
                                    sku: product.sku,
                                    price: product.price,
                                    stockOnHand: product.stock,
                                    translations:
                                        newProduct.translations,
                                },
                            ],
                        );

                        created++;
                    } catch (e: any) {
                        failed++;
                        errors.push({
                            sku: product.sku,
                            error: e.message,
                        });
                        this.logger.error(
                            `Error importing SKU ${product.sku}: ${e.message}`,
                        );
                    }
                }),
            ),
        );

        return {
            success: failed === 0,
            message:
                [
                    created && `Creados: ${created}`,
                    updated && `Actualizados: ${updated}`,
                    skipped && `Omitidos: ${skipped}`,
                    failed && `Fallidos: ${failed}`,
                ]
                    .filter(Boolean)
                    .join(' | ') || 'No hubo cambios (todos los productos ya existen)',
            importedCount: created,
            updatedCount: updated,
            failedCount: failed,
            skippedCount: skipped,
            errors: errors.length ? errors : undefined,
        };
    }
}