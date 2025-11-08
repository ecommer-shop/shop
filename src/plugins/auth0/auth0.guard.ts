import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RequestContext, User, TransactionalConnection } from '@vendure/core';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './decorators/roles.decorator';
import { PERMISSIONS_KEY } from './decorators/permissions.decorator';
import { Roles } from './constants/roles.enum';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private connection: TransactionalConnection,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlCtx = GqlExecutionContext.create(context);
        const ctx = gqlCtx.getContext<RequestContext>();

        // Permitir llamadas del Admin API
        if (ctx.apiType === 'admin') return true;

        // Obtener metadatos de roles/permisos requeridos
        const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        // Validar sesión activa
        if (!ctx.activeUserId) return false;

        const user = await this.connection.getRepository(ctx, User).findOne({
            where: { id: ctx.activeUserId },
            relations: ['roles'],
        });
        if (!user) return false;

        // Validar roles
        if (requiredRoles?.length && !this.hasRequiredRoles(user, requiredRoles)) {
            return false;
        }

        // Validar permisos
        if (requiredPermissions?.length && !(await this.hasRequiredPermissions(ctx, user, requiredPermissions))) {
            return false;
        }

        return true;
    }

    private hasRequiredRoles(user: User, requiredRoles: Roles[]): boolean {
        const userRoleCodes = user.roles.map(r => r.code);
        return requiredRoles.some(role => userRoleCodes.includes(role));
    }

    private async hasRequiredPermissions(
        ctx: RequestContext,
        user: User,
        requiredPermissions: string[],
    ): Promise<boolean> {
        const permissions = new Set<string>();

        for (const role of user.roles) {
            for (const perm of role.permissions) {
                permissions.add(perm);
            }
        }

        return requiredPermissions.every(p => permissions.has(p));
    }
}
