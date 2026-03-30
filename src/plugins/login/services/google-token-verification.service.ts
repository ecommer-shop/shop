import { Injectable } from '@nestjs/common';
import { OAuth2Client, TokenPayload } from 'google-auth-library';

@Injectable()
export class GoogleTokenVerificationService {
    private readonly client: OAuth2Client;
    private readonly googleUserInfoApi = 'https://www.googleapis.com/oauth2/v3/userinfo';
    private readonly googleTokenInfoApi = 'https://oauth2.googleapis.com/tokeninfo';

    constructor() {
        this.client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT_ID);
    }

    /**
     * Verifica un token de Google (ID token o access_token) y retorna el payload.
     * Primero intenta como ID token; si falla, como access_token via Google userinfo.
     */
    async verifyGoogleToken(token: string): Promise<TokenPayload> {
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_OAUTH_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (payload?.email) {
                return payload;
            }
        } catch {
            // Fallback to userinfo endpoint for access tokens.
        }

        const tokenInfoRes = await fetch(
            `${this.googleTokenInfoApi}?access_token=${encodeURIComponent(token)}`,
        );
        if (!tokenInfoRes.ok) {
            throw new Error('Google access token validation failed');
        }

        const tokenInfo = (await tokenInfoRes.json()) as {
            aud?: string;
            azp?: string;
        };

        if (tokenInfo.aud !== process.env.GOOGLE_OAUTH_CLIENT_ID) {
            throw new Error(
                'Google access token audience does not match this project client id',
            );
        }

        const res = await fetch(this.googleUserInfoApi, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error(`Google userinfo request failed: ${res.status}`);
        }

        const info = (await res.json()) as {
            email?: string;
            given_name?: string;
            family_name?: string;
            sub?: string;
            email_verified?: boolean;
        };

        if (!info.email) {
            throw new Error('Google token does not contain an email address');
        }

        return {
            iss: 'https://accounts.google.com',
            aud: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
            sub: info.sub || '',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 3600,
            email: info.email,
            email_verified: info.email_verified ?? true,
            given_name: info.given_name,
            family_name: info.family_name,
        } as TokenPayload;
    }
}
