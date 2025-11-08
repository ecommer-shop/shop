import { SetMetadata } from '@nestjs/common';
import { Roles } from '../constants/roles.enum';


export const ROLES_KEY = 'roles';
export const RequireRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
