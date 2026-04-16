import { NgModule } from '@angular/core';
import { SharedModule } from '@vendure/admin-ui/core';

import { PaymentMethodPdfUploadInputComponent } from './components/payment-method-pdf-upload-input.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PaymentMethodPdfUploadInputComponent],
  exports: [PaymentMethodPdfUploadInputComponent],
})
export class PaymentMethodPdfUploadModule {}
