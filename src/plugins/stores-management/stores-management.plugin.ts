import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { STORES_MANAGEMENT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { StoreAdminResolver } from './api/store-admin.resolver';
import { StoreShopResolver } from './api/store-shop.resolver';
import { AnalyticsResolver } from './api/analytics.resolver';
import { StoreService } from './service/store.service';
import { AnalyticsService } from './service/analytics.service';
import { AnalyticsJobService } from './service/analytics-job.service';
import { SuperAdminGuard } from './guards/super-admin.guard';
import { StoreDailyAnalytics } from './entities/store-daily-analytics.entity';

@VendurePlugin({
    imports: [PluginCommonModule, TypeOrmModule.forFeature([StoreDailyAnalytics])],
    entities: [StoreDailyAnalytics],
    providers: [
        { provide: STORES_MANAGEMENT_PLUGIN_OPTIONS, useFactory: () => StoresManagementPlugin.options },
        StoreService,
        AnalyticsService,
        AnalyticsJobService,
        SuperAdminGuard,
    ],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [StoreAdminResolver, AnalyticsResolver],
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
