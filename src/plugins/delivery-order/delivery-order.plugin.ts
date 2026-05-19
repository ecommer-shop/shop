import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { shopApiExtensions } from './api/api-extensions';
import { DeliveryOrderShopResolver } from './api/delivery-order-shop.resolver';
import { DELIVERY_ORDER_PLUGIN_OPTIONS } from './constants';
import { DeliveryOrderService } from './services/delivery-order.service';
import type { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: DELIVERY_ORDER_PLUGIN_OPTIONS, useFactory: () => DeliveryOrderPlugin.options },
        DeliveryOrderService,
    ],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [DeliveryOrderShopResolver],
    },
    compatibility: '^3.0.0',
})
export class DeliveryOrderPlugin {
    static options: PluginInitOptions = {};

    static init(options: PluginInitOptions = {}): Type<DeliveryOrderPlugin> {
        this.options = options;
        return DeliveryOrderPlugin;
    }
}
