import React from 'react';
import {
    api,
    Badge,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    useNavigate,
} from '@vendure/dashboard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    GET_PAYOUT_BATCHES,
    CANCEL_PAYOUT_BATCH,
} from '../graphql-queries';

const statusBadge = (status: string) => {
    const variants: Record<string, string> = {
        pending: 'warning', csv_downloaded: 'default',
        paid: 'success', cancelled: 'destructive',
    };
    const labels: Record<string, string> = {
        pending: 'Pendiente', csv_downloaded: 'CSV Descargado',
        paid: 'Pagado', cancelled: 'Cancelado',
    };
    return <Badge variant={(variants[status] || 'default') as any}>{labels[status] || status}</Badge>;
};

const fmt = (v: number) => `$${(v / 100).toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;
const fd = (d: string) => new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });

export function PayoutListPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
        queryKey: ['payoutBatches'],
        queryFn: () => api.query<{ payoutBatches: any[] }>(GET_PAYOUT_BATCHES),
    });

    const cancelMutation = useMutation({
        mutationFn: (id: string) => api.mutate(CANCEL_PAYOUT_BATCH, { id }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['payoutBatches'] }),
    });

    const batches = data?.payoutBatches ?? [];

    return (
        <Page pageId="payout-list">
            <PageTitle>
                <span>Liquidaciones</span>
            </PageTitle>
            <PageLayout>
                <PageBlock column="main">
                    <Card>
                        <CardHeader>
                            <CardTitle>Historial de pagos a vendedores</CardTitle>
                            <Button variant="default" onClick={() => navigate({ to: '/payouts/new' })}>
                                Nueva liquidación
                            </Button>
                        </CardHeader>
                        <CardContent>
                            {isLoading && <div className="text-center py-8 text-muted-foreground">Cargando...</div>}
                            {error && <div className="text-red-500 py-4">{(error as Error).message}</div>}
                            {!isLoading && batches.length === 0 && (
                                <div className="text-center py-8 text-muted-foreground">No hay liquidaciones todavía.</div>
                            )}
                            {!isLoading && batches.length > 0 && (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Referencia</TableHead>
                                            <TableHead>Período</TableHead>
                                            <TableHead>Monto neto</TableHead>
                                            <TableHead>Comisión</TableHead>
                                            <TableHead>Transacciones</TableHead>
                                            <TableHead>Estado</TableHead>
                                            <TableHead>Pagado</TableHead>
                                            <TableHead>Acciones</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {batches.map((b: any) => (
                                            <TableRow key={b.id} className="cursor-pointer hover:bg-muted/30" onClick={() => navigate({ to: `/payouts/${b.id}` })}>
                                                <TableCell className="font-medium text-primary hover:underline">{b.reference}</TableCell>
                                                <TableCell>{fd(b.periodStart)} — {fd(b.periodEnd)}</TableCell>
                                                <TableCell>{fmt(b.totalAmount)}</TableCell>
                                                <TableCell>{fmt(b.totalPlatformFee)}</TableCell>
                                                <TableCell>{b.successCount}/{b.transactionCount}</TableCell>
                                                <TableCell>{statusBadge(b.status)}</TableCell>
                                                <TableCell>{b.paidAt ? fd(b.paidAt) : '—'}</TableCell>
                                                <TableCell>
                                                    {b.status === 'pending' && (
                                                        <Button variant="destructive" size="sm" onClick={e => { e.stopPropagation(); cancelMutation.mutate(b.id); }}>
                                                            Cancelar
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
