import { LanguageCode, PluginCommonModule, VendurePlugin } from '@vendure/core';

import { storePageAdminApiExtensions, storePageShopApiExtensions } from './api/api-extensions';
import { StorePageAdminResolver } from './api/store-page-admin.resolver';
import { ProductSellerShopResolver } from './api/product-seller-shop.resolver';
import { StorePageShopResolver } from './api/store-page-shop.resolver';
import { StoreFeaturedService } from './services/store-featured.service';
import { SocialLinksService } from './services/social-links.service';
import { MetaOAuthService } from './services/meta-oauth.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    configuration: config => {
        config.customFields.Seller.push({
            name: 'socialLinks',
            type: 'text',
            nullable: true,
            public: true,
            label: [{ languageCode: LanguageCode.es, value: 'Redes sociales' }],
            description: [
                {
                    languageCode: LanguageCode.es,
                    value: 'Redes sociales vinculadas del vendedor (WhatsApp, Facebook, Instagram)',
                },
            ],
        });
        return config;
    },
    providers: [
        StoreFeaturedService,
        SocialLinksService,
        MetaOAuthService,
    ],
    shopApiExtensions: {
        schema: storePageShopApiExtensions,
        resolvers: [StorePageShopResolver, ProductSellerShopResolver],
    },
    adminApiExtensions: {
        schema: storePageAdminApiExtensions,
        resolvers: [StorePageAdminResolver],
    },
    dashboard: './dashboard/index.tsx',
})
export class StorePagePlugin {}
