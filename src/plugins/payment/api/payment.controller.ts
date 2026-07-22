import { Controller, Post, Body, HttpException, HttpStatus, Inject, HttpCode } from '@nestjs/common';
import { RequestContextService, LanguageCode, Logger } from '@vendure/core';
import { PluginInitOptions } from '../types';
import { loggerCtx, PAYMENT_PLUGIN_OPTIONS } from '../constants';
import { WompiCheckoutService } from '../services/wompi-checkout.service';
import { BillingPlansService } from '../../invoice-client/services/billing-plans.service';
import {
    parseCertPaymentReference,
    parsePlanPaymentReference,
} from '../../invoice-client/payment-reference.util';
import { WompiService } from '../../wompi-subscription/services/wompi.service';

@Controller('api/payment')
export class PaymentController {
    private wompiService: WompiService;

    constructor(
        @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
        private requestContextService: RequestContextService,
        private checkoutService: WompiCheckoutService,
        private billingPlans: BillingPlansService,
    ) {
        this.wompiService = new WompiService();
    }

    @Post('confirm')
    @HttpCode(200)
    async paymentConfirm(@Body() payload: any) {
        Logger.debug('Received payment confirmation webhook', loggerCtx);

        if (!this.wompiService.validateWebhookSignature(payload)) {
            Logger.warn('Invalid webhook signature', loggerCtx);
            throw new HttpException('Invalid webhook signature', HttpStatus.UNAUTHORIZED);
        }

        const transaction = payload.data?.transaction;
        if (!transaction) {
            throw new HttpException('Missing transaction data', HttpStatus.BAD_REQUEST);
        }

        const reference = String(transaction.reference || '');
        if (!reference) {
            throw new HttpException('Missing transaction reference', HttpStatus.BAD_REQUEST);
        }

        if (reference.startsWith('SUB-')) {
            return { status: 'ok' };
        }

        if (transaction.status === 'APPROVED' && (reference.startsWith('CERT::') || reference.startsWith('CERT-'))) {
            const ctx = await this.requestContextService.create({
                languageCode: LanguageCode.es,
                apiType: 'shop',
            });
            const channelCode = parseCertPaymentReference(reference);
            if (!channelCode) {
                throw new HttpException('Invalid certificate payment reference', HttpStatus.BAD_REQUEST);
            }
            await this.billingPlans.applyCertificatePaymentByChannelCode(ctx, channelCode);
            return { status: 'ok' };
        }

        if (transaction.status === 'APPROVED' && (reference.startsWith('PLAN::') || reference.startsWith('PLAN-'))) {
            const ctx = await this.requestContextService.create({
                languageCode: LanguageCode.es,
                apiType: 'shop',
            });
            const parsed = parsePlanPaymentReference(reference);
            if (!parsed) {
                throw new HttpException('Invalid invoice plan reference', HttpStatus.BAD_REQUEST);
            }
            const { channelCode, planCode } = parsed;
            await this.billingPlans.applyPlanPurchaseFromWebhook(ctx, channelCode, planCode, reference);
            return { status: 'ok' };
        }

        try {
            await this.checkoutService.processWebhookTransaction(transaction);
            return { status: 'ok' };
        } catch (error: any) {
            Logger.error(`Webhook processing failed: ${error.message}`, loggerCtx);
            return { status: 'ok' };
        }
    }
}
