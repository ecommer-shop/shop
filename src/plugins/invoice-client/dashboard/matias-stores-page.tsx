import {
    api,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
} from '@vendure/dashboard';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { RefreshCw, Save } from 'lucide-react';
import { userFacingDashboardError } from './format-graphql-error';

const STORES_QUERY = `
  query MatiasBillingStores {
    matiasBillingStores {
      channelId
      channelCode
      sellerName
      billingActive
      remaining
      matiasTokenConfigured
      matiasInvoicePrefix
      matiasResolutionNumber
      matiasEmitProfileComplete
    }
    matiasGlobalInvoicePool {
      defaultChannelCode
      total
      sellableRemaining
    }
  }
`;

const UPDATE_GLOBAL_POOL = `
  mutation UpdateMatiasGlobalPool($input: UpdateMatiasGlobalInvoicePoolInput!) {
    updateMatiasGlobalInvoicePool(input: $input) {
      defaultChannelCode
      total
      sellableRemaining
    }
  }
`;

const UPDATE_STORE = `
  mutation UpdateMatiasBillingStore($input: UpdateMatiasBillingStoreInput!) {
    updateMatiasBillingStore(input: $input) {
      channelId
      channelCode
      billingActive
      remaining
      matiasTokenConfigured
      matiasInvoicePrefix
      matiasResolutionNumber
      matiasEmitProfileComplete
    }
  }
`;

type StoreRow = {
    channelId: string;
    channelCode: string;
    sellerName: string | null;
    billingActive: boolean;
    remaining: number | null;
    matiasTokenConfigured: boolean;
    matiasInvoicePrefix: string | null;
    matiasResolutionNumber: string | null;
    matiasEmitProfileComplete: boolean;
};

type GlobalPool = {
    defaultChannelCode: string;
    total: number | null;
    sellableRemaining: number | null;
};

