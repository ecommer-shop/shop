import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { WompiService } from '../services/wompi.service';
import { SubscriptionWriteService } from '../services/subscription-write.service';
import { SubscriptionLifecycleService } from '../services/subscription-lifecycle.service';

@Controller('api/wompi-subscription')
export class WompiTokenController {
    private readonly logger = new Logger(WompiTokenController.name);

    constructor(
        private wompiService: WompiService,
        private subscriptionWriteService: SubscriptionWriteService,
        private lifecycleService: SubscriptionLifecycleService,
    ) { }

    @Post('create-payment-source')
    async createPaymentSource(
        @Body() payload: { token: string; administratorId: number; customerEmail: string; planId: number; paymentMethod: string },
    ) {
        this.logger.debug(`Creating payment source for administrator ${payload.administratorId}`);

        try {
            const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();
            const paymentMethod = payload.paymentMethod || 'CARD';

            const paymentSource = await this.wompiService.createPaymentSource(
                paymentMethod,
                payload.token,
                payload.customerEmail,
                acceptanceToken,
                personalAuthToken,
            );

            const subscription = await this.subscriptionWriteService.createRecurrentSubscription(
                payload.administratorId,
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
                await this.lifecycleService.extendSubscription(subscription.id);
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
