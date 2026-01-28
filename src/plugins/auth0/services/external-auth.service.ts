import {
    AuthService,
    CustomerService,
    ID,
    RequestContext,
    TransactionalConnection,
    User,
    Logger
} from "@vendure/core"
import jwt from 'jsonwebtoken';
import { verifyToken } from '@clerk/backend';

type TokenUser = {
    exp: number,
    iat: number,
    iss: string;
    jti: string,
    nbf: number,
    sub: string,
    userEmail: string,
    userFirstname?: string,
    userLastname?: string
}

export class ExternalAuthService {
    constructor(
        private authService: AuthService,
        private customerService: CustomerService,
        private connection: TransactionalConnection) { }

    async loadCurrentUserRolesAndPermissions(ctx: RequestContext, token: string) {

        if (ctx.session?.user) {
            const userWithRoles = await this.loadUserWithRoles(ctx, ctx.session.user.id);

            return {
                __typename: 'ExternalAuthResult',
                id: ctx.session.user.id,
                identifier: ctx.session.user.identifier,
                email: ctx.session.user.identifier,
                roles: userWithRoles.roles.map((r) => ({ id: r.id, code: r.code, description: r.description })),
                permissions: ctx.session.user.channelPermissions.map(p => p.permissions).flat(),
            };
        }

        let decoded: any;
        try {
            decoded = await verifyToken(token, {
                secretKey: process.env.CLERK_SECRET_KEY || '',
            });

        } catch (error) {
            Logger.error(`Error verificando token de Clerk: ${error instanceof Error ? error.message : error}`, 'ExternalAuthService');
            throw new Error('Token inválido o expirado');
        }
        console.log("TOKEN email", decoded.userEmail);
        if (!decoded || !decoded.userEmail) {

            throw new Error('Token inválido: no contiene email, contiene:');
        }

        const email = decoded.userEmail;
        const firstName = decoded.userFirstname ?? 'Usuario Externo';
        const lastName = decoded.userLastname ?? '';

        // Crear o actualizar Customer (esto crea el User si no existe)
        const customer = await this.customerService.createOrUpdate(ctx, {
            emailAddress: email,
            firstName,
            lastName,
        });

        // Buscar el User asociado a ese Customer
        const createdUser = await this.customerService.findOneByUserId(ctx, (customer as any).userId);
        const userEntity = (createdUser as any).user as User;

        // Crear sesión autenticada para el usuario
        const session = await this.authService.createAuthenticatedSessionForUser(
            ctx,
            userEntity,
            'clerk',
        );

        // Cargar roles del usuario (para incluir el code)
        const userWithRoles = await this.loadUserWithRoles(ctx, userEntity.id);

        return {
            __typename: 'ExternalAuthResult',
            id: userEntity.id,
            identifier: userEntity.identifier,
            email: userEntity.identifier,
            sessionToken: session,
            roles: userWithRoles.roles.map((r) => ({
                id: r.id,
                code: r.code,
                description: r.description,
            })),
        };
    }

    // Obtener usuario con roles
    private async loadUserWithRoles(ctx: RequestContext, userId: ID) {
        return this.connection
            .getRepository(ctx, User)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'role')
            .where('user.id = :userId', { userId })
            .getOneOrFail();
    }
}