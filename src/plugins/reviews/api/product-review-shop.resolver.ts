import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
    Ctx,
    Customer,
    ListQueryBuilder,
    Product,
    ProductVariant,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

import { ProductReview } from '../entities/product-review.entity';
import { MutationSubmitProductReviewArgs, MutationVoteOnReviewArgs } from '../generated-shop-types';
import { ProductReviewService } from '../services/product-review.service';

@Resolver()
export class ProductReviewShopResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private productReviewService: ProductReviewService,
    ) {}

    @Transaction()
    @Mutation()
    async submitProductReview(
        @Ctx() ctx: RequestContext,
        @Args() { input }: MutationSubmitProductReviewArgs,
    ) {
        if (!ctx.activeUserId) {
            throw new Error('You must be logged in to submit a review');
        }

        const customer = await this.connection
            .getRepository(ctx, Customer)
            .findOne({ where: { user: { id: ctx.activeUserId } } });

        if (!customer) {
            throw new Error('Customer not found');
        }

        await this.productReviewService.assertCustomerBoughtProduct(
            ctx,
            customer.id,
            input.productId,
        );

        await this.productReviewService.assertNoExistingReview(ctx, customer.id, input.productId);

        this.productReviewService.validateReviewInput(input);

        const sanitizedInput = this.productReviewService.sanitizeReviewInput(input);

        const review = new ProductReview(sanitizedInput);
        const product = await this.connection.getEntityOrThrow(ctx, Product, sanitizedInput.productId);
        review.product = product;
        review.state = 'new';
        review.author = customer;

        if (sanitizedInput.variantId) {
            const variant = await this.connection.getEntityOrThrow(ctx, ProductVariant, sanitizedInput.variantId);
            review.productVariant = variant;
        }

        return this.connection.getRepository(ctx, ProductReview).save(review);
    }

    @Transaction()
    @Mutation()
    async voteOnReview(@Ctx() ctx: RequestContext, @Args() { id, vote }: MutationVoteOnReviewArgs) {
        const review = await this.connection.getEntityOrThrow(ctx, ProductReview, id, {
            relations: ['product'],
            where: {
                state: 'approved',
            },
        });
        if (vote) {
            review.upvotes++;
        } else {
            review.downvotes++;
        }
        return this.connection.getRepository(ctx, ProductReview).save(review);
    }
}
