import { useState, useEffect } from 'react';
import {
    Page,
    PageLayout,
    PageTitle,
    Card,
    CardContent,
    Button,
} from '@vendure/dashboard';
import { BarChart3, Loader2, RefreshCw } from 'lucide-react';
import {
    gql,
    STORE_ANALYTICS_QUERY,
    STORE_ANALYTICS_SUMMARY_QUERY,
    STORE_RANKING_QUERY,
    STORE_ANALYTICS_STORE_LIST_QUERY,
    INVESTOR_METRICS_QUERY,
    BACKFILL_MUTATION,
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
import { Filters } from './Filters';

export function AnalyticsPage() {
    const [channelId, setChannelId] = useState<string | undefined>(undefined);
    const [days, setDays] = useState(30);
    const [stores, setStores] = useState<{ id: string; storeName: string }[]>([]);
    const [data, setData] = useState<AnalyticsDataPoint[]>([]);
    const [summary, setSummary] = useState<StoreAnalyticsSummary | null>(null);
    const [ranking, setRanking] = useState<StoreRankingEntry[]>([]);
    const [investorMetrics, setInvestorMetrics] = useState<InvestorMetricsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [backfilling, setBackfilling] = useState(false);

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

    const handleBackfill = async () => {
        setBackfilling(true);
        try {
            await gql<{ backfillStoreAnalytics: boolean }>(BACKFILL_MUTATION);
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
        } catch { }
        setBackfilling(false);
    };

    return (
        <Page pageId="store-analytics">
            <PageTitle>
                <span className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Analíticas de Tiendas
                </span>
            </PageTitle>
            <PageLayout>
                <div className="col-span-full space-y-4">
                    <Filters
                        stores={stores}
                        selectedStore={channelId}
                        onStoreChange={setChannelId}
                        days={days}
                        onDaysChange={setDays}
                    />

                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
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
                            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                                <BarChart3 className="h-12 w-12 text-muted-foreground/40 mb-4" />
                                <p className="text-lg font-medium text-muted-foreground">No hay datos disponibles</p>
                                <p className="text-sm text-muted-foreground/60 mt-1 mb-4">
                                    Los datos se generan automáticamente cada medianoche
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleBackfill}
                                    disabled={backfilling}
                                >
                                    {backfilling ? (
                                        <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Cargando...</>
                                    ) : (
                                        <><RefreshCw className="h-4 w-4 mr-2" />Cargar datos históricos</>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </PageLayout>
        </Page>
    );
}
