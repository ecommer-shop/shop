import { Card, CardContent, CardHeader, CardTitle } from '@vendure/dashboard';
import { Trophy } from 'lucide-react';
import type { StoreRankingEntry } from '../graphql-queries';

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

function formatNumber(n: number): string {
    return new Intl.NumberFormat('es-CO').format(n);
}

const MEDAL_COLORS = ['text-yellow-500', 'text-gray-400', 'text-amber-700'];

export function StoreRankingTable({
    ranking,
    onStoreClick,
}: {
    ranking: StoreRankingEntry[];
    onStoreClick: (id: string | undefined) => void;
}) {
    if (ranking.length === 0) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <span className="flex items-center gap-2 text-sm">
                        <Trophy className="h-4 w-4" />
                        Top tiendas por ingresos
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground w-12">#</th>
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Tienda</th>
                                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Canal</th>
                                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Ingresos</th>
                                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Órdenes</th>
                                <th className="text-right py-3 px-4 font-medium text-muted-foreground">Unidades</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.map((entry, i) => (
                                <tr
                                    key={entry.storeId}
                                    className="border-b last:border-0 hover:bg-muted/30 cursor-pointer transition-colors"
                                    onClick={() => onStoreClick(entry.storeId)}
                                >
                                    <td className="py-3 px-4">
                                        <span className={`font-bold text-lg ${MEDAL_COLORS[i] ?? 'text-muted-foreground'}`}>
                                            {i + 1}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 font-medium">{entry.storeName}</td>
                                    <td className="py-3 px-4 text-muted-foreground">{entry.channelCode}</td>
                                    <td className="py-3 px-4 text-right font-medium">{formatCurrency(entry.totalRevenue)}</td>
                                    <td className="py-3 px-4 text-right">{formatNumber(entry.totalOrders)}</td>
                                    <td className="py-3 px-4 text-right">{formatNumber(entry.totalUnits)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
