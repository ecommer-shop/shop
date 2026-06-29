import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@vendure/dashboard';

export function ChannelSummaryCard({ dateFrom, dateTo }: { dateFrom: Date; dateTo: Date }) {
    const now = new Date();
    const formatDate = (d: Date) => d.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Resumen del Canal</CardTitle>
                <CardDescription>Información general del período analizado</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div>
                        <span className="text-muted-foreground">Período:</span>
                        <span className="ml-2 font-medium">{formatDate(dateFrom)} - {formatDate(dateTo)}</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Última actualización:</span>
                        <span className="ml-2 font-medium">{formatDate(now)}</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Días analizados:</span>
                        <span className="ml-2 font-medium">{Math.round((dateTo.getTime() - dateFrom.getTime()) / (1000 * 60 * 60 * 24))} días</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Rango:</span>
                        <span className="ml-2 font-medium">{dateFrom.getFullYear()} - {dateTo.getFullYear()}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
