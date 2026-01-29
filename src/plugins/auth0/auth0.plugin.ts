import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { ClerkAuthenticationStrategy } from './auth0.strategy';
import { AuthorizationService } from './services/auth.service';
import { ExternalAuthService } from './services/external-auth.service';
import { shopApiExtensions } from './api/api-external-extensions';
import { ExternalAuthResolver } from './api/external-auth.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [ExternalAuthResolver],
    },
    providers: [AuthorizationService, ExternalAuthService],
    exports: [AuthorizationService],
    configuration: config => {
        config.authOptions.shopAuthenticationStrategy.push(
            new ClerkAuthenticationStrategy()
        );
        return config;
    },
})

export class ClerkPlugin {
    static init(options?: {}) {
        return ClerkPlugin;
    }
}