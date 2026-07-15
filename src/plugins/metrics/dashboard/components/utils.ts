import { AdvancedMetricSummary } from '../queries/advanced-metrics.queries';

export function formatTableValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 0,
        })}`;
    }
    return value.toLocaleString();
}

export function formatPdfValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 2,
        })}`;
    }
    return value.toLocaleString('es-CO');
}

export function formatDateForPdf(date: Date): string {
    return date.toLocaleDateString('es-CO');
}

export function formatDateForFile(date: Date): string {
    return date.toISOString().slice(0, 10);
}

export function abbreviateChartValue(value: number): string {
    if (value === 0) return '$0';
    const abs = Math.abs(value);
    const prefix = value < 0 ? '-' : '';
    if (abs >= 1_000_000_000) return `${prefix}$${(abs / 1_000_000_000).toFixed(2)}B`;
    if (abs >= 1_000_000) return `${prefix}$${(abs / 1_000_000).toFixed(2)}M`;
    if (abs >= 1_000) return `${prefix}$${(abs / 1_000).toFixed(1)}K`;
    return `${prefix}$${abs}`;
}

export function formatFullPesos(value: number): string {
    const pesos = value / 100;
    return `$${pesos.toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;
}

export function buildSingleMetricChartData(
    metric: AdvancedMetricSummary | null
): Array<Record<string, string | number>> {
    if (!metric) {
        return [];
    }

    return metric.labels.map((label, index) => {
        const point: Record<string, string | number> = { name: label };
        for (const series of metric.series) {
            point[series.name] = series.values[index] ?? 0;
        }
        return point;
    });
}

export function buildMetricsComparisonChartData(
    metrics: AdvancedMetricSummary[]
): Array<Record<string, string | number> & { name: string }> {
    if (metrics.length === 0) {
        return [];
    }

    const labels = metrics[0]?.labels ?? [];

    return labels.map((label, index) => {
        const point: Record<string, string | number> = { name: label };
        for (const metric of metrics) {
            for (const series of metric.series) {
                point[`${metric.code}-${series.name}`] = series.values[index] ?? 0;
            }
        }
        return point as Record<string, string | number> & { name: string };
    });
}