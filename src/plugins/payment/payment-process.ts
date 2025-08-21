import { PaymentProcess } from '@vendure/core';

declare module '@vendure/core' {
   interface PaymentStates {
      Approved: never;
      Declined: never;
      Voided: never;
   }
}

/**
 * Define a new "Validating" Payment state, and set up the
 * permitted transitions to/from it.
 */
const customPaymentProcess: PaymentProcess<'Validating'> = {
   transitions: {
      Created: {
         to: ['Approved', 'Declined', 'Voided', 'Error'],
         mergeStrategy: 'replace',
      },
      Validating: {
         to: ['Settled', 'Declined', 'Cancelled'],
      },
   },
};