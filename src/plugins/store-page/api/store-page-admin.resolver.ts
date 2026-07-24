import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, Product, RequestContext, Transaction } from '@vendure/core';

import { StoreFeaturedService } from '../services/store-featured.service';
import { SocialLinksService } from '../services/social-links.service';
import { MetaOAuthService } from '../services/meta-oauth.service';
import { SocialLink, SocialLinkInput } from '../types/social-link';

@Resolver()
export class StorePageAdminResolver {
    constructor(
        private storeFeaturedService: StoreFeaturedService,
        private socialLinksService: SocialLinksService,
        private metaOAuthService: MetaOAuthService,
    ) {}

    @Mutation()
    @Transaction()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async setProductStoreFeatured(
        @Ctx() ctx: RequestContext,
        @Args() args: { productId: string; featured: boolean },
    ): Promise<Product> {
        return this.storeFeaturedService.setFeatured(ctx, args.productId, args.featured);
    }

    @Query()
    @Allow(Permission.Authenticated)
    async sellerSocialLinks(@Ctx() ctx: RequestContext): Promise<SocialLink[]> {
        return this.socialLinksService.get(ctx);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    async updateSellerSocialLinks(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: SocialLinkInput[] },
    ): Promise<boolean> {
        return this.socialLinksService.update(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    async connectFacebookWithToken(
        @Ctx() ctx: RequestContext,
        @Args() args: { accessToken: string },
    ): Promise<SocialLink> {
        const pages = await this.metaOAuthService.getPagesFromToken(args.accessToken);

        if (pages.length === 0) {
            throw new Error('No se encontraron páginas de Facebook. Crea una página primero.');
        }

        const page = pages[0];
        const link = this.metaOAuthService.buildFacebookSocialLink(page, args.accessToken, 0);

        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== 'facebook');
        filtered.push(link);

        if (page.instagram) {
            const igLink = this.metaOAuthService.buildInstagramSocialLink(
                { id: page.instagram.id, username: page.instagram.username },
                args.accessToken,
                0,
            );
            const noIg = filtered.filter(l => l.platform !== 'instagram');
            noIg.push(igLink);
            await this.socialLinksService.update(ctx, noIg as SocialLinkInput[]);
        } else {
            await this.socialLinksService.update(ctx, filtered as SocialLinkInput[]);
        }

        return link;
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    async connectInstagramWithToken(
        @Ctx() ctx: RequestContext,
        @Args() args: { accessToken: string },
    ): Promise<SocialLink> {
        const igUser = await this.metaOAuthService.getInstagramFromToken(args.accessToken);
        const link = this.metaOAuthService.buildInstagramSocialLink(igUser, args.accessToken, 0);

        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== 'instagram');
        filtered.push(link);
        await this.socialLinksService.update(ctx, filtered as SocialLinkInput[]);

        return link;
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.Authenticated)
    async disconnectSocialPlatform(
        @Ctx() ctx: RequestContext,
        @Args() args: { platform: string },
    ): Promise<boolean> {
        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== args.platform);
        return this.socialLinksService.update(ctx, filtered as SocialLinkInput[]);
    }
}
