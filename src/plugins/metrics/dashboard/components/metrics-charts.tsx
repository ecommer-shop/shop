import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@vendure/dashboard';
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

interface MetricSeries {
    name: string;
    values: number[];
}

interface Metric {
    code: string;
    title: string;
    series: MetricSeries[];
}

interface ChartDataPoint {
    name: string;
    [key: string]: string | number;
}

const COLORS = ['#6BB8FF', '#10b981', '#f59e0b', '#ef4444', '#9969F8'];

export function MetricsAreaChart({
    data,
    metrics,
}: {
    data: ChartDataPoint[];
    metrics: Metric[];
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tendencia de Métricas</CardTitle>
                <CardDescription>Ver evolución en el tiempo</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
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
                        {metrics.map((metric, metricIdx) =>
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
    );
}

export function MetricsLineChart({
    data,
    metrics,
}: {
    data: ChartDataPoint[];
    metrics: Metric[];
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Comparación Líneal</CardTitle>
                <CardDescription>Análisis comparativo de métricas</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {metrics.map((metric, metricIdx) =>
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
    );
}