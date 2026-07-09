import { Injectable, Logger } from '@nestjs/common';
import { RequestContext, UserInputError } from '@vendure/core';
import crypto from 'crypto';
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

    getFacebookOAuthUrl(redirectBase: string, state: string): string {
        const redirectUri = `${redirectBase}/dashboard/social/oauth/callback`;
        const scope = [
            'pages_show_list',
            'pages_read_engagement',
            'pages_manage_metadata',
            'instagram_basic',
            'public_profile',
        ].join(',');

        return `https://www.facebook.com/${this.graphVersion}/dialog/oauth?client_id=${this.appId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(state)}`;
    }

    getInstagramOAuthUrl(redirectBase: string, state: string): string {
        const redirectUri = `${redirectBase}/dashboard/social/oauth/callback`;
        const scope = ['instagram_business_basic'].join(',');

        return `https://www.facebook.com/${this.graphVersion}/dialog/oauth?client_id=${this.appId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(state)}`;
    }

    generateStateToken(platform: 'facebook' | 'instagram'): string {
        const nonce = crypto.randomBytes(8).toString('hex');
        return `${platform}_${nonce}`;
    }

    async exchangeFacebookCode(redirectBase: string, code: string): Promise<{ accessToken: string; expiresIn: number }> {
        const redirectUri = `${redirectBase}/dashboard/social/oauth/callback`;
        const url = `https://graph.facebook.com/${this.graphVersion}/oauth/access_token?client_id=${this.appId}&redirect_uri=${encodeURIComponent(redirectUri)}&client_secret=${this.appSecret}&code=${encodeURIComponent(code)}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            Logger.error(`Facebook token exchange error: ${data.error.message}`, loggerCtx);
            throw new UserInputError(`Error al conectar Facebook: ${data.error.message}`);
        }

        return { accessToken: data.access_token, expiresIn: data.expires_in || 5184000 };
    }

    async exchangeInstagramCode(redirectBase: string, code: string): Promise<{ accessToken: string; expiresIn: number }> {
        const redirectUri = `${redirectBase}/dashboard/social/oauth/callback`;
        const url = `https://graph.facebook.com/${this.graphVersion}/oauth/access_token?client_id=${this.appId}&redirect_uri=${encodeURIComponent(redirectUri)}&client_secret=${this.appSecret}&code=${encodeURIComponent(code)}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            Logger.error(`Instagram token exchange error: ${data.error.message}`, loggerCtx);
            throw new UserInputError(`Error al conectar Instagram: ${data.error.message}`);
        }

        return { accessToken: data.access_token, expiresIn: data.expires_in || 5184000 };
    }

    async getFacebookPages(accessToken: string): Promise<FacebookPageInfo[]> {
        const url = `https://graph.facebook.com/${this.graphVersion}/me/accounts?fields=id,name,username,picture{url}&access_token=${encodeURIComponent(accessToken)}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            Logger.error(`Facebook pages fetch error: ${data.error.message}`, loggerCtx);
            return [];
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

    async getInstagramUser(accessToken: string): Promise<{ id: string; username: string; picture?: string }> {
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
        const expiresAt = new Date(Date.now() + expiresIn * 1000).toISOString();
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
        const expiresAt = new Date(Date.now() + expiresIn * 1000).toISOString();
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
