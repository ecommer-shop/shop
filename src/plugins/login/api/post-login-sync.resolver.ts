import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Logger, Permission, RequestContext, Transaction } from '@vendure/core';

import { loggerCtx } from '../constants';
import { SellerOnboardingService } from '../services/seller-onboarding.service';
import gql from 'graphql-tag';

@Resolver()
export class PostLoginSyncResolver {
    constructor(private sellerOnboardingService: SellerOnboardingService) { }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    async syncSellerChannelAfterLogin(
        @Ctx() ctx: RequestContext,
        @Args() args: { channelToken: string },
    ): Promise<boolean> {
        try {
            await this.sellerOnboardingService.syncAllSellerAdminPermissionsForChannel(
                ctx,
                args.channelToken,
            );

            return true;
        } catch (e) {
            Logger.error(
                `syncSellerChannelAfterLogin failed: ${e instanceof Error ? e.message : e}`,
                loggerCtx,
            );
            return false;
        }
    }
}

export const postLoginSyncGraphql = gql`
    extend type Mutation {
        syncSellerChannelAfterLogin(channelToken: String!): Boolean!
    }
`;


