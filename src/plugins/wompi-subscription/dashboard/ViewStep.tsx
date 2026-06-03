import { Card, CardContent, Badge, Button, Spinner } from '@vendure/dashboard';
import { CreditCard } from 'lucide-react';
import { Subscription, statusColor, statusLabel } from './graphql-queries';

function UsageBar({ label, current, limit }: { label: string; current: number; limit: number }) {
    const pct = limit > 0 ? Math.round((current / limit) * 100) : 0;
    const remaining = limit - current;
    const barColor = pct >= 90 ? 'bg-red-500' : pct >= 70 ? 'bg-yellow-500' : 'bg-blue-500';

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-sm">
                <span className="font-medium">{label}</span>
                <span className="text-muted-foreground">{current} / {limit}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                />
            </div>
            <p className="text-xs text-muted-foreground">
                {remaining > 0
                    ? `${remaining} disponibles`
                    : pct >= 100
                        ? 'Límite alcanzado — actualiza tu plan'
                        : `${remaining} disponibles`}
            </p>
        </div>
    );
}

export function ViewStep({
    sub,
    usage,
    onShowPlans,
    onStopAutoRenew,
    onCancel,
    actionLoading,
}: {
    sub: Subscription | null | undefined;
    usage: { product: { allowed: boolean; current: number; limit: number }; variation: { allowed: boolean; current: number; limit: number } } | null;
    onShowPlans: () => void;
    onStopAutoRenew: () => void;
    onCancel: () => void;
    actionLoading: string | null;
}) {
    if (sub === undefined) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center py-20">
                    <Spinner />
                </CardContent>
            </Card>
        );
    }

    if (sub === null) {
        return (
            <Card>
                <CardContent className="text-center py-12 space-y-4">
                    <CreditCard className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Sin plan activo</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Aún no tienes un plan de suscripción. Elige uno para acceder a todas las funcionalidades.
                    </p>
                    <Button variant="default" onClick={onShowPlans}>
                        Ver planes disponibles
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardContent className="py-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">{sub.plan.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                ${(sub.plan?.price ?? 0).toLocaleString('es-CO')}/mes
                            </p>
                        </div>
                        <Badge variant={statusColor(sub.status)}>{statusLabel(sub.status)}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-muted-foreground">Renovación automática:</span>{' '}
                            {sub.autoRenew ? 'Sí' : 'No'}
                        </div>
                        {sub.endsAt && (
                            <div>
                                <span className="text-muted-foreground">Finaliza:</span>{' '}
                                {new Date(sub.endsAt).toLocaleDateString('es-CO')}
                            </div>
                        )}
                        {sub.paymentMethodType && (
                            <div>
                                <span className="text-muted-foreground">Método de pago:</span>{' '}
                                {sub.paymentMethodType}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-3 border-t">
                        <Button variant="default" onClick={onShowPlans}>Cambiar plan</Button>
                        {sub.autoRenew && sub.status === 'ACTIVE' && (
                            <Button variant="outline" onClick={onStopAutoRenew} disabled={actionLoading === 'stopAutoRenew'}>
                                {actionLoading === 'stopAutoRenew' ? 'Desactivando...' : 'Detener renovación'}
                            </Button>
                        )}
                        {sub.plan.name !== 'Free' && (sub.status === 'ACTIVE' || sub.status === 'GRACE_PERIOD') && (
                            <Button variant="destructive" onClick={onCancel} disabled={actionLoading === 'cancel'}>
                                {actionLoading === 'cancel' ? 'Cancelando...' : 'Cancelar suscripción'}
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {sub.status === 'GRACE_PERIOD' && (
                <Card className="border-warning/50 bg-warning/5">
                    <CardContent>
                        <p className="text-sm text-warning-foreground">
                            Tu suscripción está en período de gracia. Realiza el pago para evitar la suspensión.
                        </p>
                    </CardContent>
                </Card>
            )}

            {sub.status === 'SUSPENDED' && (
                <Card className="border-destructive/50 bg-destructive/5">
                    <CardContent>
                        <p className="text-sm text-destructive-foreground">
                            Tu suscripción ha sido suspendida. Activa un nuevo plan para reactivar tu cuenta.
                        </p>
                    </CardContent>
                </Card>
            )}

            {usage && sub.status === 'ACTIVE' && (
                <Card>
                    <CardContent className="py-4 space-y-4">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Uso del plan</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <UsageBar
                                label="Productos"
                                current={usage.product.current}
                                limit={usage.product.limit}
                            />
                            <UsageBar
                                label="Variantes"
                                current={usage.variation.current}
                                limit={usage.variation.limit}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className={sub.hasAIAccess ? 'text-green-600' : 'text-muted-foreground'}>
                                    {sub.hasAIAccess ? '✅' : '❌'}
                                </span>
                                <span>AI Access</span>
                                <span className="text-muted-foreground">
                                    {sub.hasAIAccess ? 'Activado' : 'No disponible en tu plan'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={sub.hasElectronicBilling ? 'text-green-600' : 'text-muted-foreground'}>
                                    {sub.hasElectronicBilling ? '✅' : '❌'}
                                </span>
                                <span>Facturación Electrónica</span>
                                <span className="text-muted-foreground">
                                    {sub.hasElectronicBilling ? 'Activado' : 'No disponible en tu plan'}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
