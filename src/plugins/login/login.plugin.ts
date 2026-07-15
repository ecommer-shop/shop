import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { LOGIN_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { GoogleAdminAuthenticationStrategy } from './config/google-auth.strategy';
import { GoogleAuthService } from './services/google-auth.service';
import { GoogleTokenVerificationService } from './services/google-token-verification.service';
import { SellerOnboardingService } from './services/seller-onboarding.service';
import { DeleteSellerAccountService } from './services/delete-seller-account.service';
import { SellerChannelSetupJobService } from './services/seller-channel-setup-job.service';
import { LoginResolver } from './api/login.resolver';
import { adminApiExtensions } from './api/api-extensions';
import { DeleteAccountResolver } from './api/delete-account.resolver';

@VendurePlugin({

    imports: [PluginCommonModule],
    providers: [
        { provide: LOGIN_PLUGIN_OPTIONS, useFactory: () => LoginPlugin.options },
        GoogleAuthService,
        GoogleTokenVerificationService,
        SellerOnboardingService,
        DeleteSellerAccountService,
        SellerChannelSetupJobService,
    ],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [LoginResolver, DeleteAccountResolver],
    },

    configuration: config => {
        const clientId =
            LoginPlugin.options?.googleOAuthClientId ||
            process.env.GOOGLE_OAUTH_CLIENT_ID ||
            '';

        if (clientId) {
            config.authOptions.adminAuthenticationStrategy.push(
                new GoogleAdminAuthenticationStrategy(clientId),
            );
        }
        return config;
    },
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class LoginPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<LoginPlugin> {
        this.options = options;
        return LoginPlugin;
    }
}
