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
    }) {
        const methodCode = input.paymentMethodCode || 'CARD';

        if (methodCode === 'CARD' || methodCode === 'CARD_SAVED') {
            const payload: Record<string, any> = {
                amount_in_cents: input.amountInCents,
                currency: input.currency,
                reference: input.reference,
                customer_email: input.customerEmail,
                acceptance_token: input.acceptanceToken,
                payment_method: {
                    type: 'CARD',
                    token: input.token,
                    is_three_ds: true,
                },
            };

            if (input.sessionId) payload.session_id = input.sessionId;
            if (input.deviceId) payload.customer_data = { device_id: input.deviceId };

            return this.wompiService.createTransaction(payload);
        }

        const payload: Record<string, any> = {
            amount_in_cents: input.amountInCents,
            currency: input.currency,
            reference: input.reference,
            customer_email: input.customerEmail,
            payment_method: {
                type: methodCode,
            },
        };

        if (input.sessionId) payload.session_id = input.sessionId;
        if (input.deviceId) payload.customer_data = { device_id: input.deviceId };

        return this.wompiService.createTransaction(payload);
    }

    async initSavedCardTransaction(input: {
        paymentSourceId: string;
        acceptanceToken: string;
        customerEmail: string;
        amountInCents: number;
        reference: string;
        currency: string;
    }) {
        const customerId = input.customerEmail;
        if (!this.rateLimitService.checkLimit(customerId)) {
            throw new Error('Demasiados intentos. Intenta de nuevo en una hora.');
        }

        return this.wompiService.createTransaction({
            payment_source_id: input.paymentSourceId,
            amount_in_cents: input.amountInCents,
            currency: input.currency,
            reference: input.reference,
            customer_email: input.customerEmail,
            acceptance_token: input.acceptanceToken,
            payment_method: {
                type: 'CARD',
                is_three_ds: true,
                recurrent: false,
            },
        });
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
            const order = await this.orderService.findOneByCode(ctx, reference);
            if (!order) {
                return { success: false, orderCode: null, errorMessage: 'Orden no encontrada', receiptUrl: null };
            }

            const txn = transaction as any;
            if (input.saveCard && txn.payment_method?.extra) {
                const extra = txn.payment_method.extra;
                const paymentSource = await this.wompiService.createPaymentSource(
                    'CARD',
                    input.transactionId,
                    txn.customer_email || '',
                    '',
                    '',
                );

                if (paymentSource?.id) {
                    await this.savedPaymentService.save({
                        customerId: ctx.activeUserId?.toString() ?? txn.customer_email ?? '',
                        type: 'CARD',
                        wompiPaymentSourceId: paymentSource.id,
                        lastFour: extra.last_four || '',
                        brand: extra.brand || '',
                        expiryMonth: String(extra.exp_month || '').padStart(2, '0'),
                        expiryYear: String(extra.exp_year || ''),
                        cardHolderName: extra.card_holder || '',
                        channelToken: ctx.channel?.token ?? '',
                    });
                }
            }

            await this.orderService.transitionToState(ctx, order.id, 'ArrangingPayment');

            await this.orderService.addPaymentToOrder(ctx, order.id, {
                method: PAYMENT_METHOD.code,
                metadata: {
                    wompiTransactionId: input.transactionId,
                },
            });

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

        const order = await this.orderService.findOneByCode(ctx, reference);
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
