import {
    AuthService,
    CustomerService,
    ID,
    RequestContext,
    TransactionalConnection,
    User
} from "@vendure/core"
import jwt from 'jsonwebtoken';

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

        // Decodificar token JWT (no hace verificación con firma, solo lectura)
        const decoded: any = jwt.decode(token);
        if (!decoded || !decoded.email) {
            throw new Error('Token inválido: no contiene email');
        }

        const email = decoded.email;
        const name = decoded.name ?? decoded.given_name ?? 'Usuario Externo';

        // Crear o actualizar Customer (esto crea el User si no existe)
        const customer = await this.customerService.createOrUpdate(ctx, {
            emailAddress: email,
            firstName: name,
        });

        // Buscar el User asociado a ese Customer
        const createdUser = await this.customerService.findOneByUserId(ctx, (customer as any).userId);
        const userEntity = (createdUser as any).user as User;

        // Crear sesión autenticada para el usuario
        const session = await this.authService.createAuthenticatedSessionForUser(
            ctx,
            userEntity,
            'external',
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