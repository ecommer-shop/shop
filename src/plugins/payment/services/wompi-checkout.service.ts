import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger, OrderService, RequestContext, TransactionalConnection } from '@vendure/core';
import { WompiService } from '../../wompi-subscription/services/wompi.service';
import { SavedPaymentService } from './saved-payment.service';
import { RateLimitService } from './rate-limit.service';
import { ProcessedWebhookEvent } from '../entities/processed-webhook-event.entity';
import { PAYMENT_METHOD } from '../constants';

@Injectable()
export class WompiCheckoutService {
    private wompiService: WompiService;

    constructor(
        private savedPaymentService: SavedPaymentService,
        private rateLimitService: RateLimitService,
        private orderService: OrderService,
        @InjectRepository(ProcessedWebhookEvent)
        private processedRepo: Repository<ProcessedWebhookEvent>,
    ) {
        this.wompiService = new WompiService();
    }

    async initTransaction(input: {
        token?: string;
        acceptanceToken?: string;
        customerEmail: string;
        amountInCents: number;
        reference: string;
        currency: string;
        paymentMethodCode: string;
        sessionId?: string;
        deviceId?: string;
        financialInstitutionCode?: string;
        userType?: string;
        userLegalIdType?: string;
        userLegalId?: string;
        paymentDescription?: string;
        paymentMethodDetails?: Record<string, any>;
        installments?: number;
    }) {
        const methodCode = input.paymentMethodCode || 'CARD';
        const installments = input.installments || 1;

        const requiresPaymentSource = ['CARD', 'NEQUI', 'DAVIPLATA', 'BANCOLOMBIA_TRANSFER'];

        if (requiresPaymentSource.includes(methodCode) && input.token) {
            const { acceptanceToken: acceptToken, personalAuthToken } =
                await this.wompiService.getAcceptanceTokens();

            const finalAcceptToken = input.acceptanceToken || acceptToken;

            const paymentSource = await this.wompiService.createPaymentSource(
                methodCode === 'BANCOLOMBIA_TRANSFER' ? 'BANCOLOMBIA_TRANSFER' : methodCode,
                input.token,
                input.customerEmail,
                finalAcceptToken,
                personalAuthToken,
                input.sessionId,
                input.deviceId,
            );

            const txnPayload: Record<string, any> = {
                amount_in_cents: input.amountInCents,
                currency: input.currency,
                reference: input.reference,
                customer_email: input.customerEmail,
                payment_source_id: paymentSource.id,
            };

            if (methodCode === 'CARD') {
                txnPayload.payment_method = {
                    installments,
                };
            }

            if (input.sessionId) txnPayload.session_id = input.sessionId;
            if (input.deviceId) txnPayload.customer_data = { device_id: input.deviceId };

            return this.wompiService.createTransaction(txnPayload);
        }

        const payload: Record<string, any> = {
            amount_in_cents: input.amountInCents,
            currency: input.currency,
            reference: input.reference,
            customer_email: input.customerEmail,
            payment_method: { type: methodCode } as Record<string, any>,
        };

        if (input.financialInstitutionCode) {
            payload.payment_method.financial_institution_code = input.financialInstitutionCode;
        }
        if (input.userType !== undefined) {
            payload.payment_method.user_type = input.userType;
        }
        if (input.userLegalIdType) {
            payload.payment_method.user_legal_id_type = input.userLegalIdType;
        }
        if (input.userLegalId) {
            payload.payment_method.user_legal_id = input.userLegalId;
        }
        if (input.paymentDescription) {
            payload.payment_method.payment_description = input.paymentDescription;
        }
        if (input.paymentMethodDetails) {
            Object.assign(payload.payment_method, input.paymentMethodDetails);
        }
        if (input.sessionId) payload.session_id = input.sessionId;
        if (input.deviceId) payload.customer_data = { device_id: input.deviceId };

        return this.wompiService.createTransaction(payload);
    }

    async createPaymentSource(input: {
        token: string;
        type: string;
        customerEmail: string;
    }) {
        const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();

        if (!acceptanceToken || !personalAuthToken) {
            throw new Error('No se pudieron obtener los tokens de aceptación de Wompi');
        }

        const paymentSource = await this.wompiService.createPaymentSource(
            input.type,
            input.token,
            input.customerEmail,
            acceptanceToken,
            personalAuthToken,
        );
        return paymentSource;
    }

