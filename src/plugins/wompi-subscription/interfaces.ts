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
    receipt_url?: string;
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
            last_four?: string;
            brand?: string;
            card_holder?: string;
            exp_month?: string;
            exp_year?: string;
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
