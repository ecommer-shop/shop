import { useState, useEffect } from 'react';
import type { StoreAnalyticsSummary, AnalyticsSummaryMetric } from '../graphql-queries';

const LIGHT_BADGE = '#6BB8FF';
const DARK_BADGE = '#9969F8';

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP',
        minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(n: number): string {
    return new Intl.NumberFormat('es-CO').format(n);
}

function useBadgeColor(): string {
    const [color, setColor] = useState(LIGHT_BADGE);
    useEffect(() => {
        const el = document.documentElement;
        const update = () => setColor(el.classList.contains('dark') ? DARK_BADGE : LIGHT_BADGE);
        update();
        const observer = new MutationObserver(update);
        observer.observe(el, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);
    return color;
}

function MetricCard({ metric }: { metric: AnalyticsSummaryMetric }) {
    const badgeColor = useBadgeColor();
    const isPositive = metric.changePercent >= 0;
    const arrow = isPositive ? '↑' : '↓';

    return (
        <div className="rounded-lg border bg-card p-4 shadow-sm min-w-0">
            <p className="text-xs font-medium text-muted-foreground mb-1">{metric.label}</p>
            <p className="text-xl sm:text-2xl font-bold text-foreground break-words">
                {metric.type === 'currency'
                    ? formatCurrency(metric.current)
                    : formatNumber(metric.current)}
            </p>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                <span
                    className="inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded"
                    style={{
                        backgroundColor: `${badgeColor}20`,
                        color: badgeColor,
                    }}
                >
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
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-4">
            {metrics.map((m, i) => (
                <MetricCard key={i} metric={m} />
            ))}
        </div>
    );
}
