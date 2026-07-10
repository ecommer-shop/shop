import { Controller, Post, Body, HttpException, HttpStatus, Inject, HttpCode } from '@nestjs/common';
import { RequestContextService, LanguageCode, OrderService, Logger } from '@vendure/core';
import { PluginInitOptions } from '../types';
import { loggerCtx, PAYMENT_METHOD, PAYMENT_PLUGIN_OPTIONS } from '../constants';
import { WompiCheckoutService } from '../services/wompi-checkout.service';
import { WompiService } from '../../wompi-subscription/services/wompi.service';
import crypto from 'crypto';

@Controller('api/payment')
export class PaymentController {
    private wompiService: WompiService;

    constructor(
        @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
        private requestContextService: RequestContextService,
        private orderService: OrderService,
        private checkoutService: WompiCheckoutService,
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

        const reference = transaction.reference;
        if (!reference) {
            throw new HttpException('Missing transaction reference', HttpStatus.BAD_REQUEST);
        }

        if (reference.startsWith('SUB-')) {
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
