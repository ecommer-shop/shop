import { Mutation, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Logger, Permission, RequestContext, Transaction } from '@vendure/core';

import { loggerCtx } from '../constants';
import { DeleteSellerAccountService } from '../services/delete-seller-account.service';

@Resolver()
export class DeleteAccountResolver {
    constructor(
        private deleteSellerAccountService: DeleteSellerAccountService,
    ) { }

    @Mutation()
    @Transaction()
    async deleteSellerAccount(@Ctx() ctx: RequestContext) {
        try {
            const result = await this.deleteSellerAccountService.deleteSellerAccount(ctx);
            if (!result.success) {
                Logger.warn(
                    `Delete account attempt failed: ${result.message}`,
                    loggerCtx,
                );
            }
            return result;
        } catch (error) {
            Logger.error(
                `Delete account error: ${error instanceof Error ? error.message : error}`,
                loggerCtx,
            );
            throw error;
        }
    }
}
