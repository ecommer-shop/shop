import {
    api,
    Card,
    CardContent,
    Page,
    PageLayout,
    PageTitle,
    PageBlock,
} from '@vendure/dashboard';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DatePicker } from './components/date-picker';
import { VariantSelector } from './components/variant-selector';
import { SummaryCard } from './components/summary-card';
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

    console.log('Metrics loaded:', { count: allMetrics.length, allMetrics });

    // Filter metrics based on selection
    const visibleMetrics =
        selectedMetrics.length > 0
            ? allMetrics.filter((m) => selectedMetrics.includes(m.code))
            : allMetrics;

    // Transform data for charts
    const chartData = useMemo(
        () => buildMetricsComparisonChartData(visibleMetrics),
        [visibleMetrics]
    );

    // Calculate summary statistics
    const summary = useMemo(() => {
        const stats: Record<string, { total: number; average: number; type: string }> = {};
        for (const metric of visibleMetrics) {
            for (const series of metric.series) {
                const key = `${metric.code}-${series.name}`;
                const values = series.values.filter((v) => typeof v === 'number');
                stats[key] = {
                    total: values.reduce((a, b) => a + b, 0),
                    average: values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0,
                    type: metric.type,
                };
            }
        }
        return stats;
    }, [visibleMetrics]);

    const selectedVariantLabels = useMemo(() => {
        if (selectedVariantIds.length === 0) return [];
        const lookup = new Map(
            allVariants.map((variant) => [
                variant.id,
                `${variant.product.name} - ${variant.sku}`,
            ])
        );
        return selectedVariantIds
            .map((id) => lookup.get(id))
            .filter((label): label is string => Boolean(label));
    }, [allVariants, selectedVariantIds]);

    const getSummaryCardLabel = (key: string): string => {
        // Format: "revenue-per-product" or similar
        const [metricCode, ...seriesParts] = key.split('-');
        const seriesName = seriesParts.join('-');

        // If variantes are selected, show the variante names
        if (selectedVariantLabels.length > 0) {
            if (selectedVariantLabels.length === 1) {
                return selectedVariantLabels[0];
            }
            // For multiple variants, show all names (or truncated if too many)
            if (selectedVariantLabels.length <= 3) {
                return selectedVariantLabels.join(' + ');
            }
            return `${selectedVariantLabels.slice(0, 2).join(' + ')} + ${selectedVariantLabels.length - 2} más`;
        }

        // Otherwise show metric details
        const metricTitle = visibleMetrics.find((m) => m.code === metricCode)?.title ?? metricCode;
        return `${metricTitle} - ${seriesName}`;
    };

    const handleDownload = () => {
        if (metricsLoading || visibleMetrics.length === 0 || chartData.length === 0) {
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
        addLines(
            selectedVariantLabels.length > 0
                ? `Variantes: ${selectedVariantLabels.slice(0, 5).join(', ')}${selectedVariantLabels.length > 5
                    ? ` (+${selectedVariantLabels.length - 5} mas)`
                    : ''
                }`
                : 'Variantes: Todas'
        );
        addLines('');

        doc.setFontSize(12);
        addLines('Resumen', 16);
        doc.setFontSize(10);
        for (const [key, stats] of Object.entries(summary)) {
            const label = getSummaryCardLabel(key);
            addLines(`${label}: ${formatPdfValue(stats.total, stats.type)}`);
        }

        addLines('');
        doc.setFontSize(12);
        addLines('Datos', 16);

        const tableHeader = [
            'Periodo',
            ...visibleMetrics.flatMap((metric) =>
                metric.series.map((series) => `${metric.title} - ${series.name}`)
            ),
        ];
        const tableBody = chartData.map((row) => {
            const cells: Array<string | number> = [row.name];
            for (const metric of visibleMetrics) {
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

                    {/* Filters Section */}
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
                        isDownloadDisabled={
                            metricsLoading ||
                            visibleMetrics.length === 0 ||
                            chartData.length === 0
                        }
                    />

                    {/* Summary Cards */}
                    {Object.entries(summary).length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {Object.entries(summary).map(
                                ([key, stats]) =>
                                    stats.type === 'currency' && (
                                        <SummaryCard
                                            key={key}
                                            label={getSummaryCardLabel(key)}
                                            value={stats.total}
                                            type="currency"
                                        />
                                    )
                            )}
                            {Object.entries(summary).map(
                                ([key, stats]) =>
                                    stats.type === 'number' && (
                                        <SummaryCard
                                            key={key}
                                            label={getSummaryCardLabel(key)}
                                            value={stats.total}
                                            type="number"
                                        />
                                    )
                            )}
                        </div>
                    )}

                    {/* Charts Section */}
                    {metricsLoading && (
                        <Card>
                            <CardContent className="flex items-center justify-center h-96">
                                <div className="text-muted-foreground">Cargando métricas...</div>
                            </CardContent>
                        </Card>
                    )}

                    {!metricsLoading && visibleMetrics.length > 0 && chartData.length > 0 && (
                        <div className="space-y-6">
                            <MetricsAreaChart data={chartData} metrics={visibleMetrics} />
                            <MetricsLineChart data={chartData} metrics={visibleMetrics} />
                            <MetricsTable data={chartData} metrics={visibleMetrics} />
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
                </PageBlock>
            </PageLayout>
        </Page>
    );
}