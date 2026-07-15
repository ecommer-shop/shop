import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import {
   RequestContextService,
   LanguageCode,
   OrderService,
   Logger,
} from '@vendure/core';
import { loggerCtx, PAYMENT_METHOD } from '../constants';
import { BillingPlansService } from '../../invoice-client/services/billing-plans.service';
import {
   parseCertPaymentReference,
   parsePlanPaymentReference,
} from '../../invoice-client/payment-reference.util';
import { WompiService } from '../../wompi-subscription/services/wompi.service';

@Controller('api/payment')
export class PaymentController {
   constructor(
      private requestContextService: RequestContextService,
      private orderService: OrderService,
      private billingPlans: BillingPlansService,
      private wompiService: WompiService,
   ) { }

   @Post('confirm')
   @HttpCode(200)
   async paymentConfirm(@Body() payload: any) {
      Logger.debug('Received payment confirmation webhook', loggerCtx);
      const { data } = payload;
      if (!this.wompiService.validateWebhookSignature(payload)) {
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

      if (transaction.status === 'APPROVED' && (reference.startsWith('CERT::') || reference.startsWith('CERT-'))) {
         const channelCode = parseCertPaymentReference(reference);
         if (!channelCode) {
            throw new HttpException('Invalid certificate payment reference', HttpStatus.BAD_REQUEST);
         }
         await this.billingPlans.applyCertificatePaymentByChannelCode(ctx, channelCode);
         return HttpStatus.OK;
      }
      if (transaction.status === 'APPROVED' && (reference.startsWith('PLAN::') || reference.startsWith('PLAN-'))) {
         const parsed = parsePlanPaymentReference(reference);
         if (!parsed) {
            throw new HttpException('Invalid invoice plan reference', HttpStatus.BAD_REQUEST);
         }
         const { channelCode, planCode } = parsed;
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

   private parsePlanReference(reference: string): { channelCode: string; planCode: string } | null {
      const parts = reference.split('-');
      if (parts.length < 4 || parts[0] !== 'PLAN') {
         return null;
      }
      const planCode = parts[parts.length - 2];
      const channelCode = parts.slice(1, -2).join('-');
      if (!channelCode || !planCode) {
         return null;
      }
      return { channelCode, planCode };
   }

   private parseCertificateReference(reference: string): { channelCode: string } | null {
      const parts = reference.split('-');
      if (parts.length < 3 || parts[0] !== 'CERT') {
         return null;
      }
      const channelCode = parts.slice(1, -1).join('-');
      return channelCode ? { channelCode } : null;
   }
}
