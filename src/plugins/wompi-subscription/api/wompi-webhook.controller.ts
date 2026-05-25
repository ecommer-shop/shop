import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { WompiService } from '../services/wompi.service';
import { SubscriptionService } from '../services/subscription.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';

@Controller('api/wompi-subscription')
export class WompiWebhookController {
    private readonly logger = new Logger(WompiWebhookController.name);

    constructor(
        private wompiService: WompiService,
        private subscriptionService: SubscriptionService,
    ) { }

    @Post('webhook')
    async handleWebhook(@Body() payload: any) {
        this.logger.debug('Received Wompi webhook event: ' + payload.event);

        if (!this.wompiService.validateWebhookSignature(payload)) {
            this.logger.warn('Invalid webhook signature');
            throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
        }

        const transaction = payload.data?.transaction;
        if (!transaction) {
            this.logger.warn('Webhook missing transaction data');
            throw new HttpException('Invalid payload', HttpStatus.BAD_REQUEST);
        }

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

        if (!reference) {
            this.logger.warn('Transaction missing reference');
            return;
        }

        if (reference.startsWith('SUB-PENDING-')) {
            await this.handlePendingPaymentActivation(transaction, reference);
        } else if (reference.startsWith('SUB-')) {
            await this.handleRecurrentPayment(transaction, reference);
        }
    }

    private async handlePendingPaymentActivation(transaction: any, reference: string) {
        const subscription = await this.subscriptionService.findByPendingReference(reference);
        if (!subscription) {
            this.logger.warn(`No pending subscription found for reference ${reference}`);
            return;
        }

        this.logger.log(`Activating pending subscription ${subscription.id} after approved payment`);

        await this.subscriptionService.activateSubscriptionAfterPayment(subscription.id);
        this.logger.log(`Subscription ${subscription.id} activated successfully`);
    }

    private async handleRecurrentPayment(transaction: any, reference: string) {
        const subscriptionIdMatch = reference.match(/SUB-(\d+)-/);
        if (!subscriptionIdMatch) {
            this.logger.warn(`Invalid recurrent reference format: ${reference}`);
            return;
        }

        const subscriptionId = parseInt(subscriptionIdMatch[1], 10);
        this.logger.log(`Processing approved transaction for subscription ${subscriptionId}`);

        const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);

        if (!subscription) {
            this.logger.warn(`Subscription ${subscriptionId} not found`);
            return;
        }

        if (subscription.status === SubscriptionStatus.GRACE_PERIOD) {
            await this.subscriptionService.updateSubscriptionStatus(subscriptionId, SubscriptionStatus.ACTIVE);
            this.logger.log(`Restored subscription ${subscriptionId} to ACTIVE`);

            const limitValue = await this.subscriptionService.getFeatureValue(
                subscription.customerId,
                'max_products',
            );
            const limit = limitValue ? parseInt(limitValue, 10) : 15;
            await this.subscriptionService.restoreHiddenProducts(subscription.customerId, limit);
        } else if (subscription.status === SubscriptionStatus.ACTIVE) {
            await this.subscriptionService.extendSubscription(subscriptionId);
            this.logger.log(`Extended subscription ${subscriptionId}`);
        }
    }

    private async handleDeclinedTransaction(transaction: any) {
        const reference = transaction.reference;

        if (!reference || !reference.startsWith('SUB-')) {
            return;
        }

        const subscriptionIdMatch = reference.match(/SUB-(\d+)-/);
        if (subscriptionIdMatch) {
            const subscriptionId = parseInt(subscriptionIdMatch[1], 10);
            this.logger.warn(`Payment declined for subscription ${subscriptionId}`);

            const subscription = await this.subscriptionService.getSubscriptionById(subscriptionId);
            if (subscription) {
                await this.subscriptionService.updateSubscriptionStatus(subscriptionId, SubscriptionStatus.GRACE_PERIOD);
            }
        }
    }
}

@Controller('api/wompi-subscription')
export class WompiTokenController {
    private readonly logger = new Logger(WompiTokenController.name);

    constructor(
        private wompiService: WompiService,
        private subscriptionService: SubscriptionService,
    ) { }

    @Post('create-payment-source')
    async createPaymentSource(
        @Body() payload: { token: string; customerId: number; customerEmail: string; planId: number; paymentMethod: string },
    ) {
        this.logger.debug(`Creating payment source for customer ${payload.customerId}`);

        try {
            const acceptanceToken = await this.wompiService.getAcceptanceToken();
            const paymentMethod = payload.paymentMethod || 'CARD';

            const paymentSource = await this.wompiService.createPaymentSource(
                paymentMethod,
                payload.token,
                payload.customerEmail,
                acceptanceToken,
            );

            const subscription = await this.subscriptionService.createRecurrentSubscription(
                payload.customerId,
                payload.planId,
                paymentMethod,
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
                acceptanceToken,
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
            this.logger.error(`Failed to create payment source: ${error.message}`);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