    async initSavedCardTransaction(input: {
        paymentSourceId: string;
        acceptanceToken: string;
        customerEmail: string;
        amountInCents: number;
        reference: string;
        currency: string;
        type?: string;
        installments?: number;
    }) {
        const customerId = input.customerEmail;
        if (!this.rateLimitService.checkLimit(customerId)) {
            throw new Error('Demasiados intentos. Intenta de nuevo en una hora.');
        }

        const payload: Record<string, any> = {
            payment_source_id: input.paymentSourceId,
            amount_in_cents: input.amountInCents,
            currency: input.currency,
            reference: input.reference,
            customer_email: input.customerEmail,
        };

        if (input.type === 'CARD') {
            payload.payment_method = {
                installments: input.installments || 1,
            };
        }

        return this.wompiService.createTransaction(payload);
    }

    async getTransactionStatus(transactionId: string) {
        return this.wompiService.getTransaction(transactionId);
    }

    async confirmPayment(
        ctx: RequestContext,
        input: {
            transactionId: string;
            saveCard: boolean;
        },
    ): Promise<{ success: boolean; orderCode: string | null; errorMessage: string | null; receiptUrl: string | null }> {
        try {
            const existing = await this.processedRepo.findOne({
                where: { wompiTransactionId: input.transactionId },
            });
            if (existing) {
                Logger.debug(`Transaction ${input.transactionId} already processed`, 'WompiCheckoutService');
                return { success: true, orderCode: existing.orderCode, errorMessage: null, receiptUrl: null };
            }

            const transaction = await this.wompiService.getTransaction(input.transactionId);
            if (transaction.status !== 'APPROVED') {
                return { success: false, orderCode: null, errorMessage: `Transacción en estado: ${transaction.status}`, receiptUrl: null };
            }

            const reference = transaction.reference;
            const orderCode = reference.lastIndexOf('-') > 0 ? reference.substring(0, reference.lastIndexOf('-')) : reference;
            const order = await this.orderService.findOneByCode(ctx, orderCode);
            if (!order) {
                return { success: false, orderCode: null, errorMessage: 'Orden no encontrada', receiptUrl: null };
            }

            const processed = this.processedRepo.create({
                wompiTransactionId: input.transactionId,
                eventType: 'transaction.updated',
                orderCode: order.code,
            });
            await this.processedRepo.save(processed);

            const receiptUrl = (transaction as any).receipt_url ?? null;

            Logger.debug(`Payment confirmed for order ${order.code}`, 'WompiCheckoutService');
            return { success: true, orderCode: order.code, errorMessage: null, receiptUrl };
        } catch (error: any) {
            Logger.error(`Confirm payment failed: ${error.message}`, 'WompiCheckoutService');
            return { success: false, orderCode: null, errorMessage: error.message, receiptUrl: null };
        }
    }

    async processWebhookTransaction(transaction: any): Promise<void> {
        const existing = await this.processedRepo.findOne({
            where: { wompiTransactionId: transaction.id },
        });
        if (existing) return;

        const reference = transaction.reference;
        if (!reference || reference.startsWith('SUB-')) return;

        const { RequestContextService, LanguageCode } = await import('@vendure/core');
        const rcs = new (RequestContextService as any)({} as any);
        const ctx = await rcs.create({ languageCode: LanguageCode.es, apiType: 'shop' });

        const orderCode = reference.lastIndexOf('-') > 0 ? reference.substring(0, reference.lastIndexOf('-')) : reference;
        const order = await this.orderService.findOneByCode(ctx, orderCode);
        if (!order) return;

        if (transaction.status === 'APPROVED') {
            const processed = this.processedRepo.create({
                wompiTransactionId: transaction.id,
                eventType: 'transaction.updated',
                orderCode: order.code,
            });
            await this.processedRepo.save(processed);

            await this.orderService.transitionToState(ctx, order.id, 'ArrangingPayment');
            await this.orderService.addPaymentToOrder(ctx, order.id, {
                method: PAYMENT_METHOD.code,
                metadata: { wompiTransactionId: transaction.id },
            });
        }
    }
}
