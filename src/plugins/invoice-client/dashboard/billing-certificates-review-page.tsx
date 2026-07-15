import {
    api,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Input,
    Label,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
    Textarea,
} from '@vendure/dashboard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { BillingCertificateAssetView, type BillingCertAsset } from './components/billing-certificate-asset-view';

const QUERY = `
query BillingCertificateReviewPage {
  billingCertificateReviewQueue {
    channelId
    channelCode
    sellerName
    certificateStatus
    certificatePaymentStatus
    certificateReviewNote
    documents { chamber rut nit dianResolution storeLogo }
  }
}
`;

const APPROVE_CERT = `
mutation ApproveCert($input: ApproveBillingCertificateInput!) {
  approveBillingCertificate(input: $input) {
    channelId
    certificateStatus
    certificateReviewNote
  }
}
`;

const GET_ASSETS_BY_IDS = `
query GetAssetsByIdsForBillingReview($options: AssetListOptions) {
  assets(options: $options) {
    items {
      id
      name
      preview
      source
      mimeType
      type
    }
  }
}
`;

type ReviewRow = {
    channelId: string;
    channelCode: string;
    sellerName: string | null;
    certificateStatus: string;
    certificatePaymentStatus: string;
    certificateReviewNote: string | null;
    documents?: {
        chamber?: string | null;
        rut?: string | null;
        nit?: string | null;
        dianResolution?: string | null;
        storeLogo?: string | null;
    };
};

type StatusFilter = 'ALL' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'EXPIRED';

