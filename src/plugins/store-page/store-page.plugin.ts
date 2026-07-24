import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { storePageAdminApiExtensions, storePageShopApiExtensions } from './api/api-extensions';
import { StorePageAdminResolver } from './api/store-page-admin.resolver';
import { ProductSellerShopResolver } from './api/product-seller-shop.resolver';
import { StorePageShopResolver } from './api/store-page-shop.resolver';
import { StoreFeaturedService } from './services/store-featured.service';
import { SocialLinksService } from './services/social-links.service';
import { MetaOAuthService } from './services/meta-oauth.service';

@VendurePlugin({
    imports: [PluginCommonModule],
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
