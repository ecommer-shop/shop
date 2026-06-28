import { SummaryCard } from './summary-card';

interface MetricSeries {
    name: string;
    values: number[];
}

interface Metric {
    code: string;
    title: string;
    type: string;
    series: MetricSeries[];
}

export function SummaryCardsGrid({ metrics, growthByCode }: { metrics: Metric[]; growthByCode: Record<string, number | null> }) {
    const totals = metrics.map(metric => {
        const series = metric.series[0];
        const sum = series?.values.reduce((a: number, b: number) => a + b, 0) ?? 0;
        const key = metric.code;
        const growth = growthByCode[key];
        return { key, code: metric.code, title: metric.title, total: sum, type: metric.type, growth };
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {totals.map(item => (
                <SummaryCard
                    key={item.key}
                    label={item.title}
                    value={item.total}
                    type={item.type}
                    growth={item.growth}
                />
            ))}
        </div>
    );
}
