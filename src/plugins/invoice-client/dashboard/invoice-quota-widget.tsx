import { Card, CardContent, CardHeader, CardTitle } from '@vendure/dashboard';
import { InvoiceQuotaStatusCard } from './invoice-quota-status-card';
import { useCurrentInvoiceQuotaStatus } from './use-current-invoice-quota-status';

/** Widget opcional para el tablero (vendedor / admin). */
export function InvoiceQuotaWidget() {
  const { data, isLoading } = useCurrentInvoiceQuotaStatus();
  const quotaStatus = data?.currentInvoiceQuotaStatus;

  return (
    <Card className="h-full w-full overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Cupo de facturación</CardTitle>
      </CardHeader>
      <CardContent>
        <InvoiceQuotaStatusCard quotaStatus={quotaStatus} isLoading={isLoading} variant="compact" />
      </CardContent>
    </Card>
  );
}
