import { Injectable, Logger } from '@nestjs/common';
import { UserInputError } from '@vendure/core';
import { SocialLink } from '../types/social-link';

const loggerCtx = 'MetaOAuthService';

type FacebookPageInfo = {
    id: string;
    name: string;
    username?: string;
    picture?: string;
    instagram?: { id: string; username: string } | null;
};

@Injectable()
export class MetaOAuthService {
    private readonly appId = process.env.FACEBOOK_APP_ID || '';
    private readonly appSecret = process.env.FACEBOOK_APP_SECRET || '';
    private readonly graphVersion = process.env.FACEBOOK_GRAPH_VERSION || 'v18.0';

    async getPagesFromToken(accessToken: string): Promise<FacebookPageInfo[]> {
        const url = `https://graph.facebook.com/${this.graphVersion}/me/accounts?fields=id,name,username,picture{url}&access_token=${encodeURIComponent(accessToken)}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            Logger.error(`Facebook pages fetch error: ${data.error.message}`, loggerCtx);
            throw new UserInputError(`Error al obtener páginas de Facebook: ${data.error.message}`);
        }

        const pages: FacebookPageInfo[] = (data.data || []).map((p: any) => ({
            id: p.id,
            name: p.name,
            username: p.username || p.id,
            picture: p.picture?.data?.url || undefined,
        }));

        for (const page of pages) {
            try {
                const igRes = await fetch(
                    `https://graph.facebook.com/${this.graphVersion}/${page.id}?fields=instagram_business_account{id,username,profile_picture_url}&access_token=${encodeURIComponent(accessToken)}`,
                );
                const igData = await igRes.json();
                if (igData.instagram_business_account) {
                    page.instagram = {
                        id: igData.instagram_business_account.id,
                        username: igData.instagram_business_account.username,
                    };
                }
            } catch (e) {
                Logger.warn(`Could not fetch Instagram for page ${page.id}`, loggerCtx);
            }
        }

        return pages;
    }

    async getInstagramFromToken(accessToken: string): Promise<{ id: string; username: string; picture?: string }> {
        const url = `https://graph.facebook.com/${this.graphVersion}/me?fields=id,username,profile_picture_url&access_token=${encodeURIComponent(accessToken)}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            Logger.error(`Instagram user fetch error: ${data.error.message}`, loggerCtx);
            throw new UserInputError(`Error al obtener datos de Instagram: ${data.error.message}`);
        }

        return {
            id: data.id,
            username: data.username || data.id,
            picture: data.profile_picture_url || undefined,
        };
    }

    buildFacebookSocialLink(page: FacebookPageInfo, accessToken: string, expiresIn: number): SocialLink {
        return {
            platform: 'facebook',
            username: page.username || page.id,
            dmLink: `https://m.me/${page.username || page.id}`,
            profileUrl: `https://facebook.com/${page.username || page.id}`,
            displayName: page.name,
            avatarUrl: page.picture || null,
            inPipeline: false,
            platformAccountId: page.id,
            status: 'active',
            connectedAt: new Date().toISOString(),
        };
    }

    buildInstagramSocialLink(ig: { id: string; username: string; picture?: string }, accessToken: string, expiresIn: number): SocialLink {
        return {
            platform: 'instagram',
            username: ig.username,
            dmLink: `https://instagram.com/${ig.username}`,
            profileUrl: `https://instagram.com/${ig.username}`,
            displayName: ig.username,
            avatarUrl: ig.picture || null,
            inPipeline: false,
            platformAccountId: ig.id,
            status: 'active',
            connectedAt: new Date().toISOString(),
        };
    }

    isConfigured(): boolean {
        return !!(this.appId && this.appSecret);
    }
}
