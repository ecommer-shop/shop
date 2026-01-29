import {
    AuthenticationStrategy,
    ExternalAuthenticationService,
    Injector,
    RequestContext,
    User,
    TransactionalConnection,
    Logger,
} from '@vendure/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { verifyToken } from '@clerk/backend';

export interface ClerkData {
    token: string;
}

export class ClerkAuthenticationStrategy implements AuthenticationStrategy<ClerkData> {
    readonly name = 'clerk';
    private externalAuthenticationService: ExternalAuthenticationService;
    private connection: TransactionalConnection;


    constructor() { }

    defineInputType(): DocumentNode {
        return gql`
      input ClerkAuthInput {
        token: String!
      }
    `;
    }

    init(injector: Injector) {
        this.externalAuthenticationService = injector.get(ExternalAuthenticationService);
        this.connection = injector.get(TransactionalConnection);
    }

    async authenticate(ctx: RequestContext, data: ClerkData): Promise<User | false> {
        try {
            const decoded = await this.verifyToken(data.token);

            const email = decoded.email_addresses;
            if (!email) return false;

            const externalId = decoded.sub;
            if (!externalId) return false;

            const existingUser =
                await this.externalAuthenticationService.findCustomerUser(
                    ctx,
                    this.name,
                    externalId,
                );

            if (existingUser) {
                if (decoded.email_verified && !existingUser.verified) {
                    await this.connection
                        .getRepository(ctx, User)
                        .update(existingUser.id, {
                            verified: true,
                        });

                    Logger.info(
                        `User marcado como verificado desde Clerk: ${existingUser.identifier}`,
                        'ClerkStrategy'
                    );

                    const refreshedUser = await this.connection
                        .getRepository(ctx, User)
                        .findOne({
                            where: { id: existingUser.id },
                            relations: ['roles'],
                        });

                    return refreshedUser ?? existingUser;
                }

                return existingUser;
            }

            const newUser =
                await this.externalAuthenticationService.createCustomerAndUser(ctx, {
                    strategy: this.name,
                    externalIdentifier: externalId,
                    verified: decoded.email_verified,
                    emailAddress: email,
                    firstName: decoded.first_name ?? '',
                    lastName: decoded.last_name ?? '',
                });

            Logger.info(
                `Nuevo usuario creado desde Clerk: ${email}`,
                'ClerkStrategy'
            );

            return newUser;
        } catch (error) {
            Logger.error(
                `Clerk error: ${error instanceof Error ? error.message : error}`,
                'ClerkStrategy'
            );
            return false;
        }
    }


    private async verifyToken(token: string): Promise<any> {
        try {
            const decoded = await verifyToken(token, {
                secretKey: process.env.CLERK_SECRET_KEY || '',
            });
            return decoded;
        } catch (error) {
            Logger.error(`Token verification error: ${error instanceof Error ? error.message : error}`, 'ClerkStrategy');
            throw new Error('Invalid or expired token');
        }
    }
}
