import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { AI_CHAT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { AiChat } from './services/ai-chat';
import { AiChatAdminResolver } from './api/ai-chat-admin.resolver';
import { AiChatShopResolver } from './api/ai-chat-shop.resolver';
import { adminApiExtensions } from './api/api-extensions';
import { shopApiExtensions } from './api/shop-api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: AI_CHAT_PLUGIN_OPTIONS, useFactory: () => AiChatPlugin.options }, AiChat],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [AiChatAdminResolver]
    },
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [AiChatShopResolver]
    },
})
export class AiChatPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<AiChatPlugin> {
        this.options = options;
        return AiChatPlugin;
    }
}
