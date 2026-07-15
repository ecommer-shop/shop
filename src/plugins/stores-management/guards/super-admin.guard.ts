import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission } from '@vendure/core';

@Injectable()
export class SuperAdminGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const req = gqlCtx.getContext().req;
            const store = req?.['vendureRequestContext'];
            const requestContext = store?.withTransactionManager || store?.default;
            const isSuperAdmin = requestContext?.userHasPermissions?.([Permission.SuperAdmin]) ?? false;
            if (!isSuperAdmin) {
                throw new ForbiddenException('Solo SuperAdmin puede acceder a esta vista');
            }
            return true;
        } catch (e: any) {
            if (e instanceof ForbiddenException) throw e;
            throw new ForbiddenException('Acceso denegado');
        }
    }
}
