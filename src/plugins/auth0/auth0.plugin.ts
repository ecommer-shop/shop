import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { Auth0AuthenticationStrategy } from './auth0.strategy';
import { AuthorizationService } from './services/auth.service';
import { shopApiExtensions } from './api/api-external-extensions';
import { ExternalAuthResolver } from './api/external-auth.resolver';
import { ExternalAuthService } from './services/external-auth.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [ExternalAuthResolver],
    },
    providers: [
        AuthorizationService,
        ExternalAuthService
    ],
    exports: [AuthorizationService],
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