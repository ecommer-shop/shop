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
export const MANUAL_RENEWAL_REMINDER_DAYS = 5;

export const PLAN_HIERARCHY: Record<string, number> = {
    [DEFAULT_PLAN_NAMES.FREE]: 0,
    [DEFAULT_PLAN_NAMES.TIENDA]: 1,
    [DEFAULT_PLAN_NAMES.OMNICHANNEL]: 2,
};

export enum PaymentFlowType {
    RECURRENTE = 'RECURRENTE',
    MANUAL = 'MANUAL',
}

export const RECURRENTE_METHODS = ['CARD', 'NEQUI', 'DAVIPLATA', 'BANCOLOMBIA_TRANSFER'] as const;
export const MANUAL_METHODS = ['PSE', 'BANCOLOMBIA_QR', 'BANCOLOMBIA_COLLECT', 'PCOL', 'BANCOLOMBIA_BNPL', 'SU_PLUS'] as const;
export const ALL_PAYMENT_METHODS = [...RECURRENTE_METHODS, ...MANUAL_METHODS] as const;
export type PaymentMethod = typeof ALL_PAYMENT_METHODS[number];

export const PAYMENT_METHOD_FLOW: Record<PaymentMethod, PaymentFlowType> = {
    CARD: PaymentFlowType.RECURRENTE,
    NEQUI: PaymentFlowType.RECURRENTE,
    DAVIPLATA: PaymentFlowType.RECURRENTE,
    BANCOLOMBIA_TRANSFER: PaymentFlowType.RECURRENTE,
    PSE: PaymentFlowType.MANUAL,
    BANCOLOMBIA_QR: PaymentFlowType.MANUAL,
    BANCOLOMBIA_COLLECT: PaymentFlowType.MANUAL,
    PCOL: PaymentFlowType.MANUAL,
    BANCOLOMBIA_BNPL: PaymentFlowType.MANUAL,
    SU_PLUS: PaymentFlowType.MANUAL,
};

export const RECURRENT_METHODS_SET = new Set<string>(RECURRENTE_METHODS);
export const MANUAL_METHODS_SET = new Set<string>(MANUAL_METHODS);

export interface WompiSubscriptionPluginInitOptions {
    wompiApiUrl: string;
    wompiApiKey: string;
    wompiPublicKey: string;
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
    status?: string;
}

export interface WompiCreateTransactionResponse {
    id: string;
    status: string;
    reference: string;
    amount_in_cents: number;
    currency: string;
    payment_method_type?: string;
    payment_method?: {
        type: string;
        extra?: {
            async_payment_url?: string;
            qr_image?: string;
            url?: string;
            url_services?: {
                token: string;
                code_otp_send: string;
                code_otp_validate: string;
            };
        };
    };
}

export interface WompiTransactionEvent {
    event: string;
    data: {
        transaction: {
            id: string;
            reference: string;
            status: 'APPROVED' | 'DECLINED' | 'VOIDED' | 'PENDING' | 'ERROR';
            amount_in_cents: number;
            currency: string;
            payment_source_id?: string;
            payment_method_type?: string;
            customer_email?: string;
        };
    };
    environment: string;
    signature: {
        checksum: string;
        properties: string[];
    };
    timestamp: number;
    sent_at: string;
}

export interface WompiAcceptanceTokenResponse {
    data: {
        presigned_acceptance: {
            acceptance_token: string;
        };
        presigned_personal_data_auth: {
            acceptance_token: string;
        };
    };
}
