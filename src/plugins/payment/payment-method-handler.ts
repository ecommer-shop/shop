import {
   PaymentMethodHandler,
   CreatePaymentResult,
   SettlePaymentResult,
   LanguageCode,
   RequestContext,
   CreateRefundResult,
} from '@vendure/core';

import { PAYMENT_METHOD } from './constants';
import { WompiRefundService } from './services/wompi-refund.service';

export const PaymentPaymentHandler = new PaymentMethodHandler({
   code: PAYMENT_METHOD.code,
   description: [
      { languageCode: LanguageCode.en, value: 'Wompi Bancolombia Payment Gateway' },
      { languageCode: LanguageCode.es, value: 'Pasarela de Pago Wompi Bancolombia' },
   ],

   args: {privateKey: { type: 'string' },
    apiUrl: { type: 'string' },},

   createPayment: async (ctx, order, amount, args, metadata): Promise<CreatePaymentResult> => {
      return {
         amount,
         state: 'Settled',
         transactionId: order.code, // Store reference to link with webhook
         metadata: metadata || {},
      };
   },

   createRefund: async (ctx: RequestContext, input: any, amount: number, payment: any): Promise<CreateRefundResult> => {
      const transactionId = (payment as any)?.transactionId;

      console.log('[WOMPI REFUND] createRefund called', {
         orderCode: payment.order?.code,
         transactionId,
         amount,
      });

      if (!transactionId) {
         console.error('[WOMPI REFUND] Missing transactionId');
         return {
            state: 'Failed',
            metadata: {
            errorMessage: 'Missing Wompi transaction ID',
            },
         };
      }

      const wompiService = new WompiRefundService();

      try {
         const apiUrl = (input as any)?.paymentMethod?.args?.apiUrl;
         const privateKey = (input as any)?.paymentMethod?.args?.privateKey;

         console.log('[WOMPI REFUND] Using config', {
            apiUrl,
            hasPrivateKey: !!privateKey,
         });

         const result = await wompiService.refundTransaction(
            apiUrl,
            privateKey,
            transactionId,
            amount,
         );

         console.log('[WOMPI REFUND] Refund success', result);

         return {
            state: 'Settled',
            transactionId: result.id,
            metadata: {
            wompiStatus: result.status,
            },
         };
      } catch (error: any) {
         console.error('[WOMPI REFUND] Refund failed', error);

         return {
            state: 'Failed',
            metadata: {
            errorMessage: error.message,
            },
         };
      }
   },

   settlePayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   },

   cancelPayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   }
});