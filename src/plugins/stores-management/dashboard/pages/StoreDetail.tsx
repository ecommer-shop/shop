import { useState, useEffect } from 'react';
import {
    Page,
    PageLayout,
    PageBlock,
    PageTitle,
    Card,
    CardContent,
    Button,
} from '@vendure/dashboard';
import {
    ArrowLeft,
    Mail,
    User as UserIcon,
    Store as StoreIcon,
    Hash,
    Calendar,
    LogIn,
    MapPin,
    Package,
    AlertCircle,
    Loader2,
    Building2,
    Ban,
} from 'lucide-react';
import {
    gql,
    STORE_QUERY,
    type StoreNode,
    formatDate,
} from '../graphql-queries';
import { BadgeNuevo } from '../components/BadgeNuevo';
import { BadgeDeleted } from '../components/BadgeDeleted';

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3 py-2.5 border-b last:border-0">
            <div className="shrink-0 mt-0.5 text-muted-foreground">{icon}</div>
            <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                <p className="text-sm font-medium truncate">{value}</p>
            </div>
        </div>
    );
}

function DetailCard({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">{title}</h3>
                {children}
            </CardContent>
        </Card>
    );
}

export function StoreDetail({ route }: { route: any }) {
    const id = route.match?.params?.id || route.params?.id || window.location.pathname.split('/').pop();
    const { navigate } = route;
    const [store, setStore] = useState<StoreNode | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setError(null);
        gql<{ store: StoreNode }>(STORE_QUERY, { id })
            .then(d => setStore(d.store))
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <Page pageId="store-detail">
            <PageTitle>
                <span className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => navigate('/stores')}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    {store ? store.storeName : 'Detalle de la Tienda'}
                </span>
            </PageTitle>

            <PageLayout>
                <PageBlock column="main">
                    {error && (
                        <Card className="mb-4 border-destructive/50 bg-destructive/5">
                            <CardContent className="flex items-center gap-3">
                                <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
                                <span className="text-sm text-destructive flex-1">{error}</span>
                                <Button variant="ghost" size="sm" onClick={() => setError(null)}>Cerrar</Button>
                            </CardContent>
                        </Card>
                    )}

                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        </div>
                    )}

                    {!loading && !store && !error && (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                                <StoreIcon className="h-12 w-12 text-muted-foreground/40 mb-4" />
                                <p className="text-lg font-medium text-muted-foreground">Tienda no encontrada</p>
                            </CardContent>
                        </Card>
                    )}

                    {!loading && store && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DetailCard title={
                                <span className="flex items-center gap-2">
                                    <StoreIcon className="h-4 w-4" />
                                    Información de la Tienda
                                    <span className="ml-auto flex gap-1">
                                        {store.isNew && !store.isDeleted && <BadgeNuevo />}
                                        {store.isDeleted && <BadgeDeleted />}
                                    </span>
                                </span>
                            }>
                                <InfoRow icon={<StoreIcon className="h-4 w-4" />} label="Nombre" value={store.storeName} />
                                <InfoRow icon={<Hash className="h-4 w-4" />} label="Código de canal" value={store.channelCode} />
                                <InfoRow icon={<Hash className="h-4 w-4" />} label="Token de canal" value={store.channelToken ?? '—'} />
                                <InfoRow icon={<Calendar className="h-4 w-4" />} label="Fecha de registro" value={formatDate(store.createdAt)} />
                                <InfoRow icon={<Package className="h-4 w-4" />} label="Productos publicados" value={String(store.productCount ?? '—')} />
                                {store.deletedAt && (
                                    <InfoRow icon={<Ban className="h-4 w-4 text-destructive" />} label="Eliminada el" value={formatDate(store.deletedAt)} />
                                )}
                            </DetailCard>

                            <DetailCard title={
                                <span className="flex items-center gap-2">
                                    <UserIcon className="h-4 w-4" />
                                    Administrador
                                </span>
                            }>
                                <InfoRow icon={<UserIcon className="h-4 w-4" />} label="Nombre" value={store.adminName ?? '—'} />
                                <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={store.adminEmail ?? '—'} />
                                <InfoRow icon={<LogIn className="h-4 w-4" />} label="Último login" value={formatDate(store.adminLastLogin)} />
                            </DetailCard>

                            {store.storeDescription && (
                                <DetailCard title={
                                    <span className="flex items-center gap-2">
                                        <Building2 className="h-4 w-4" />
                                        Descripción
                                    </span>
                                }>
                                    <InfoRow icon={<Building2 className="h-4 w-4" />} label="Descripción" value={store.storeDescription} />
                                </DetailCard>
                            )}

                            {(store.storePickupAddress || store.storePickupNeighborhood) && (
                                <DetailCard title={
                                    <span className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        Dirección de Recogida
                                    </span>
                                }>
                                    {store.storePickupAddress && (
                                        <InfoRow icon={<MapPin className="h-4 w-4" />} label="Dirección" value={store.storePickupAddress} />
                                    )}
                                    {store.storePickupNeighborhood && (
                                        <InfoRow icon={<MapPin className="h-4 w-4" />} label="Barrio" value={store.storePickupNeighborhood} />
                                    )}
                                </DetailCard>
                            )}

                            {store.storeBannerUrl && (
                                <DetailCard title="Banner">
                                    <img src={store.storeBannerUrl} alt="Banner" className="max-h-24 rounded object-contain bg-muted" />
                                </DetailCard>
                            )}
                        </div>
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
