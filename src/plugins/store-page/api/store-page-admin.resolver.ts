import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, Product, RequestContext, Transaction } from '@vendure/core';

import { StoreFeaturedService } from '../services/store-featured.service';

@Resolver()
export class StorePageAdminResolver {
    constructor(private storeFeaturedService: StoreFeaturedService) {}

    @Mutation()
    @Transaction()
    /** Vendedores usan permisos granulares (`UpdateProduct`), no el paraguas `UpdateCatalog`. */
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async setProductStoreFeatured(
        @Ctx() ctx: RequestContext,
        @Args() args: { productId: string; featured: boolean },
    ): Promise<Product> {
        return this.storeFeaturedService.setFeatured(ctx, args.productId, args.featured);
    }
}
