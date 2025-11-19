import { Injectable } from '@nestjs/common';
import {
    RequestContext,
    Permission,
    ForbiddenError,
    TransactionalConnection,
    User,
    ID
} from '@vendure/core';

@Injectable()
export class AuthorizationService {
    constructor(private connection: TransactionalConnection) { }

    /**
     * Verifica si el usuario actual tiene un permiso específico
     * @throws ForbiddenError si no tiene el permiso
     */
    async requirePermission(
        ctx: RequestContext,
        permission: Permission
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const hasPermission = ctx.userHasPermissions([permission]);
        if (!hasPermission) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario tiene TODOS los permisos especificados
     * @throws ForbiddenError si no tiene todos los permisos
     */
    async requireAllPermissions(
        ctx: RequestContext,
        ...permissions: Permission[]
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const hasAll = permissions.every(p =>
            ctx.userHasPermissions([p])
        );

        if (!hasAll) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario tiene al menos UNO de los permisos especificados
     * @throws ForbiddenError si no tiene ninguno de los permisos
     */
    async requireAnyPermission(
        ctx: RequestContext,
        permissions: Permission[]
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const hasAny = permissions.some(p =>
            ctx.userHasPermissions([p])
        );

        if (!hasAny) {
            throw new ForbiddenError();
        }
    }

    /**
     * @description Verifica si el usuario tiene un rol específico por su código
     * @throws ForbiddenError si no tiene el rol
     */
    async requireRole(
        ctx: RequestContext,
        roleCode: string
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        const hasRole = user.roles.some(r => r.code === roleCode);

        if (!hasRole) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario tiene al menos UNO de los roles especificados
     * @throws ForbiddenError si no tiene ninguno de los roles
     */
    async requireAnyRole(
        ctx: RequestContext,
        roleCodes: string[]
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        const hasAnyRole = user.roles.some(r => roleCodes.includes(r.code));

        if (!hasAnyRole) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario tiene TODOS los roles especificados
     * @throws ForbiddenError si no tiene todos los roles
     */
    async requireRoles(
        ctx: RequestContext,
        roleCodes: string[]
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        const userRoleCodes = user.roles.map(r => r.code);

        const hasAllRoles = roleCodes.every(code =>
            userRoleCodes.includes(code)
        );

        if (!hasAllRoles) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario es dueño del recurso o tiene un permiso alternativo
     * Útil para endpoints donde el usuario puede acceder a sus propios recursos
     * o un admin puede acceder a cualquier recurso
     * @throws ForbiddenError si no es dueño ni tiene el permiso
     */
    async requireOwnershipOrPermission(
        ctx: RequestContext,
        resourceOwnerId: ID,
        fallbackPermission: Permission
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const isOwner = ctx.activeUserId === resourceOwnerId;
        const hasPermission = ctx.userHasPermissions([fallbackPermission]);

        if (!isOwner && !hasPermission) {
            throw new ForbiddenError();
        }
    }

    /**
     * Verifica si el usuario es dueño del recurso o tiene un rol específico
     * @throws ForbiddenError si no es dueño ni tiene el rol
     */
    async requireOwnershipOrRole(
        ctx: RequestContext,
        resourceOwnerId: ID,
        fallbackRoleCode: string
    ): Promise<void> {
        if (!ctx.session?.user) {
            throw new ForbiddenError();
        }

        const isOwner = ctx.activeUserId === resourceOwnerId;

        if (!isOwner) {
            await this.requireRole(ctx, fallbackRoleCode);
        }
    }

    /**
     * Verifica si el usuario está autenticado (tiene sesión activa)
     * @returns true si está autenticado, false si no
     */
    isAuthenticated(ctx: RequestContext): boolean {
        return !!ctx.session?.user;
    }

    /**
     * Verifica si el usuario tiene un permiso específico
     * @returns true si tiene el permiso, false si no
     */
    hasPermission(ctx: RequestContext, permission: Permission): boolean {
        if (!ctx.session?.user) {
            return false;
        }
        return ctx.userHasPermissions([permission]);
    }

    /**
     * Verifica si el usuario tiene un rol específico
     * @returns Promise que resuelve a true si tiene el rol, false si no
     */
    async hasRole(ctx: RequestContext, roleCode: string): Promise<boolean> {
        if (!ctx.session?.user) {
            return false;
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        return user.roles.some(r => r.code === roleCode);
    }

    /**
     * Obtiene todos los roles del usuario actual
     * @returns Array de códigos de roles o array vacío si no está autenticado
     */
    async getUserRoles(ctx: RequestContext): Promise<string[]> {
        if (!ctx.session?.user) {
            return [];
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        return user.roles.map(r => r.code);
    }

    /**
     * Obtiene todos los permisos del usuario actual (sin duplicados)
     * @returns Array de permisos o array vacío si no está autenticado
     */
    getUserPermissions(ctx: RequestContext): Permission[] {
        if (!ctx.session?.user) {
            return [];
        }

        const allPermissions = ctx.session.user.channelPermissions
            .flatMap(cp => cp.permissions);

        // Eliminar duplicados
        return [...new Set(allPermissions)];
    }

    /**
     * Obtiene información completa del usuario actual con roles y permisos
     * @returns Objeto con información del usuario o null si no está autenticado
     */
    async getCurrentUserInfo(ctx: RequestContext) {
        if (!ctx.session?.user) {
            return null;
        }

        const user = await this.getUserWithRoles(ctx, ctx.activeUserId!);
        const permissions = this.getUserPermissions(ctx);

        return {
            id: user.id,
            identifier: user.identifier,
            verified: user.verified,
            roles: user.roles.map(r => ({
                id: r.id,
                code: r.code,
                description: r.description,
                permissions: r.permissions
            })),
            permissions,
            isAuthenticated: true
        };
    }

    /**
     * Verifica si el usuario es SuperAdmin
     * @returns true si tiene el permiso SuperAdmin
     */
    isSuperAdmin(ctx: RequestContext): boolean {
        return this.hasPermission(ctx, Permission.SuperAdmin);
    }

    /**
     * Requiere que el usuario sea SuperAdmin
     * @throws ForbiddenError si no es SuperAdmin
     */
    async requireSuperAdmin(ctx: RequestContext): Promise<void> {
        if (!this.isSuperAdmin(ctx)) {
            throw new ForbiddenError();
        }
    }

    /**
     * Helper para cargar usuario con roles
     */
    private async getUserWithRoles(ctx: RequestContext, userId: ID): Promise<User> {
        const user = await this.connection
            .getRepository(ctx, User)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'role')
            .where('user.id = :userId', { userId })
            .getOne();

        if (!user) {
            throw new ForbiddenError();
        }

        return user;
    }
}