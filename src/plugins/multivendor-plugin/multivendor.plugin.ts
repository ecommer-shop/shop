import { OnApplicationBootstrap } from '@nestjs/common';
import {
    Channel,
    ChannelService,
    configureDefaultOrderProcess,
    defaultShippingCalculator,
    DefaultProductVariantPriceUpdateStrategy,
    ID,
    LanguageCode,
    Logger,
    manualFulfillmentHandler,
    PaymentMethod,
    PaymentMethodService,
    PluginCommonModule,
    RequestContext,
    RequestContextService,
    ShippingMethod,
    ShippingMethodService,
    TaxSetting,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';
import gql from 'graphql-tag';

import { shopApiExtensions } from './api/api-extensions';
import { MultivendorOrderResolver } from './api/mv-order.resolver';
import { MultivendorResolver } from './api/mv.resolver';
import { multivendorOrderProcess } from './config/mv-order-process';
import { MultivendorSellerStrategy } from './config/mv-order-seller-strategy';
import { multivendorPaymentMethodHandler } from './config/mv-payment-handler';
import { multivendorShippingEligibilityChecker } from './config/mv-shipping-eligibility-checker';
import { MultivendorShippingLineAssignmentStrategy } from './config/mv-shipping-line-assignment-strategy';
import {
    CONNECTED_PAYMENT_METHOD_CODE,
    MESSENGER_DOMIS_SHIPPING_METHOD_CODE,
    MESSENGER_DOMIS_SHIPPING_METHOD_DESCRIPTION,
    MESSENGER_DOMIS_SHIPPING_METHOD_NAME,
    MULTIVENDOR_PLUGIN_OPTIONS,
} from './constants';
import { AutoFulfillService } from './service/auto-fulfill.service';
import { MultivendorService } from './service/mv.service';
import { MultivendorPluginOptions } from './types';

const loggerCtx = 'MultivendorPlugin';

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
    adminApiExtensions: {
        schema: gql`
            extend type Order {
                aggregateOrderCode: String
            }
            extend type Query {
                sellerOrderByAggregateCode(aggregateCode: String!): Order
            }
        `,
        resolvers: [MultivendorOrderResolver],
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MultivendorResolver],
    },
    providers: [
        MultivendorService,
        AutoFulfillService,
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
        private shippingMethodService: ShippingMethodService,
    ) { }

    static init(options: MultivendorPluginOptions) {
        MultivendorPlugin.options = options;
        return MultivendorPlugin;
    }

    async onApplicationBootstrap() {
        await this.ensureConnectedPaymentMethodExists();
        await this.ensureMessengerDomisShippingMethodExists();
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

    private async ensureMessengerDomisShippingMethodExists() {
        const ctx = await this.requestContextService.create({ apiType: 'admin' });
        const allChannels = await this.connection.getRepository(ctx, Channel).find();
        const sellerChannels = await this.getSellerChannels(ctx, allChannels);
        const repository = this.connection.rawConnection.getRepository(ShippingMethod);
        let shippingMethod = await repository.findOne({
            where: {
                code: MESSENGER_DOMIS_SHIPPING_METHOD_CODE,
            },
            relations: ['channels'],
        });

        if (!shippingMethod) {
            shippingMethod = await this.shippingMethodService.create(ctx, this.getMessengerDomisShippingMethodInput());
            Logger.info(`Created shipping method ${MESSENGER_DOMIS_SHIPPING_METHOD_CODE}`, loggerCtx);
        } else {
            await this.shippingMethodService.update(ctx, {
                id: shippingMethod.id,
                ...this.getMessengerDomisShippingMethodInput(),
            });
        }

        const refreshedShippingMethod = await repository.findOne({
            where: {
                code: MESSENGER_DOMIS_SHIPPING_METHOD_CODE,
            },
            relations: ['channels'],
        });

        if (!refreshedShippingMethod) {
            return;
        }

        const assignedChannelIds = new Set(
            (refreshedShippingMethod.channels ?? []).map(channel => String(channel.id)),
        );
        const missingChannelIds = sellerChannels
            .map(channel => channel.id)
            .filter(channelId => !assignedChannelIds.has(String(channelId)));

        if (missingChannelIds.length > 0) {
            await this.channelService.assignToChannels(
                ctx,
                ShippingMethod,
                refreshedShippingMethod.id,
                missingChannelIds,
            );
        }

        await this.removeNonMessengerShippingMethodsFromSellerChannels(
            ctx,
            sellerChannels,
            refreshedShippingMethod.id,
        );
    }

    private async getSellerChannels(ctx: RequestContext, channels: Channel[]) {
        const defaultChannel = await this.channelService.getDefaultChannel(ctx);
        return channels.filter(channel => String(channel.id) !== String(defaultChannel.id));
    }

    private async removeNonMessengerShippingMethodsFromSellerChannels(
        ctx: RequestContext,
        sellerChannels: Channel[],
        messengerShippingMethodId: ID,
    ) {
        if (sellerChannels.length === 0) {
            return;
        }

        const sellerChannelIds = new Set(sellerChannels.map(channel => String(channel.id)));
        const shippingMethods = await this.connection
            .getRepository(ctx, ShippingMethod)
            .createQueryBuilder('shippingMethod')
            .leftJoinAndSelect('shippingMethod.channels', 'channel')
            .where('shippingMethod.id != :messengerShippingMethodId', { messengerShippingMethodId })
            .getMany();

        for (const shippingMethod of shippingMethods) {
            const channelIdsToRemove = (shippingMethod.channels ?? [])
                .filter(channel => sellerChannelIds.has(String(channel.id)))
                .map(channel => channel.id);

            if (channelIdsToRemove.length > 0) {
                await this.channelService.removeFromChannels(
                    ctx,
                    ShippingMethod,
                    shippingMethod.id,
                    channelIdsToRemove,
                );
            }
        }
    }

    private getMessengerDomisShippingMethodInput() {
        return {
            code: MESSENGER_DOMIS_SHIPPING_METHOD_CODE,
            fulfillmentHandler: manualFulfillmentHandler.code,
            checker: {
                code: multivendorShippingEligibilityChecker.code,
                arguments: [],
            },
            calculator: {
                code: defaultShippingCalculator.code,
                arguments: [
                    { name: 'rate', value: '0' },
                    { name: 'includesTax', value: TaxSetting.auto },
                    { name: 'taxRate', value: '0' },
                ],
            },
            translations: [
                {
                    languageCode: LanguageCode.es,
                    name: MESSENGER_DOMIS_SHIPPING_METHOD_NAME,
                    description: MESSENGER_DOMIS_SHIPPING_METHOD_DESCRIPTION,
                },
                {
                    languageCode: LanguageCode.en,
                    name: MESSENGER_DOMIS_SHIPPING_METHOD_NAME,
                    description: MESSENGER_DOMIS_SHIPPING_METHOD_DESCRIPTION,
                },
            ],
        };
    }
}
