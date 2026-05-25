import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, ProductService, ProductVariantService, RequestContext } from '@vendure/core';
import { UseGuards } from '@nestjs/common';
import { ProductLimitGuard, FeatureGuard } from '../guards/feature.guard';

@Resolver()
export class ProductLimitResolver {
    constructor(
        private productService: ProductService,
        private productVariantService: ProductVariantService,
    ) {}

    @Mutation()
    @Allow(Permission.CreateProduct)
    @UseGuards(ProductLimitGuard)
    async createProduct(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.productService.create(ctx, args.input);
    }

    @Mutation()
    @Allow(Permission.CreateCatalog)
    @UseGuards(FeatureGuard)
    async createProductVariants(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.productVariantService.create(ctx, args.input);
    }
}
