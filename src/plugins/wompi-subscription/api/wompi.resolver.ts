import { Injectable } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { WompiService } from '../services/wompi.service';

@Injectable()
@Resolver()
export class WompiResolver {
    constructor(
        private wompiService: WompiService,
    ) { }

    @Query('GetWompiIntegritySignature')
    async getWompiIntegritySignature(
        @Args('amountInCents') amountInCents: number,
        @Args('paymentReference') paymentReference: string,
    ) {
        return this.wompiService.generateWidgetIntegritySignature(amountInCents, paymentReference);
    }
}
