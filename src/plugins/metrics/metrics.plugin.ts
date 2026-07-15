import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { MetricsDashboardPluginOptions } from './types';
import { SafeMetricsResolver } from './safe-metrics.resolver';
import { adminSchema } from './safe-metrics.graphql';

@VendurePlugin({
    imports: [PluginCommonModule],
    adminApiExtensions: {
        schema: adminSchema,
        resolvers: [SafeMetricsResolver],
    },
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class MetricsDashboardPlugin {
    static options: MetricsDashboardPluginOptions;

    static init(options: MetricsDashboardPluginOptions = {}): Type<MetricsDashboardPlugin> {
        this.options = options;
        return MetricsDashboardPlugin;
    }
}
