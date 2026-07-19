import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@vendure/dashboard';
import type { CurrentInvoiceQuotaStatusPayload } from './current-invoice-quota-query';

type Quota = CurrentInvoiceQuotaStatusPayload['currentInvoiceQuotaStatus'];

export interface InvoiceQuotaStatusCardProps {
  quotaStatus: Quota | undefined;
  isLoading?: boolean;
  variant?: 'default' | 'compact';
}

function blockedReason(q: Quota): string {
  if (!q.billingActive) {
    return 'Facturación desactivada.';
  }
  if (q.remaining == null) {
    return 'Sin cupo numérico asignado en el canal.';
  }
  if (q.remaining <= 0) {
    return `Cupo agotado (${q.remaining}). El interruptor se apaga solo al llegar a 0.`;
  }
  if (!q.matiasEmitProfileComplete) {
    return 'Falta perfil Matias completo (Company ID, prefijo y resolución) en Ventas → Matias por tienda.';
  }
  return '';
}

export function InvoiceQuotaStatusCard({
  quotaStatus,
  isLoading,
  variant = 'default',
}: InvoiceQuotaStatusCardProps) {
  if (variant === 'compact') {
    if (isLoading && !quotaStatus) {
      return <p className="text-sm text-muted-foreground">Cupo de facturas: cargando…</p>;
    }
    if (!quotaStatus) {
      return <p className="text-sm text-destructive">Cupo de facturas: no disponible.</p>;
    }
    if (quotaStatus.isBlocked) {
      return (
        <p className="text-sm text-destructive">
          {quotaStatus.channelCode ? `«${quotaStatus.channelCode}» · ` : null}
          {blockedReason(quotaStatus)}
        </p>
      );
    }
    return (
      <p className="text-sm text-emerald-600 dark:text-emerald-400">
        Facturación activa · cupo restante: <strong>{quotaStatus.remaining}</strong>
        {quotaStatus.channelCode ? ` (${quotaStatus.channelCode})` : null}
      </p>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cupo de facturación de la tienda actual</CardTitle>
        <CardDescription>Facturas disponibles en el paquete activo de esta tienda.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {isLoading && !quotaStatus ? (
          <p className="text-sm text-muted-foreground">Cargando estado de cupo…</p>
        ) : !quotaStatus ? (
          <p className="text-sm text-destructive">No se pudo cargar el estado de cupo.</p>
        ) : quotaStatus.isBlocked ? (
          <p className="text-sm text-destructive">
            <strong>{quotaStatus.channelCode || 'Esta tienda'}</strong>: {blockedReason(quotaStatus)}
          </p>
        ) : (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            <strong>{quotaStatus.channelCode}</strong>: facturación <strong>activa</strong>. Cupo restante:{' '}
            <strong>{quotaStatus.remaining}</strong>
            {quotaStatus.matiasEmitProfileComplete ? <> · Perfil Matias completo</> : null}.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
