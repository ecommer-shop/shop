import {
    api,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Input,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
} from '@vendure/dashboard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

const QUERY = `
query BillingCertificateReviewPage {
  billingCertificateReviewQueue {
    channelId
    channelCode
    sellerName
    certificateStatus
    certificatePaymentStatus
    certificateReviewNote
    documents { chamber rut nit }
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
    documents?: { chamber?: string | null; rut?: string | null; nit?: string | null };
};

type AssetRow = { id: string; name: string; preview?: string | null };
type StatusFilter = 'ALL' | 'UNDER_REVIEW' | 'ACTIVE' | 'REJECTED' | 'EXPIRED';

function AssetThumb({ id, assetsById }: { id: string | null | undefined; assetsById: Record<string, AssetRow> }) {
    if (!id) return <span className="text-xs text-muted-foreground">Sin documento</span>;
    const asset = assetsById[id];
    if (!asset) return <span className="text-xs font-mono">{id}</span>;
    return (
        <div className="flex items-center gap-2">
            {asset.preview ? (
                <img src={asset.preview} alt={asset.name} className="h-8 w-8 rounded border object-cover" />
            ) : null}
            <div className="min-w-0">
                <p className="truncate text-xs font-medium">{asset.name}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{asset.id}</p>
            </div>
        </div>
    );
}

export function BillingCertificatesReviewPage() {
    const [note, setNote] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
    const [storeSearch, setStoreSearch] = useState('');
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
        ]);
        return Array.from(new Set(values.filter((v): v is string => !!v)));
    }, [rows]);

    const { data: assetsData } = useQuery({
        queryKey: ['billing-certs-assets', assetIds.join(',')],
        enabled: assetIds.length > 0,
        queryFn: async () =>
            api.query<{
                assets: { items: AssetRow[] };
            }>(GET_ASSETS_BY_IDS, {
                options: {
                    take: assetIds.length,
                    filter: { id: { in: assetIds } },
                },
            }),
    });
    const assetsById = useMemo(() => {
        const map: Record<string, AssetRow> = {};
        for (const a of assetsData?.assets?.items ?? []) {
            map[a.id] = a;
        }
        return map;
    }, [assetsData]);

    const approveMutation = useMutation({
        mutationFn: (input: { channelId: string; approve: boolean }) =>
            api.mutate(APPROVE_CERT, { input: { ...input, note: note || null } }),
        onSuccess: () => refetch(),
    });

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
                        <CardContent className="space-y-4">
                            <Input
                                placeholder="Buscar por código de canal o nombre de tienda"
                                value={storeSearch}
                                onChange={(e) => setStoreSearch(e.target.value)}
                            />
                            <Input
                                placeholder="Nota de revisión (se guarda al aprobar/rechazar)"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
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
                                <div key={row.channelId} className="rounded-lg border p-4 space-y-3">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <div>
                                            <p className="font-semibold">{row.channelCode}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {row.sellerName ?? 'Sin nombre'} · Estado: {row.certificateStatus} · Pago:{' '}
                                                {row.certificatePaymentStatus}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
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
                                                onClick={() =>
                                                    approveMutation.mutate({ channelId: row.channelId, approve: false })
                                                }
                                                disabled={approveMutation.isPending}
                                            >
                                                Rechazar
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="grid gap-3 md:grid-cols-3">
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Cámara y Comercio</p>
                                            <AssetThumb id={row.documents?.chamber} assetsById={assetsById} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">RUT</p>
                                            <AssetThumb id={row.documents?.rut} assetsById={assetsById} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">NIT</p>
                                            <AssetThumb id={row.documents?.nit} assetsById={assetsById} />
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
        </Page>
    );
}
