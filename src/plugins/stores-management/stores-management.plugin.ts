import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { STORES_MANAGEMENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { StoreAdminResolver } from './api/store-admin.resolver';
import { StoreShopResolver } from './api/store-shop.resolver';
import { StoreService } from './service/store.service';
import { SuperAdminGuard } from './guards/super-admin.guard';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [
        { provide: STORES_MANAGEMENT_PLUGIN_OPTIONS, useFactory: () => StoresManagementPlugin.options },
        StoreService,
        SuperAdminGuard,
    ],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [StoreAdminResolver],
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [StoreShopResolver],
    },
    dashboard: './dashboard/index.tsx',
    configuration: config => {
        return config;
    },
    compatibility: '^3.0.0',
})
export class StoresManagementPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<StoresManagementPlugin> {
        this.options = options;
        return StoresManagementPlugin;
    }
}
