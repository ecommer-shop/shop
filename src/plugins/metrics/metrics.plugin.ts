import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { MetricsDashboardPluginOptions } from './types';

/*
 *
 * The server-side (GraphQL schema, resolvers, metrics service, caching)
 * is fully handled by `MetricsPlugin` from `@pinelab/vendure-plugin-metrics`.
 *
 * This plugin only adds the React Dashboard UI widget that visualizes
 * the `advancedMetricSummaries` query data using recharts.
 */
@VendurePlugin({
    imports: [PluginCommonModule],
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
