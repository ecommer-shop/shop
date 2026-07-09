import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, Product, RequestContext, Transaction } from '@vendure/core';

import { StoreFeaturedService } from '../services/store-featured.service';
import { SocialLinksService, parseSocialLinksJson } from '../services/social-links.service';
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
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async sellerSocialLinks(@Ctx() ctx: RequestContext): Promise<SocialLink[]> {
        return this.socialLinksService.get(ctx);
    }

    @Query()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async getFacebookOAuthUrl(@Ctx() ctx: RequestContext): Promise<string> {
        const redirectBase = resolveRedirectBase(ctx);
        const state = this.metaOAuthService.generateStateToken('facebook');
        return this.metaOAuthService.getFacebookOAuthUrl(redirectBase, state);
    }

    @Query()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async getInstagramOAuthUrl(@Ctx() ctx: RequestContext): Promise<string> {
        const redirectBase = resolveRedirectBase(ctx);
        const state = this.metaOAuthService.generateStateToken('instagram');
        return this.metaOAuthService.getInstagramOAuthUrl(redirectBase, state);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async updateSellerSocialLinks(
        @Ctx() ctx: RequestContext,
        @Args() args: { input: SocialLinkInput[] },
    ): Promise<boolean> {
        return this.socialLinksService.update(ctx, args.input);
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async connectFacebook(
        @Ctx() ctx: RequestContext,
        @Args() args: { authCode: string },
    ): Promise<SocialLink> {
        const redirectBase = resolveRedirectBase(ctx);
        const tokenData = await this.metaOAuthService.exchangeFacebookCode(redirectBase, args.authCode);
        const pages = await this.metaOAuthService.getFacebookPages(tokenData.accessToken);

        if (pages.length === 0) {
            throw new Error('No se encontraron páginas de Facebook. Crea una página primero.');
        }

        const page = pages[0];
        const link = this.metaOAuthService.buildFacebookSocialLink(page, tokenData.accessToken, tokenData.expiresIn);

        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== 'facebook');
        filtered.push(link);

        if (page.instagram) {
            const igLink = this.metaOAuthService.buildInstagramSocialLink(
                { id: page.instagram.id, username: page.instagram.username },
                tokenData.accessToken,
                tokenData.expiresIn,
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
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async connectInstagram(
        @Ctx() ctx: RequestContext,
        @Args() args: { authCode: string },
    ): Promise<SocialLink> {
        const redirectBase = resolveRedirectBase(ctx);
        const tokenData = await this.metaOAuthService.exchangeInstagramCode(redirectBase, args.authCode);
        const igUser = await this.metaOAuthService.getInstagramUser(tokenData.accessToken);
        const link = this.metaOAuthService.buildInstagramSocialLink(igUser, tokenData.accessToken, tokenData.expiresIn);

        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== 'instagram');
        filtered.push(link);
        await this.socialLinksService.update(ctx, filtered as SocialLinkInput[]);

        return link;
    }

    @Mutation()
    @Transaction()
    @Allow(Permission.UpdateCatalog, Permission.UpdateProduct)
    async disconnectSocialPlatform(
        @Ctx() ctx: RequestContext,
        @Args() args: { platform: string },
    ): Promise<boolean> {
        const current = await this.socialLinksService.get(ctx);
        const filtered = current.filter(l => l.platform !== args.platform);
        return this.socialLinksService.update(ctx, filtered as SocialLinkInput[]);
    }
}

function resolveRedirectBase(ctx: RequestContext): string {
    const host = ctx.req?.headers?.['host'] || 'localhost:3000';
    const protocol = ctx.req?.headers?.['x-forwarded-proto']?.toString().split(',')[0]?.trim() || 'http';
    return `${protocol}://${host}`;
}
