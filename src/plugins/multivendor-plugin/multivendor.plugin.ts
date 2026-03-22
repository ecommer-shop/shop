import { OnApplicationBootstrap } from '@nestjs/common';
import {
    Channel,
    ChannelService,
    configureDefaultOrderProcess,
    DefaultProductVariantPriceUpdateStrategy,
    LanguageCode,
    PaymentMethod,
    PaymentMethodService,
    PluginCommonModule,
    RequestContextService,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';

import { shopApiExtensions } from './api/api-extensions';
import { MultivendorResolver } from './api/mv.resolver';
import { multivendorOrderProcess } from './config/mv-order-process';
import { MultivendorSellerStrategy } from './config/mv-order-seller-strategy';
import { multivendorPaymentMethodHandler } from './config/mv-payment-handler';
import { multivendorShippingEligibilityChecker } from './config/mv-shipping-eligibility-checker';
import { MultivendorShippingLineAssignmentStrategy } from './config/mv-shipping-line-assignment-strategy';
import { CONNECTED_PAYMENT_METHOD_CODE, MULTIVENDOR_PLUGIN_OPTIONS } from './constants';
import { MultivendorService } from './service/mv.service';
import { MultivendorPluginOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: config => {
        config.customFields.Seller.push({
            name: 'connectedAccountId',
            label: [{ languageCode: LanguageCode.en, value: 'Connected account ID' }],
            description: [
                { languageCode: LanguageCode.en, value: 'The ID used to process connected payments' },
            ],
            type: 'string',
            public: false,
        });
        config.paymentOptions.paymentMethodHandlers.push(multivendorPaymentMethodHandler);

        const customDefaultOrderProcess = configureDefaultOrderProcess({
            checkFulfillmentStates: false,
        });
        config.orderOptions.process = [customDefaultOrderProcess, multivendorOrderProcess];
        config.orderOptions.orderSellerStrategy = new MultivendorSellerStrategy();
        config.catalogOptions.productVariantPriceUpdateStrategy =
            new DefaultProductVariantPriceUpdateStrategy({
                syncPricesAcrossChannels: true,
            });
        config.shippingOptions.shippingEligibilityCheckers.push(multivendorShippingEligibilityChecker);
        config.shippingOptions.shippingLineAssignmentStrategy =
            new MultivendorShippingLineAssignmentStrategy();
        return config;
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MultivendorResolver],
    },
    providers: [
        MultivendorService,
        { provide: MULTIVENDOR_PLUGIN_OPTIONS, useFactory: () => MultivendorPlugin.options },
    ],
})
export class MultivendorPlugin implements OnApplicationBootstrap {
    static options: MultivendorPluginOptions;

    constructor(
        private connection: TransactionalConnection,
        private channelService: ChannelService,
        private requestContextService: RequestContextService,
        private paymentMethodService: PaymentMethodService,
    ) { }

    static init(options: MultivendorPluginOptions) {
        MultivendorPlugin.options = options;
        return MultivendorPlugin;
    }

    async onApplicationBootstrap() {
        await this.ensureConnectedPaymentMethodExists();
    }

    private async ensureConnectedPaymentMethodExists() {
        const paymentMethod = await this.connection.rawConnection.getRepository(PaymentMethod).findOne({
            where: {
                code: CONNECTED_PAYMENT_METHOD_CODE,
            },
        });
        if (!paymentMethod) {
            const ctx = await this.requestContextService.create({ apiType: 'admin' });
            const allChannels = await this.connection.getRepository(ctx, Channel).find();
            const createdPaymentMethod = await this.paymentMethodService.create(ctx, {
                code: CONNECTED_PAYMENT_METHOD_CODE,
                enabled: true,
                handler: {
                    code: multivendorPaymentMethodHandler.code,
                    arguments: [],
                },
                translations: [
                    {
                        languageCode: LanguageCode.en,
                        name: 'Connected Payments',
                    },
                ],
            });
            await this.channelService.assignToChannels(
                ctx,
                PaymentMethod,
                createdPaymentMethod.id,
                allChannels.map(c => c.id),
            );
        }
    }
}
