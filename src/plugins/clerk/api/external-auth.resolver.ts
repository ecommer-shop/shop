import {
    Resolver,
    Mutation,
    Args,
} from '@nestjs/graphql';
import {
    Ctx,
    RequestContext,
    Allow,
    Permission,
    UserInputError,
} from '@vendure/core';
import { ExternalAuthService } from '../services/external-auth.service';
import { DeleteCustomerService } from '../services/delete-customer.service';

@Resolver()
export class ExternalAuthResolver {
    constructor(
        private externalAuthService: ExternalAuthService,
        private deleteCustomerService: DeleteCustomerService,
    ) { }

    @Mutation()
    @Allow(Permission.Public)
    async authenticateExternal(
        @Ctx() ctx: RequestContext,
        @Args('input') input: { token: string },
    ) {
        return await this.externalAuthService.loadCurrentUserRolesAndPermissions(ctx, input.token);
    }

    @Mutation()
    async deleteMyAccount(
        @Ctx() ctx: RequestContext,
        @Args('input') input: { clerkId: string },
    ) {
        const clerkId = input?.clerkId?.trim();

        if (!clerkId) {
            throw new UserInputError(
                'Debes enviar un clerkId valido para eliminar la cuenta.',
            );
        }

        return await this.deleteCustomerService.deleteCustomerByClerkId(ctx, clerkId);
    }
}

