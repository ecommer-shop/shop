import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import {
    ChannelService,
    EntityHydrator,
    ID,
    idsAreEqual,
    Injector,
    InternalServerError,
    isGraphQlErrorResult,
    Logger,
    Order,
    OrderLine,
    OrderSellerStrategy,
    OrderService,
    PaymentMethod,
    PaymentMethodService,
    PaymentService,
    RequestContext,
    ShippingMethod,
    SplitOrderContents,
    Surcharge,
    TransactionalConnection,
} from '@vendure/core';

import { CONNECTED_PAYMENT_METHOD_CODE, MULTIVENDOR_PLUGIN_OPTIONS } from '../constants';
import { MultivendorPluginOptions } from '../types';

const loggerCtx = 'MultivendorSellerStrategy';

declare module '@vendure/core/dist/entity/custom-entity-fields' {
    interface CustomSellerFields {
        connectedAccountId: string;
    }
}

export class MultivendorSellerStrategy implements OrderSellerStrategy {
    private entityHydrator: EntityHydrator;
    private channelService: ChannelService;
    private paymentService: PaymentService;
    private paymentMethodService: PaymentMethodService;
    private connection: TransactionalConnection;
    private orderService: OrderService;
    private options: MultivendorPluginOptions;

    init(injector: Injector) {
        this.entityHydrator = injector.get(EntityHydrator);
        this.channelService = injector.get(ChannelService);
        this.paymentService = injector.get(PaymentService);
        this.paymentMethodService = injector.get(PaymentMethodService);
        this.connection = injector.get(TransactionalConnection);
        this.orderService = injector.get(OrderService);
        this.options = injector.get(MULTIVENDOR_PLUGIN_OPTIONS);
    }

    async setOrderLineSellerChannel(ctx: RequestContext, orderLine: OrderLine) {
        await this.entityHydrator.hydrate(ctx, orderLine.productVariant, { relations: ['channels'] });
        const defaultChannel = await this.channelService.getDefaultChannel();

        // Find any non-default channel assigned to the variant — that is the seller's channel.
        const sellerChannel = orderLine.productVariant.channels.find(
            c => !idsAreEqual(c.id, defaultChannel.id),
        );
        Logger.debug(
            `setOrderLineSellerChannel: variant ${orderLine.productVariant.id} channels=[${orderLine.productVariant.channels.map(c => c.code).join(', ')}] → sellerChannel=${sellerChannel?.code ?? 'NONE'}`,
            loggerCtx,
        );
        if (sellerChannel) {
            return sellerChannel;
        }
    }

    async splitOrder(ctx: RequestContext, order: Order): Promise<SplitOrderContents[]> {
        const partialOrders = new Map<ID, SplitOrderContents>();
        Logger.debug(`splitOrder: processing order ${order.code} with ${order.lines.length} lines`, loggerCtx);
        for (const line of order.lines) {
            const sellerChannelId = line.sellerChannelId;
            Logger.debug(`splitOrder: line ${line.id} sellerChannelId=${sellerChannelId ?? 'NULL'}`, loggerCtx);
            if (sellerChannelId) {
                let partialOrder = partialOrders.get(sellerChannelId);
                if (!partialOrder) {
                    partialOrder = {
                        channelId: sellerChannelId,
                        shippingLines: [],
                        lines: [],
                        state: 'ArrangingPayment',
                    };
                    partialOrders.set(sellerChannelId, partialOrder);
                }
                partialOrder.lines.push(line);
            }
        }

        // Determine which shipping lines are seller-specific vs global (default channel only).
        // We query the DB directly to avoid entityHydrator triggering $Command redefine errors.
        const defaultChannel = await this.channelService.getDefaultChannel();
        const shippingMethodIds = order.shippingLines
            .map(sl => sl.shippingMethodId)
            .filter((id): id is ID => id != null);
        const sellerShippingMethodIds = new Set<ID>();
        if (shippingMethodIds.length > 0) {
            const methods = await this.connection
                .getRepository(ctx, ShippingMethod)
                .createQueryBuilder('sm')
                .innerJoin('sm.channels', 'channel')
                .select('sm.id', 'id')
                .addSelect('channel.id', 'channelId')
                .where('sm.id IN (:...ids)', { ids: shippingMethodIds })
                .getRawMany<{ id: string; channelId: string }>();
            const methodChannels = new Map<string, string[]>();
            for (const row of methods) {
                const list = methodChannels.get(row.id) ?? [];
                list.push(row.channelId);
                methodChannels.set(row.id, list);
            }
            for (const [methodId, channelIds] of methodChannels) {
                const hasSellerChannel = channelIds.some(cId => !idsAreEqual(cId, defaultChannel.id));
                if (hasSellerChannel) {
                    sellerShippingMethodIds.add(methodId);
                }
            }
        }
        const sellerShippingLineIds = new Set<ID>(
            order.shippingLines
                .filter(sl => sl.shippingMethodId != null && sellerShippingMethodIds.has(sl.shippingMethodId))
                .map(sl => sl.id),
        );

        for (const partialOrder of Array.from(partialOrders.values())) {
            // Only assign seller-specific shipping lines to sub-orders.
            // Global shipping lines (default-shipping-eligibility-checker) remain on the aggregate order.
            const lineShippingLineIds = new Set(
                partialOrder.lines
                    .map(l => l.shippingLineId)
                    .filter(id => id != null && sellerShippingLineIds.has(id as ID)),
            );
            partialOrder.shippingLines = order.shippingLines.filter(shippingLine =>
                lineShippingLineIds.has(shippingLine.id),
            );
        }

        return Array.from(partialOrders.values());
    }

    async afterSellerOrdersCreated(ctx: RequestContext, aggregateOrder: Order, sellerOrders: Order[]) {
        const paymentMethod = await this.connection.rawConnection.getRepository(PaymentMethod).findOne({
            where: {
                code: CONNECTED_PAYMENT_METHOD_CODE,
            },
        });
        if (!paymentMethod) {
            return;
        }
        const defaultChannel = await this.channelService.getDefaultChannel();
        for (const sellerOrder of sellerOrders) {
            const sellerChannel = sellerOrder.channels.find(c => !idsAreEqual(c.id, defaultChannel.id));
            if (!sellerChannel) {
                throw new InternalServerError(
                    `Could not determine Seller Channel for Order ${sellerOrder.code}`,
                );
            }
            sellerOrder.surcharges = [await this.createPlatformFeeSurcharge(ctx, sellerOrder)];
            await this.orderService.applyPriceAdjustments(ctx, sellerOrder);
            await this.entityHydrator.hydrate(ctx, sellerChannel, { relations: ['seller'] });
            const result = await this.orderService.addPaymentToOrder(ctx, sellerOrder.id, {
                method: paymentMethod.code,
                metadata: {
                    transfer_group: aggregateOrder.code,
                    connectedAccountId: sellerChannel.seller?.customFields.connectedAccountId,
                },
            });
            if (isGraphQlErrorResult(result)) {
                throw new InternalServerError(result.message);
            }
        }
    }

    private async createPlatformFeeSurcharge(ctx: RequestContext, sellerOrder: Order) {
        const platformFee = Math.round(sellerOrder.totalWithTax * -(this.options.platformFeePercent / 100));
        return this.connection.getRepository(ctx, Surcharge).save(
            new Surcharge({
                taxLines: [],
                sku: this.options.platformFeeSKU,
                description: 'Platform fee',
                listPrice: platformFee,
                listPriceIncludesTax: true,
                order: sellerOrder,
            }),
        );
    }
}
