export const CURRENT_INVOICE_QUOTA_QUERY = `
  query CurrentInvoiceQuotaStatus {
    currentInvoiceQuotaStatus {
      channelId
      channelCode
      billingActive
      remaining
      hasPlan
      isBlocked
      matiasCompanyIdConfigured
      matiasCompanyId
      matiasEmitProfileComplete
    }
  }
`;

export type CurrentInvoiceQuotaStatusPayload = {
  currentInvoiceQuotaStatus: {
    channelId: string;
    channelCode: string;
    billingActive: boolean;
    remaining: number | null;
    hasPlan: boolean;
    isBlocked: boolean;
    matiasCompanyIdConfigured: boolean;
    matiasCompanyId: string | null;
    matiasEmitProfileComplete: boolean;
  };
};
