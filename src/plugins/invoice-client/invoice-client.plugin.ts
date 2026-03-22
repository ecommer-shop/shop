import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { InvoiceClientService } from './services/invoice-client.service';
import { InvoiceSequenceService } from './services/invoice-sequence.service';
import { InvoiceSubscriber } from './subscribers/invoice.subscriber';
import { InvoiceSequence } from './entities/invoice-sequence.entity';

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [InvoiceSequence as Type<any>],
  providers: [
    { provide: INVOICE_CLIENT_PLUGIN_OPTIONS, useFactory: () => InvoiceClientPlugin.options },
    InvoiceClientService,
    InvoiceSequenceService,
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
