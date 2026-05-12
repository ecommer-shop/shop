import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { IsNull } from 'typeorm';
import {
    Allow,
    Ctx,
    Permission,
    ProductService,
    RequestContext,
    TransactionalConnection,
    ProductVariant,
    Transaction,
    UserInputError,
} from '@vendure/core';

/**
 * Extiende el resolver de Admin API para la mutación `updateProduct`.
 *
 * Bloquea habilitar (enabled: true) un producto que no tenga
 * al menos una variante activa (enabled + no eliminada).
 *
 * Registro en vendure-config.ts dentro del AdminApiExtension del plugin:
 *   resolvers: [ProductVariantEnforcementResolver]
 */
@Resolver()
export class ProductVariantEnforcementResolver {
    constructor(
        private readonly productService: ProductService,
        private readonly connection: TransactionalConnection,
    ) { }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async updateProduct(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: { id: string; enabled?: boolean } },
    ) {
        const { input } = args;

        // Solo validar si se intenta habilitar explícitamente
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