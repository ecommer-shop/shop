import { Injectable } from '@nestjs/common';
import { ID, RequestContext, TransactionalConnection } from '@vendure/core';

import { ProductReview } from '../entities/product-review.entity';
import type { ReviewState } from '../types';

@Injectable()
export class ReviewsStatsCalculator {
    constructor(private connection: TransactionalConnection) {}

    async countApprovedReviews(ctx: RequestContext, productId: ID): Promise<number> {
        return this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .getCount();
    }

    async getAverageRating(ctx: RequestContext, productId: ID): Promise<number> {
        const result = await this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .select('AVG(review.rating)', 'avg')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .getRawOne();

        return result?.avg ? parseFloat(result.avg) : 0;
    }

    async getApprovedReviews(ctx: RequestContext, productId: ID): Promise<ProductReview[]> {
        return this.connection
            .getRepository(ctx, ProductReview)
            .createQueryBuilder('review')
            .where('review.productId = :productId', { productId })
            .andWhere('review.state = :state', { state: 'approved' as ReviewState })
            .orderBy('review.createdAt', 'DESC')
            .getMany();
    }
}