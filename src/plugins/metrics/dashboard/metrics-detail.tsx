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
import { TrendingUp } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { EmptyState } from '../../shared/dashboard/empty-state';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { domToCanvas } from 'modern-screenshot';
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

// ============================================================
// Constantes de estilo del PDF
// ============================================================
const PDF_COLORS = {
    primary: [18, 18, 63] as [number, number, number],
    gray: [100, 100, 100] as [number, number, number],
    lightGray: [235, 235, 240] as [number, number, number],
    border: [210, 210, 218] as [number, number, number],
    accent: [59, 130, 246] as [number, number, number],
};

const BASE_TABLE_STYLE = {
    fontSize: 10,
    cellPadding: { top: 6, right: 8, bottom: 6, left: 8 },
    valign: 'middle' as const,
    lineColor: PDF_COLORS.border,
    lineWidth: 0.5,
    textColor: [30, 30, 30] as [number, number, number],
};

const BASE_HEAD_STYLE = {
    fillColor: PDF_COLORS.primary,
    textColor: [255, 255, 255] as [number, number, number],
    fontSize: 10,
    fontStyle: 'bold' as const,
    halign: 'center' as const,
    valign: 'middle' as const,
};

export function MetricsDetailPage() {
    const areaChartRef = useRef<HTMLDivElement>(null);
    const lineChartRef = useRef<HTMLDivElement>(null);

    // State
    const [selectedVariantIds, setSelectedVariantIds] = useState<string[]>([]);
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
    const [dateFrom, setDateFrom] = useState<Date>(
        new Date(new Date().setMonth(new Date().getMonth() - 12))
    );
    const [dateTo, setDateTo] = useState<Date>(new Date());
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

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

    const multiMonthMetrics = useMemo(
        () => visibleMetrics.filter(m => (m.labels?.length ?? 0) > 1),
        [visibleMetrics]
    );

    const multiMonthChartData = useMemo(
        () => buildMetricsComparisonChartData(multiMonthMetrics),
        [multiMonthMetrics]
    );

    const handleDownload = async () => {
        if (metricsLoading || multiMonthMetrics.length === 0 || multiMonthChartData.length === 0) {
            return;
        }

        setIsGeneratingPdf(true);
        try {
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

            const addDivider = () => {
                cursorY += 6;
                doc.setDrawColor(...PDF_COLORS.border);
                doc.setLineWidth(0.75);
                doc.line(margin, cursorY, margin + maxWidth, cursorY);
                cursorY += 12;
            };

            const checkPage = (needed: number) => {
                if (cursorY + needed > pageHeight - margin) {
                    doc.addPage();
                    cursorY = margin;
                }
            };

            const renderTitle = (title: string, fontSize = 15) => {
                checkPage(fontSize + 14);
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(fontSize);
                doc.setTextColor(...PDF_COLORS.primary);
                doc.text(title, margin, cursorY);
                cursorY += fontSize + 10;
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(0);
                doc.setFontSize(10);
            };

            // ===== SECTION 1: HEADER =====
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(24);
            doc.setTextColor(...PDF_COLORS.primary);
            addLines('Análisis Avanzado de Métricas', 30);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(...PDF_COLORS.gray);
            addLines(`Generado: ${formatDateForPdf(new Date())}`, 16);
            addLines(`Período: ${formatDateForPdf(dateFrom)} - ${formatDateForPdf(dateTo)}`, 16);
            addLines(`Métricas: ${visibleMetrics.map(m => m.title).join(', ')}`, 16);
            doc.setTextColor(0);
            addDivider();

            // ===== SECTION 2: EXECUTIVE SUMMARY TABLE =====
            renderTitle('Resumen Ejecutivo');
            const summaryRows = visibleMetrics.map(m => {
                const values = m.series[0]?.values.filter(v => typeof v === 'number') ?? [];
                const total = values.reduce((a, b) => a + b, 0);
                const avg = values.length > 0 ? Math.round(total / values.length) : 0;
                const growth = growthByCode[m.code];
                return [
                    m.title,
                    formatPdfValue(total, m.type),
                    formatPdfValue(avg, m.type),
                    growth !== null && growth !== undefined
                        ? `${growth > 0 ? '+' : ''}${growth}%`
                        : (values.length <= 1 ? '—' : '+0%'),
                ];
            });
            autoTable(doc, {
                startY: cursorY,
                head: [['Métrica', 'Total', 'Promedio Mensual', 'Crecimiento']],
                body: summaryRows,
                margin: { left: margin, right: margin },
                theme: 'grid',
                styles: BASE_TABLE_STYLE,
                headStyles: BASE_HEAD_STYLE,
                bodyStyles: { halign: 'center' },
                columnStyles: {
                    0: { halign: 'left', fontStyle: 'bold', cellWidth: 'auto' },
                },
                alternateRowStyles: { fillColor: PDF_COLORS.lightGray },
            });
            cursorY = (doc as any).lastAutoTable.finalY + 20;

            // ===== SECTION 3: CHARTS =====
            // Captura el contenedor completo (no solo el <svg>) con modern-screenshot.
            // A diferencia de html2canvas, esta librería sí resuelve colores modernos
            // como oklch()/lab() (los que devuelve getComputedStyle en Tailwind v4),
            // que es lo que hacía fallar la captura silenciosamente antes.
            const captureChart = async (el: HTMLElement | null, title: string): Promise<void> => {
                if (!el) return;
                renderTitle(title);
                const svgEl = el.querySelector('svg');
                if (!svgEl) {
                    addLines('(Sin datos para la gráfica)', 12);
                    return;
                }
                try {
                    // Pequeño delay para asegurar que el layout/paint esté estable
                    // antes de capturar (evita capturas a medio renderizar).
                    await new Promise(resolve => requestAnimationFrame(resolve));

                    const canvas = await domToCanvas(el, {
                        backgroundColor: '#ffffff',
                        scale: 2, // resolución retina para que no se vea pixelado
                        filter: (node:any) => {
        if (node instanceof Element) {
            return !node.classList?.contains('recharts-tooltip-wrapper');
        }
        return true;
    },
});

const imgData = canvas.toDataURL('image/png', 1.0);
const imgWidth = maxWidth;
const imgHeight = (canvas.height * imgWidth) / canvas.width;
checkPage(imgHeight + 10);
doc.addImage(imgData, 'PNG', margin, cursorY, imgWidth, imgHeight);
cursorY += imgHeight + 16;
                } catch (err) {
    // Deja el detalle en consola para poder diagnosticar rápido
    // si vuelve a fallar (revisa DevTools > Console).
    console.error(`Error capturando gráfica "${title}":`, err);
    addLines('(No se pudo generar la gráfica)', 12);
}
            };
await captureChart(areaChartRef.current, 'Tendencia de Métricas (Áreas)');
await captureChart(lineChartRef.current, 'Comparación Lineal de Métricas');

// ===== SECTION 4: PER-METRIC DETAILED ANALYSIS =====
renderTitle('Análisis Detallado por Métrica');
for (const metric of visibleMetrics) {
    const values = metric.series[0]?.values.filter(v => typeof v === 'number') ?? [];
    if (values.length === 0) continue;

    checkPage(110);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12.5);
    doc.setTextColor(...PDF_COLORS.primary);
    doc.text(metric.title, margin, cursorY);
    cursorY += 18;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0);

    if (values.length > 1) {
        const total = values.reduce((a, b) => a + b, 0);
        const avg = Math.round(total / values.length);
        const maxVal = Math.max(...values);
        const minVal = Math.min(...values);
        const maxIdx = values.indexOf(maxVal);
        const minIdx = values.indexOf(minVal);
        const growth = growthByCode[metric.code];
        const maxLabel = metric.labels?.[maxIdx] ?? '';
        const minLabel = metric.labels?.[minIdx] ?? '';

        const statsText = [
            `Total: ${formatPdfValue(total, metric.type)}   |   Promedio: ${formatPdfValue(avg, metric.type)}   |   Crecimiento: ${growth !== null ? `${growth > 0 ? '+' : ''}${growth}%` : 'N/A'}`,
            `Mejor mes: ${formatPdfValue(maxVal, metric.type)} (${maxLabel})   |   Peor mes: ${formatPdfValue(minVal, metric.type)} (${minLabel})`,
        ];
        for (const line of statsText) {
            doc.text(line, margin + 10, cursorY);
            cursorY += 14;
        }

        cursorY += 6;
        const monthRows = metric.labels?.map((label, i) => [
            label,
            formatPdfValue(values[i] ?? 0, metric.type),
        ]) ?? [];

        autoTable(doc, {
            startY: cursorY,
            head: [['Mes', metric.title]],
            body: monthRows,
            margin: { left: margin + 20, right: margin },
            theme: 'grid',
            styles: { ...BASE_TABLE_STYLE, fontSize: 9 },
            headStyles: { ...BASE_HEAD_STYLE, fontSize: 9 },
            bodyStyles: { halign: 'center' },
            columnStyles: {
                0: { cellWidth: 140, halign: 'center' },
                1: { cellWidth: 140, halign: 'center' },
            },
            alternateRowStyles: { fillColor: PDF_COLORS.lightGray },
        });
        cursorY = (doc as any).lastAutoTable.finalY + 18;
    } else {
        doc.text(`Valor actual: ${formatPdfValue(values[0], metric.type)}`, margin + 10, cursorY);
        cursorY += 20;
    }
}

// ===== SECTION 5: TOP PRODUCTS =====
if (topProducts.length > 0) {
    checkPage(110);
    renderTitle('Productos Más Vendidos');
    autoTable(doc, {
        startY: cursorY,
        head: [['#', 'Producto', 'SKU', 'Cant.', 'Ingresos']],
        body: topProducts.map((p, i) => [
            (i + 1).toString(),
            p.productName,
            p.sku,
            p.quantity.toString(),
            formatPdfValue(p.revenue, 'currency'),
        ]),
        margin: { left: margin, right: margin },
        theme: 'grid',
        styles: BASE_TABLE_STYLE,
        headStyles: BASE_HEAD_STYLE,
        bodyStyles: { halign: 'center' },
        columnStyles: {
            0: { cellWidth: 30, halign: 'center' },
            1: { halign: 'left', cellWidth: 'auto' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            4: { halign: 'right' },
        },
        alternateRowStyles: { fillColor: PDF_COLORS.lightGray },
    });
    cursorY = (doc as any).lastAutoTable.finalY + 20;
}

// ===== SECTION 6: ORDER STATUS DISTRIBUTION =====
if (orderStatusItems.length > 0) {
    checkPage(90);
    renderTitle('Distribución de Estados de Órdenes');
    autoTable(doc, {
        startY: cursorY,
        head: [['Estado', 'Cantidad', 'Porcentaje']],
        body: orderStatusItems.map(item => [
            item.state,
            item.count.toString(),
            `${item.percentage.toFixed(1)}%`,
        ]),
        margin: { left: margin, right: margin },
        theme: 'grid',
        styles: BASE_TABLE_STYLE,
        headStyles: BASE_HEAD_STYLE,
        bodyStyles: { halign: 'center' },
        columnStyles: {
            0: { halign: 'left', fontStyle: 'bold' },
        },
        alternateRowStyles: { fillColor: PDF_COLORS.lightGray },
    });
    cursorY = (doc as any).lastAutoTable.finalY + 20;
}

// ===== SECTION 7: FULL DATA TABLE =====
checkPage(90);
renderTitle('Datos Completos');
const tableHeader = [
    'Periodo',
    ...multiMonthMetrics.flatMap(m =>
        m.series.map(s => `${m.title} - ${s.name}`)
    ),
];
const tableBody = multiMonthChartData.map(row => {
    const cells: Array<string | number> = [row.name];
    for (const metric of multiMonthMetrics) {
        for (const series of metric.series) {
            cells.push(formatPdfValue(row[`${metric.code}-${series.name}`] as number, metric.type));
        }
    }
    return cells;
});
autoTable(doc, {
    startY: cursorY,
    head: [tableHeader],
    body: tableBody,
    margin: { left: margin, right: margin },
    theme: 'grid',
    styles: { ...BASE_TABLE_STYLE, fontSize: 8.5, cellPadding: 5 },
    headStyles: { ...BASE_HEAD_STYLE, fillColor: PDF_COLORS.accent, fontSize: 8.5 },
    bodyStyles: { halign: 'center' },
    columnStyles: {
        0: { halign: 'left', fontStyle: 'bold', cellWidth: 70 },
    },
    alternateRowStyles: { fillColor: PDF_COLORS.lightGray },
});

doc.save(`metrics-${formatDateForFile(new Date())}.pdf`);
        } finally {
    setIsGeneratingPdf(false);
}
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
                    isDownloadDisabled={
                        metricsLoading ||
                        isGeneratingPdf ||
                        multiMonthMetrics.length === 0 ||
                        multiMonthChartData.length === 0
                    }
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
                        <div ref={areaChartRef} id="metrics-chart-area">
                            <MetricsAreaChart data={multiMonthChartData} metrics={multiMonthMetrics} />
                        </div>
                        <div ref={lineChartRef} id="metrics-chart-line">
                            <MetricsLineChart data={multiMonthChartData} metrics={multiMonthMetrics} />
                        </div>
                    </div>
                )}

                {visibleMetrics.length === 0 && (
                    <Card>
                        <CardContent className="flex items-center justify-center h-96">
                            <EmptyState
                                icon={TrendingUp}
                                title="Aún no hay datos de métricas"
                                hint="Selecciona métricas arriba o verifica tus filtros. Cuando haya ventas, verás aquí las gráficas."
                            />
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