import { PermissionDefinition } from '@vendure/core';

export const CustomPermissions = {
    ManageVendors: new PermissionDefinition({
        name: 'ManageVendors',
        description: 'Permite al usuario administrar vendedores',
    }),
    ViewReports: new PermissionDefinition({
        name: 'ViewReports',
        description: 'Permite ver reportes financieros o analíticos',
    }),
};
