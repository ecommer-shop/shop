import { Injectable } from '@nestjs/common';
import { Allow, Permission } from '@vendure/core';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { WompiService } from '../services/wompi.service';

@Injectable()
@Resolver()
export class WompiResolver {
    constructor(
        private wompiService: WompiService,
    ) { }

    @Query()
    @Allow(Permission.Authenticated)
    wompiDashboardConfig() {
        const creds = this.wompiService.getCredentials();
        if (!creds.publicKey) {
            return { publicKey: '', sandbox: true };
        }
        return {
            publicKey: creds.publicKey,
            sandbox: creds.publicKey.startsWith('pub_test_'),
        };
    }

    @Query('GetWompiIntegritySignature')
    async getWompiIntegritySignature(
        @Args('amountInCents') amountInCents: number,
        @Args('paymentReference') paymentReference: string,
    ) {
        return this.wompiService.generateWidgetIntegritySignature(amountInCents, paymentReference);
    }
}
