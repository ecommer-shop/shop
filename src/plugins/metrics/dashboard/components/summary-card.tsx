import { Card, CardHeader, CardTitle, CardContent } from '@vendure/dashboard';

export function SummaryCard({ label, value, type, growth }: { label: string; value: number; type: string; growth?: number | null }) {
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
                {growth != null && (
                    <p className={`text-xs mt-2 ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {growth >= 0 ? '▲' : '▼'} {Math.abs(growth).toFixed(1)}% vs mes anterior
                    </p>
                )}
            </CardContent>
        </Card>
    );
}