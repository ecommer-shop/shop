import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    EntityNotFoundError,
    ListQueryBuilder,
    Permission,
    Product,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

import { ProductReview } from '../entities/product-review.entity';
import { ReviewSummaryService } from '../services/review-summary.service';
import {
    MutationApproveProductReviewArgs,
    MutationRejectProductReviewArgs,
    QueryProductReviewArgs,
    QueryProductReviewsArgs,
    UpdateProductReviewInput,
} from '../generated-admin-types';
// El tipo generado no incluye 'state' porque es un campo custom del schema.
// Lo extendemos localmente para tener tipado correcto.
interface UpdateProductReviewInputWithState extends UpdateProductReviewInput {
    state?: string;
}

interface MutationUpdateProductReviewArgsWithState {
    input: UpdateProductReviewInputWithState;
}

@Resolver()
export class ProductReviewAdminResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private reviewSummaryService: ReviewSummaryService,
    ) {}

    @Query()
    @Allow(Permission.ReadCatalog)
    async productReviews(@Ctx() ctx: RequestContext, @Args() args: QueryProductReviewsArgs) {
        return this.listQueryBuilder
            .build(ProductReview, args.options || undefined, {
                relations: ['product'],
                ctx,
            })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
                items,
                totalItems,
            }));
    }

    @Query()
    @Allow(Permission.ReadCatalog)
    async productReview(@Ctx() ctx: RequestContext, @Args() args: QueryProductReviewArgs) {
        const review = await this.connection.getRepository(ctx, ProductReview).findOne({
            where: { id: args.id },
            relations: {
                author: true,
                product: true,
                productVariant: true,
            },
        });

        if (!review) {
            throw new EntityNotFoundError(ProductReview.name, args.id);
        }

        return review;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateCatalog)
    async updateProductReview(
        @Ctx() ctx: RequestContext,
        @Args() { input }: MutationUpdateProductReviewArgsWithState,
    ) {
        const review = await this.connection.getEntityOrThrow(ctx, ProductReview, input.id);

        if (input.summary !== undefined) {
            review.summary = input.summary;
        }
        if (input.body !== undefined) {
            review.body = input.body;
        }
        if (input.response !== undefined) {
            review.response = input.response;
            if (input.response && !review.responseCreatedAt) {
                review.responseCreatedAt = new Date();
            }
        }
        if (input.state !== undefined) {
            review.state = input.state as any;
        }

        return this.connection.getRepository(ctx, ProductReview).save(review);
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateCatalog)
    async approveProductReview(@Ctx() ctx: RequestContext, @Args() { id }: MutationApproveProductReviewArgs) {
        const review = await this.connection.getEntityOrThrow(ctx, ProductReview, id, {
            relations: ['product'],
        });
        if (review.state !== 'new') {
            return review;
        }
        const { product } = review;
        const newRating = this.calculateNewReviewAverage(review.rating, product);
        product.customFields.reviewCount++;
        product.customFields.reviewRating = newRating;
        await this.connection.getRepository(ctx, Product).save(product);
        review.state = 'approved';
        const savedReview = await this.connection.getRepository(ctx, ProductReview).save(review);

        /**
         * Trigger automático: Verificar si se debe generar/regenerar
         * resumen de IA después de aprobar una review
         */
        const shouldGenerate = await this.reviewSummaryService.shouldGenerateSummary(
            ctx,
            review.product.id,
        );

        if (shouldGenerate) {
            // Generar en background para no bloquear la respuesta
            this.reviewSummaryService.generateSummary(ctx, review.product.id)
                .catch(err => {
                    // Log del error pero no fallar la aprobación
                    console.error('[AI Summary] Error generating summary:', err);
                });
        }

        return savedReview;
    }

    @Transaction()
    @Mutation()
    @Allow(Permission.UpdateCatalog)
    async rejectProductReview(@Ctx() ctx: RequestContext, @Args() { id }: MutationRejectProductReviewArgs) {
        const review = await this.connection.getEntityOrThrow(ctx, ProductReview, id);
        if (review.state !== 'new') {
            return review;
        }
        review.state = 'rejected';
        return this.connection.getRepository(ctx, ProductReview).save(review);
    }

    private calculateNewReviewAverage(rating: number, product: Product): number {
        const count = product.customFields.reviewCount;
        const currentRating = product.customFields.reviewRating || 0;
        const newRating = (currentRating * count + rating) / (count + 1);
        return newRating;
    }
}
