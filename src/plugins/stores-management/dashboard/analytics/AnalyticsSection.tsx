import { useState, useEffect } from 'react';
import { Card, CardContent } from '@vendure/dashboard';
import { BarChart3, Loader2 } from 'lucide-react';
import {
    gql,
    STORE_ANALYTICS_QUERY,
    STORE_ANALYTICS_SUMMARY_QUERY,
    STORE_RANKING_QUERY,
    STORE_ANALYTICS_STORE_LIST_QUERY,
    INVESTOR_METRICS_QUERY,
    type AnalyticsDataPoint,
    type StoreAnalyticsSummary,
    type StoreRankingEntry,
    type InvestorMetricsResponse,
} from '../graphql-queries';
import { SummaryCards } from './SummaryCards';
import { RevenueChart } from './RevenueChart';
import { OrdersChart } from './OrdersChart';
import { StoreRankingTable } from './StoreRankingTable';
import { InvestorCards } from './InvestorCards';

export function AnalyticsSection() {
    const [channelId, setChannelId] = useState<string | undefined>(undefined);
    const [days, setDays] = useState(30);
    const [stores, setStores] = useState<{ id: string; storeName: string }[]>([]);
    const [data, setData] = useState<AnalyticsDataPoint[]>([]);
    const [summary, setSummary] = useState<StoreAnalyticsSummary | null>(null);
    const [ranking, setRanking] = useState<StoreRankingEntry[]>([]);
    const [investorMetrics, setInvestorMetrics] = useState<InvestorMetricsResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gql<{ storeAnalyticsStoreList: { id: string; storeName: string; channelCode: string }[] }>(
            STORE_ANALYTICS_STORE_LIST_QUERY,
        )
            .then(d => setStores(d.storeAnalyticsStoreList))
            .catch(() => {});
    }, []);

    useEffect(() => {
        setLoading(true);
        const filter = { channelId: channelId || undefined, days };
        Promise.all([
            gql<{ storeAnalytics: AnalyticsDataPoint[] }>(STORE_ANALYTICS_QUERY, { filter }),
            gql<{ storeAnalyticsSummary: StoreAnalyticsSummary }>(STORE_ANALYTICS_SUMMARY_QUERY, { filter }),
            gql<{ storeRanking: StoreRankingEntry[] }>(STORE_RANKING_QUERY, {
                channelId: channelId || undefined,
                by: 'revenue',
                limit: 10,
            }),
            gql<{ investorMetrics: InvestorMetricsResponse }>(INVESTOR_METRICS_QUERY),
        ])
            .then(([dataRes, summaryRes, rankingRes, invRes]) => {
                setData(dataRes.storeAnalytics);
                setSummary(summaryRes.storeAnalyticsSummary);
                setRanking(rankingRes.storeRanking);
                setInvestorMetrics(invRes.investorMetrics);
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, [channelId, days]);

    const hasData = summary && summary.totalRevenue.current > 0;

    return (
        <div className="px-4 sm:px-6 pb-6">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4 pt-6 border-t">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Analíticas de Tiendas
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                    <select
                        className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs shadow-sm max-w-[160px]"
                        value={channelId ?? ''}
                        onChange={e => setChannelId(e.target.value || undefined)}
                    >
                        <option value="">Todas las tiendas</option>
                        {stores.map(s => (
                            <option key={s.id} value={s.id}>{s.storeName}</option>
                        ))}
                    </select>
                    <div className="flex items-center gap-0.5 rounded-md border bg-muted/30 p-0.5">
                        {[7, 30, 90].map(d => (
                            <button
                                key={d}
                                className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors ${
                                    days === d
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-muted-foreground hover:bg-muted'
                                }`}
                                onClick={() => setDays(d)}
                            >
                                {d}d
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {loading && (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
            )}

            {!loading && hasData && (
                <>
                    <InvestorCards metrics={investorMetrics!} />
                    <SummaryCards summary={summary} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <RevenueChart data={data} />
                        <OrdersChart data={data} />
                    </div>
                    <StoreRankingTable ranking={ranking} onStoreClick={setChannelId} />
                </>
            )}

            {!loading && !hasData && (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                        <BarChart3 className="h-8 w-8 text-muted-foreground/40 mb-3" />
                        <p className="text-sm font-medium text-muted-foreground">No hay datos disponibles</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">
                            Ejecuta la migración y reinicia el servidor. El job diario genera datos automáticamente.
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
