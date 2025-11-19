import type { VendureConfig } from '@vendure/core';
import { PaymentPaymentHandler } from '../plugins/payment/payment-method-handler';

export const paymentOptions: VendureConfig['paymentOptions'] = {
  paymentMethodHandlers: [PaymentPaymentHandler],
};
