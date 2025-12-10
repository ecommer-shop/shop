import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { SERVIENTREGA_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { Servientrega } from './services/servientrega';
import { ServientregaShopResolver } from './api/servientrega-shop.resolver';
import { shopApiExtensions } from './api/api-extensions';
import { AuthorizationService } from '../auth0/services/auth.service';
import { Auth0Plugin } from '../auth0/auth0.plugin';

@VendurePlugin({
    imports: [PluginCommonModule, Auth0Plugin],
    providers: [{ provide: SERVIENTREGA_PLUGIN_OPTIONS, useFactory: () => ServientregaPlugin.options }, Servientrega],
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
        resolvers: [ServientregaShopResolver]
    },
})
export class ServientregaPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<ServientregaPlugin> {
        this.options = options;
        console.log('hi');
        return ServientregaPlugin;
    }
}
