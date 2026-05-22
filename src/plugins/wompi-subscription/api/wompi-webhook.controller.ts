import { Controller, Post, Body, HttpException, HttpStatus, Headers, Inject } from '@nestjs/common';
import { Logger, RequestContextService, LanguageCode } from '@vendure/core';
import { WompiSubscriptionPluginInitOptions, WompiTransactionEvent } from '../constants';
import { WompiService } from '../services/wompi.service';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';

@Controller('api/wompi-subscription')
export class WompiWebhookController {
    private readonly logger = new Logger();

    constructor(
        private wompiService: WompiService,
        private subscriptionService: SubscriptionService,
        private requestContextService: RequestContextService,
    ) { }

    @Post('webhook')
    async handleWebhook(@Body() payload: WompiTransactionEvent, @Headers('x-wompi-signature') signature: string) {
        this.logger.debug('Received Wompi webhook event: ' + payload.event, 'WompiWebhookController');

        if (!this.wompiService.validateWebhookSignature(payload)) {
            this.logger.warn('Invalid webhook signature', 'WompiWebhookController');
            throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
        }

        const transaction = payload.data.transaction;

        if (payload.event === 'transaction.updated') {
            if (transaction.status === 'APPROVED') {
                await this.handleApprovedTransaction(transaction);
            } else if (transaction.status === 'DECLINED') {
                await this.handleDeclinedTransaction(transaction);
            }
        }

        return { status: 'ok' };
    }

    private async handleApprovedTransaction(transaction: any) {
        const reference = transaction.reference;

        if (reference.startsWith('SUB-')) {
            const subscriptionIdMatch = reference.match(/SUB-(\d+)-/);
            if (subscriptionIdMatch) {
                const subscriptionId = parseInt(subscriptionIdMatch[1], 10);
                Logger.info(`Processing approved transaction for subscription ${subscriptionId}`, 'WompiWebhookController');

                const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);

                if (subscription && subscription.status === SubscriptionStatus.GRACE_PERIOD) {
                    await this.subscriptionService.updateSubscriptionStatus(subscriptionId, SubscriptionStatus.ACTIVE);
                    Logger.info(`Restored subscription ${subscriptionId} to ACTIVE`, 'WompiWebhookController');

                    const limitValue = await this.subscriptionService.getFeatureValue(
                        subscription.customerId,
                        'max_products',
                    );
                    const limit = limitValue ? parseInt(limitValue, 10) : 15;
                    await this.subscriptionService.restoreHiddenProducts(subscription.customerId, limit);
                }
            }
        }
    }

    private async handleDeclinedTransaction(transaction: any) {
        const reference = transaction.reference;

        if (reference.startsWith('SUB-')) {
            const subscriptionIdMatch = reference.match(/SUB-(\d+)-/);
            if (subscriptionIdMatch) {
                const subscriptionId = parseInt(subscriptionIdMatch[1], 10);
                this.logger.warn(`Payment declined for subscription ${subscriptionId}`, 'WompiWebhookController');

                const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);
                if (subscription) {
                    await this.subscriptionService.updateSubscriptionStatus(subscriptionId, SubscriptionStatus.GRACE_PERIOD);
                }
            }
        }
    }
}

@Controller('api/wompi-subscription')
export class WompiTokenController {
    private readonly logger = new Logger();

    constructor(
        private wompiService: WompiService,
        private subscriptionService: SubscriptionService,
    ) { }

    @Post('create-payment-source')
    async createPaymentSource(
        @Body() payload: { token: string; customerId: number; customerEmail: string; planId: number },
    ) {
        this.logger.debug(`Creating payment source for customer ${payload.customerId}`, 'WompiTokenController');

        try {
            const paymentSource = await this.wompiService.createPaymentSource(payload.token, payload.customerEmail);

            const subscription = await this.subscriptionService.createSubscription(
                payload.customerId,
                payload.planId,
                paymentSource.id,
                payload.customerEmail,
            );

            const amountInCents = Math.round(subscription.plan.price * 100);
            const reference = `SUB-${subscription.id}-${Date.now()}`;

            const transaction = await this.wompiService.createRecurringTransaction(
                paymentSource.id,
                amountInCents,
                reference,
                payload.customerEmail,
            );

            if (transaction.status === 'APPROVED') {
                await this.subscriptionService.extendSubscription(subscription.id);
            }

            return {
                subscriptionId: subscription.id,
                status: subscription.status,
                paymentSourceId: paymentSource.id,
                transactionStatus: transaction.status,
            };
        } catch (error: any) {
            this.logger.error(`Failed to create payment source: ${error.message}`, 'WompiTokenController');
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}