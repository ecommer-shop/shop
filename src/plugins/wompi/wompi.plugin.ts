import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { WOMPI_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { WompiService } from './services/wompi.service';
import { WompiShopResolver } from './api/wompi-shop.resolver';
import { shopApiExtensions } from './api/api-extensions';
import { WompiController } from './api/wompi.controller';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [WompiController],
    providers: [{ provide: WOMPI_PLUGIN_OPTIONS, useFactory: () => WompiPlugin.options }, WompiService],
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
        resolvers: [WompiShopResolver]
    }
})
export class WompiPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<WompiPlugin> {
        this.options = options;
        return WompiPlugin;
    }
}
