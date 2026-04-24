import { Injectable } from '@nestjs/common';
import { Product, ProductService, RequestContext, TransactionalConnection, UserInputError } from '@vendure/core';

const MAX_STORE_FEATURED = 3;

@Injectable()
export class StoreFeaturedService {
    constructor(
        private connection: TransactionalConnection,
        private productService: ProductService,
    ) {}

    async countFeaturedInChannel(ctx: RequestContext): Promise<number> {
        return this.connection
            .getRepository(ctx, Product)
            .createQueryBuilder('product')
            .innerJoin('product.channels', 'channel', 'channel.id = :channelId', { channelId: ctx.channelId })
            .where('product.deletedAt IS NULL')
            .andWhere('product.customFieldsStorefeatured = :featured', { featured: true })
            .getCount();
    }

    async setFeatured(ctx: RequestContext, productId: string, featured: boolean): Promise<Product> {
        const product = await this.connection.findOneInChannel(ctx, Product, productId, ctx.channelId, {
            loadEagerRelations: false,
        });
        if (!product) {
            throw new UserInputError('Product not found in the current channel.');
        }

        const wasFeatured = !!(product.customFields as { storeFeatured?: boolean } | undefined)?.storeFeatured;

        if (featured && !wasFeatured) {
            const count = await this.countFeaturedInChannel(ctx);
            if (count >= MAX_STORE_FEATURED) {
                throw new UserInputError(
                    `Solo puedes tener hasta ${MAX_STORE_FEATURED} productos destacados en tu tienda. Desmarca otro antes de activar este.`,
                );
            }
        }

        return this.productService.update(ctx, {
            id: productId,
            customFields: {
                storeFeatured: featured,
            },
        });
    }
}
