import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext, Logger } from '@vendure/core';
import { WompiCheckoutService } from '../services/wompi-checkout.service';
import { SavedPaymentService } from '../services/saved-payment.service';

@Resolver()
export class CheckoutPaymentResolver {
    constructor(
        private checkoutService: WompiCheckoutService,
        private savedPaymentService: SavedPaymentService,
    ) { }

    @Mutation()
    @Allow(Permission.Owner)
    async initWompiTransaction(
        @Ctx() ctx: RequestContext,
        @Args('input') input: {
            token?: string;
            acceptanceToken?: string;
            customerEmail: string;
            amountInCents: number;
            reference: string;
            currency: string;
            saveCard: boolean;
            paymentMethodCode: string;
            sessionId?: string;
            deviceId?: string;
        },
    ) {
        try {
            const result = await this.checkoutService.initTransaction(input);
            const extra = (result as any).payment_method?.extra ?? null;
            return {
                transactionId: result.id,
                status: result.status,
                reference: result.reference,
                amountInCents: result.amount_in_cents,
                paymentMethodExtra: extra,
                asyncPaymentUrl: extra?.async_payment_url ?? null,
                qrImage: extra?.qr_image ?? null,
            };
        } catch (error: any) {
            Logger.error(`initWompiTransaction failed: ${error.message}`, 'CheckoutPaymentResolver');
            throw error;
        }
    }

    @Mutation()
    @Allow(Permission.Owner)
    async initWompiSavedCardTransaction(
        @Ctx() ctx: RequestContext,
        @Args('input') input: {
            paymentSourceId: string;
            acceptanceToken: string;
            customerEmail: string;
            amountInCents: number;
            reference: string;
            currency: string;
        },
    ) {
        try {
            const result = await this.checkoutService.initSavedCardTransaction(input);
            return {
                transactionId: result.id,
                status: result.status,
                reference: result.reference,
                amountInCents: result.amount_in_cents,
                paymentMethodExtra: result.payment_method?.extra ?? null,
            };
        } catch (error: any) {
            Logger.error(`initWompiSavedCardTransaction failed: ${error.message}`, 'CheckoutPaymentResolver');
            throw error;
        }
    }

    @Query()
    @Allow(Permission.Owner)
    async getWompiTransactionStatus(
        @Ctx() ctx: RequestContext,
        @Args('transactionId') transactionId: string,
    ) {
        try {
            const result = await this.checkoutService.getTransactionStatus(transactionId);
            return {
                id: result.id,
                status: result.status,
                statusMessage: (result as any).status_message ?? null,
                paymentMethodExtra: result.payment_method?.extra ?? null,
            };
        } catch (error: any) {
            Logger.error(`getWompiTransactionStatus failed: ${error.message}`, 'CheckoutPaymentResolver');
            throw error;
        }
    }

    @Mutation()
    @Allow(Permission.Owner)
    async confirmWompiPayment(
        @Ctx() ctx: RequestContext,
        @Args('input') input: {
            transactionId: string;
            saveCard: boolean;
        },
    ) {
        return this.checkoutService.confirmPayment(ctx, input);
    }

    @Query()
    @Allow(Permission.Owner)
    async savedPaymentMethods(@Ctx() ctx: RequestContext) {
        const customerId = ctx.activeUserId?.toString();
        if (!customerId) return [];
        return this.savedPaymentService.findByCustomer(customerId, ctx.channel?.token ?? '');
    }

    @Mutation()
    @Allow(Permission.Owner)
    async deleteSavedPaymentMethod(
        @Ctx() ctx: RequestContext,
        @Args('id') id: number,
    ) {
        const customerId = ctx.activeUserId?.toString();
        if (!customerId) return { success: false };
        const success = await this.savedPaymentService.delete(id, customerId, ctx.channel?.token ?? '');
        return { success };
    }

    @Mutation()
    @Allow(Permission.Owner)
    async setDefaultPaymentMethod(
        @Ctx() ctx: RequestContext,
        @Args('id') id: number,
    ) {
        const customerId = ctx.activeUserId?.toString();
        if (!customerId) return null;
        return this.savedPaymentService.setDefault(id, customerId, ctx.channel?.token ?? '');
    }
}
