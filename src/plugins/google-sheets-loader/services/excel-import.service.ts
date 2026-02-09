import { Injectable, Logger } from '@nestjs/common';
import {
    ProductService,
    ProductVariantService,
    RequestContext,
    RequestContextService,
} from '@vendure/core';

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

        let importedCount = 0;
        let skippedCount = 0;

        const skipped: { sku: string; reason: string }[] = [];
        const errors: { sku: string; error: string }[] = [];

        for (const product of products) {
            try {
                //this.logger.log(`Checking SKU: ${product.sku}`);

                // se valida por sku si el producto existe
                const existingVariants =
                    await this.productVariantService.findAll(adminCtx, {
                        filter: {
                            sku: { eq: product.sku },
                        },
                        take: 1,
                    });

                if (existingVariants.totalItems > 0) {
                    skippedCount++;
                    skipped.push({
                        sku: product.sku,
                        reason: 'Variant already exists',
                    });

                    /*this.logger.log(
                                            `Skipping SKU ${product.sku} (already exists)`,
                                        );*/
                    continue;
                }

                const slug = slugify(product.name);

                this.logger.log(
                    `Creating product: ${product.sku} - ${product.name}`,
                );

                const newProduct = await this.productService.create(adminCtx, {
                    enabled: true,
                    translations: [
                        {
                            languageCode: adminCtx.languageCode,
                            name: product.name,
                            description: product.description,
                            slug,
                        },
                    ],
                });

                await this.productVariantService.create(adminCtx, [
                    {
                        productId: newProduct.id,
                        sku: product.sku,
                        price: product.price * 100,
                        stockOnHand: product.stock,
                        translations: newProduct.translations,
                    },
                ]);

                importedCount++;
                this.logger.log(`Successfully created SKU ${product.sku}`);
            } catch (e: any) {
                this.logger.error(
                    `Error importing SKU ${product.sku}: ${e.message}`,
                );
                errors.push({
                    sku: product.sku,
                    error: e.message,
                });
            }
        }

        return {
            success: errors.length === 0,
            message: `Imported ${importedCount}/${products.length} products. Skipped: ${skippedCount}`,
            importedCount,
            skippedCount,
            failedCount: errors.length,
            skipped: skipped.length ? skipped : undefined,
            errors: errors.length ? errors : undefined,
        };
    }
}
