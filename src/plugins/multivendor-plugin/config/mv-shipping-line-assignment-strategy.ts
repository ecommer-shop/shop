import {
    ChannelService,
    idsAreEqual,
    Injector,
    Order,
    RequestContext,
    ShippingLine,
    ShippingLineAssignmentStrategy,
    ShippingMethod,
    TransactionalConnection,
} from '@vendure/core';

export class MultivendorShippingLineAssignmentStrategy implements ShippingLineAssignmentStrategy {
    private channelService: ChannelService;
    private connection: TransactionalConnection;

    init(injector: Injector) {
        this.channelService = injector.get(ChannelService);
        this.connection = injector.get(TransactionalConnection);
    }

    async assignShippingLineToOrderLines(ctx: RequestContext, shippingLine: ShippingLine, order: Order) {
        const defaultChannel = await this.channelService.getDefaultChannel();
        // Query channels directly to avoid entityHydrator $Command redefine error
        const method = await this.connection
            .getRepository(ctx, ShippingMethod)
            .createQueryBuilder('sm')
            .innerJoinAndSelect('sm.channels', 'channel')
            .where('sm.id = :id', { id: shippingLine.shippingMethodId })
            .getOne();
        const channels = method?.channels ?? [];

        const sellerChannels = channels.filter(c => !idsAreEqual(c.id, defaultChannel.id));

        // If a shipping method belongs to exactly one seller channel, it is seller-specific.
        // If it belongs to multiple seller channels, treat it as a global marketplace method.
        const sellerChannel = sellerChannels.length === 1 ? sellerChannels[0] : undefined;
        if (sellerChannel) {
            // Once we have established the seller's Channel, we can filter the OrderLines
            // that belong to that Channel. The `sellerChannelId` was previously established
            // in the `OrderSellerStrategy.setOrderLineSellerChannel()` method.
            return order.lines.filter(line => idsAreEqual(line.sellerChannelId, sellerChannel.id));
        }
        return order.lines;
    }
}
