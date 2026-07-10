import { useState, useEffect } from 'react';
import {
    AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@vendure/dashboard';
import { DollarSign } from 'lucide-react';
import type { AnalyticsDataPoint } from '../graphql-queries';

const LIGHT = '#6BB8FF';
const DARK = '#9969F8';

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP',
        minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(value);
}

function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-CO', { month: 'short', day: 'numeric' });
}

function useColor(): string {
    const [color, setColor] = useState(LIGHT);
    useEffect(() => {
        const el = document.documentElement;
        const update = () => setColor(el.classList.contains('dark') ? DARK : LIGHT);
        update();
        const observer = new MutationObserver(update);
        observer.observe(el, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);
    return color;
}

export function RevenueChart({ data }: { data: AnalyticsDataPoint[] }) {
    const color = useColor();
    const chartData = data.map(d => ({
        date: formatDate(d.date),
        Ingresos: d.totalRevenue,
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <span className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4" />
                        Ingresos diarios
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="date" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={50} />
                        <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11 }} width={80} />
                        <Tooltip formatter={(v: number) => formatCurrency(v)} />
                        <Legend />
                        <Area
                            type="monotone"
                            dataKey="Ingresos"
                            stroke={color}
                            fill="url(#revGrad)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
