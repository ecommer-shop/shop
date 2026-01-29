import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { InvoiceClientService } from './services/invoice-client.service';
import { InvoiceSubscriber } from './subscribers/invoice.subscriber';

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    { provide: INVOICE_CLIENT_PLUGIN_OPTIONS, useFactory: () => InvoiceClientPlugin.options },
    InvoiceClientService,
    InvoiceSubscriber,
  ],
  configuration: (config) => {
    return config;
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
