import type { StoreAnalyticsSummary, AnalyticsSummaryMetric } from '../graphql-queries';

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(n: number): string {
    return new Intl.NumberFormat('es-CO').format(n);
}

function MetricCard({ metric }: { metric: AnalyticsSummaryMetric }) {
    const isPositive = metric.changePercent >= 0;
    const arrow = isPositive ? '↑' : '↓';
    const color = isPositive ? 'text-green-600' : 'text-red-600';
    const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-xs font-medium text-muted-foreground mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-foreground">
                {metric.type === 'currency'
                    ? formatCurrency(metric.current)
                    : formatNumber(metric.current)}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
                <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded ${bgColor} ${color}`}>
                    {arrow} {Math.abs(metric.changePercent)}%
                </span>
                <span className="text-xs text-muted-foreground">vs período anterior</span>
            </div>
        </div>
    );
}

export function SummaryCards({ summary }: { summary: StoreAnalyticsSummary }) {
    const metrics = [
        summary.totalRevenue,
        summary.totalOrders,
        summary.totalActiveStores,
        summary.avgOrderValue,
        summary.totalUnits,
        summary.newCustomers,
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            {metrics.map((m, i) => (
                <MetricCard key={i} metric={m} />
            ))}
        </div>
    );
}
