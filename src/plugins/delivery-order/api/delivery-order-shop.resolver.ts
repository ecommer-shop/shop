import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext } from '@vendure/core';

import { DeliveryOrderService } from '../services/delivery-order.service';
import type { CreateDeliveryOrderInput, CreateDeliveryOrderResult } from '../types';

@Resolver()
export class DeliveryOrderShopResolver {
    constructor(private readonly deliveryOrderService: DeliveryOrderService) { }

    @Mutation()
    @Allow(Permission.Public)
    createDeliveryOrder(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: CreateDeliveryOrderInput },
    ): Promise<CreateDeliveryOrderResult> {
        return this.deliveryOrderService.create(ctx, args.input);
    }
}
