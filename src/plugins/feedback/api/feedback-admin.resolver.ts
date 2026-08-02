import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, ID, Permission, RequestContext, Transaction } from '@vendure/core';
import { FeedbackService } from '../services/feedback.service';
import type { FeedbackPostStatus, FeedbackVoteValue } from '../types';

@Resolver()
export class FeedbackAdminResolver {
    constructor(private feedbackService: FeedbackService) {}

    @Query()
    @Allow(Permission.Authenticated)
    feedbackPosts(@Ctx() ctx: RequestContext) {
        return this.feedbackService.getPosts(ctx);
    }

    @Query()
    @Allow(Permission.Authenticated)
    feedbackComments(@Ctx() ctx: RequestContext, @Args() args: { postId: ID }) {
        return this.feedbackService.getComments(ctx, args.postId);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    createFeedbackPost(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: { title: string; description: string; category: string } },
    ) {
        return this.feedbackService.createPost(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    updateFeedbackPost(
        @Ctx() ctx: RequestContext,
        @Args() args: { postId: ID; input: { title?: string; description?: string; category?: string } },
    ) {
        return this.feedbackService.updatePost(ctx, args.postId, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    voteFeedbackPost(
        @Ctx() ctx: RequestContext,
        @Args() args: { postId: ID; value: FeedbackVoteValue },
    ) {
        return this.feedbackService.vote(ctx, args.postId, args.value);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    addFeedbackComment(@Ctx() ctx: RequestContext, @Args() args: { postId: ID; text: string }) {
        return this.feedbackService.addComment(ctx, args.postId, args.text);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    updateFeedbackComment(@Ctx() ctx: RequestContext, @Args() args: { commentId: ID; text: string }) {
        return this.feedbackService.updateComment(ctx, args.commentId, args.text);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    deleteFeedbackComment(@Ctx() ctx: RequestContext, @Args() args: { commentId: ID }) {
        return this.feedbackService.deleteComment(ctx, args.commentId);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    setFeedbackPostStatus(
        @Ctx() ctx: RequestContext,
        @Args() args: { postId: ID; status: FeedbackPostStatus },
    ) {
        return this.feedbackService.setStatus(ctx, args.postId, args.status);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.SuperAdmin)
    setFeedbackPostPriority(
        @Ctx() ctx: RequestContext,
        @Args() args: { postId: ID; prioritized: boolean; adminNote?: string },
    ) {
        return this.feedbackService.setPriority(ctx, args.postId, args.prioritized, args.adminNote);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    deleteFeedbackPost(@Ctx() ctx: RequestContext, @Args() args: { postId: ID }) {
        return this.feedbackService.deletePost(ctx, args.postId);
    }
}
