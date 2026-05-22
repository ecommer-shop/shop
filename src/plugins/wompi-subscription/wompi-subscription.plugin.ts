import { PluginCommonModule, Type, VendurePlugin, Product } from '@vendure/core';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS, WompiSubscriptionPluginInitOptions } from './constants';
import { Plan, Feature, PlanFeature, CustomerSubscription } from './entities';
import { WompiService, SubscriptionService, BillingJobService } from './services';
import { WompiWebhookController, WompiTokenController } from './api/wompi-webhook.controller';
import { WompiSubscriptionShopResolver } from './api/wompi-subscription.resolver';
import { shopApiExtensions } from './api/api-extensions';
import { FeatureGuard, ProductLimitGuard, FeatureAccessGuard } from './guards';

@Module({
    imports: [PluginCommonModule, TypeOrmModule.forFeature([Plan, Feature, PlanFeature, CustomerSubscription, Product])],
    controllers: [WompiWebhookController, WompiTokenController],
    providers: [
        WompiService,
        SubscriptionService,
        BillingJobService,
        WompiSubscriptionShopResolver,
        FeatureGuard,
        ProductLimitGuard,
        FeatureAccessGuard,
    ],
    exports: [SubscriptionService, WompiService],
})
export class WompiSubscriptionModule {}

@VendurePlugin({
    imports: [PluginCommonModule, WompiSubscriptionModule],
    entities: [Plan, Feature, PlanFeature, CustomerSubscription as Type<any>],
    providers: [
        {
            provide: WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS,
            useFactory: () => WompiSubscriptionPlugin.options,
        },
    ],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [WompiSubscriptionShopResolver],
    },
    adminApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [],
    },
    configuration: (config) => {
        return config;
    },
    compatibility: '^3.0.0',
})
export class WompiSubscriptionPlugin {
    static options: WompiSubscriptionPluginInitOptions;

    static init(options: WompiSubscriptionPluginInitOptions): Type<WompiSubscriptionPlugin> {
        this.options = {
            wompiApiUrl: options.wompiApiUrl || 'https://sandbox.wompi.co',
            wompiApiKey: options.wompiApiKey || process.env.WOMPI_API_KEY || '',
            wompiEventsSecret: options.wompiEventsSecret || process.env.WOMPI_EVENTS_SECRET || '',
            wompiIntegritySecret: options.wompiIntegritySecret || process.env.WOMPI_INTEGRITY_SECRET || '',
            currency: options.currency || 'COP',
        };
        return WompiSubscriptionPlugin;
    }
}