import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { MetricsDashboardPluginOptions } from './types';

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
