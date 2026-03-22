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
import { ReviewSummaryService } from '../services/review-summary.service';

@Resolver()
export class ProductReviewShopResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private productReviewService: ProductReviewService,
        private reviewSummaryService: ReviewSummaryService,
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
        // Auto-aprobada: solo usuarios con compra verificada pueden dejar reviews
        review.state = 'approved';
        review.verifiedPurchase = true;
        review.author = customer;

        if (sanitizedInput.variantId) {
            const variant = await this.connection.getEntityOrThrow(ctx, ProductVariant, sanitizedInput.variantId);
            review.productVariant = variant;
        }

        // Trigger automático: verificar si se debe generar resumen de IA
        // Las reviews de la tienda ya llegan aprobadas (compra verificada)
        const shouldGenerate = await this.reviewSummaryService.shouldGenerateSummary(
            ctx,
            sanitizedInput.productId,
        );

        if (shouldGenerate) {
            this.reviewSummaryService.generateSummary(ctx, sanitizedInput.productId)
                .catch(err => {
                    console.error('[AI Summary] Error generating summary:', err);
                });
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
