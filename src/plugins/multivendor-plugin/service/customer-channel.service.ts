import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
    ChannelService,
    Customer,
    EventBus,
    Logger,
    OrderPlacedEvent,
    RequestContextService,
} from '@vendure/core';

const loggerCtx = 'CustomerChannelService';

@Injectable()
export class CustomerChannelService implements OnApplicationBootstrap {
    constructor(
        private eventBus: EventBus,
        private channelService: ChannelService,
        private requestContextService: RequestContextService,
    ) {}

    async onApplicationBootstrap() {
        this.eventBus.ofType(OrderPlacedEvent).subscribe(async (event) => {
            await this.assignCustomerToSellerChannels(event);
        });
    }

    private async assignCustomerToSellerChannels(event: OrderPlacedEvent) {
        try {
            const { order } = event;
            const customer = order.customer;
            if (!customer) return;

            const sellerChannelIds = Array.from(
                new Set(
                    order.lines
                        .filter((line) => line.sellerChannelId != null)
                        .map((line) => line.sellerChannelId as string),
                ),
            );

            if (sellerChannelIds.length === 0) return;

            const ctx = await this.requestContextService.create({
                apiType: 'admin',
            });

            for (const channelId of sellerChannelIds) {
                await this.channelService.assignToChannels(
                    ctx,
                    Customer,
                    customer.id,
                    [channelId],
                );
                Logger.info(
                    `Customer ${customer.id} (${customer.emailAddress}) assigned to channel ${channelId}`,
                    loggerCtx,
                );
            }
        } catch (error: any) {
            Logger.error(
                `Error assigning customer to seller channels: ${error.message}`,
                loggerCtx,
                error.stack,
            );
        }
    }
}
