import { Args, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext, TransactionalConnection, Logger } from '@vendure/core';
import { PaymentService } from '../services/payment.service';

@Resolver()
export class paymentShopResolver {
    constructor(private paymentService: PaymentService) { }

    @Query()
    @Allow(Permission.Public)
    GetPaymentSignature(@Ctx() ctx: RequestContext, @Args() args: { amountInCents: number; paymentReference: string }): Promise<string> {
        Logger.info('PaymentShopResolver: Getting payment signature', JSON.stringify({
            amountInCents: args.amountInCents,
            paymentReference: args.paymentReference
        }));
        return this.paymentService.getPaymentSignature(ctx, args.amountInCents, args.paymentReference);
    }
}