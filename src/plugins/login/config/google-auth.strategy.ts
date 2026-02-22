import {
    AuthenticationStrategy,
    Injector,
    RequestContext,
    User,
    TransactionalConnection,
    Logger,
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { OAuth2Client } from 'google-auth-library';

import { loggerCtx } from '../constants';

export interface GoogleAuthData {
    token: string;
}

/**
 * @description
 * Estrategia de autenticación de Google para administradores y vendedores.
 * Acepta tanto un ID token (desde GIS renderButton) como un access_token
 * (desde OAuth2 initTokenClient popup). Si el token no es un ID token válido,
 * se intenta verificar como access_token llamando a la API de Google userinfo.
 */
export class GoogleAdminAuthenticationStrategy
    implements AuthenticationStrategy<GoogleAuthData> {
    readonly name = 'google';
    private client: OAuth2Client;
    private connection!: TransactionalConnection;

    constructor(private clientId: string) {
        this.client = new OAuth2Client(clientId);
    }

    defineInputType(): DocumentNode {
        return gql`
            input GoogleAuthInput {
                token: String!
            }
        `;
    }

    init(injector: Injector) {
        this.connection = injector.get(TransactionalConnection);
    }

    /**
     * Extrae el email del token de Google.
     * Primero intenta como ID token; si falla, como access_token.
     */
    private async resolveEmail(token: string): Promise<string | undefined> {
        // 1. Try as ID token
        try {
            const ticket = await this.client.verifyIdToken({
                idToken: token,
                audience: this.clientId,
            });
            const email = ticket.getPayload()?.email;
            if (email) return email;
        } catch {
            // Not a valid ID token — try as access_token below
        }

        // 2. Try as access_token via Google userinfo API
        try {
            const res = await fetch(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${token}` } },
            );
            if (res.ok) {
                const info = (await res.json()) as { email?: string };
                if (info.email) {
                    Logger.info('Authenticated via access_token (OAuth2 popup)', loggerCtx);
                    return info.email;
                }
            }
        } catch (err) {
            Logger.warn(
                `Userinfo call failed: ${err instanceof Error ? err.message : err}`,
                loggerCtx,
            );
        }

        return undefined;
    }

    async authenticate(
        ctx: RequestContext,
        data: GoogleAuthData,
    ): Promise<User | false> {
        try {
            const email = await this.resolveEmail(data.token);

            if (!email) {
                Logger.warn('Google token does not contain email', loggerCtx);
                return false;
            }

            // Buscar usuario administrador por email (identifier)
            const user = await this.connection
                .getRepository(ctx, User)
                .findOne({
                    where: { identifier: email },
                    relations: ['roles', 'roles.channels'],
                });

            if (!user) {
                Logger.warn(
                    `No admin/seller user found for email: ${email}`,
                    loggerCtx,
                );
                return false;
            }

            Logger.info(`Google auth successful for: ${email}`, loggerCtx);
            return user;
        } catch (error) {
            Logger.error(
                `Google auth error: ${error instanceof Error ? error.message : error}`,
                loggerCtx,
            );
            return false;
        }
    }
}
