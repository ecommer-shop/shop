import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { InvoiceClientService } from './services/invoice-client.service';
import { InvoiceSequenceService } from './services/invoice-sequence.service';
import { InvoiceQueryService } from './services/invoice-query.service';
import { InvoiceSubscriber } from './subscribers/invoice.subscriber';
import { InvoiceSequence } from './entities/invoice-sequence.entity';
import { Invoice } from './entities/invoice.entity';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { InvoiceAdminResolver } from './api/invoice-admin.resolver';
import { InvoiceShopResolver } from './api/invoice-shop.resolver';

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [InvoiceSequence as Type<any>, Invoice as Type<any>],
  providers: [
    { provide: INVOICE_CLIENT_PLUGIN_OPTIONS, useFactory: () => InvoiceClientPlugin.options },
    InvoiceClientService,
    InvoiceSequenceService,
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

