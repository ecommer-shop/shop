import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Channel,
    Ctx,
    Permission,
    RequestContext,
    TransactionalConnection,
} from '@vendure/core';

@Resolver()
export class SellerShippingSettingsResolver {
    constructor(private readonly connection: TransactionalConnection) {}

    @Query()
    @Allow(Permission.ReadShippingMethod)
    async sellerShippingSettings(@Ctx() ctx: RequestContext) {
        const channel = await this.connection
            .getRepository(ctx, Channel)
            .findOne({ where: { id: ctx.channelId } });

        const ownDeliveryEnabled =
            (channel as any)?.customFields?.ownDeliveryEnabled === true;

        return { ownDeliveryEnabled };
    }

    @Mutation()
    @Allow(Permission.UpdateShippingMethod)
    async updateSellerShippingSettings(
        @Ctx() ctx: RequestContext,
        @Args() args: { ownDeliveryEnabled: boolean },
    ) {
        const channel = await this.connection
            .getRepository(ctx, Channel)
            .findOne({ where: { id: ctx.channelId } });

        if (!channel) {
            throw new Error('Channel not found');
        }

        (channel as any).customFields.ownDeliveryEnabled = args.ownDeliveryEnabled;
        await this.connection.getRepository(ctx, Channel).save(channel);

        return { ownDeliveryEnabled: args.ownDeliveryEnabled };
    }
}
