export const INVOICE_CLIENT_PLUGIN_OPTIONS = 'INVOICE_CLIENT_PLUGIN_OPTIONS';

// Channel custom fields
export const CHANNEL_INVOICE_BILLING_ACTIVE_FIELD = 'invoiceBillingActive';
export const CHANNEL_INVOICE_LIMIT_REMAINING_FIELD = 'invoiceLimitRemaining';
/** UUID del cliente en Matias (modelo Casa de Software). Reemplaza token por tienda. */
export const CHANNEL_MATIAS_COMPANY_ID_FIELD = 'matiasCompanyId';
/** @deprecated Usar matiasCompanyId + token maestro en el microservicio. */
export const CHANNEL_MATIAS_ACCESS_TOKEN_FIELD = 'matiasAccessToken';
/** Prefijo DIAN de la numeración de esta tienda (obligatorio al emitir). */
export const CHANNEL_MATIAS_INVOICE_PREFIX_FIELD = 'matiasInvoicePrefix';
/** Número de resolución DIAN de esta tienda (obligatorio al emitir). */
export const CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD = 'matiasResolutionNumber';
export const CHANNEL_MATIAS_GLOBAL_POOL_TOTAL_FIELD = 'matiasGlobalPoolTotal';
export const CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD = 'matiasGlobalPoolSellable';
export const CHANNEL_BILLING_CERT_STATUS_FIELD = 'billingCertificateStatus';
export const CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD = 'billingCertificatePaymentStatus';
export const CHANNEL_BILLING_CERT_TYPE_FIELD = 'billingCertificateType';
export const CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD = 'billingCertificateExpiresAt';
export const CHANNEL_BILLING_CERT_PAID_AT_FIELD = 'billingCertificatePaidAt';
export const CHANNEL_BILLING_CERT_DOC_CHAMBER_FIELD = 'billingCertificateDocChamber';
export const CHANNEL_BILLING_CERT_DOC_RUT_FIELD = 'billingCertificateDocRut';
export const CHANNEL_BILLING_CERT_DOC_NIT_FIELD = 'billingCertificateDocNit';
export const CHANNEL_BILLING_CERT_DOC_DIAN_RESOLUTION_FIELD = 'billingCertificateDocDianResolution';
/** Asset ID del logo de la tienda (subido con los docs del certificado). */
export const CHANNEL_BILLING_CERT_DOC_STORE_LOGO_FIELD = 'billingCertificateDocStoreLogo';
/** @deprecated Usar billingCertificateDocDianResolution (asset id). */
export const CHANNEL_BILLING_DIAN_RESOLUTION_NUMBER_FIELD = 'billingDianResolutionNumber';
export const CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD = 'billingCertificateReviewNote';
export const CHANNEL_BILLING_PLAN_LAST_PURCHASED_AT_FIELD = 'billingPlanLastPurchasedAt';
export const CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD = 'billingPlanPurchaseHistory';

// Additional shared keys
export const CUSTOMER_DNI_FIELD = 'dni';
export const CUSTOMER_IDENTITY_DOCUMENT_ID_FIELD = 'identityDocumentId';
export const ADDRESS_MATIAS_CITY_ID_FIELD = 'matiasCityId';
export const INVOICE_JOB_QUEUE_NAME = 'invoice-create';
export const MATIAS_BEARER_TOKEN_HEADER = 'X-Matias-Bearer-Token';
export const MATIAS_COMPANY_ID_HEADER = 'X-Matias-Company-Id';

