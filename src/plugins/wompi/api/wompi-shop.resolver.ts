import { Args, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext } from '@vendure/core';
import { WompiService } from '../services/wompi.service';

@Resolver()
export class WompiShopResolver {
    constructor(private wompiService: WompiService) { }

    @Query()
    @Allow(Permission.SuperAdmin) // todo: adjust permissions as needed
    getWompiSignature(@Ctx() ctx: RequestContext, @Args() args: { amountInCents: number }): Promise<string> {
        return this.wompiService.getSignature(ctx, args.amountInCents);
    }
}
