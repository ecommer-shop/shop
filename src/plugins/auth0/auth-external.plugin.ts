import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { shopApiExtensions } from './api/api-external-extensions';
import { ExternalAuthResolver } from './api/external-auth.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [ExternalAuthResolver],
    },
})
export class ExternalAuthPlugin { }
