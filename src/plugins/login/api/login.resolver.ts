import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Logger, Permission, RequestContext, Transaction } from '@vendure/core';

import { GoogleAuthService } from '../services/google-auth.service';
import { loggerCtx } from '../constants';

@Resolver()
export class LoginResolver {
    constructor(private googleAuthService: GoogleAuthService) { }

    @Mutation()
    @Transaction()
    @Allow(Permission.Public)
    async registerSellerWithGoogle(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: { token: string; shopName: string } },
    ) {
        try {
            const result = await this.googleAuthService.registerSellerWithGoogle(
                ctx,
                args.input,
            );
            return result;
        } catch (error) {
            Logger.error(
                `Seller registration error: ${error instanceof Error ? error.message : error}`,
                loggerCtx,
            );
            throw error;
        }
    }
}
