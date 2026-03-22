import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Api, ApiType, Ctx, ListQueryBuilder, Product, RequestContext, TransactionalConnection, translateDeep } from '@vendure/core';

import { ProductReview } from '../entities/product-review.entity';
import { ProductReviewsArgs } from '../generated-shop-types';
import { ReviewSummaryService } from '../services/review-summary.service';

@Resolver('Product')
export class ProductEntityResolver {
    constructor(
        private listQueryBuilder: ListQueryBuilder,
        private connection: TransactionalConnection,
        private reviewSummaryService: ReviewSummaryService,
    ) {}

    @ResolveField()
    reviews(@Api() apiType: ApiType, @Parent() product: Product, @Args() args: ProductReviewsArgs) {
        return this.listQueryBuilder
            .build(ProductReview, args.options || undefined, {
                where: {
                    product: { id: product.id },
                    ...(apiType === 'shop' ? { state: 'approved' } : {}),
                },
                relations: ['product', 'product.featuredAsset'],
            })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
                items,
                totalItems,
            }));
    }

    @ResolveField()
    reviewsHistogram(@Parent() product: Product) {
        return this.connection.rawConnection
            .createQueryBuilder()
            .select('ROUND(`rating`)', 'bin')
            .addSelect('COUNT(*)', 'frequency')
            .from(ProductReview, 'review')
            .where('review.product = :productId', { productId: product.id })
            .andWhere('review.state = :state', { state: 'approved' })
            .groupBy('ROUND(`rating`)')
            .getRawMany();
    }

    @ResolveField()
    async aiSummary(
        @Ctx() ctx: RequestContext,
        @Parent() product: Product,
    ) {
        const summary = await this.reviewSummaryService.getSummary(ctx, product.id);
        if (!summary) return null;
        return translateDeep(summary, ctx.languageCode);
    }
}
