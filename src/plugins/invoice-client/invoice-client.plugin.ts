import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { InvoiceMicroHttpClient } from './services/invoice-micro-http.client';
import { InvoiceClientService } from './services/invoice-client.service';
import { InvoiceQueryService } from './services/invoice-query.service';
import { InvoiceSubscriber } from './subscribers/invoice.subscriber';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { InvoiceAdminResolver } from './api/invoice-admin.resolver';
import { InvoiceShopResolver } from './api/invoice-shop.resolver';

/**
 * Facturación Matias: solo HTTP hacia el microservicio; sin entidades locales de factura.
 */
@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    { provide: INVOICE_CLIENT_PLUGIN_OPTIONS, useFactory: () => InvoiceClientPlugin.options },
    InvoiceMicroHttpClient,
    InvoiceClientService,
    InvoiceQueryService,
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
  compatibility: '^3.0.0',
})
export class InvoiceClientPlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions): Type<InvoiceClientPlugin> {
    this.options = options;
    return InvoiceClientPlugin;
  }
}
