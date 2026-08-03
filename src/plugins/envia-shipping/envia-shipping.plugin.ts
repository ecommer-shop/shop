import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { ENVIA_SHIPPING_PLUGIN_OPTIONS } from './constants';
import { enviaShippingCalculator, setEnviaShippingService } from './envia-shipping.calculator';
import { enviaFulfillmentHandler, setEnviaFulfillmentService } from './envia-shipping.fulfillment-handler';
import { EnviaShippingService } from './services/envia-shipping.service';
import type { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: ENVIA_SHIPPING_PLUGIN_OPTIONS, useFactory: () => EnviaShippingPlugin.options },
        EnviaShippingService,
        {
            provide: 'ENVIA_SHIPPING_CALCULATOR_INIT',
            useFactory: (service: EnviaShippingService) => {
                setEnviaShippingService(service);
                setEnviaFulfillmentService(service);
            },
            inject: [EnviaShippingService],
        },
    ],
    configuration: config => {
        if (!config.shippingOptions.shippingCalculators) {
            config.shippingOptions.shippingCalculators = [];
        }
        config.shippingOptions.shippingCalculators.push(enviaShippingCalculator);
        if (!config.shippingOptions.fulfillmentHandlers) {
            config.shippingOptions.fulfillmentHandlers = [];
        }
        config.shippingOptions.fulfillmentHandlers.push(enviaFulfillmentHandler);
        return config;
    },
    compatibility: '^3.0.0',
})
export class EnviaShippingPlugin {
    static options: PluginInitOptions = {};

    static init(options: PluginInitOptions = {}): Type<EnviaShippingPlugin> {
        this.options = options;
        return EnviaShippingPlugin;
    }
}
