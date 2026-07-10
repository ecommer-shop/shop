import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { MetricsResolver } from './api/metrics.resolver';
import { MetricsService } from './api/metrics.service';
import { MetricsController } from './api/metrics.controller';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [MetricsService],
    controllers: [MetricsController],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [MetricsResolver],
    },
    compatibility: '^3.0.0',
})
export class MetricsApiPlugin {}
