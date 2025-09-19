import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { PAYMENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { PaymentService } from './services/payment.service';
import { paymentShopResolver } from './api/payment-shop.resolver';
import { shopApiExtensions } from './api/api-extensions';
import { PaymentController } from './api/payment.controller';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [PaymentController],
    providers: [{ provide: PAYMENT_PLUGIN_OPTIONS, useFactory: () => PaymentPlugin.options }, PaymentService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [paymentShopResolver]
    },
})
export class PaymentPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<PaymentPlugin> {
        this.options = options;
        return PaymentPlugin;
    }
}
