import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@vendure/dashboard';

interface OrderStatusItem {
    state: string;
    count: number;
    percentage: number;
}

export function OrderStatusBars({ items }: { items: OrderStatusItem[] }) {
    if (items.length === 0) return null;

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Distribución de Órdenes por Estado</CardTitle>
                <CardDescription>Estado actual de todas las órdenes del canal</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {items.map(item => (
                        <div key={item.state} className="flex items-center gap-2 sm:gap-4">
                            <div className="w-20 sm:w-36 text-xs sm:text-sm font-medium truncate" title={item.state}>{item.state}</div>
                            <div className="flex-1 h-4 sm:h-5 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full transition-all"
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                            <div className="w-12 sm:w-16 text-xs sm:text-sm text-right text-muted-foreground">{item.count}</div>
                            <div className="w-10 sm:w-12 text-xs sm:text-sm text-right font-medium">{item.percentage}%</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
