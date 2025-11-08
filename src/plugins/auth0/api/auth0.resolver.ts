import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService, RequestContext, Ctx, Transaction } from '@vendure/core';

@Resolver()
export class Auth0Resolver {
    constructor(private authService: AuthService) { }

    @Transaction()
    @Mutation('authenticateAuth0')
    async authenticateAuth0(
        @Ctx() ctx: RequestContext,
        @Args('input') input: { token: string }
    ) {
        return this.authService.authenticate(ctx, 'shop', 'auth0', input.token);
    }
}
