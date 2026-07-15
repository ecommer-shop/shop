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
      // Create a context for Vendure operations
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
}