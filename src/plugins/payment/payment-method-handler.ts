import {
   PaymentMethodHandler,
   CreatePaymentResult,
   SettlePaymentResult,
   LanguageCode,
} from '@vendure/core';
import { PAYMENT_METHOD } from './constants';

export const PaymentPaymentHandler = new PaymentMethodHandler({
   code: PAYMENT_METHOD.code,
   description: [
      { languageCode: LanguageCode.en, value: 'Wompi Bancolombia Payment Gateway' },
      { languageCode: LanguageCode.es, value: 'Pasarela de Pago Wompi Bancolombia' },
   ],
   args: {},

   createPayment: async (ctx, order, amount, args, metadata): Promise<CreatePaymentResult> => {
      return {
         amount,
         state: 'Settled',
         transactionId: order.code, // Store reference to link with webhook
         metadata: metadata || {},
      };
   },

   settlePayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   },

   cancelPayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   }
});