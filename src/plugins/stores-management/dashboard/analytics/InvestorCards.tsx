import type { InvestorMetric, InvestorMetricsResponse } from '../graphql-queries';

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP',
        minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(n: number): string {
    return new Intl.NumberFormat('es-CO').format(n);
}

function formatPercent(n: number): string {
    const sign = n >= 0 ? '+' : '';
    return `${sign}${n}%`;
}

function MetricCard({ metric }: { metric: InvestorMetric }) {
    const isPositive = metric.type === 'percent' ? metric.current >= 0 : true;
    const formatted = metric.type === 'currency'
        ? formatCurrency(metric.current)
        : metric.type === 'percent'
            ? formatPercent(metric.current)
            : formatNumber(metric.current);

    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-xs font-medium text-muted-foreground mb-1">{metric.label}</p>
            <p className={`text-xl font-bold ${isPositive ? 'text-foreground' : 'text-red-600'}`}>
                {formatted}
            </p>
        </div>
    );
}

export function InvestorCards({ metrics }: { metrics: InvestorMetricsResponse }) {
    const items = [
        metrics.gmvTotal,
        metrics.monthlyGrowth,
        metrics.commissions,
        metrics.runRateAnnual,
        metrics.avgTicketMonthly,
        metrics.avgRevenuePerStore,
        metrics.newStoresPerMonth,
        metrics.uniqueCustomers,
    ];

    return (
        <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                📊 Métricas para inversionistas
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((m, i) => (
                    <MetricCard key={i} metric={m} />
                ))}
            </div>
        </div>
    );
}