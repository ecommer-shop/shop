/** Query Admin API: cupo según el canal activo en el panel. */
export const CURRENT_INVOICE_QUOTA_STATUS_QUERY = `
  query CurrentInvoiceQuotaStatus {
    currentInvoiceQuotaStatus {
      channelId
      channelCode
      billingActive
      remaining
      hasPlan
      isBlocked
      matiasTokenConfigured
      matiasPrefixConfigured
      matiasResolutionConfigured
      matiasInvoicePrefix
    }
  }
` as const;

export type CurrentInvoiceQuotaStatusPayload = {
  currentInvoiceQuotaStatus: {
    channelId: string;
    channelCode: string;
    billingActive: boolean;
    remaining: number | null;
    hasPlan: boolean;
    isBlocked: boolean;
    matiasTokenConfigured: boolean;
    matiasPrefixConfigured: boolean;
    matiasResolutionConfigured: boolean;
    matiasInvoicePrefix: string | null;
  };
};
