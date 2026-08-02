import { Injectable } from '@nestjs/common';
import {
    Administrator,
    ForbiddenError,
    ID,
    Permission,
    RequestContext,
    TransactionalConnection,
    UserInputError,
} from '@vendure/core';
import { FeedbackComment } from '../entities/feedback-comment.entity';
import { FeedbackPost } from '../entities/feedback-post.entity';
import { FeedbackVote } from '../entities/feedback-vote.entity';
import type { FeedbackCommentDto, FeedbackPostDto, FeedbackPostStatus, FeedbackVoteValue } from '../types';

const VALID_STATUSES: FeedbackPostStatus[] = ['under_review', 'planned', 'in_progress', 'done', 'declined'];

@Injectable()
export class FeedbackService {
    constructor(private connection: TransactionalConnection) {}

    async getPosts(ctx: RequestContext): Promise<FeedbackPostDto[]> {
        const posts = await this.connection.getRepository(ctx, FeedbackPost).find({
            order: { createdAt: 'DESC' },
            take: 500,
        });
        if (posts.length === 0) {
            return [];
        }
        const voteCounts = await this.connection
            .getRepository(ctx, FeedbackVote)
            .createQueryBuilder('vote')
            .select('vote.postId', 'postId')
            .addSelect('vote.value', 'value')
            .addSelect('COUNT(*)', 'count')
            .groupBy('vote.postId')
            .addGroupBy('vote.value')
            .getRawMany<{ postId: string; value: FeedbackVoteValue; count: string }>();

        const commentCounts = await this.connection
            .getRepository(ctx, FeedbackComment)
            .createQueryBuilder('comment')
            .select('comment.postId', 'postId')
            .addSelect('COUNT(*)', 'count')
            .groupBy('comment.postId')
            .getRawMany<{ postId: string; count: string }>();

        const userId = ctx.activeUserId;
        const myVotes = userId
            ? await this.connection.getRepository(ctx, FeedbackVote).find({
                  where: { user: { id: userId } },
              })
            : [];

        const myVoteByPost = new Map(myVotes.map(v => [String(v.postId), v.value]));
        const commentsByPost = new Map(commentCounts.map(c => [String(c.postId), Number(c.count)]));
        const okByPost = new Map<string, number>();
        const notOkByPost = new Map<string, number>();
        for (const row of voteCounts) {
            const target = row.value === 'ok' ? okByPost : notOkByPost;
            target.set(String(row.postId), Number(row.count));
        }

        return posts.map(post => this.toDto(ctx, post, {
            okVotes: okByPost.get(String(post.id)) ?? 0,
            notOkVotes: notOkByPost.get(String(post.id)) ?? 0,
            myVote: myVoteByPost.get(String(post.id)) ?? null,
            commentCount: commentsByPost.get(String(post.id)) ?? 0,
        }));
    }

    async createPost(
        ctx: RequestContext,
        input: { title: string; description: string; category: string },
    ): Promise<FeedbackPostDto> {
        const title = input.title.trim();
        const description = input.description.trim();
        if (!title || !description) {
            throw new UserInputError('El título y la descripción son obligatorios');
        }
        const post = await this.connection.getRepository(ctx, FeedbackPost).save(
            new FeedbackPost({
                title: title.slice(0, 200),
                description: description.slice(0, 5000),
                category: input.category,
                status: 'under_review',
                prioritized: false,
                author: ctx.activeUserId ? ({ id: ctx.activeUserId } as any) : null,
                authorId: ctx.activeUserId ?? null,
                authorName: await this.getAuthorName(ctx),
            }),
        );
        return this.toDto(ctx, post, { okVotes: 0, notOkVotes: 0, myVote: null, commentCount: 0 });
    }

