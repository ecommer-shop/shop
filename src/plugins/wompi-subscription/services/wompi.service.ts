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

@Injectable()
export class WompiService {
    private readonly apiClient: AxiosInstance;
    private readonly options: WompiSubscriptionPluginInitOptions;

    constructor() {
        this.options = {
            wompiApiUrl: process.env.WOMPI_API_URL || 'https://sandbox.wompi.co',
            wompiApiKey: process.env.WOMPI_API_KEY || '',
            wompiPublicKey: process.env.WOMPI_PUBLIC_KEY || '',
            wompiEventsSecret: process.env.WOMPI_EVENTS_SECRET || '',
            wompiIntegritySecret: process.env.WOMPI_INTEGRITY_SECRET || '',
            currency: process.env.WOMPI_CURRENCY || 'COP',
        };

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
        const amountInCents = payload.amount_in_cents;
        const reference = payload.reference;
        const signature = this.generateTransactionSignature(amountInCents, reference);

        try {
            const response = await this.apiClient.post('/transactions', {
                ...payload,
                signature,
            });
            Logger.debug(`Created transaction ${response.data.data.id} with status ${response.data.data.status}`, 'WompiService');
            return response.data.data;
        } catch (error: any) {
            Logger.error(`Failed to create transaction: ${error.message}`, 'WompiService');
            if (error.response?.data) {
                Logger.error(`Wompi error details: ${JSON.stringify(error.response.data)}`, 'WompiService');
            }
            throw new Error(`Failed to create transaction: ${error.response?.data?.message || error.message}`);
        }
    }

    async createRecurringTransaction(
        paymentSourceId: string,
        amountInCents: number,
        reference: string,
        customerEmail: string,
        acceptanceToken: string,
        personalAuthToken?: string,
        paymentMethod?: { type: string; installments: number },
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

    generateTransactionSignature(amountInCents: number, reference: string): string {
        const concatenated = `${reference}${amountInCents}${this.options.currency}${this.options.wompiIntegritySecret}`;
        return crypto.createHash('sha256').update(concatenated).digest('hex');
    }

    generateWidgetIntegritySignature(amountInCents: number, reference: string): string {
        return this.generateTransactionSignature(amountInCents, reference);
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
