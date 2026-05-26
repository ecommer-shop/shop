import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { shopApiExtensions } from './api/api-extensions';
import { DeliveryCostShopResolver } from './api/delivery-cost-shop.resolver';
import { DELIVERY_COST_PLUGIN_OPTIONS } from './constants';
import { DeliveryCostService } from './services/delivery-cost.service';
import type { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: DELIVERY_COST_PLUGIN_OPTIONS, useFactory: () => DeliveryCostPlugin.options },
        DeliveryCostService,
    ],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [DeliveryCostShopResolver],
    },
    compatibility: '^3.0.0',
})
export class DeliveryCostPlugin {
    static options: PluginInitOptions = {};

    static init(options: PluginInitOptions = {}): Type<DeliveryCostPlugin> {
        this.options = options;
        return DeliveryCostPlugin;
    }
}