    async updatePost(
        ctx: RequestContext,
        postId: ID,
        input: { title?: string | null; description?: string | null; category?: string | null },
    ): Promise<FeedbackPostDto> {
        const post = await this.getPostOrThrow(ctx, postId);
        this.assertCanManage(ctx, post.authorId);
        if (input.title != null && input.title.trim()) {
            post.title = input.title.trim().slice(0, 200);
        }
        if (input.description != null && input.description.trim()) {
            post.description = input.description.trim().slice(0, 5000);
        }
        if (input.category != null && input.category.trim()) {
            post.category = input.category;
        }
        await this.connection.getRepository(ctx, FeedbackPost).save(post);
        return this.getPostDto(ctx, postId);
    }

    async vote(ctx: RequestContext, postId: ID, value: FeedbackVoteValue): Promise<FeedbackPostDto> {
        const userId = ctx.activeUserId;
        if (!userId) {
            throw new ForbiddenError();
        }
        const post = await this.getPostOrThrow(ctx, postId);
        const repo = this.connection.getRepository(ctx, FeedbackVote);
        const existing = await repo.findOne({ where: { post: { id: postId }, user: { id: userId } } });
        if (existing && existing.value === value) {
            await repo.remove(existing);
        } else if (existing) {
            existing.value = value;
            await repo.save(existing);
        } else {
            await repo.save(
                new FeedbackVote({
                    post: { id: post.id } as any,
                    user: { id: userId } as any,
                    value,
                }),
            );
        }
        return this.getPostDto(ctx, postId);
    }

    async getComments(ctx: RequestContext, postId: ID): Promise<FeedbackCommentDto[]> {
        const comments = await this.connection.getRepository(ctx, FeedbackComment).find({
            where: { post: { id: postId } },
            order: { createdAt: 'ASC' },
        });
        return comments.map(comment => this.toCommentDto(ctx, comment));
    }

    async addComment(ctx: RequestContext, postId: ID, text: string): Promise<FeedbackCommentDto> {
        const trimmed = text.trim();
        if (!trimmed) {
            throw new UserInputError('El comentario no puede estar vacío');
        }
        const post = await this.getPostOrThrow(ctx, postId);
        const comment = await this.connection.getRepository(ctx, FeedbackComment).save(
            new FeedbackComment({
                post: { id: post.id } as any,
                user: ctx.activeUserId ? ({ id: ctx.activeUserId } as any) : null,
                authorName: await this.getAuthorName(ctx),
                text: trimmed.slice(0, 2000),
            }),
        );
        return this.toCommentDto(ctx, comment);
    }

    async updateComment(ctx: RequestContext, commentId: ID, text: string): Promise<FeedbackCommentDto> {
        const trimmed = text.trim();
        if (!trimmed) {
            throw new UserInputError('El comentario no puede estar vacío');
        }
        const comment = await this.getCommentOrThrow(ctx, commentId);
        this.assertCanManage(ctx, comment.userId);
        comment.text = trimmed.slice(0, 2000);
        await this.connection.getRepository(ctx, FeedbackComment).save(comment);
        return this.toCommentDto(ctx, comment);
    }

    async deleteComment(ctx: RequestContext, commentId: ID): Promise<boolean> {
        const comment = await this.getCommentOrThrow(ctx, commentId);
        this.assertCanManage(ctx, comment.userId);
        await this.connection.getRepository(ctx, FeedbackComment).remove(comment);
        return true;
    }

    async setStatus(ctx: RequestContext, postId: ID, status: FeedbackPostStatus): Promise<FeedbackPostDto> {
        if (!VALID_STATUSES.includes(status)) {
            throw new UserInputError(`Estado inválido: ${status}`);
        }
        const post = await this.getPostOrThrow(ctx, postId);
        post.status = status;
        await this.connection.getRepository(ctx, FeedbackPost).save(post);
        return this.getPostDto(ctx, postId);
    }

