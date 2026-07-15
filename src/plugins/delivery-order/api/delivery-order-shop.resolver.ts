import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext } from '@vendure/core';

import { ExternalDeliveryOrder } from '../entities/external-delivery-order.entity';
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

    @Query()
    @Allow(Permission.Authenticated)
    deliveryOrdersByOrderCode(
        @Ctx() ctx: RequestContext,
        @Args() args: { orderCode: string },
    ): Promise<ExternalDeliveryOrder[]> {
        return this.deliveryOrderService.findByOrderCode(ctx, args.orderCode);
    }
}
