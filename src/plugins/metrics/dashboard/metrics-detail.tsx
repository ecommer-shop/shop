import {
    api,
    Card,
    CardContent,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
} from '@vendure/dashboard';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SummaryCardsGrid } from './components/summary-cards-grid';
import { TopProductsTable } from './components/top-products-table';
import { OrderStatusBars } from './components/order-status-bars';
import { ChannelSummaryCard } from './components/channel-summary-card';
import { MetricsAreaChart, MetricsLineChart } from './components/metrics-charts';
import { MetricsTable } from './components/metrics-table';
import { FiltersSection } from './components/filters-section';
import {
    buildMetricsComparisonChartData,
    formatPdfValue,
    formatDateForPdf,
    formatDateForFile,
} from './components/utils';
import { useAdvancedMetrics } from './hooks/use-advanced-metrics';

const PRODUCT_VARIANTS_QUERY = `
  query GetProductVariants($options: ProductVariantListOptions) {
    productVariants(options: $options) {
      items {
        id
        name
        sku
        product {
          id
          name
        }
      }
      totalItems
    }
  }
`;

const TOP_PRODUCTS_QUERY = `
  query TopProducts($input: TopProductsInput) {
    topProducts(input: $input) {
      productVariantId
      productName
      sku
      quantity
      revenue
    }
  }
`;

const ORDER_STATUS_QUERY = `
  query OrderStatusDistribution {
    orderStatusDistribution {
      state
      count
      percentage
    }
  }
`;

interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    product: {
        id: string;
        name: string;
    };
}

interface ProductVariantsResponse {
    productVariants: {
        items: ProductVariant[];
        totalItems: number;
    };
}

interface TopProduct {
    productVariantId: string;
    productName: string;
    sku: string;
    quantity: number;
    revenue: number;
}

interface TopProductsResponse {
    topProducts: TopProduct[];
}

interface OrderStatusItem {
    state: string;
    count: number;
    percentage: number;
}

interface OrderStatusResponse {
    orderStatusDistribution: OrderStatusItem[];
}

