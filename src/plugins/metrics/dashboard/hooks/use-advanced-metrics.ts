import { useQuery } from '@tanstack/react-query';
import { api } from '@vendure/dashboard';
import {
    advancedMetricSummariesDocument,
    AdvancedMetricSummariesResult,
} from '../queries/advanced-metrics.queries';

interface UseAdvancedMetricsOptions {
    channelId?: string;
    variantIds?: string[];
}

export function useAdvancedMetrics(options: UseAdvancedMetricsOptions = {}) {
    const { channelId, variantIds } = options;

    return useQuery<AdvancedMetricSummariesResult>({
        queryKey: ['advanced-metrics', channelId ?? null, variantIds ?? []],
        queryFn: () =>
            api.query<AdvancedMetricSummariesResult>(advancedMetricSummariesDocument, {
                input: {
                    variantIds: variantIds?.length ? variantIds : undefined,
                },
            }),
        staleTime: 5 * 60 * 1000,
    });
}
