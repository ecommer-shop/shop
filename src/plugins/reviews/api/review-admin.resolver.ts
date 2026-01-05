import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeletionResponse, Permission } from '@vendure/common/lib/generated-types';
import { CustomFieldsObject } from '@vendure/common/lib/shared-types';
import {
    Allow,
    Ctx,
    PaginatedList,
    RequestContext,
    Transaction,
    Relations,
    VendureEntity,
    ID,
    TranslationInput,
    ListQueryOptions,
    RelationPaths,
} from '@vendure/core';
import { ReviewService } from '../services/review.service';
import { Review } from '../entities/review.entity';

// These can be replaced by generated types if you set up code generation
interface CreateReviewInput {
    code: string;
    rating: number;
    comment: string;
    productId: ID;
    customFields?: CustomFieldsObject;
}
interface UpdateReviewInput {
    id: ID;
    code?: string;
    rating?: number;
    comment?: string;
    approved?: boolean;
    customFields?: CustomFieldsObject;
}

@Resolver()
export class ReviewAdminResolver {
    constructor(private reviewService: ReviewService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async review(
        @Ctx() ctx: RequestContext,
        @Args() args: { id: ID },
        @Relations(Review) relations: RelationPaths<Review>,
    ): Promise<Review | null> {
        return this.reviewService.findOne(ctx, args.id, relations);
    }

    @Query()
    @Allow(Permission.SuperAdmin)
    async reviews(
        @Ctx() ctx: RequestContext,
        @Args() args: { options: ListQueryOptions<Review> },
        @Relations(Review) relations: RelationPaths<Review>,
    ): Promise<PaginatedList<Review>> {
        return this.reviewService.findAll(ctx, args.options || undefined, relations);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async createReview(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: CreateReviewInput },
    ): Promise<Review> {
        return this.reviewService.create(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async updateReview(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: UpdateReviewInput },
    ): Promise<Review> {
        return this.reviewService.update(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async approveReview(
        @Ctx() ctx: RequestContext,
        @Args() args: { id: ID },
    ): Promise<Review> {
        return this.reviewService.approve(ctx, args.id);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    async deleteReview(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<DeletionResponse> {
        return this.reviewService.delete(ctx, args.id);
    }
}
