import { Injectable } from '@nestjs/common';
import { Logger } from '@vendure/core';
import { WompiSubscriptionPluginInitOptions, WompiPaymentSourceResponse, WompiCreateTransactionResponse } from '../constants';
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

    async createPaymentSource(token: string, customerEmail: string): Promise<WompiPaymentSourceResponse> {
        try {
            const response = await this.apiClient.post('/v1/payment_sources', {
                token,
                type: 'CARD',
                customer_email: customerEmail,
            });
            Logger.debug('Created payment source: ' + response.data.data.id, 'WompiService');
            return response.data.data;
        } catch (error: any) {
            Logger.error('Failed to create payment source: ' + error.message, 'WompiService');
            throw new Error(`Failed to create payment source: ${error.response?.data?.message || error.message}`);
        }
    }

    async createRecurringTransaction(
        paymentSourceId: string,
        amountInCents: number,
        reference: string,
        customerEmail: string,
    ): Promise<WompiCreateTransactionResponse> {
        const signature = this.generateTransactionSignature(amountInCents, reference);

        try {
            const response = await this.apiClient.post('/v1/transactions', {
                payment_source_id: paymentSourceId,
                amount_in_cents: amountInCents,
                currency: this.options.currency,
                reference,
                customer_email: customerEmail,
                signature,
            });
            Logger.debug(`Created transaction ${response.data.data.id} with status ${response.data.data.status}`, 'WompiService');
            return response.data.data;
        } catch (error: any) {
            Logger.error(`Failed to create transaction: ${error.message}`, 'WompiService');
            throw new Error(`Failed to create transaction: ${error.response?.data?.error?.message || error.message}`);
        }
    }

    async getTransaction(transactionId: string): Promise<WompiCreateTransactionResponse> {
        try {
            const response = await this.apiClient.get(`/v1/transactions/${transactionId}`);
            return response.data.data;
        } catch (error: any) {
            Logger.error(`Failed to get transaction: ${error.message}`, 'WompiService');
            throw new Error(`Failed to get transaction: ${error.message}`);
        }
    }

    generateTransactionSignature(amountInCents: number, reference: string): string {
        const concatenated = `${reference}${amountInCents}${this.options.currency}${this.options.wompiIntegritySecret}`;
        return crypto.createHash('sha256').update(concatenated).digest('hex');
    }

    validateWebhookSignature(payload: any): boolean {
        try {
            const signature = payload.signature;
            if (!signature || !signature.properties || !signature.checksum) {
                return false;
            }

            const transaction = payload.data?.transaction;
            if (!transaction) {
                return false;
            }

            const toSign = signature.properties.map((prop: string) => {
                return this.getNestedValue(transaction, prop);
            }).join('');

            const signed = crypto.createHmac('sha256', this.options.wompiEventsSecret).update(toSign).digest('hex');
            return signed === signature.checksum;
        } catch (error) {
            Logger.error('Webhook signature validation failed', 'WompiService');
            return false;
        }
    }

    private getNestedValue(obj: any, path: string): string {
        return path.split('.').reduce((current, key) => current?.[key], obj) ?? '';
    }
}