import {
    Resolver,
    Mutation,
    Args,
} from '@nestjs/graphql';
import {
    Ctx,
    RequestContext,
    Allow,
    Permission
} from '@vendure/core';
import { ExternalAuthService } from '../services/external-auth.service';

@Resolver()
export class ExternalAuthResolver {
    constructor(
        private externalAuthService: ExternalAuthService
    ) { }

    @Mutation()
    @Allow(Permission.Public)
    async authenticateExternal(
        @Ctx() ctx: RequestContext,
        @Args('input') input: { token: string },
    ) {
        return await this.externalAuthService.loadCurrentUserRolesAndPermissions(ctx, input.token);
    }
}
