import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { shopApiExtensions } from './api/api-extensions';
import { DynamicShippingPriceShopResolver } from './api/dynamic-shipping-price-shop.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [DynamicShippingPriceShopResolver],
    },
    compatibility: '^3.0.0',
})
export class DynamicShippingPricePlugin {}
