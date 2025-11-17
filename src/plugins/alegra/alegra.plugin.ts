import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { AlegraService } from './alegra.service';
import { PaymentSubscriber } from './event-subscribers/order-payment.subscriber';
import { ALEGRA_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [
    { provide: ALEGRA_PLUGIN_OPTIONS, useFactory: () => AlegraPlugin.options },
    AlegraService,
    PaymentSubscriber,
  ],
  compatibility: '^3.0.0',
})
export class AlegraPlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions): Type<AlegraPlugin> {
    this.options = options;
    return AlegraPlugin;
  }
}
