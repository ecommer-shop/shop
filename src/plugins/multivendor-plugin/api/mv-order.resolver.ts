import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import { Ctx, idsAreEqual, Order, RequestContext } from '@vendure/core';

/**
 * When a seller admin (non-default channel) queries an Order, they should only
 * see the OrderLines that belong to their own channel, and the totals must
 * reflect only those lines.
 *
 * The default-channel superadmin always sees the full order unchanged.
 */
@Resolver('Order')
export class MultivendorOrderResolver {
    /**
     * Returns only the lines that belong to the current seller's channel.
     * If the context is the default channel, all lines are returned.
     */
    @ResolveField()
    lines(@Ctx() ctx: RequestContext, @Parent() order: Order) {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.lines;
        }
        return order.lines.filter(line => idsAreEqual(line.sellerChannelId, ctx.channelId));
    }

    /**
     * Sum of line prices (without tax) for the seller's lines.
     */
    @ResolveField()
    subTotal(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.subTotal;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        return sellerLines.reduce((sum, line) => sum + line.linePrice, 0);
    }

    /**
     * Sum of line prices (with tax) for the seller's lines.
     */
    @ResolveField()
    subTotalWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.subTotalWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        return sellerLines.reduce((sum, line) => sum + line.linePriceWithTax, 0);
    }

    /**
     * Returns only the shipping lines that correspond to the seller's channel
     * (i.e. the ShippingMethod is assigned to this channel but not the default).
     */
    @ResolveField()
    shippingLines(@Ctx() ctx: RequestContext, @Parent() order: Order) {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shippingLines;
        }
        return order.shippingLines.filter(sl => {
            // The ShippingLine stores the sellerChannelId on OrderLines via the
            // assignment strategy. We match by comparing the shippingLine's
            // associated OrderLines to the seller's channel.
            const assignedLines = order.lines.filter(line =>
                idsAreEqual(line.sellerChannelId, ctx.channelId),
            );
            return assignedLines.some(line => idsAreEqual(line.shippingLineId, sl.id));
        });
    }

    /**
     * Shipping cost (without tax) for only the seller's shipping lines.
     */
    @ResolveField()
    shipping(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shipping;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        return order.shippingLines
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.priceWithTax - (sl.priceWithTax - sl.price), 0);
    }

    /**
     * Shipping cost (with tax) for only the seller's shipping lines.
     */
    @ResolveField()
    shippingWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.shippingWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        return order.shippingLines
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.priceWithTax, 0);
    }

    /**
     * Total (with tax) = seller's subTotalWithTax + seller's shippingWithTax.
     */
    @ResolveField()
    totalWithTax(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.totalWithTax;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const subTotalWithTax = sellerLines.reduce((sum, line) => sum + line.linePriceWithTax, 0);

        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        const shippingWithTax = order.shippingLines
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.priceWithTax, 0);

        return subTotalWithTax + shippingWithTax;
    }

    /**
     * Total (without tax) = seller's subTotal + seller's shipping.
     */
    @ResolveField()
    total(@Ctx() ctx: RequestContext, @Parent() order: Order): number {
        if (ctx.channel.code === DEFAULT_CHANNEL_CODE) {
            return order.total;
        }
        const sellerLines = order.lines.filter(line =>
            idsAreEqual(line.sellerChannelId, ctx.channelId),
        );
        const subTotal = sellerLines.reduce((sum, line) => sum + line.linePrice, 0);

        const sellerShippingLineIds = new Set(
            sellerLines.map(line => line.shippingLineId?.toString()).filter(Boolean),
        );
        const shipping = order.shippingLines
            .filter(sl => sellerShippingLineIds.has(sl.id.toString()))
            .reduce((sum, sl) => sum + sl.price, 0);

        return subTotal + shipping;
    }
}
