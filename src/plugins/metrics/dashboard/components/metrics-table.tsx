import { Card, CardHeader, CardTitle, CardDescription, CardContent, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@vendure/dashboard';
import { formatTableValue } from './utils';

interface MetricSeries {
    name: string;
    values: number[];
}

interface Metric {
    code: string;
    title: string;
    type: 'currency' | 'number';
    series: MetricSeries[];
}

interface ChartDataPoint {
    name: string;
    [key: string]: string | number;
}

export function MetricsTable({
    data,
    metrics,
}: {
    data: ChartDataPoint[];
    metrics: Metric[];
}) {
    return (
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
                                {metrics.map((metric) =>
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
                            {data.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="font-medium">
                                        {row.name}
                                    </TableCell>
                                    {metrics.map((metric) =>
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
    );
}