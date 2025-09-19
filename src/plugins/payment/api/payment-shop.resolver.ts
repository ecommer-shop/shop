import { Args, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext, TransactionalConnection } from '@vendure/core';
import { PaymentService } from '../services/payment.service';

@Resolver()
export class paymentShopResolver {
    constructor(private paymentService: PaymentService) { }

    @Query()
    @Allow(Permission.Public) // todo: adjust permissions as needed
    GetPaymentSignature(@Ctx() ctx: RequestContext, @Args() args: { amountInCents: number }): Promise<string> {
        return this.paymentService.getPaymentSignature(ctx, args.amountInCents);
    }
}
