import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { WompiSubscriptionModule } from '../wompi-subscription/wompi-subscription.plugin';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { InvoiceMicroHttpClient } from './services/invoice-micro-http.client';
import { InvoiceClientService } from './services/invoice-client.service';
import { InvoiceQueryService } from './services/invoice-query.service';
import { InvoiceSubscriber } from './subscribers/invoice.subscriber';
import { InvoiceFailureQueryService } from './services/invoice-failure-query.service';
import { InvoiceEmissionQueueStatusService } from './services/invoice-emission-queue-status.service';
import { InvoiceQuotaService } from './services/invoice-quota.service';
import { MatiasBillingStoresService } from './services/matias-billing-stores.service';
import { MatiasGlobalPoolService } from './services/matias-global-pool.service';
import { InvoiceMatiasActionService } from './services/invoice-matias-action.service';
import { BillingPlansService } from './services/billing-plans.service';
import { BillingCertificateNotificationService } from './services/billing-certificate-notification.service';
import { BillingCertificateJobService } from './services/billing-certificate-job.service';
import { InvoicePlanWompiPaymentService } from './services/invoice-plan-wompi-payment.service';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { InvoiceAdminResolver } from './api/invoice-admin.resolver';
import { InvoiceShopResolver } from './api/invoice-shop.resolver';

/**
 * Facturación Matias: solo HTTP hacia el microservicio; sin entidades locales de factura.
 */
@VendurePlugin({
  imports: [PluginCommonModule, WompiSubscriptionModule],
  providers: [
    { provide: INVOICE_CLIENT_PLUGIN_OPTIONS, useFactory: () => InvoiceClientPlugin.options },
    InvoiceMicroHttpClient,
    InvoiceClientService,
    InvoiceQueryService,
    InvoiceFailureQueryService,
    InvoiceEmissionQueueStatusService,
    InvoiceQuotaService,
    MatiasBillingStoresService,
    MatiasGlobalPoolService,
    InvoiceMatiasActionService,
    BillingPlansService,
    BillingCertificateNotificationService,
    BillingCertificateJobService,
    InvoicePlanWompiPaymentService,
    InvoiceSubscriber,
  ],
  adminApiExtensions: {
    schema: adminApiExtensions,
    resolvers: [InvoiceAdminResolver],
  },
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [InvoiceShopResolver],
  },
  dashboard: './dashboard/index.tsx',
  compatibility: '^3.0.0',
})
export class InvoiceClientPlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions): Type<InvoiceClientPlugin> {
    this.options = options;
    return InvoiceClientPlugin;
  }
}
