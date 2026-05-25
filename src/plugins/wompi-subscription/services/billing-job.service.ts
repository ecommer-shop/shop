import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { WompiService } from './wompi.service';
import { SubscriptionStatus } from '../entities/customer-subscription.entity';
import { FEATURE_CODES } from '../constants';

@Injectable()
export class BillingJobService implements OnModuleInit {
    private readonly logger = new Logger(BillingJobService.name);

    constructor(
        private subscriptionService: SubscriptionService,
        private wompiService: WompiService,
    ) { }

    async onModuleInit() {
        this.registerScheduledJobs();
    }

    private registerScheduledJobs() {
        setInterval(() => {
            this.processMonthlyCollection().catch(err => {
                this.logger.error('Monthly collection failed: ' + err.message);
            });
        }, 24 * 60 * 60 * 1000);

        setInterval(() => {
            this.processGracePeriodDowngrade().catch(err => {
                this.logger.error('Grace period downgrade failed: ' + err.message);
            });
        }, 24 * 60 * 60 * 1000);

        setInterval(() => {
            this.processPermanentPurge().catch(err => {
                this.logger.error('Permanent purge failed: ' + err.message);
            });
        }, 24 * 60 * 60 * 1000);

        setInterval(() => {
            this.processManualRenewalReminders().catch(err => {
                this.logger.error('Manual renewal reminders failed: ' + err.message);
            });
        }, 24 * 60 * 60 * 1000);

        setInterval(() => {
            this.processExpiredPendingPayments().catch(err => {
                this.logger.error('Expired pending payments cleanup failed: ' + err.message);
            });
        }, 6 * 60 * 60 * 1000);

        this.logger.log('Registered billing scheduled jobs');
    }

    async processMonthlyCollection(): Promise<void> {
        this.logger.log('Starting monthly collection process');

        const subscriptions = await this.subscriptionService.getActiveSubscriptionsForRenewal();
        this.logger.log(`Found ${subscriptions.length} subscriptions to renew`);

        for (const subscription of subscriptions) {
            try {
                if (!subscription.billingPaymentSourceId || !subscription.billingCustomerEmail) {
                    this.logger.warn(`Missing payment source for subscription ${subscription.id}`);
                    await this.subscriptionService.updateSubscriptionStatus(subscription.id, SubscriptionStatus.GRACE_PERIOD);
                    continue;
                }

                const plan = subscription.plan;
                const amountInCents = Math.round(plan.price * 100);
                const reference = `SUB-${subscription.id}-${Date.now()}`;

                const acceptanceToken = await this.wompiService.getAcceptanceToken();

                const transaction = await this.wompiService.createRecurringTransaction(
                    subscription.billingPaymentSourceId,
                    amountInCents,
                    reference,
                    subscription.billingCustomerEmail,
                    acceptanceToken,
                );

                if (transaction.status === 'APPROVED') {
                    await this.subscriptionService.extendSubscription(subscription.id);
                    this.logger.log(`Successfully renewed subscription ${subscription.id}`);
                } else {
                    this.logger.warn(`Transaction ${transaction.id} status: ${transaction.status}`);
                    await this.subscriptionService.updateSubscriptionStatus(subscription.id, SubscriptionStatus.GRACE_PERIOD);
                }
            } catch (error: any) {
                this.logger.error(`Failed to renew subscription ${subscription.id}: ${error.message}`);
                await this.subscriptionService.updateSubscriptionStatus(subscription.id, SubscriptionStatus.GRACE_PERIOD);
            }
        }
    }

    async processGracePeriodDowngrade(): Promise<void> {
        this.logger.log('Starting grace period downgrade process');

        const subscriptions = await this.subscriptionService.getGracePeriodSubscriptions();
        this.logger.log(`Found ${subscriptions.length} subscriptions to downgrade`);

        for (const subscription of subscriptions) {
            try {
                const productLimitValue = await this.subscriptionService.getFeatureValue(
                    subscription.customerId,
                    FEATURE_CODES.MAX_PRODUCTS,
                );
                const productLimit = productLimitValue ? parseInt(productLimitValue, 10) : 15;

                await this.subscriptionService.hideExcessProducts(subscription.customerId, productLimit);
                await this.subscriptionService.downgradeToFree(subscription.id);

                this.logger.log(`Downgraded subscription ${subscription.id} to Free plan`);
            } catch (error: any) {
                this.logger.error(`Failed to downgrade subscription ${subscription.id}: ${error.message}`);
            }
        }
    }

    async processPermanentPurge(): Promise<void> {
        this.logger.log('Starting permanent purge process');

        const subscriptions = await this.subscriptionService.getSuspendedSubscriptionsForPurge();
        this.logger.log(`Found ${subscriptions.length} suspended subscriptions to purge`);

        for (const subscription of subscriptions) {
            try {
                await this.subscriptionService.cancelAutoRenew(subscription.customerId);
                this.logger.log(`Permanently suspended subscription ${subscription.id}`);
            } catch (error: any) {
                this.logger.error(`Failed to process suspension ${subscription.id}: ${error.message}`);
            }
        }
    }

    async processManualRenewalReminders(): Promise<void> {
        this.logger.log('Starting manual renewal reminder process');

        const subscriptions = await this.subscriptionService.getManualSubscriptionsDueForRenewal();
        this.logger.log(`Found ${subscriptions.length} subscriptions needing manual renewal`);

        for (const subscription of subscriptions) {
            this.logger.log(`Subscription ${subscription.id} for customer ${subscription.customerId} is due for manual renewal (ends at ${subscription.endsAt})`);
        }
    }

    async processExpiredPendingPayments(): Promise<void> {
        this.logger.log('Starting expired pending payments cleanup');

        const subscriptions = await this.subscriptionService.getPendingPaymentSubscriptions();
        this.logger.log(`Found ${subscriptions.length} expired pending subscriptions`);

        for (const subscription of subscriptions) {
            try {
                await this.subscriptionService.updateSubscriptionStatus(subscription.id, SubscriptionStatus.GRACE_PERIOD);
                this.logger.log(`Moved expired pending subscription ${subscription.id} to grace period`);
            } catch (error: any) {
                this.logger.error(`Failed to process pending subscription ${subscription.id}: ${error.message}`);
            }
        }
    }
}
