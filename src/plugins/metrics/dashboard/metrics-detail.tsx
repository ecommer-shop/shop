import {
    api,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Page,
    PageLayout,
    PageTitle,
    PageBlock,
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@vendure/dashboard';
import { useQuery } from '@tanstack/react-query';
import { Download, RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DatePicker } from './date-picker';
import {
    AreaChart,
    Area,
    CartesianGrid,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

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

const ADVANCED_METRICS_QUERY = `
  query AdvancedMetricSummaries($input: AdvancedMetricSummaryInput) {
    advancedMetricSummaries(input: $input) {
      code
      title
      type
      allowProductSelection
      labels
      series {
        name
        values
      }
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

interface AdvancedMetricSeries {
    name: string;
    values: number[];
}

interface AdvancedMetricSummary {
    code: string;
    title: string;
    type: 'currency' | 'number';
    allowProductSelection: boolean;
    labels: string[];
    series: AdvancedMetricSeries[];
}

interface AdvancedMetricSummariesResponse {
    advancedMetricSummaries: AdvancedMetricSummary[];
}

interface ProductVariantsResponse {
    productVariants: {
        items: ProductVariant[];
        totalItems: number;
    };
}

export function VariantSelector({
    variants,
    selectedIds,
    onChange,
}: {
    variants: ProductVariant[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVariants = useMemo(() => {
        if (!searchTerm) return variants;
        return variants.filter(
            (v) =>
                v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [variants, searchTerm]);

    const selectedVariants = variants.filter((v) => selectedIds.includes(v.id));

    return (
        <div className="space-y-2">
            <Input
                placeholder="Buscar por nombre, SKU o producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
            <div className="flex flex-wrap gap-2 pb-2">
                {selectedVariants.map((v) => (
                    <div
                        key={v.id}
                        className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                        <span>{v.product.name} - {v.sku}</span>
                        <button
                            className="ml-1 hover:opacity-70"
                            onClick={() =>
                                onChange(selectedIds.filter((id) => id !== v.id))
                            }
                            title="Remover"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            {searchTerm && filteredVariants.length > 0 && (
                <div className="border rounded-md max-h-48 overflow-y-auto bg-background">
                    {filteredVariants.slice(0, 10).map((v) => {
                        const isSelected = selectedIds.includes(v.id);
                        return (
                            <button
                                key={v.id}
                                className={`w-full text-left px-3 py-2 text-sm hover:bg-accent ${isSelected ? 'bg-accent' : ''
                                    }`}
                                onClick={() => {
                                    if (isSelected) {
                                        onChange(selectedIds.filter((id) => id !== v.id));
                                    } else {
                                        onChange([...selectedIds, v.id]);
                                    }
                                    setSearchTerm('');
                                }}
                            >
                                <div className="font-medium">{v.product.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    SKU: {v.sku}
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

// Main Page Component

export function MetricsDetailPage() {
    // State
    const [selectedVariantIds, setSelectedVariantIds] = useState<string[]>([]);
    const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
    const [dateFrom, setDateFrom] = useState<Date>(
        new Date(new Date().setMonth(new Date().getMonth() - 12))
    );
    const [dateTo, setDateTo] = useState<Date>(new Date());

    console.log('MetricsDetailPage mounted', {
        selectedVariantIds,
        selectedMetrics,
        dateFrom,
        dateTo,
    });

    // Fetch all variants for selector
    const { data: variantData, isLoading: variantsLoading, error: variantsError } = useQuery({
        queryKey: ['product-variants'],
        queryFn: () => api.query<ProductVariantsResponse>(PRODUCT_VARIANTS_QUERY, {
            options: { take: 100, skip: 0 },
        }),
    });

    const allVariants = variantData?.productVariants.items ?? [];

    console.log('Variants loaded:', { variantCount: allVariants.length, isLoading: variantsLoading, error: variantsError });

    // Fetch metrics data
    const { data: metricsData, refetch, isRefetching, isLoading: metricsLoading, error: metricsError } = useQuery({
        queryKey: ['advanced-metrics', selectedVariantIds, dateFrom, dateTo],
        queryFn: () => {
            console.log('Fetching metrics with:', { selectedVariantIds, dateFrom, dateTo });
            return api.query<AdvancedMetricSummariesResponse>(ADVANCED_METRICS_QUERY, {
                input: {
                    variantIds: selectedVariantIds.length > 0 ? selectedVariantIds : undefined,
                    dateFrom,
                    dateTo,
                },
            });
        },
        staleTime: 5 * 60 * 1000,
    });

    const allMetrics = metricsData?.advancedMetricSummaries ?? [];

    console.log('Metrics loaded:', { metricCount: allMetrics.length, isLoading: metricsLoading, error: metricsError, allMetrics });

    // Filter metrics based on selection
    const visibleMetrics =
        selectedMetrics.length > 0
            ? allMetrics.filter((m) => selectedMetrics.includes(m.code))
            : allMetrics;

    // Transform data for charts
    const chartData = useMemo(() => {
        if (visibleMetrics.length === 0) return [];

        const labels = visibleMetrics[0]?.labels ?? [];
        return labels.map((label, index) => {
            const point: Record<string, string | number> = { name: label };
            for (const metric of visibleMetrics) {
                for (const series of metric.series) {
                    point[`${metric.code}-${series.name}`] = series.values[index] ?? 0;
                }
            }
            return point;
        });
    }, [visibleMetrics]);

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
            const label = key.split('-')[1] ?? key;
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

        const docWithTable = doc as jsPDF & { lastAutoTable?: { finalY: number } };
        if (docWithTable.lastAutoTable?.finalY) {
            cursorY = docWithTable.lastAutoTable.finalY + 10;
        }

        doc.save(`metrics-${formatDateForFile(new Date())}.pdf`);
    };

    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

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
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-lg">Filtros</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Product Variant Selector */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Productos/Variantes</label>
                                    <VariantSelector
                                        variants={allVariants}
                                        selectedIds={selectedVariantIds}
                                        onChange={setSelectedVariantIds}
                                    />
                                    {selectedVariantIds.length > 0 && (
                                        <p className="text-xs text-muted-foreground">
                                            {selectedVariantIds.length} variante(s) seleccionada(s)
                                        </p>
                                    )}
                                </div>

                                {/* Date Range */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Desde</label>
                                    <DatePicker
                                        value={dateFrom}
                                        onChange={setDateFrom}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Hasta</label>
                                    <DatePicker
                                        value={dateTo}
                                        onChange={setDateTo}
                                    />
                                </div>
                            </div>

                            {/* Metric Selection */}
                            <div>
                                <label className="text-sm font-medium">Métricas a mostrar</label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {allMetrics.map((metric) => (
                                        <Button
                                            key={metric.code}
                                            variant={
                                                selectedMetrics.length === 0 ||
                                                    selectedMetrics.includes(metric.code)
                                                    ? 'default'
                                                    : 'outline'
                                            }
                                            size="sm"
                                            onClick={() => {
                                                if (selectedMetrics.includes(metric.code)) {
                                                    setSelectedMetrics(
                                                        selectedMetrics.filter((c) => c !== metric.code)
                                                    );
                                                } else {
                                                    setSelectedMetrics([...selectedMetrics, metric.code]);
                                                }
                                            }}
                                        >
                                            {metric.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 justify-end pt-4 border-t">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => refetch()}
                                    disabled={isRefetching}
                                >
                                    <RefreshCw className={`h-4 w-4 mr-2 ${isRefetching ? 'animate-spin' : ''}`} />
                                    Actualizar
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleDownload}
                                    disabled={
                                        metricsLoading ||
                                        visibleMetrics.length === 0 ||
                                        chartData.length === 0
                                    }
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Descargar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Summary Cards */}
                    {Object.entries(summary).length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {Object.entries(summary).map(
                                ([key, stats]) =>
                                    stats.type === 'currency' && (
                                        <SummaryCard
                                            key={key}
                                            label={key.split('-')[1]}
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
                                            label={key.split('-')[1]}
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
                            {/* Area Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tendencia de Métricas</CardTitle>
                                    <CardDescription>Ver evolución en el tiempo</CardDescription>
                                </CardHeader>
                                <CardContent className="h-96">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={chartData}>
                                            <defs>
                                                {COLORS.map((color, idx) => (
                                                    <linearGradient
                                                        key={idx}
                                                        id={`gradient${idx}`}
                                                        x1="0"
                                                        y1="0"
                                                        x2="0"
                                                        y2="1"
                                                    >
                                                        <stop
                                                            offset="5%"
                                                            stopColor={color}
                                                            stopOpacity={0.8}
                                                        />
                                                        <stop
                                                            offset="95%"
                                                            stopColor={color}
                                                            stopOpacity={0}
                                                        />
                                                    </linearGradient>
                                                ))}
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            {visibleMetrics.map((metric, metricIdx) =>
                                                metric.series.map((series, seriesIdx) => (
                                                    <Area
                                                        key={`${metric.code}-${series.name}`}
                                                        type="monotone"
                                                        dataKey={`${metric.code}-${series.name}`}
                                                        name={`${metric.title} - ${series.name}`}
                                                        fill={`url(#gradient${(metricIdx + seriesIdx) % COLORS.length})`}
                                                        stroke={COLORS[(metricIdx + seriesIdx) % COLORS.length]}
                                                        fillOpacity={0.6}
                                                    />
                                                ))
                                            )}
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Line Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Comparación Líneal</CardTitle>
                                    <CardDescription>Análisis comparativo de métricas</CardDescription>
                                </CardHeader>
                                <CardContent className="h-96">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={chartData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            {visibleMetrics.map((metric, metricIdx) =>
                                                metric.series.map((series, seriesIdx) => (
                                                    <Line
                                                        key={`${metric.code}-${series.name}`}
                                                        type="monotone"
                                                        dataKey={`${metric.code}-${series.name}`}
                                                        name={`${metric.title} - ${series.name}`}
                                                        stroke={COLORS[(metricIdx + seriesIdx) % COLORS.length]}
                                                        strokeWidth={2}
                                                        dot={{ r: 3 }}
                                                        activeDot={{ r: 5 }}
                                                    />
                                                ))
                                            )}
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Data Table */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Datos Detallados</CardTitle>
                                    <CardDescription>Tabla con todos los valores</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Período</TableHead>
                                                    {visibleMetrics.map((metric) =>
                                                        metric.series.map((series) => (
                                                            <TableHead
                                                                key={`${metric.code}-${series.name}`}
                                                                className="text-right"
                                                            >
                                                                {metric.title} - {series.name}
                                                            </TableHead>
                                                        ))
                                                    )}
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {chartData.map((row, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell className="font-medium">
                                                            {row.name}
                                                        </TableCell>
                                                        {visibleMetrics.map((metric) =>
                                                            metric.series.map((series) => (
                                                                <TableCell
                                                                    key={`${metric.code}-${series.name}`}
                                                                    className="text-right"
                                                                >
                                                                    {formatTableValue(
                                                                        row[
                                                                        `${metric.code}-${series.name}`
                                                                        ] as number,
                                                                        metric.type
                                                                    )}
                                                                </TableCell>
                                                            ))
                                                        )}
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {visibleMetrics.length === 0 && (
                        <Card>
                            <CardContent className="flex items-center justify-center h-96">
                                <div className="text-muted-foreground">
                                    No hay datos disponibles. Selecciona métri cas o verifica tus filtros.
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}

// Helper Components

function SummaryCard({ label, value, type }: { label: string; value: number; type: string }) {
    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {type === 'currency'
                        ? `$${(value / 100).toLocaleString('es-CO', {
                            minimumFractionDigits: 2,
                        })}`
                        : value.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Total del período</p>
            </CardContent>
        </Card>
    );
}

function formatTableValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 0,
        })}`;
    }
    return value.toLocaleString();
}

function formatPdfValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 2,
        })}`;
    }
    return value.toLocaleString('es-CO');
}

function formatDateForPdf(date: Date): string {
    return date.toLocaleDateString('es-CO');
}

function formatDateForFile(date: Date): string {
    return date.toISOString().slice(0, 10);
}
