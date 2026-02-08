import { Injectable, Logger } from '@nestjs/common';
import {
    ProductService,
    ProductVariantService,
    RequestContext,
} from '@vendure/core';

export type ImportProduct = {
    sku: string;
    name: string;
    description?: string;
};

@Injectable()
export class ExcelImportService {
    private readonly logger = new Logger(ExcelImportService.name);

    constructor(
        private productService: ProductService,
        private productVariantService: ProductVariantService,
    ) { }

    async importProducts(
        ctx: RequestContext,
        products: ImportProduct[],
    ) {
        try {
            this.logger.log(`Starting import for ${products.length} products`);

            let importedCount = 0;
            const errors: { sku: string; error: string }[] = [];

            for (const product of products) {
                try {
                    this.logger.log(`Creating product: ${product.sku} - ${product.name}`);

                    const newProduct = await this.productService.create(ctx, {
                        enabled: true,
                        translations: [
                            {
                                languageCode: ctx.languageCode,
                                name: product.name,
                                description: product.description,
                            },
                        ],
                    });

                    await this.productVariantService.create(ctx, [
                        {
                            productId: newProduct.id,
                            sku: product.sku,
                            translations: [
                                {
                                    languageCode: ctx.languageCode,
                                    name: product.name,
                                },
                            ],
                        },
                    ]);

                    importedCount++;
                    this.logger.log(`Successfully created product: ${product.sku}`);
                } catch (e: any) {
                    this.logger.error(`Error creating product ${product.sku}: ${e.message}`);
                    errors.push({
                        sku: product.sku,
                        error: e.message,
                    });
                }
            }

            const message = `Imported ${importedCount}/${products.length} products successfully`;
            this.logger.log(message);

            return {
                success: errors.length === 0,
                message,
                importedCount,
                failedCount: errors.length,
                errors: errors.length > 0 ? errors : undefined,
            };
        } catch (e: any) {
            this.logger.error(`Import failed: ${e.message}`, e.stack);
            throw e;
        }
    }
}
