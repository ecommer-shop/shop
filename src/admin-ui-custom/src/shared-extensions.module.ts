import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMethodPdfUploadModule } from './extensions/payment-method-pdf-upload-v3/payment-method-pdf-upload.module';

import SharedProviders_0_0 from './extensions/payment-method-pdf-upload-v3/providers';


@NgModule({
    imports: [CommonModule, PaymentMethodPdfUploadModule],
    providers: [...SharedProviders_0_0],
})
export class SharedExtensionsModule {}
