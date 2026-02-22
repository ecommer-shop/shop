import { Card, CardHeader, CardTitle, CardContent, Button } from '@vendure/dashboard';
import { Download, RefreshCw } from 'lucide-react';
import { DatePicker } from './date-picker';
import { VariantSelector } from './variant-selector';

interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    product: {
        id: string;
        name: string;
    };
}

interface Metric {
    code: string;
    title: string;
}

export function FiltersSection({
    allVariants,
    selectedVariantIds,
    onVariantChange,
    dateFrom,
    onDateFromChange,
    dateTo,
    onDateToChange,
    allMetrics,
    selectedMetrics,
    onMetricsChange,
    onRefresh,
    isRefetching,
    onDownload,
    isDownloadDisabled,
}: {
    allVariants: ProductVariant[];
    selectedVariantIds: string[];
    onVariantChange: (ids: string[]) => void;
    dateFrom: Date;
    onDateFromChange: (date: Date) => void;
    dateTo: Date;
    onDateToChange: (date: Date) => void;
    allMetrics: Metric[];
    selectedMetrics: string[];
    onMetricsChange: (metrics: string[]) => void;
    onRefresh: () => void;
    isRefetching: boolean;
    onDownload: () => void;
    isDownloadDisabled: boolean;
}) {
    return (
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
                            onChange={onVariantChange}
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
                            onChange={onDateFromChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Hasta</label>
                        <DatePicker
                            value={dateTo}
                            onChange={onDateToChange}
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
                                        onMetricsChange(
                                            selectedMetrics.filter((c) => c !== metric.code)
                                        );
                                    } else {
                                        onMetricsChange([...selectedMetrics, metric.code]);
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
                        onClick={onRefresh}
                        disabled={isRefetching}
                    >
                        <RefreshCw className={`h-4 w-4 mr-2 ${isRefetching ? 'animate-spin' : ''}`} />
                        Actualizar
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onDownload}
                        disabled={isDownloadDisabled}
                    >
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}