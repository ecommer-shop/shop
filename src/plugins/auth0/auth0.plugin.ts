import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { Auth0AuthenticationStrategy } from './auth0.strategy';

export interface Auth0PluginOptions {
    domain: string;
    audience: string;
}

@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: (config) => {

        return Auth0Plugin.configure(config);
    }
})
export class Auth0Plugin {
    static options: Auth0PluginOptions;

    static init(options: Auth0PluginOptions): typeof Auth0Plugin {
        this.options = options;
        return Auth0Plugin;
    }

    static configure(config: any) {
        const strategy = new Auth0AuthenticationStrategy(
            this.options.domain,
            this.options.audience
        );

        config.authOptions.shopAuthenticationStrategy.push(strategy);

        return config;
    }
}