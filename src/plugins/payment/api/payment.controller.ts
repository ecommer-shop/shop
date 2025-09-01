import { Controller, Post, Body, Req, HttpException, HttpStatus, Inject, HttpCode } from '@nestjs/common';
import { RequestContextService, LanguageCode, OrderService, Logger } from '@vendure/core';
import { PluginInitOptions } from '../types';
import { loggerCtx, PAYMENT_METHOD, PAYMENT_PLUGIN_OPTIONS } from '../constants';
import { TransactionUpdatedEvent } from '../models/payment-payload';

@Controller('api/payment')
export class PaymentController {
   constructor(
      @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
      private requestContextService: RequestContextService,
      private orderService: OrderService,
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
      // Create a context for Vendure operations
      const ctx = await this.requestContextService.create({
         languageCode: LanguageCode.es,
         apiType: 'shop',
      });
      const order = await this.orderService.findOneByCode(ctx, transaction.reference);
      if (!order) {
         throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
      }
      Logger.debug(`Processing transaction for order ${order.code}`, loggerCtx);
      if (order.state === 'PaymentSettled') {
         return HttpStatus.OK;
      }
      if (transaction.status === 'APPROVED') {
         await this.orderService.addPaymentToOrder(ctx, order.id, { method: PAYMENT_METHOD.code, metadata: transaction.data });
         Logger.debug('Payment settled successfully', loggerCtx);
      }
      return HttpStatus.OK;
   }

   private validateSignature(payload: any, secret: string): boolean {
      //    try {
      //    const props = payload.signature?.properties ?? [];
      //    const flat: Record<string, any> = this.flatten(payload.data?.transaction ?? {});
      //    const toSign = props.map((p: string) => this.getByPath(flat, p)).join('');
      //    const signed = crypto.createHmac('sha256', secret).update(toSign).digest('hex');
      //    return signed === payload.signature?.checksum;
      //  } catch {
      //    return false;
      //  }
      // Todo: Implement payload signature validation using SHA256:
      // 1. Concatenate specific payload values (e.g., transaction.id, transaction.status, etc.)
      // 2. Append the secret
      // 3. Generate a SHA256 hash and compare with the provided checksum.
      return true;
   }
}