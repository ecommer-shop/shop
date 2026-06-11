import { OnApplicationBootstrap } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PluginCommonModule, TransactionalConnection, Type, VendurePlugin } from '@vendure/core';
import { endOfDay, startOfMonth, sub } from 'date-fns';
import { MetricsService } from '@pinelab/vendure-plugin-metrics';

import { MetricsDashboardPluginOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class MetricsDashboardPlugin implements OnApplicationBootstrap {
    static options: MetricsDashboardPluginOptions;

    constructor(
        private moduleRef: ModuleRef,
        private connection: TransactionalConnection,
    ) { }

    static init(options: MetricsDashboardPluginOptions = {}): Type<MetricsDashboardPlugin> {
        this.options = options;
        return MetricsDashboardPlugin;
    }

    async onApplicationBootstrap() {
        const metricsService = this.moduleRef.get(MetricsService, { strict: false });
        const rawConnection = this.connection.rawConnection;

        const origSave = metricsService.saveMetricSummary.bind(metricsService);
        const patchedSave: typeof metricsService.saveMetricSummary = async (ctx, cacheKey, summary) => {
            try {
                await rawConnection
                    .createQueryBuilder()
                    .insert()
                    .into('metric_summary')
                    .values({
                        key: cacheKey,
                        summaryData: JSON.stringify(summary),
                        channelId: ctx.channelId,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    })
                    .orUpdate(['summaryData', 'updatedAt'], ['key'])
                    .execute();
                return undefined;
            } catch (e) {
                return origSave(ctx, cacheKey, summary);
            }
        };
        metricsService.saveMetricSummary = patchedSave;

        const patchedGet: typeof metricsService.getMetrics = async (ctx, input) => {
            const today = endOfDay(new Date());
            const startDate = startOfMonth(sub(today, { months: 13 }));
            const variantIds = input?.variantIds ?? [];

            const cached = await metricsService.getAllMetricsFromCache(ctx, startDate, today, variantIds);
            if (cached) return cached;

            const queue = (metricsService as any).generateMetricsQueue;
            if (queue) {
                queue.add({
                    ctx: ctx.serialize(),
                    startDate: startDate.toISOString(),
                    endDate: today.toISOString(),
                    variantIds,
                }, { retries: 2 }).catch(() => {});
            }

            return [];
        };
        metricsService.getMetrics = patchedGet;
    }
}
