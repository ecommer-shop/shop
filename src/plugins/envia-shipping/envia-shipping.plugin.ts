import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { ENVIA_SHIPPING_PLUGIN_OPTIONS } from './constants';
import { EnviaShippingService } from './services/envia-shipping.service';
import type { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: ENVIA_SHIPPING_PLUGIN_OPTIONS, useFactory: () => EnviaShippingPlugin.options },
        EnviaShippingService,
    ],
    compatibility: '^3.0.0',
})
export class EnviaShippingPlugin {
    static options: PluginInitOptions = {};

    static init(options: PluginInitOptions = {}): Type<EnviaShippingPlugin> {
        this.options = options;
        return EnviaShippingPlugin;
    }
}
