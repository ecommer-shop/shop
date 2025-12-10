import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { ID } from '@vendure/common/lib/shared-types';
import { Allow, Ctx, RequestContext, Transaction } from '@vendure/core';
import { MercadoPagoService } from '../services/mercado-pago.service';

@Resolver()
export class MercadoPagoAdminResolver {
    constructor(private mercadoPagoService: MercadoPagoService) {}

    @Query()
    @Allow(Permission.SuperAdmin)
    async createMercadoPagoPreference(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<boolean> {
        return this.mercadoPagoService.createMercadoPagoPreference(ctx, args.id);
    }
}
