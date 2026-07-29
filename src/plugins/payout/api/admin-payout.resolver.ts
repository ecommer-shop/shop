import { Injectable } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Allow, Permission, RequestContext, TransactionalConnection, Seller, Channel, Logger } from '@vendure/core';
import { PayoutAdminService } from '../services/payout-admin.service';
import { loggerCtx } from '../constants';

@Injectable()
@Resolver()
export class AdminPayoutResolver {
    private channelRepo;
    private sellerRepo;

    constructor(
        private payoutAdminService: PayoutAdminService,
        private connection: TransactionalConnection,
    ) {
        this.channelRepo = this.connection.rawConnection.getRepository(Channel);
        this.sellerRepo = this.connection.rawConnection.getRepository(Seller);
    }

    @Allow(Permission.Authenticated)
    @Query('myPayoutInfo')
    async getMyPayoutInfo(@Context() ctx: RequestContext) {
        const seller = await this.resolveSeller(ctx);
        if (!seller) return { brebVerified: false };

        const cf = (seller.customFields || {}) as any;
        return {
            legalIdType: cf.payoutLegalIdType || null,
            legalId: cf.payoutLegalId || null,
            accountType: cf.payoutAccountType || null,
            accountNumber: cf.payoutAccountNumber || null,
            bankCode: cf.payoutBankCode || null,
            brebKey: cf.payoutBrebKey || null,
            brebKeyType: cf.payoutBrebKeyType || null,
            brebVerified: cf.payoutBrebVerified || false,
        };
    }

    @Allow(Permission.Authenticated)
    @Mutation('saveMyPayoutInfo')
    async saveMyPayoutInfo(
        @Context() ctx: RequestContext,
        @Args('input') input: any,
    ) {
        const seller = await this.resolveSeller(ctx);
        if (!seller) {
            Logger.warn(`saveMyPayoutInfo: no se encontro seller para token ${ctx.req?.headers?.['vendure-token'] as string ?? ctx.channel?.token}`, loggerCtx);
            return { brebVerified: false };
        }

        (seller.customFields as any).payoutLegalIdType = input.legalIdType || null;
        (seller.customFields as any).payoutLegalId = input.legalId || null;
        (seller.customFields as any).payoutAccountType = input.accountType || null;
        (seller.customFields as any).payoutAccountNumber = input.accountNumber || null;
        (seller.customFields as any).payoutBankCode = input.bankCode || null;
        (seller.customFields as any).payoutBrebKey = input.brebKey || null;
        (seller.customFields as any).payoutBrebKeyType = input.brebKeyType || null;
        await this.sellerRepo.save(seller);

        return this.getMyPayoutInfo(ctx);
    }

    @Allow(Permission.Authenticated)
    @Query('myPayoutBatches')
    async getMyPayoutBatches(@Context() ctx: RequestContext) {
        const seller = await this.resolveSeller(ctx);
        if (!seller) return [];

        const token = await this.resolveChannelToken(ctx);
        if (!token) return [];

        return this.payoutAdminService.findBatchesByChannelToken(token);
    }

    private async resolveSeller(ctx: RequestContext): Promise<Seller | null> {
        const channelToken = ctx.req?.headers?.['vendure-token'] as string | undefined
            ?? ctx.channel?.token;
        if (!channelToken) return null;

        const channel = await this.channelRepo.findOne({
            where: { token: channelToken },
            select: ['id', 'sellerId', 'code', 'token'],
        });
        if (!channel?.sellerId) return null;

        return this.sellerRepo.findOne({ where: { id: Number(channel.sellerId) } });
    }

    private async resolveChannelToken(ctx: RequestContext): Promise<string | null> {
        return (ctx.req?.headers?.['vendure-token'] as string | undefined)
            ?? ctx.channel?.token
            ?? null;
    }
}