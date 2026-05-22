export const WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS = Symbol('WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS');
export const loggerCtx = 'WompiSubscriptionPlugin';

export const FEATURE_CODES = {
    MAX_PRODUCTS: 'max_products',
    MAX_VARIATIONS: 'max_variations',
    AI_ACCESS: 'ai_access',
    ELECTRONIC_BILLING: 'electronic_billing',
} as const;

export const DEFAULT_PLAN_NAMES = {
    FREE: 'Free',
    TIENDA: 'Tienda',
    OMNICHANNEL: 'Omnichannel',
} as const;

export const GRACE_PERIOD_DAYS = 15;
export const SUSPENSION_DAYS = 30;

export interface WompiSubscriptionPluginInitOptions {
    wompiApiUrl: string;
    wompiApiKey: string;
    wompiEventsSecret: string;
    wompiIntegritySecret: string;
    currency?: string;
}

export interface WompiPaymentSourceResponse {
    id: string;
    type: string;
    token: string;
    customer_email: string;
    customer_id?: string;
}

export interface WompiCreateTransactionResponse {
    id: string;
    status: string;
    reference: string;
    amount_in_cents: number;
    currency: string;
}

export interface WompiTransactionEvent {
    event: string;
    data: {
        transaction: {
            id: string;
            reference: string;
            status: 'APPROVED' | 'DECLINED' | 'VOIDED' | 'PENDING';
            amount_in_cents: number;
            currency: string;
            payment_source_id?: string;
            customer_email?: string;
        };
    };
    signature: {
        checksum: string;
        properties: string[];
    };
}