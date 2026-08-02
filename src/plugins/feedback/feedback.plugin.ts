import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { adminApiExtensions } from './api/api-extensions';
import { FeedbackAdminResolver } from './api/feedback-admin.resolver';
import { FeedbackComment } from './entities/feedback-comment.entity';
import { FeedbackPost } from './entities/feedback-post.entity';
import { FeedbackVote } from './entities/feedback-vote.entity';
import { FeedbackService } from './services/feedback.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
    entities: [FeedbackPost, FeedbackVote, FeedbackComment],
    providers: [FeedbackService],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [FeedbackAdminResolver],
    },
    dashboard: './dashboard/index.tsx',
})
export class FeedbackPlugin { }
