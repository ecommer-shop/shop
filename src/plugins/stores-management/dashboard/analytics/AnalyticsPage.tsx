import { useState, useEffect, useCallback } from 'react';
import {
    Page,
    PageLayout,
    FullWidthPageBlock,
    PageTitle,
    Card,
    CardContent,
} from '@vendure/dashboard';
import { BarChart3, Loader2, AlertCircle } from 'lucide-react';
import {
    gql,
    STORE_ANALYTICS_QUERY,
    STORE_ANALYTICS_SUMMARY_QUERY,
    STORE_RANKING_QUERY,
    STORE_ANALYTICS_STORE_LIST_QUERY,
    type AnalyticsDataPoint,
    type StoreAnalyticsSummary,
    type StoreRankingEntry,
    type StoreNode,
} from '../graphql-queries';
import { Filters } from './Filters';
import { SummaryCards } from './SummaryCards';
import { RevenueChart } from './RevenueChart';
import { OrdersChart } from './OrdersChart';
import { StoreRankingTable } from './StoreRankingTable';

export function AnalyticsPage() {
    const [channelId, setChannelId] = useState<string | undefined>(undefined);
    const [days, setDays] = useState(30);
    const [stores, setStores] = useState<{ id: string; storeName: string }[]>([]);
    const [data, setData] = useState<AnalyticsDataPoint[]>([]);
    const [summary, setSummary] = useState<StoreAnalyticsSummary | null>(null);
    const [ranking, setRanking] = useState<StoreRankingEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        gql<{ storeAnalyticsStoreList: { id: string; storeName: string; channelCode: string }[] }>(
            STORE_ANALYTICS_STORE_LIST_QUERY,
        )
            .then(d => setStores(d.storeAnalyticsStoreList))
            .catch(() => {});
    }, []);

    const loadData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const filter = {
                channelId: channelId || undefined,
                days,
            };
            const [dataRes, summaryRes, rankingRes] = await Promise.all([
                gql<{ storeAnalytics: AnalyticsDataPoint[] }>(STORE_ANALYTICS_QUERY, { filter }),
                gql<{ storeAnalyticsSummary: StoreAnalyticsSummary }>(STORE_ANALYTICS_SUMMARY_QUERY, { filter }),
                gql<{ storeRanking: StoreRankingEntry[] }>(STORE_RANKING_QUERY, {
                    channelId: channelId || undefined,
                    by: 'revenue',
                    limit: 10,
                }),
            ]);
            setData(dataRes.storeAnalytics);
            setSummary(summaryRes.storeAnalyticsSummary);
            setRanking(rankingRes.storeRanking);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [channelId, days]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <Page pageId="store-analytics">
            <PageTitle>
                <span className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Analíticas de Tiendas
                </span>
            </PageTitle>
            <PageLayout>
                <FullWidthPageBlock>
                    {error && (
                        <Card className="mb-4 border-destructive/50 bg-destructive/5">
                            <CardContent className="flex items-center gap-3">
                                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                                <span className="text-sm text-destructive flex-1">{error}</span>
                            </CardContent>
                        </Card>
                    )}

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

                    {!loading && summary && (
                        <>
                            <SummaryCards summary={summary} />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                                <RevenueChart data={data} />
                                <OrdersChart data={data} />
                            </div>
                            <StoreRankingTable ranking={ranking} onStoreClick={setChannelId} />
                        </>
                    )}

                    {!loading && !summary && !error && (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                                <BarChart3 className="h-12 w-12 text-muted-foreground/40 mb-4" />
                                <p className="text-lg font-medium text-muted-foreground">No hay datos disponibles</p>
                                <p className="text-sm text-muted-foreground/60 mt-1">
                                    El job diario generará los datos automáticamente cada medianoche
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </FullWidthPageBlock>
            </PageLayout>
        </Page>
    );
}
