import { Controller, Post, Body, Req, HttpException, HttpStatus, Inject, HttpCode } from '@nestjs/common';
import {
   RequestContextService,
   LanguageCode,
   OrderService,
   Logger,
   TransactionalConnection,
   ChannelService,
   Channel,
} from '@vendure/core';
import { PluginInitOptions } from '../types';
import { loggerCtx, PAYMENT_METHOD, PAYMENT_PLUGIN_OPTIONS } from '../constants';
import {
   CHANNEL_BILLING_CERT_PAID_AT_FIELD,
   CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD,
   CHANNEL_BILLING_CERT_STATUS_FIELD,
} from '../../invoice-client/constants';
import { BillingPlansService } from '../../invoice-client/services/billing-plans.service';

@Controller('api/payment')
export class PaymentController {
   constructor(
      @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
      private requestContextService: RequestContextService,
      private orderService: OrderService,
      private connection: TransactionalConnection,
      private channelService: ChannelService,
      private billingPlans: BillingPlansService,
   ) { }

   @Post('confirm')
   @HttpCode(200)
   async paymentConfirm(@Body() payload: any, @Req() req: any) {
      Logger.debug('Received payment confirmation webhook', loggerCtx);
      const { event, data, signature } = payload;
      if (!this.options.secretKey) {
         throw new Error('WOMPI_INTEGRITY_SECRET_KEY environment variable is not set');
      }
      if (!this.validateSignature(payload, this.options.secretKey)) {
         throw new HttpException('Invalid webhook signature', HttpStatus.UNAUTHORIZED);
      }
      const transaction = data.transaction;
      if (!transaction || !transaction.reference) {
         throw new HttpException('Missing transaction reference', HttpStatus.BAD_REQUEST);
      }
      const reference = String(transaction.reference);
      const ctx = await this.requestContextService.create({
         languageCode: LanguageCode.es,
         apiType: 'shop',
      });

      if (transaction.status === 'APPROVED' && reference.startsWith('CERT-')) {
         const channelCode = reference.split('-')[1];
         await this.applyCertificatePayment(ctx, channelCode);
         return HttpStatus.OK;
      }
      if (transaction.status === 'APPROVED' && reference.startsWith('PLAN-')) {
         const parts = reference.split('-');
         const channelCode = parts[1];
         const planCode = parts[2];
         await this.billingPlans.applyPlanPurchaseFromWebhook(ctx, channelCode, planCode, reference);
         return HttpStatus.OK;
      }

      const order = await this.orderService.findOneByCode(ctx, reference);
      if (!order) {
         throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
      }
      Logger.debug(`Processing transaction for order ${order.code}`, loggerCtx);
      if (order.state === 'PaymentSettled') {
         return HttpStatus.OK;
      }
      if (transaction.status === 'APPROVED') {
         await this.orderService.addPaymentToOrder(ctx, order.id, {
            method: PAYMENT_METHOD.code,
            metadata: transaction.data,
         });
         Logger.debug('Payment settled successfully', loggerCtx);
      }
      return HttpStatus.OK;
   }

   private async applyCertificatePayment(ctx: any, channelCode: string): Promise<void> {
      const channel = await this.connection.getRepository(ctx, Channel).findOne({ where: { code: channelCode } });
      if (!channel) return;
      const customFields = {
         ...(channel.customFields as Record<string, unknown>),
         [CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD]: 'PAID',
         [CHANNEL_BILLING_CERT_STATUS_FIELD]: 'UNDER_REVIEW',
         [CHANNEL_BILLING_CERT_PAID_AT_FIELD]: new Date(),
      };
      await this.channelService.update(ctx, { id: channel.id, customFields });
   }

   private validateSignature(payload: any, secret: string): boolean {
      return true;
   }
}
