import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IsNull } from 'typeorm';
import {
    Ctx,
    ProductService,
    RequestContext,
    TransactionalConnection,
    ProductVariant,
    Transaction,
    UserInputError,
} from '@vendure/core';
import { UseGuards } from '@nestjs/common';
import { ProductLimitGuard } from '../wompi-subscription/guards/feature.guard';

@Resolver()
export class ProductVariantEnforcementResolver {
    constructor(
        private readonly productService: ProductService,
        private readonly connection: TransactionalConnection,
    ) { }

    @Transaction()
    @Mutation()
    @UseGuards(ProductLimitGuard)
    async updateProduct(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: { id: string; enabled?: boolean } },
    ) {
        const { input } = args;

        if (input.enabled === true) {
            const activeVariantCount = await this.connection
                .getRepository(ctx, ProductVariant)
                .count({
                    where: {
                        product: { id: Number(input.id) },
                        enabled: true,
                        deletedAt: IsNull(),
                    },
                });

            if (activeVariantCount === 0) {
                throw new UserInputError(
                    `El producto ${input.id} no puede habilitarse porque no tiene variantes activas. ` +
                    `Agrega al menos una variante antes de habilitarlo.`,
                );
            }
        }

        return this.productService.update(ctx, input);
    }
}
