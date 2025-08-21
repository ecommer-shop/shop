import { Controller, Post, Body, Req, HttpException, HttpStatus, Inject, HttpCode } from '@nestjs/common';
import { RequestContextService, TransactionalConnection, Payment, LanguageCode, PaymentService } from '@vendure/core';
import { PluginInitOptions } from '../types';
import { PAYMENT_PLUGIN_OPTIONS } from '../constants';

@Controller('api/payment')
export class PaymentController {
   constructor(
      @Inject(PAYMENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
      private connection: TransactionalConnection,
      private requestContextService: RequestContextService,
      private paymentService: PaymentService,
   ) { }

   @Post('confirm')
   @HttpCode(200)
   async paymentConfirm(@Body() payload: any, @Req() req: any) {
      const { event, data, signature: receivedSignature } = payload;
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
      const paymentRepo = this.connection.getRepository(ctx, Payment);
      const payment = await paymentRepo.findOne({
         where: { transactionId: transaction.reference },
      });

      if (!payment) {
         throw new HttpException('Payment not found', HttpStatus.NOT_FOUND);
      }
      if (payment.state === 'Settled' || payment.state === 'Declined') {
         return { message: 'Payment already processed' };
      }
      if (transaction.status === 'APPROVED') {
         payment.state = 'Settled';
         payment.metadata = { ...payment.metadata, orderCode: transaction.orderCode };
         await this.paymentService.transitionToState(ctx, payment.transactionId, 'Settled');
      }
      await paymentRepo.save(payment);
      return { payment: payment };
   }

   private validateSignature(payload: any, secret: string): boolean {
      // Implement payload signature validation using SHA256:
      // 1. Concatenate specific payload values (e.g., transaction.id, transaction.status, etc.)
      // 2. Append the secret
      // 3. Generate a SHA256 hash and compare with the provided checksum.
      return true;
   }
}