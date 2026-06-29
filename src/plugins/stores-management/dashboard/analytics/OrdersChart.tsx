import {
    LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@vendure/dashboard';
import { ShoppingCart } from 'lucide-react';
import type { AnalyticsDataPoint } from '../graphql-queries';

function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-CO', { month: 'short', day: 'numeric' });
}

export function OrdersChart({ data }: { data: AnalyticsDataPoint[] }) {
    const chartData = data.map(d => ({
        date: formatDate(d.date),
        Órdenes: d.totalOrders,
        Unidades: d.totalUnits,
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <span className="flex items-center gap-2 text-sm">
                        <ShoppingCart className="h-4 w-4" />
                        Órdenes y unidades diarias
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="date" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={50} />
                        <YAxis tick={{ fontSize: 11 }} width={40} />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Órdenes"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Unidades"
                            stroke="hsl(var(--chart-3))"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
