import { Args, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext } from '@vendure/core';

import { DeliveryCostService } from '../services/delivery-cost.service';
import type { DeliveryCostInput, DeliveryCostResult } from '../types';

@Resolver()
export class DeliveryCostShopResolver {
    constructor(private readonly deliveryCostService: DeliveryCostService) { }

    @Query()
    @Allow(Permission.Public)
    calculateDeliveryCost(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: DeliveryCostInput },
    ): Promise<DeliveryCostResult> {
        return this.deliveryCostService.calculate(ctx, args.input);
    }
}
