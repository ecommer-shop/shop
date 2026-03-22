import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { ProductEntityResolver } from './api/product-entity.resolver';
import { ProductReviewAdminResolver } from './api/product-review-admin.resolver';
import { ProductReviewEntityResolver } from './api/product-review-entity.resolver';
import { ProductReviewShopResolver } from './api/product-review-shop.resolver';
import { ProductAISummary } from './entities/product-ai-summary.entity';
import { ProductAISummaryTranslation } from './entities/product-ai-summary-translation.entity';
import { ProductReview } from './entities/product-review.entity';
import { AIReviewSummarizer } from './services/ai-review-summarizer.service';
import { ProductReviewService } from './services/product-review.service';
import { ReviewsStatsCalculator } from './services/reviews-stats-calculator.service';
import { ReviewSummaryService } from './services/review-summary.service';
import { SummaryRegenerationPolicy } from './services/summary-regeneration-policy';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        ProductReviewService,
        ReviewSummaryService,
        ReviewsStatsCalculator,
        SummaryRegenerationPolicy,
        AIReviewSummarizer,
    ],
    entities: [ProductReview, ProductAISummary, ProductAISummaryTranslation],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [ProductEntityResolver, ProductReviewAdminResolver, ProductReviewEntityResolver],
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [ProductEntityResolver, ProductReviewShopResolver, ProductReviewEntityResolver],
    },
    configuration: config => {
        config.customFields.Product.push({
            name: 'reviews',
            type: 'relation',
            list: true,
            entity: ProductReview,
            inverseSide: (review: ProductReview) => review.product,
            ui: { component: 'review-multi-select-with-create' },
        });

        return config;
    },
    dashboard: './dashboard/index.tsx',
})
export class ReviewsPlugin {}
