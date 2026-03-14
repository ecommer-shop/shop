import { Injectable } from '@nestjs/common';
import { ID, RequestContext, TransactionalConnection } from '@vendure/core';

import { ProductAISummary } from '../entities/product-ai-summary.entity';
import { ProductAISummaryTranslation } from '../entities/product-ai-summary-translation.entity';
import { AIReviewSummarizer } from './ai-review-summarizer.service';
import { ReviewsStatsCalculator } from './reviews-stats-calculator.service';
import { SummaryRegenerationPolicy } from './summary-regeneration-policy';

@Injectable()
export class ReviewSummaryService {
    constructor(
        private connection: TransactionalConnection,
        private statsCalculator: ReviewsStatsCalculator,
        private regenerationPolicy: SummaryRegenerationPolicy,
        private aiSummarizer: AIReviewSummarizer,
    ) {}

    async shouldGenerateSummary(ctx: RequestContext, productId: ID): Promise<boolean> {
        const approvedCount = await this.statsCalculator.countApprovedReviews(ctx, productId);
        const currentRating = await this.statsCalculator.getAverageRating(ctx, productId);

        const existingSummary = await this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({ where: { productId } });

        return this.regenerationPolicy.shouldRegenerate({
            approvedCount,
            existingSummary,
            currentRating,
        });
    }

    async generateSummary(ctx: RequestContext, productId: ID): Promise<ProductAISummary> {
        const reviews = await this.statsCalculator.getApprovedReviews(ctx, productId);

        if (reviews.length === 0) {
            throw new Error('No approved reviews found for this product');
        }

        const reviewTexts = reviews.map(r => r.body);
        const aiResponse = await this.aiSummarizer.generateSummary(reviewTexts);
        const averageRating = await this.statsCalculator.getAverageRating(ctx, productId);

        let summary = await this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({
                where: { productId },
                relations: ['translations'],
            });

        if (!summary) {
            summary = new ProductAISummary();
            summary.productId = productId;
            summary.product = { id: productId } as any;
            (summary as any).translations = [];
        }

        summary.basedOnReviewsCount = reviews.length;
        summary.averageRatingWhenGenerated = averageRating;
        summary.lastReviewIdIncluded = reviews[0].id;
        summary.generatedAt = new Date();

        summary = await this.connection
            .getRepository(ctx, ProductAISummary)
            .save(summary);

        const translations = await this.connection
            .getRepository(ctx, ProductAISummaryTranslation)
            .find({ where: { base: { id: summary.id } } });

        let translation = translations.find(t => t.languageCode === 'es');

        if (!translation) {
            translation = new ProductAISummaryTranslation();
            translation.base = summary;
            (translation as any).languageCode = 'es';
        }

        translation.title = aiResponse.title;
        translation.summary = aiResponse.summary;

        await this.connection
            .getRepository(ctx, ProductAISummaryTranslation)
            .save(translation);

        return this.getSummary(ctx, productId) as Promise<ProductAISummary>;
    }

    async getSummary(ctx: RequestContext, productId: ID): Promise<ProductAISummary | null> {
        return this.connection
            .getRepository(ctx, ProductAISummary)
            .findOne({
                where: { productId },
                relations: ['translations'],
            });
    }
}
