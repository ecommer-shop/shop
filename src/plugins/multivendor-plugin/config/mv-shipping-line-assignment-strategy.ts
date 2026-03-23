import {
    ChannelService,
    Channel,
    idsAreEqual,
    Injector,
    Order,
    OrderSellerStrategy,
    RequestContext,
    ShippingLine,
    ShippingLineAssignmentStrategy,
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
        // First we need to ensure the required relations are available
        // to work with.
        const defaultChannel = await this.channelService.getDefaultChannel();
        const channels = await this.connection
            .getRepository(ctx, Channel)
            .createQueryBuilder('channel')
            .leftJoin('channel.shippingMethods', 'shippingMethod')
            .where('shippingMethod.id = :shippingMethodId', {
                shippingMethodId: shippingLine.shippingMethodId,
            })
            .getMany();

        // We assume that, if a ShippingMethod is assigned to exactly 2 Channels,
        // then one is the default Channel and the other is the seller's Channel.
        if (channels.length === 2) {
            const sellerChannel = channels.find(c => !idsAreEqual(c.id, defaultChannel.id));
            if (sellerChannel) {
                // Once we have established the seller's Channel, we can filter the OrderLines
                // that belong to that Channel. The `sellerChannelId` was previously established
                // in the `OrderSellerStrategy.setOrderLineSellerChannel()` method.
                return order.lines.filter(line => idsAreEqual(line.sellerChannelId, sellerChannel.id));
            }
        }
        return order.lines;
    }
}