export function MetricsDetailPage() {
    // State
    const [selectedVariantIds, setSelectedVariantIds] = useState<string[]>([]);
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
    const [dateFrom, setDateFrom] = useState<Date>(
        new Date(new Date().setMonth(new Date().getMonth() - 12))
    );
    const [dateTo, setDateTo] = useState<Date>(new Date());

    // Fetch all variants for selector
    const { data: variantData, isLoading: variantsLoading, error: variantsError } = useQuery({
        queryKey: ['product-variants'],
        queryFn: () => api.query<ProductVariantsResponse>(PRODUCT_VARIANTS_QUERY, {
            options: { take: 100, skip: 0 },
        }),
    });

    const allVariants = variantData?.productVariants.items ?? [];

    // Fetch metrics data
    const { data: metricsData, refetch, isRefetching, isLoading: metricsLoading } = useAdvancedMetrics({
        variantIds: selectedVariantIds,
    });

    const allMetrics = metricsData?.advancedMetricSummaries ?? [];

    // Fetch top products
    const { data: topProductsData, isLoading: topProductsLoading } = useQuery({
        queryKey: ['top-products'],
        queryFn: () => api.query<TopProductsResponse>(TOP_PRODUCTS_QUERY, {}),
    });

    const topProducts = topProductsData?.topProducts ?? [];

    // Fetch order status distribution
    const { data: orderStatusData } = useQuery({
        queryKey: ['order-status'],
        queryFn: () => api.query<OrderStatusResponse>(ORDER_STATUS_QUERY, {}),
        staleTime: 5 * 60 * 1000,
    });

    const orderStatusItems = orderStatusData?.orderStatusDistribution ?? [];

    // Calculate growth vs previous month
    const growthByCode = useMemo(() => {
        const growth: Record<string, number | null> = {};
        for (const metric of allMetrics) {
            for (const series of metric.series) {
                const values = series.values.filter((v) => typeof v === 'number');
                if (values.length >= 2) {
                    const last = values[values.length - 1];
                    const prev = values[values.length - 2];
                    growth[metric.code] = prev !== 0 ? Math.round(((last - prev) / prev) * 100) : null;
                }
            }
        }
        return growth;
    }, [allMetrics]);

    // Filter metrics based on selection
    const visibleMetrics =
        selectedMetrics.length > 0
            ? allMetrics.filter((m) => selectedMetrics.includes(m.code))
            : allMetrics;

    // Transform data for charts
    

    const multiMonthMetrics = useMemo(
        () => visibleMetrics.filter(m => (m.labels?.length ?? 0) > 1),
        [visibleMetrics]
    );

    const multiMonthChartData = useMemo(
        () => buildMetricsComparisonChartData(multiMonthMetrics),
        [multiMonthMetrics]
    );

    const handleDownload = () => {
        if (metricsLoading || multiMonthMetrics.length === 0 || multiMonthChartData.length === 0) {
            return;
        }

        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const margin = 40;
        const maxWidth = doc.internal.pageSize.width - margin * 2;
        const pageHeight = doc.internal.pageSize.height;
        let cursorY = margin;

        const addLines = (text: string | string[], lineHeight = 14) => {
            const lines = Array.isArray(text)
                ? text
                : doc.splitTextToSize(text, maxWidth);
            for (const line of lines) {
                if (cursorY + lineHeight > pageHeight - margin) {
                    doc.addPage();
                    cursorY = margin;
                }
                doc.text(line, margin, cursorY);
                cursorY += lineHeight;
            }
        };

        doc.setFontSize(16);
        addLines('Analisis Avanzado de Metricas', 20);

        doc.setFontSize(10);
        addLines(`Periodo: ${formatDateForPdf(dateFrom)} - ${formatDateForPdf(dateTo)}`);
        addLines(
            `Metricas: ${visibleMetrics.map((metric) => metric.title).join(', ')}`
        );
        addLines('');

        doc.setFontSize(12);
        addLines('Resumen', 16);
        doc.setFontSize(10);
        for (const metric of visibleMetrics) {
            const total = metric.series[0]?.values.reduce((a, b) => a + b, 0) ?? 0;
            addLines(`${metric.title}: ${formatPdfValue(total, metric.type)}`);
        }

        addLines('');
        doc.setFontSize(12);
        addLines('Datos', 16);

        const tableHeader = [
            'Periodo',
            ...multiMonthMetrics.flatMap((metric) =>
                metric.series.map((series) => `${metric.title} - ${series.name}`)
            ),
        ];
        const tableBody = multiMonthChartData.map((row) => {
            const cells: Array<string | number> = [row.name];
            for (const metric of multiMonthMetrics) {
                for (const series of metric.series) {
                    const value = row[`${metric.code}-${series.name}`] as number;
                    cells.push(formatPdfValue(value, metric.type));
                }
            }
            return cells;
        });

        autoTable(doc, {
            startY: cursorY + 6,
            head: [tableHeader],
            body: tableBody,
            margin: { left: margin, right: margin },
            styles: { fontSize: 8, cellPadding: 3 },
            headStyles: { fillColor: [59, 130, 246] },
            alternateRowStyles: { fillColor: [245, 245, 245] },
        });

        doc.save(`metrics-${formatDateForFile(new Date())}.pdf`);
    };

    return (
        <Page pageId="metrics-detail-page">
            <PageTitle>Análisis Avanzado de Métricas</PageTitle>
            <PageLayout>
                <PageBlock column="main">
                    <div className="mb-6">
                        <p className="text-sm text-muted-foreground">
                            Visualiza métricas detalladas de ventas, AOV y unidades vendidas
                        </p>
                    </div>

                    <FiltersSection
                        allVariants={allVariants}
                        selectedVariantIds={selectedVariantIds}
                        onVariantChange={setSelectedVariantIds}
                        dateFrom={dateFrom}
                        onDateFromChange={setDateFrom}
                        dateTo={dateTo}
                        onDateToChange={setDateTo}
                        allMetrics={allMetrics}
                        selectedMetrics={selectedMetrics}
                        onMetricsChange={setSelectedMetrics}
                        onRefresh={() => refetch()}
                        isRefetching={isRefetching}
                        onDownload={handleDownload}
                        isDownloadDisabled={metricsLoading || multiMonthMetrics.length === 0 || multiMonthChartData.length === 0}
                    />

                    {visibleMetrics.length > 0 && (
                        <SummaryCardsGrid metrics={visibleMetrics} growthByCode={growthByCode} />
                    )}

                    {metricsLoading && (
                        <Card>
                            <CardContent className="flex items-center justify-center h-96">
                                <div className="text-muted-foreground">Cargando métricas...</div>
                            </CardContent>
                        </Card>
                    )}

                    {!metricsLoading && multiMonthMetrics.length > 0 && multiMonthChartData.length > 0 && (
                        <div className="space-y-6">
                            <MetricsAreaChart data={multiMonthChartData} metrics={multiMonthMetrics} />
                            <MetricsLineChart data={multiMonthChartData} metrics={multiMonthMetrics} />
                        </div>
                    )}

                    {visibleMetrics.length === 0 && (
                        <Card>
                            <CardContent className="flex items-center justify-center h-96">
                                <div className="text-muted-foreground">
                                    No hay datos disponibles. Selecciona métricas o verifica tus filtros.
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <TopProductsTable products={topProducts} />
                    <OrderStatusBars items={orderStatusItems} />
                    <ChannelSummaryCard dateFrom={dateFrom} dateTo={dateTo} />

                    {!metricsLoading && multiMonthMetrics.length > 0 && multiMonthChartData.length > 0 && (
                        <MetricsTable data={multiMonthChartData} metrics={multiMonthMetrics} />
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}