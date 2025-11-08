import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { Auth0AuthenticationStrategy } from './auth0.strategy';
import { shopApiExtensions } from './api/api-extensions';
import { Auth0Resolver } from './api/auth0.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [Auth0Resolver],
    },
    configuration: config => {
        config.authOptions.shopAuthenticationStrategy.push(
            new Auth0AuthenticationStrategy(
                process.env.AUTH0_DOMAIN || '',
                process.env.AUTH0_AUDIENCE || ''
            )
        );
        return config;
    },
})
export class Auth0Plugin {
    static init(options: { domain: string; audience: string }) {
        return Auth0Plugin;
    }
}