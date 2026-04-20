import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { OrderType } from '@vendure/common/lib/generated-types';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import {
    Allow,
    Ctx,
    idsAreEqual,
    Order,
    OrderService,
    Permission,
    RequestContext,
    TransactionalConnection,
} from '@vendure/core';

/**
 * When a seller admin (non-default channel) queries an Order, they should only
 * see the OrderLines that belong to their own channel, and the totals must
 * reflect only those lines.
 *
 * The default-channel superadmin always sees the full order unchanged.
 */
@Resolver('Order')
export class MultivendorOrderResolver {
    constructor(
        private orderService: OrderService,
        private connection: TransactionalConnection,
    ) { }
    @ResolveField()
    lines(@Ctx() ctx: RequestContext, @Parent() order: Order) {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.lines;
        }
        if (!Array.isArray(order.lines)) {
            return order.lines;
        }
        return order.lines.filter(line => idsAreEqual(line.sellerChannelId, ctx.channelId));
    }

    @ResolveField()
    subTotal(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.subTotal;
        }
        if (!Array.isArray(order.lines)) {
            return order.subTotal;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        return sellerLines.reduce((sum, line) => sum + line.linePrice, 0);
    }

    @ResolveField()
    subTotalWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.subTotalWithTax;
        }
        if (!Array.isArray(order.lines)) {
            return order.subTotalWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        return sellerLines.reduce((sum, line) => sum + line.linePriceWithTax, 0);
    }

    @ResolveField()
    shippingLines(@Ctx() ctx: RequestContext, @Parent() order: Order) {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shippingLines;
        }
        if (!Array.isArray(order.lines)) {
            return order.shippingLines;
        }
        const lines = order.lines;
        return (order.shippingLines ?? []).filter(sl => {
            const assignedLines = lines.filter(line =>
                idsAreEqual(line.sellerChannelId, ctx.channelId),
            );
            return assignedLines.some(line => idsAreEqual(line.shippingLineId, sl.id));
        });
    }

    @ResolveField()
    shipping(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shipping;
        }
        if (!Array.isArray(order.lines)) {
            return order.shipping;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        return (order.shippingLines ?? [])
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.price, 0);
    }

    @ResolveField()
    shippingWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shippingWithTax;
        }
        if (!Array.isArray(order.lines)) {
            return order.shippingWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        return (order.shippingLines ?? [])
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.priceWithTax, 0);
    }

    @ResolveField()
    totalWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.totalWithTax;
        }
        if (!Array.isArray(order.lines)) {
            return order.totalWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const subTotalWithTax = sellerLines.reduce((sum, line) => sum + line.linePriceWithTax, 0);
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        const shippingWithTax = (order.shippingLines ?? [])
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.priceWithTax, 0);
        return subTotalWithTax + shippingWithTax;
    }

    @ResolveField()
    total(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.total;
        }
        if (!Array.isArray(order.lines)) {
            return order.total;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const subTotal = sellerLines.reduce((sum, line) => sum + line.linePrice, 0);
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        const shipping = (order.shippingLines ?? [])
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.price, 0);
        return subTotal + shipping;
    }

    /**
     * Permite buscar la seller order por el código de la orden agregada (visible para el comprador).
     * Un vendedor que busca "9UW5ADDF7GPP22D6" encontrará su sub-orden correspondiente.
     */
    @Query()
    @Allow(Permission.ReadOrder)
    async sellerOrderByAggregateCode(
        @Ctx() ctx: RequestContext,
        @Args() args: { aggregateCode: string },
    ): Promise<Order | undefined> {
        const aggregate = await this.connection
            .getRepository(ctx, Order)
            .findOne({ where: { code: args.aggregateCode, type: OrderType.Aggregate as any } });

        if (!aggregate) {
            return undefined;
        }

        // Superadmin en default channel ve el aggregate directamente
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return aggregate;
        }

        // Seller: buscar la sub-orden correspondiente a su canal
        const sellerOrders = await this.orderService.getSellerOrders(ctx, aggregate);
        return sellerOrders.find(so => idsAreEqual((so as any).channelId ?? so.id, ctx.channelId))
            ?? sellerOrders[0];
    }

    /**
     * For seller orders, expose the aggregate order's code so admins can
     * correlate the seller sub-order with what the customer sees.
     */
    @ResolveField()
    async aggregateOrderCode(
        @Ctx() ctx: RequestContext,
        @Parent() order: Order,
    ): Promise<string | null> {
        if (!order.aggregateOrderId) {
            return null;
        }
        const aggregate = await this.orderService.findOne(ctx, order.aggregateOrderId);
        return aggregate?.code ?? null;
    }
}
