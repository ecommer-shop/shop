import { Card, CardHeader, CardTitle, CardContent } from '@vendure/dashboard';

export function SummaryCard({ label, value, type }: { label: string; value: number; type: string }) {
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