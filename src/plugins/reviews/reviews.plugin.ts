import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { REVIEWS_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { Review } from './entities/review.entity';
import { ReviewService } from './services/review.service';
import { ReviewAdminResolver } from './api/review-admin.resolver';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: REVIEWS_PLUGIN_OPTIONS, useFactory: () => ReviewsPlugin.options }, ReviewService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    entities: [Review],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [ReviewAdminResolver]
    },
})
export class ReviewsPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<ReviewsPlugin> {
        this.options = options;
        return ReviewsPlugin;
    }
}
