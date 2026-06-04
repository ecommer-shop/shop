import { useQuery } from '@tanstack/react-query';
import { api } from '@vendure/dashboard';
import {
  CURRENT_INVOICE_QUOTA_STATUS_QUERY,
  type CurrentInvoiceQuotaStatusPayload,
} from './current-invoice-quota-query';

const emptyQuota: CurrentInvoiceQuotaStatusPayload['currentInvoiceQuotaStatus'] = {
  channelId: '',
  channelCode: '',
  billingActive: false,
  remaining: null,
  hasPlan: false,
  isBlocked: true,
  matiasTokenConfigured: false,
  matiasPrefixConfigured: false,
  matiasResolutionConfigured: false,
  matiasInvoicePrefix: null,
};

export function useCurrentInvoiceQuotaStatus() {
  return useQuery({
    queryKey: ['current-invoice-quota-status'],
    queryFn: async (): Promise<CurrentInvoiceQuotaStatusPayload> => {
      try {
        return await api.query<CurrentInvoiceQuotaStatusPayload>(CURRENT_INVOICE_QUOTA_STATUS_QUERY);
      } catch {
        return { currentInvoiceQuotaStatus: emptyQuota };
      }
    },
  });
}
