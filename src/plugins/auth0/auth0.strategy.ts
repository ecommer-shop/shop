import {
    AuthenticationStrategy,
    ExternalAuthenticationService,
    Injector,
    RequestContext,
    User,
    RoleService,
    TransactionalConnection,
    Role,
    Logger,
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

export interface Auth0Data {
    token: string;
}

export class Auth0AuthenticationStrategy implements AuthenticationStrategy<Auth0Data> {
    readonly name = 'auth0';
    private externalAuthenticationService: ExternalAuthenticationService;
    private roleService: RoleService;
    private connection: TransactionalConnection;
    private client: jwksClient.JwksClient;

    constructor(private domain: string, private audience: string) {
        this.client = jwksClient({
            jwksUri: `https://${domain}/.well-known/jwks.json`,
            cache: true,
            rateLimit: true,
        });
    }

    defineInputType(): DocumentNode {
        return gql`
      input Auth0AuthInput {
        token: String!
      }
    `;
    }

    init(injector: Injector) {
        this.externalAuthenticationService = injector.get(ExternalAuthenticationService);
        this.roleService = injector.get(RoleService);
        this.connection = injector.get(TransactionalConnection);
    }

    async authenticate(ctx: RequestContext, data: Auth0Data): Promise<User | false> {
        try {
            const decoded = await this.verifyToken(data.token);
            if (!decoded?.email) return false;

            // Buscar usuario existente
            const existingUser = await this.externalAuthenticationService.findCustomerUser(
                ctx,
                this.name,
                decoded.sub,
            );

            if (existingUser) {
                return existingUser;
            }

            // Crear nuevo usuario y cliente
            const newUser = await this.externalAuthenticationService.createCustomerAndUser(ctx, {
                strategy: this.name,
                externalIdentifier: decoded.sub,
                verified: decoded.email_verified ?? false,
                emailAddress: decoded.email,
                firstName: decoded.given_name || decoded.name?.split(' ')[0] || '',
                lastName: decoded.family_name || decoded.name?.split(' ')[1] || '',
            });

            // Vendure asigna automáticamente el rol `__customer_role__`
            Logger.info(`Nuevo usuario creado desde Auth0: ${decoded.email}`, 'Auth0Strategy');

            return newUser;
        } catch (error) {
            Logger.error(`Auth0 error: ${error instanceof Error ? error.message : error}`, 'Auth0Strategy');
            return false;
        }
    }

    private async verifyToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const decodedToken = jwt.decode(token, { complete: true });

            if (!decodedToken || !decodedToken.header.kid) {
                reject(new Error('Invalid token'));
                return;
            }

            this.client.getSigningKey(decodedToken.header.kid, (err, key) => {
                if (err || !key) {
                    reject(err || new Error('Missing signing key'));
                    return;
                }

                const signingKey = key.getPublicKey();

                jwt.verify(
                    token,
                    signingKey,
                    {
                        audience: this.audience,
                        issuer: `https://${this.domain}/`,
                        algorithms: ['RS256'],
                    },
                    (verifyErr, decoded) => {
                        if (verifyErr) {
                            reject(verifyErr);
                        } else {
                            resolve(decoded);
                        }
                    },
                );
            });
        });
    }
}
