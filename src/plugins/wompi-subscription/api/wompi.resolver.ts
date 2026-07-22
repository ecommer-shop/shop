import { Injectable, Logger } from '@nestjs/common';
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

    @Query('getAdminWompiTransactionStatus')
    async getAdminWompiTransactionStatus(
        @Args('transactionId') transactionId: string,
    ) {
        try {
            const txn = await this.wompiService.getTransaction(transactionId);
            const extra = (txn as any).payment_method?.extra ?? null;
            const asyncPaymentUrl = extra?.async_payment_url ?? null;
            const qrImage = extra?.qr_image ?? null;
            const url = extra?.url ?? null;

            Logger.debug(`Admin poll - txn ${transactionId} status=${txn.status} asyncPaymentUrl=${asyncPaymentUrl ? '✓' : '✗'} qrImage=${qrImage ? '✓' : '✗'} url=${url ? '✓' : '✗'}`, 'WompiResolver');

            return {
                id: txn.id,
                status: txn.status,
                statusMessage: (txn as any).status_message ?? null,
                asyncPaymentUrl,
                qrImage,
                url,
            };
        } catch (error: any) {
            Logger.error(`getAdminWompiTransactionStatus failed: ${error.message}`, 'WompiResolver');
            throw error;
        }
    }
}