    async setPriority(
        ctx: RequestContext,
        postId: ID,
        prioritized: boolean,
        adminNote?: string | null,
    ): Promise<FeedbackPostDto> {
        const post = await this.getPostOrThrow(ctx, postId);
        post.prioritized = prioritized;
        if (adminNote !== undefined) {
            post.adminNote = adminNote?.trim() || null;
        }
        await this.connection.getRepository(ctx, FeedbackPost).save(post);
        return this.getPostDto(ctx, postId);
    }

    async deletePost(ctx: RequestContext, postId: ID): Promise<boolean> {
        const post = await this.getPostOrThrow(ctx, postId);
        this.assertCanManage(ctx, post.authorId);
        await this.connection.getRepository(ctx, FeedbackPost).remove(post);
        return true;
    }

    private assertCanManage(ctx: RequestContext, ownerUserId: ID | null | undefined): void {
        if (ctx.userHasPermissions([Permission.SuperAdmin])) {
            return;
        }
        if (!ctx.activeUserId || ownerUserId == null || String(ownerUserId) !== String(ctx.activeUserId)) {
            throw new ForbiddenError();
        }
    }

    private async getCommentOrThrow(ctx: RequestContext, commentId: ID): Promise<FeedbackComment> {
        const comment = await this.connection
            .getRepository(ctx, FeedbackComment)
            .findOne({ where: { id: commentId } });
        if (!comment) {
            throw new UserInputError(`No existe el comentario ${commentId}`);
        }
        return comment;
    }

    private toCommentDto(ctx: RequestContext, comment: FeedbackComment): FeedbackCommentDto {
        return {
            id: comment.id,
            createdAt: comment.createdAt,
            authorName: comment.authorName,
            text: comment.text,
            mine: comment.userId != null && String(comment.userId) === String(ctx.activeUserId),
        };
    }

    private async getPostOrThrow(ctx: RequestContext, postId: ID): Promise<FeedbackPost> {
        const post = await this.connection.getRepository(ctx, FeedbackPost).findOne({ where: { id: postId } });
        if (!post) {
            throw new UserInputError(`No existe la publicación ${postId}`);
        }
        return post;
    }

    private async getPostDto(ctx: RequestContext, postId: ID): Promise<FeedbackPostDto> {
        const post = await this.getPostOrThrow(ctx, postId);
        const votes = await this.connection.getRepository(ctx, FeedbackVote).find({
            where: { post: { id: postId } },
        });
        const commentCount = await this.connection.getRepository(ctx, FeedbackComment).count({
            where: { post: { id: postId } },
        });
        const myVote = ctx.activeUserId
            ? votes.find(v => String(v.userId) === String(ctx.activeUserId))?.value ?? null
            : null;
        return this.toDto(ctx, post, {
            okVotes: votes.filter(v => v.value === 'ok').length,
            notOkVotes: votes.filter(v => v.value === 'not_ok').length,
            myVote,
            commentCount,
        });
    }

    private async getAuthorName(ctx: RequestContext): Promise<string> {
        if (!ctx.activeUserId) {
            return 'Anónimo';
        }
        const administrator = await this.connection.getRepository(ctx, Administrator).findOne({
            where: { user: { id: ctx.activeUserId } },
        });
        if (!administrator) {
            return 'Vendedor';
        }
        return `${administrator.firstName} ${administrator.lastName}`.trim() || 'Vendedor';
    }

    private toDto(
        ctx: RequestContext,
        post: FeedbackPost,
        counts: Pick<FeedbackPostDto, 'okVotes' | 'notOkVotes' | 'myVote' | 'commentCount'>,
    ): FeedbackPostDto {
        return {
            id: post.id,
            createdAt: post.createdAt,
            title: post.title,
            description: post.description,
            category: post.category,
            status: post.status,
            prioritized: post.prioritized,
            adminNote: post.adminNote,
            authorName: post.authorName,
            mine: post.authorId != null && String(post.authorId) === String(ctx.activeUserId),
            ...counts,
        };
    }
}
