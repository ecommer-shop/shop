import {
   PaymentMethodHandler,
   CreatePaymentResult,
   SettlePaymentResult,
   LanguageCode,
} from '@vendure/core';

export const PaymentPaymentHandler = new PaymentMethodHandler({
   code: 'wompi',
   description: [
      { languageCode: LanguageCode.en, value: 'Wompi Bancolombia Payment Gateway' },
      { languageCode: LanguageCode.es, value: 'Pasarela de Pago Wompi Bancolombia' },
   ],
   args: {},

   createPayment: async (ctx, order, amount, args, metadata): Promise<CreatePaymentResult> => {
      return {
         amount,
         state: 'Authorized',
         transactionId: metadata.referenceCode, // Store reference to link with webhook
         metadata: {},
      };
   },

   settlePayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   },

   cancelPayment: async (ctx, order, payment, args): Promise<SettlePaymentResult> => {
      return { success: true };
   }
});