export function MatiasStoresPage() {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['matias-billing-stores'],
        queryFn: async () => {
            try {
                return await api.query<{
                    matiasBillingStores: StoreRow[];
                    matiasGlobalInvoicePool: GlobalPool;
                }>(STORES_QUERY);
            } catch (e) {
                throw userFacingDashboardError(e, 'No se pudo cargar el listado.');
            }
        },
    });

    const rows = data?.matiasBillingStores ?? [];
    const pool = data?.matiasGlobalInvoicePool;
    const errMsg = error ? error.message : null;

    return (
        <Page pageId="matias-billing-stores">
            <PageTitle>Facturación Matias por tienda</PageTitle>
            <PageLayout>
                <PageBlock column="main" blockId="intro">
                    <p className="text-muted-foreground text-sm max-w-3xl">
                        El <strong>prefijo</strong> y la <strong>resolución</strong> los defines{' '}
                        <strong>manualmente</strong> según lo que entregue Matias al dar de alta cada tienda (no
                        vienen solos en el token). Al <strong>vender cupo</strong> a una tienda se descuenta del pool
                        global de Ecommer. La emisión al pagar un pedido solo baja el cupo de esa tienda.
                    </p>
                </PageBlock>

                <PageBlock column="main" blockId="global-pool">
                    <GlobalPoolCard pool={pool} onSaved={() => void refetch()} />
                </PageBlock>

                <PageBlock column="main" blockId="stores">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between gap-2">
                            <div>
                                <CardTitle>Tiendas registradas</CardTitle>
                                <CardDescription>
                                    Perfil completo = token + prefijo + resolución. Prefijo único por tienda.
                                </CardDescription>
                            </div>
                            <Button type="button" variant="outline" size="sm" onClick={() => void refetch()}>
                                <RefreshCw className="h-4 w-4 mr-1" />
                                Actualizar
                            </Button>
                        </CardHeader>
                        <CardContent>
                            {errMsg ? (
                                <p className="text-sm text-destructive">{errMsg}</p>
                            ) : isLoading ? (
                                <p className="text-sm text-muted-foreground">Cargando…</p>
                            ) : rows.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No hay canales con vendedor.</p>
                            ) : (
                                <div className="space-y-6">
                                    {rows.map((row) => (
                                        <StoreEditorRow
                                            key={row.channelId}
                                            row={row}
                                            poolSellable={pool?.sellableRemaining ?? null}
                                            onSaved={() => void refetch()}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </PageBlock>
            </PageLayout>
        </Page>
    );
}

function GlobalPoolCard({ pool, onSaved }: { pool: GlobalPool | undefined; onSaved: () => void }) {
    const [total, setTotal] = useState(pool?.total != null ? String(pool.total) : '');
    const [sellable, setSellable] = useState(
        pool?.sellableRemaining != null ? String(pool.sellableRemaining) : '',
    );

    useEffect(() => {
        setTotal(pool?.total != null ? String(pool.total) : '');
        setSellable(pool?.sellableRemaining != null ? String(pool.sellableRemaining) : '');
    }, [pool?.total, pool?.sellableRemaining]);

    const saveMutation = useMutation({
        mutationFn: async () => {
            const totalParsed = total.trim() === '' ? null : Number(total);
            const sellableParsed = sellable.trim() === '' ? null : Number(sellable);
            if (total.trim() !== '' && !Number.isFinite(totalParsed as number)) {
                throw new Error('Total inválido.');
            }
            if (sellable.trim() !== '' && !Number.isFinite(sellableParsed as number)) {
                throw new Error('Vendible restante inválido.');
            }
            await api.mutate(UPDATE_GLOBAL_POOL, {
                input: {
                    total: totalParsed,
                    sellableRemaining: sellableParsed,
                },
            });
        },
        onSuccess: onSaved,
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Pool global Ecommer (paquete Matias)</CardTitle>
                <CardDescription>
                    Canal «{pool?.defaultChannelCode ?? '…'}». Cuando compras un paquete grande en Matias, sube total y
                    vendible. Al vender a tiendas solo baja el vendible.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3 items-end">
                <div className="space-y-1">
                    <Label>Total comprado</Label>
                    <Input inputMode="numeric" value={total} onChange={(e) => setTotal(e.target.value)} />
                </div>
                <div className="space-y-1">
                    <Label>Vendible restante (sin asignar a tiendas)</Label>
                    <Input inputMode="numeric" value={sellable} onChange={(e) => setSellable(e.target.value)} />
                </div>
                <Button
                    type="button"
                    size="sm"
                    disabled={saveMutation.isPending}
                    onClick={() => saveMutation.mutate()}
                >
                    <Save className="h-4 w-4 mr-1" />
                    Guardar pool
                </Button>
            </CardContent>
            {saveMutation.isError && saveMutation.error instanceof Error ? (
                <p className="px-6 pb-4 text-sm text-destructive">{saveMutation.error.message}</p>
            ) : null}
        </Card>
    );
}

function StoreEditorRow({
    row,
    poolSellable,
    onSaved,
}: {
    row: StoreRow;
    poolSellable: number | null;
    onSaved: () => void;
}) {
    const [billingActive, setBillingActive] = useState(row.billingActive);
    const [remaining, setRemaining] = useState(row.remaining != null ? String(row.remaining) : '');
    const [prefix, setPrefix] = useState(row.matiasInvoicePrefix ?? '');
    const [resolution, setResolution] = useState(row.matiasResolutionNumber ?? '');
    const [newToken, setNewToken] = useState('');

    useEffect(() => {
        setBillingActive(row.billingActive);
        setRemaining(row.remaining != null ? String(row.remaining) : '');
        setPrefix(row.matiasInvoicePrefix ?? '');
        setResolution(row.matiasResolutionNumber ?? '');
        setNewToken('');
    }, [
        row.channelId,
        row.billingActive,
        row.remaining,
        row.matiasTokenConfigured,
        row.matiasInvoicePrefix,
        row.matiasResolutionNumber,
    ]);

    const dirty = useMemo(() => {
        const rem = remaining.trim() === '' ? null : Number(remaining);
        const remChanged = (rem ?? null) !== (row.remaining ?? null);
        const activeChanged = billingActive !== row.billingActive;
        const tokenTyped = newToken.trim().length > 0;
        const prefixChanged = prefix.trim().toUpperCase() !== (row.matiasInvoicePrefix ?? '').toUpperCase();
        const resolutionChanged = resolution.trim() !== (row.matiasResolutionNumber ?? '');
        return remChanged || activeChanged || tokenTyped || prefixChanged || resolutionChanged;
    }, [
        billingActive,
        remaining,
        newToken,
        prefix,
        resolution,
        row.billingActive,
        row.remaining,
        row.matiasInvoicePrefix,
        row.matiasResolutionNumber,
    ]);

    const cupoIncrease = useMemo(() => {
        const newRem = remaining.trim() === '' ? 0 : Number(remaining);
        const oldRem = row.billingActive ? (row.remaining ?? 0) : 0;
        const newEff = billingActive ? (Number.isFinite(newRem) ? newRem : oldRem) : 0;
        return newEff - oldRem;
    }, [billingActive, remaining, row.billingActive, row.remaining]);

    const saveMutation = useMutation({
        mutationFn: async () => {
            const remParsed = remaining.trim() === '' ? null : Number(remaining);
            if (remaining.trim() !== '' && !Number.isFinite(remParsed as number)) {
                throw new Error('Cupo inválido.');
            }

            await api.mutate(UPDATE_STORE, {
                input: {
                    channelId: row.channelId,
                    billingActive,
                    invoiceLimitRemaining: remParsed,
                    matiasInvoicePrefix: prefix.trim() || null,
                    matiasResolutionNumber: resolution.trim() || null,
                    ...(newToken.trim() ? { matiasAccessToken: newToken.trim() } : {}),
                },
            });
        },
        onSuccess: () => {
            setNewToken('');
            onSaved();
        },
    });

    return (
        <div className="rounded-lg border p-4 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                    <p className="font-mono font-medium">{row.channelCode}</p>
                    <p className="text-sm text-muted-foreground">{row.sellerName ?? '—'}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                    Perfil: {row.matiasEmitProfileComplete ? 'completo' : 'incompleto'}
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                    <input
                        id={`active-${row.channelId}`}
                        type="checkbox"
                        checked={billingActive}
                        onChange={(e) => setBillingActive(e.target.checked)}
                    />
                    <Label htmlFor={`active-${row.channelId}`}>Facturación activa</Label>
                </div>
                <div className="space-y-1">
                    <Label htmlFor={`rem-${row.channelId}`}>Cupo restante (vendido a esta tienda)</Label>
                    <Input
                        id={`rem-${row.channelId}`}
                        inputMode="numeric"
                        value={remaining}
                        onChange={(e) => setRemaining(e.target.value)}
                    />
                    {cupoIncrease > 0 ? (
                        <p className="text-xs text-amber-600">
                            Al guardar se restan {cupoIncrease} del pool global
                            {poolSellable != null ? ` (quedan ${poolSellable} vendibles)` : ''}.
                        </p>
                    ) : cupoIncrease < 0 ? (
                        <p className="text-xs text-muted-foreground">
                            Al guardar se devuelven {-cupoIncrease} al pool global.
                        </p>
                    ) : null}
                </div>
                <div className="space-y-1">
                    <Label htmlFor={`pfx-${row.channelId}`}>Prefijo (manual, único)</Label>
                    <Input
                        id={`pfx-${row.channelId}`}
                        placeholder="Ej. FE01 — lo indica Matias"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor={`res-${row.channelId}`}>Resolución (manual)</Label>
                    <Input
                        id={`res-${row.channelId}`}
                        placeholder="Número de resolución DIAN/Matias"
                        value={resolution}
                        onChange={(e) => setResolution(e.target.value)}
                    />
                </div>
            </div>
            <div className="space-y-1">
                <Label htmlFor={`tok-${row.channelId}`}>Token Matias</Label>
                <Input
                    id={`tok-${row.channelId}`}
                    type="password"
                    autoComplete="off"
                    placeholder={row.matiasTokenConfigured ? 'Vacío = no cambiar' : 'Pegar Bearer de Matias'}
                    value={newToken}
                    onChange={(e) => setNewToken(e.target.value)}
                />
            </div>
            <Button
                type="button"
                size="sm"
                disabled={!dirty || saveMutation.isPending}
                onClick={() => saveMutation.mutate()}
            >
                <Save className="h-4 w-4 mr-1" />
                {saveMutation.isPending ? 'Guardando…' : 'Guardar'}
            </Button>
            {saveMutation.isError && saveMutation.error instanceof Error ? (
                <p className="text-sm text-destructive">{saveMutation.error.message}</p>
            ) : null}
        </div>
    );
}
