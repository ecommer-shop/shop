import { Injectable } from '@nestjs/common';
import { Logger } from '@vendure/core';
import {
    WompiSubscriptionPluginInitOptions,
    WompiPaymentSourceResponse,
    WompiCreateTransactionResponse,
    WompiAcceptanceTokenResponse,
} from '../interfaces';
import axios, { AxiosInstance } from 'axios';
import crypto from 'crypto';

export type WompiCredentials = {
    publicKey: string;
    apiKey: string;
    integritySecret: string;
    eventsSecret: string;
    apiUrl: string;
    currency: string;
};

@Injectable()
export class WompiService {
    private readonly apiClient: AxiosInstance;
    private readonly options: WompiSubscriptionPluginInitOptions;

    constructor() {
        const creds = WompiService.resolveCredentialsFromEnv();
        this.options = {
            wompiApiUrl: creds.apiUrl,
            wompiApiKey: creds.apiKey,
            wompiPublicKey: creds.publicKey,
            wompiEventsSecret: creds.eventsSecret,
            wompiIntegritySecret: creds.integritySecret,
            currency: creds.currency,
        };

        if (!this.options.wompiIntegritySecret) {
            Logger.warn(
                'WOMPI_INTEGRITY_SECRET (o PAYMENT_SECRET_KEY) no está configurado — las transacciones fallarán con firma inválida.',
                'WompiService',
            );
        }

        this.apiClient = axios.create({
            baseURL: this.options.wompiApiUrl,
            headers: {
                'Authorization': `Bearer ${this.options.wompiApiKey}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async getAcceptanceTokens(): Promise<{ acceptanceToken: string; personalAuthToken: string }> {
        try {
            const publicKey = this.options.wompiPublicKey;
            const response = await axios.get<WompiAcceptanceTokenResponse>(
                `${this.options.wompiApiUrl}/merchants/${publicKey}`,
            );
            const merchantData = response.data.data;
            return {
                acceptanceToken: merchantData?.presigned_acceptance?.acceptance_token,
                personalAuthToken: merchantData?.presigned_personal_data_auth?.acceptance_token,
            };
        } catch (error: any) {
            Logger.error('Failed to get acceptance tokens: ' + error.message, 'WompiService');
            throw new Error('Failed to get acceptance tokens');
        }
    }

    async createPaymentSource(
        type: string,
        token: string,
        customerEmail: string,
        acceptanceToken: string,
        personalAuthToken: string,
        sessionId?: string,
        deviceId?: string,
    ): Promise<WompiPaymentSourceResponse> {
        try {
            const body: any = {
                type,
                token,
                customer_email: customerEmail,
                acceptance_token: acceptanceToken,
                accept_personal_auth: personalAuthToken,
            };
            if (sessionId) {
                body.session_id = sessionId;
            }
            if (deviceId) {
                body.customer_data = { device_id: deviceId };
            }
            const response = await this.apiClient.post('/payment_sources', body);
            Logger.debug('Created payment source: ' + response.data.data.id, 'WompiService');
            return response.data.data;
        } catch (error: any) {
            Logger.error('Failed to create payment source: ' + error.message, 'WompiService');
            if (error.response?.data) {
                Logger.error(`Wompi error details: ${JSON.stringify(error.response.data)}`, 'WompiService');
            }
            throw new Error(`Failed to create payment source: ${error.response?.data?.message || error.message}`);
        }
    }

    async createTransaction(payload: Record<string, any>): Promise<WompiCreateTransactionResponse> {
        if (!this.options.wompiIntegritySecret) {
            throw new Error(
                'WOMPI_INTEGRITY_SECRET no está configurado en el servidor (debe ser del mismo comercio que WOMPI_PUBLIC_KEY y WOMPI_API_KEY).',
            );
        }

        const amountInCents = Number(payload.amount_in_cents);
        const reference = String(payload.reference ?? '');
        const currency = String(payload.currency ?? this.options.currency);
        const signature = this.generateTransactionSignature(amountInCents, reference, currency);

        const body: Record<string, unknown> = { ...payload, amount_in_cents: amountInCents, currency, signature };
        if (!body.redirect_url) {
            delete body.redirect_url;
        }

        try {
            const response = await this.apiClient.post('/transactions', body);
            Logger.debug(`Created transaction ${response.data.data.id} with status ${response.data.data.status}`, 'WompiService');
            return response.data.data;
        } catch (error: any) {
            const detail = WompiService.formatApiError(error);
            Logger.error(`Failed to create transaction: ${detail}`, 'WompiService');
            if (error.response?.data) {
                Logger.error(`Wompi error details: ${JSON.stringify(error.response.data)}`, 'WompiService');
            }
            throw new Error(`Failed to create transaction: ${detail}`);
        }
    }

    async createRecurringTransaction(
        paymentSourceId: string,
        amountInCents: number,
        reference: string,
        customerEmail: string,
        acceptanceToken: string,
        personalAuthToken?: string,
        paymentMethod?: { installments: number },
    ): Promise<WompiCreateTransactionResponse> {
        return this.createTransaction({
            payment_source_id: paymentSourceId,
            amount_in_cents: amountInCents,
            currency: this.options.currency,
            reference,
            customer_email: customerEmail,
            acceptance_token: acceptanceToken,
            accept_personal_auth: personalAuthToken,
            ...(paymentMethod ? { payment_method: paymentMethod } : {}),
        });
    }

    async getTransaction(transactionId: string): Promise<WompiCreateTransactionResponse> {
        try {
            const response = await this.apiClient.get(`/transactions/${transactionId}`);
            return response.data.data;
        } catch (error: any) {
            Logger.error(`Failed to get transaction: ${error.message}`, 'WompiService');
            throw new Error(`Failed to get transaction: ${error.message}`);
        }
    }

    async pollTransactionUntilFinal(
        transactionId: string,
        maxAttempts = 30,
        intervalMs = 2000,
    ): Promise<WompiCreateTransactionResponse> {
        for (let i = 0; i < maxAttempts; i++) {
            const transaction = await this.getTransaction(transactionId);
            if (transaction.status !== 'PENDING') {
                return transaction;
            }
            await new Promise((resolve) => setTimeout(resolve, intervalMs));
        }
        throw new Error('Transaction polling timed out');
    }

    async deletePaymentSource(paymentSourceId: string): Promise<void> {
        try {
            await this.apiClient.delete(`/payment_sources/${paymentSourceId}`);
            Logger.debug('Deleted payment source: ' + paymentSourceId, 'WompiService');
        } catch (error: any) {
            Logger.error(`Failed to delete payment source ${paymentSourceId}: ${error.message}`, 'WompiService');
        }
    }

    generateTransactionSignature(amountInCents: number, reference: string, currency?: string): string {
        const cur = currency ?? this.options.currency;
        const concatenated = `${reference}${amountInCents}${cur}${this.options.wompiIntegritySecret}`;
        return crypto.createHash('sha256').update(concatenated).digest('hex');
    }

    generateWidgetIntegritySignature(amountInCents: number, reference: string): string {
        return this.generateTransactionSignature(amountInCents, reference);
    }

    /** Llave pública para tokenización en el dashboard (WompiJS). */
    getPublicKey(): string {
        return this.options.wompiPublicKey;
    }

    getCredentials(): WompiCredentials {
        return {
            publicKey: this.options.wompiPublicKey,
            apiKey: this.options.wompiApiKey,
            integritySecret: this.options.wompiIntegritySecret,
            eventsSecret: this.options.wompiEventsSecret,
            apiUrl: this.options.wompiApiUrl,
            currency: this.options.currency ?? 'COP',
        };
    }

    /**
     * Resuelve credenciales Wompi sin mezclar comercios.
     * Prioriza el bloque WOMPI_* completo; si no, el bloque PAYMENT_* legacy.
     */
    static resolveCredentialsFromEnv(): WompiCredentials {
        const trim = (value?: string) => value?.trim() ?? '';

        const wompiPublic = trim(process.env.WOMPI_PUBLIC_KEY);
        const wompiIntegrity = trim(process.env.WOMPI_INTEGRITY_SECRET);
        const wompiApiKey = trim(process.env.WOMPI_API_KEY);
        const wompiEvents = trim(process.env.WOMPI_EVENTS_SECRET);
        const apiUrl = trim(process.env.WOMPI_API_URL) || 'https://sandbox.wompi.co/v1';
        const currency = trim(process.env.WOMPI_CURRENCY) || 'COP';

        if (wompiPublic && wompiIntegrity && wompiApiKey) {
            return {
                publicKey: wompiPublic,
                apiKey: wompiApiKey,
                integritySecret: wompiIntegrity,
                eventsSecret: wompiEvents,
                apiUrl,
                currency,
            };
        }

        const paymentPublic = trim(process.env.PAYMENT_PUBLIC_KEY);
        const paymentSecret = trim(process.env.PAYMENT_SECRET_KEY);
        const paymentPrivate = trim(process.env.PAYMENT_PRIVATE_KEY);

        if (paymentPublic && paymentSecret && paymentPrivate) {
            return {
                publicKey: paymentPublic,
                apiKey: paymentPrivate,
                integritySecret: paymentSecret,
                eventsSecret: wompiEvents,
                apiUrl,
                currency,
            };
        }

        return {
            publicKey: wompiPublic || paymentPublic,
            apiKey: wompiApiKey || paymentPrivate,
            integritySecret: wompiIntegrity || paymentSecret,
            eventsSecret: wompiEvents,
            apiUrl,
            currency,
        };
    }

    static resolvePublicKeyFromEnv(): string {
        return WompiService.resolveCredentialsFromEnv().publicKey;
    }
    static formatApiError(error: any): string {
        const data = error?.response?.data;
        const messages = data?.error?.messages;
        if (messages && typeof messages === 'object') {
            const parts: string[] = [];
            for (const [field, value] of Object.entries(messages)) {
                if (Array.isArray(value)) {
                    for (const msg of value) {
                        parts.push(`${field}: ${String(msg)}`);
                    }
                }
            }
            if (parts.length > 0) {
                return parts.join('; ');
            }
        }
        if (typeof data?.error?.reason === 'string' && data.error.reason.trim()) {
            return data.error.reason;
        }
        if (typeof data?.message === 'string' && data.message.trim()) {
            return data.message;
        }
        return error?.message || 'Error desconocido';
    }

    validateWebhookSignature(payload: any): boolean {
        try {
            const signature = payload.signature;
            if (!signature || !signature.properties || !signature.checksum) {
                return false;
            }

            const data = payload.data?.transaction;
            if (!data) {
                return false;
            }

            const values = signature.properties.map((prop: string) => {
                return this.getNestedValue(data, prop);
            });

            const toSign = values.join('') + (payload.timestamp ?? '');

            const eventsSecret = this.options.wompiEventsSecret;
            const signed = crypto.createHash('sha256').update(toSign + eventsSecret).digest('hex').toUpperCase();

            const checksum = (signature.checksum as string).toUpperCase();
            return signed === checksum;
        } catch (error) {
            Logger.error('Webhook signature validation failed', 'WompiService');
            return false;
        }
    }

    private getNestedValue(obj: any, path: string): string {
        return path.split('.').reduce((current, key) => current?.[key], obj) ?? '';
    }
}