export function BillingCertificatesReviewPage() {
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
    const [storeSearch, setStoreSearch] = useState('');
    const [rejectTarget, setRejectTarget] = useState<{ channelId: string; channelCode: string } | null>(null);
    const [rejectNote, setRejectNote] = useState('');
    const [rejectError, setRejectError] = useState<string | null>(null);
    const { data, refetch } = useQuery({
        queryKey: ['billing-certs-review'],
        queryFn: () => api.query<any>(QUERY),
    });
    const rows = (data?.billingCertificateReviewQueue ?? []) as ReviewRow[];
    const filteredRows = useMemo(() => {
        const q = storeSearch.trim().toLowerCase();
        let list = rows;
        if (statusFilter !== 'ALL') {
            list = list.filter((r) => r.certificateStatus === statusFilter);
        }
        if (q) {
            list = list.filter(
                (r) =>
                    r.channelCode.toLowerCase().includes(q) ||
                    (r.sellerName ?? '').toLowerCase().includes(q),
            );
        }
        return list;
    }, [rows, statusFilter, storeSearch]);

    const assetIds = useMemo(() => {
        const values = rows.flatMap((r) => [
            r.documents?.chamber ?? null,
            r.documents?.rut ?? null,
            r.documents?.nit ?? null,
            r.documents?.dianResolution ?? null,
            r.documents?.storeLogo ?? null,
        ]);
        return Array.from(new Set(values.filter((v): v is string => !!v)));
    }, [rows]);

    const { data: assetsData } = useQuery({
        queryKey: ['billing-certs-assets', assetIds.join(',')],
        enabled: assetIds.length > 0,
        queryFn: async () =>
            api.query<{
                assets: { items: BillingCertAsset[] };
            }>(GET_ASSETS_BY_IDS, {
                options: {
                    take: assetIds.length,
                    filter: { id: { in: assetIds } },
                },
            }),
    });
    const assetsById = useMemo(() => {
        const map: Record<string, BillingCertAsset> = {};
        for (const a of assetsData?.assets?.items ?? []) {
            map[a.id] = a;
        }
        return map;
    }, [assetsData]);

    const approveMutation = useMutation({
        mutationFn: (input: { channelId: string; approve: boolean; note?: string | null }) =>
            api.mutate(APPROVE_CERT, { input }),
        onSuccess: () => {
            setRejectTarget(null);
            setRejectNote('');
            setRejectError(null);
            void refetch();
        },
        onError: (err: unknown) => {
            setRejectError(err instanceof Error ? err.message : String(err));
        },
    });

    const openRejectDialog = (row: ReviewRow) => {
        setRejectTarget({ channelId: row.channelId, channelCode: row.channelCode });
        setRejectNote('');
        setRejectError(null);
    };

    const confirmReject = () => {
        if (!rejectTarget) return;
        const trimmed = rejectNote.trim();
        if (!trimmed) {
            setRejectError('Escribe el motivo del rechazo para que el vendedor sepa qué corregir.');
            return;
        }
        approveMutation.mutate({
            channelId: rejectTarget.channelId,
            approve: false,
            note: trimmed,
        });
    };

    return (
        <Page pageId="billing-certificates-review">
            <PageTitle>Validación de certificados</PageTitle>
            <PageLayout>
                <PageBlock column="main" blockId="review">
                    <Card>
                        <CardHeader>
                            <CardTitle>SuperAdmin · Revisión manual</CardTitle>
                            <CardDescription>
                                Revisa documentos cargados por tienda y aprueba/rechaza la emisión de certificado.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 min-w-0">
                            <Input
                                placeholder="Buscar por código de canal o nombre de tienda"
                                value={storeSearch}
                                onChange={(e) => setStoreSearch(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground break-words">
                                Al rechazar, debes indicar el motivo. El vendedor lo verá en Planes de facturacion y debera
                                volver a cargar los documentos.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { key: 'ALL', label: 'Todos' },
                                    { key: 'UNDER_REVIEW', label: 'En revisión' },
                                    { key: 'ACTIVE', label: 'Aprobados' },
                                    { key: 'REJECTED', label: 'Rechazados' },
                                    { key: 'EXPIRED', label: 'Vencidos' },
                                ].map((f) => (
                                    <Button
                                        key={f.key}
                                        size="sm"
                                        variant={statusFilter === f.key ? 'default' : 'outline'}
                                        onClick={() => setStatusFilter(f.key as StatusFilter)}
                                    >
                                        {f.label}
                                    </Button>
                                ))}
                            </div>
                            {filteredRows.map((row) => (
                                <div key={row.channelId} className="rounded-lg border p-3 sm:p-4 space-y-3 min-w-0">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <p className="font-semibold break-words">{row.channelCode}</p>
                                            <p className="text-xs text-muted-foreground break-words">
                                                {row.sellerName ?? 'Sin nombre'} · Estado: {row.certificateStatus} · Pago:{' '}
                                                {row.certificatePaymentStatus}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 w-full sm:w-auto sm:flex-row sm:shrink-0">
                                            <Button
                                                size="sm"
                                                className="w-full sm:w-auto"
                                                onClick={() =>
                                                    approveMutation.mutate({ channelId: row.channelId, approve: true })
                                                }
                                                disabled={approveMutation.isPending}
                                            >
                                                Aprobar
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="w-full sm:w-auto"
                                                onClick={() => openRejectDialog(row)}
                                                disabled={approveMutation.isPending}
                                            >
                                                Rechazar
                                            </Button>
                                        </div>
                                    </div>
                                    {row.certificateStatus === 'REJECTED' && row.certificateReviewNote ? (
                                        <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3">
                                            <p className="text-xs font-medium text-destructive mb-1">Motivo del rechazo</p>
                                            <p className="text-sm whitespace-pre-wrap">{row.certificateReviewNote}</p>
                                        </div>
                                    ) : null}
                                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Cámara y Comercio</p>
                                            <BillingCertificateAssetView
                                                assetId={row.documents?.chamber}
                                                assetsById={assetsById}
                                                compact
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">RUT</p>
                                            <BillingCertificateAssetView
                                                assetId={row.documents?.rut}
                                                assetsById={assetsById}
                                                compact
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">NIT</p>
                                            <BillingCertificateAssetView
                                                assetId={row.documents?.nit}
                                                assetsById={assetsById}
                                                compact
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Resolución DIAN</p>
                                            <BillingCertificateAssetView
                                                assetId={row.documents?.dianResolution}
                                                assetsById={assetsById}
                                                compact
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Logo de la tienda</p>
                                            <BillingCertificateAssetView
                                                assetId={row.documents?.storeLogo}
                                                assetsById={assetsById}
                                                compact
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {filteredRows.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No hay certificados pendientes de revisión.</p>
                            ) : null}
                        </CardContent>
                    </Card>
                </PageBlock>
            </PageLayout>

            <Dialog
                open={!!rejectTarget}
                onOpenChange={(open) => {
                    if (!open && !approveMutation.isPending) {
                        setRejectTarget(null);
                        setRejectNote('');
                        setRejectError(null);
                    }
                }}
            >
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Rechazar certificado</DialogTitle>
                        <DialogDescription>
                            {rejectTarget
                                ? `Indica por qué se rechazan los documentos de «${rejectTarget.channelCode}». El vendedor verá este mensaje y deberá volver a cargar los archivos.`
                                : 'Indica el motivo del rechazo.'}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                        <Label htmlFor="reject-note">Motivo del rechazo</Label>
                        <Textarea
                            id="reject-note"
                            value={rejectNote}
                            onChange={(e) => {
                                setRejectNote(e.target.value);
                                if (rejectError) setRejectError(null);
                            }}
                            placeholder="Ej.: El RUT está vencido; la resolución DIAN no coincide con el NIT registrado…"
                            rows={5}
                            disabled={approveMutation.isPending}
                        />
                        {rejectError ? <p className="text-xs text-destructive">{rejectError}</p> : null}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            disabled={approveMutation.isPending}
                            onClick={() => {
                                setRejectTarget(null);
                                setRejectNote('');
                                setRejectError(null);
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            disabled={approveMutation.isPending || !rejectNote.trim()}
                            onClick={confirmReject}
                        >
                            {approveMutation.isPending ? 'Rechazando…' : 'Confirmar rechazo'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Page>
    );
}
