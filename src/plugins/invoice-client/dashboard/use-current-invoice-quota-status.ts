import { useQuery } from '@tanstack/react-query';
import { api } from '@vendure/dashboard';
import {
  CURRENT_INVOICE_QUOTA_QUERY,
  type CurrentInvoiceQuotaStatusPayload,
} from './current-invoice-quota-query';

const EMPTY: CurrentInvoiceQuotaStatusPayload['currentInvoiceQuotaStatus'] = {
  channelId: '',
  channelCode: '',
  billingActive: false,
  remaining: null,
  hasPlan: false,
  isBlocked: true,
  matiasCompanyIdConfigured: false,
  matiasCompanyId: null,
  matiasEmitProfileComplete: false,
};

export function useCurrentInvoiceQuotaStatus() {
  return useQuery({
    queryKey: ['current-invoice-quota-status'],
    queryFn: () =>
      api.query<CurrentInvoiceQuotaStatusPayload>(CURRENT_INVOICE_QUOTA_QUERY),
    select: (data) => data.currentInvoiceQuotaStatus ?? EMPTY,
  });
}
