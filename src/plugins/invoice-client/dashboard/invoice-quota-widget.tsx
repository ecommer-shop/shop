import { Card, CardContent, CardHeader, CardTitle } from '@vendure/dashboard';
import { InvoiceQuotaStatusCard } from './invoice-quota-status-card';
import { useCurrentInvoiceQuotaStatus } from './use-current-invoice-quota-status';

/** Widget opcional para el tablero (vendedor / admin). */
export function InvoiceQuotaWidget() {
  // El hook ya selecciona currentInvoiceQuotaStatus; data ES el cupo.
  const { data: quotaStatus, isLoading, isError } = useCurrentInvoiceQuotaStatus();

  return (
    <Card className="h-full w-full overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Cupo de facturación</CardTitle>
      </CardHeader>
      <CardContent>
        {isError && !quotaStatus ? (
          <p className="text-sm text-destructive">No se pudo cargar el cupo.</p>
        ) : (
          <InvoiceQuotaStatusCard quotaStatus={quotaStatus} isLoading={isLoading} variant="compact" />
        )}
      </CardContent>
    </Card>
  );
}
