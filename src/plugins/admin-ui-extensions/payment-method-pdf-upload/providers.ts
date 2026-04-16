import { registerFormInputComponent } from '@vendure/admin-ui/core';

import { PaymentMethodPdfUploadInputComponent } from './components/payment-method-pdf-upload-input.component';

export default [
  registerFormInputComponent(
    'payment-method-pdf-upload-input',
    PaymentMethodPdfUploadInputComponent,
  ),
];
