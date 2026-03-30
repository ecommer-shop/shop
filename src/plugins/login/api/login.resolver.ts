import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Logger, Permission, RequestContext, Transaction } from '@vendure/core';

import { GoogleAuthService } from '../services/google-auth.service';
import { loggerCtx } from '../constants';
import { LoginPlugin } from '../login.plugin';
import { RegisterSellerWithGoogleInput } from '../types';

@Resolver()
export class LoginResolver {
    constructor(private googleAuthService: GoogleAuthService) { }

    @Query()
    @Allow(Permission.Public)
    loginConfig() {
        return {
            googleOAuthClientId:
                LoginPlugin.options?.googleOAuthClientId ||
                process.env.GOOGLE_OAUTH_CLIENT_ID ||
                process.env.VITE_GOOGLE_OAUTH_CLIENT_ID ||
                '',
        };
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Public)
    async registerSellerWithGoogle(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: RegisterSellerWithGoogleInput },
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
