import {
    api,
    DashboardBaseWidget,
    useWidgetDimensions,
    useLocalFormat,
    useChannel,
    Button,
    Card,
    CardContent,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@vendure/dashboard';
import { useQuery } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// GraphQL query - matches the schema from @pinelab/vendure-plugin-metrics

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

// Types matching the GraphQL schema

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

// Color palette for multiple series lines

const CHART_COLORS = [
    'hsl(var(--chart-1, 220 70% 50%))',
    'hsl(var(--chart-2, 160 60% 45%))',
    'hsl(var(--chart-3, 30 80% 55%))',
    'hsl(var(--chart-4, 280 65% 60%))',
    'hsl(var(--chart-5, 340 75% 55%))',
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7300',
    '#0088fe',
];

// Widget Component

export function AdvancedMetricsWidget() {
    const { width, height } = useWidgetDimensions();
    const { formatCurrency } = useLocalFormat();
    const { activeChannel } = useChannel();

    const [selectedMetricCode, setSelectedMetricCode] = useState<string | null>(null);

    // Fetch all advanced metric summaries
    const { data, refetch, isRefetching, isLoading, error } = useQuery({
        queryKey: ['advanced-metrics', activeChannel?.id],
        queryFn: () =>
            api.query<AdvancedMetricSummariesResponse>(ADVANCED_METRICS_QUERY, {
                input: {},
            }),
        staleTime: 5 * 60 * 1000, // 5 minutes cache
    });

    const metrics = data?.advancedMetricSummaries ?? [];

    // Auto-select first metric if none selected
    const activeMetricCode = selectedMetricCode ?? metrics[0]?.code ?? null;
    const activeMetric = metrics.find((m) => m.code === activeMetricCode) ?? null;

    // Transform metric data into recharts-compatible format
    const chartData = useMemo(() => {
        if (!activeMetric) return [];

        return activeMetric.labels.map((label, index) => {
            const point: Record<string, string | number> = { name: label };
            for (const series of activeMetric.series) {
                point[series.name] = series.values[index] ?? 0;
            }
            return point;
        });
    }, [activeMetric]);

    // Value formatter based on metric type
    const formatValue = (value: number) => {
        if (!activeMetric) return String(value);
        if (activeMetric.type === 'currency') {
            return formatCurrency(value * 100, activeChannel?.defaultCurrencyCode);
        }
        return value.toLocaleString();
    };

    const chartHeight = Math.max((height ?? 300) - 90, 180);

    return (
        <DashboardBaseWidget
            id="advanced-metrics"
            title="Métricas avanzadas"
            description="Ganancia, AOV & unidades vendidas"
            actions={
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => refetch()}
                    disabled={isRefetching}
                    title="Actualizar métricas"
                >
                    <RefreshCw
                        className={`h-4 w-4 ${isRefetching ? 'animate-spin' : ''}`}
                    />
                </Button>
            }
        >
            <div className="flex flex-col gap-3 p-1">
                {/* Metric selector tabs */}
                {metrics.length > 1 && (
                    <div className="flex gap-1 flex-wrap">
                        {metrics.map((metric) => (
                            <Button
                                key={metric.code}
                                variant={
                                    activeMetricCode === metric.code
                                        ? 'default'
                                        : 'outline'
                                }
                                size="sm"
                                onClick={() => setSelectedMetricCode(metric.code)}
                            >
                                {metric.title}
                            </Button>
                        ))}
                    </div>
                )}

                {/* Loading state */}
                {isLoading && (
                    <div className="flex items-center justify-center h-48 text-muted-foreground">
                        Cargando metricas...
                    </div>
                )}

                {/* Error state */}
                {error && (
                    <div className="flex items-center justify-center h-48 text-destructive">
                        Fallo al cargar las metricas. Por favor intente de nuevo.
                    </div>
                )}

                {/* Chart */}
                {activeMetric && chartData.length > 0 && (
                    <ResponsiveContainer width="100%" height={chartHeight}>
                        <LineChart data={chartData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                className="stroke-muted"
                            />
                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 12 }}
                                className="fill-muted-foreground"
                            />
                            <YAxis
                                tickFormatter={formatValue}
                                tick={{ fontSize: 12 }}
                                className="fill-muted-foreground"
                                width={80}
                            />
                            <Tooltip
                                formatter={(value: number, name: string) => [
                                    formatValue(value),
                                    name,
                                ]}
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--popover))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                    color: 'hsl(var(--popover-foreground))',
                                }}
                            />
                            {activeMetric.series.length > 1 && <Legend />}
                            {activeMetric.series.map((series, idx) => (
                                <Line
                                    key={series.name}
                                    type="monotone"
                                    dataKey={series.name}
                                    stroke={CHART_COLORS[idx % CHART_COLORS.length]}
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 5 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                )}

                {/* Empty state */}
                {!isLoading && !error && metrics.length === 0 && (
                    <div className="flex items-center justify-center h-48 text-muted-foreground">
                        No hay datos de metricas disponibles. Asegúrese de que se hayan realizado pedidos.
                    </div>
                )}
            </div>
        </DashboardBaseWidget>
    );
}
