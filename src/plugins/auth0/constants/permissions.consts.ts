import { Permission } from "@vendure/core";

// Customer
export const CUSTOMER_PERMISSIONS = [
    Permission.Authenticated,
    Permission.ReadCatalog,
    Permission.ReadProduct,
    Permission.ReadOrder,
    Permission.UpdateCustomer, // Puede actualizar su propio perfil
] as const;

// Inventory Manager
export const INVENTORY_MANAGER_PERMISSIONS = [
    Permission.Authenticated,
    Permission.CreateCatalog,
    Permission.ReadCatalog,
    Permission.UpdateCatalog,
    Permission.DeleteCatalog,
    Permission.CreateTag,
    Permission.ReadTag,
    Permission.UpdateTag,
    Permission.DeleteTag,
    Permission.ReadCustomer
] as const;

// Super Admin 
export const SUPER_ADMIN_PERMISSIONS = [
    Permission.SuperAdmin,
] as const;

// Admin
export const ADMIN_PERMISSIONS = [
    Permission.Authenticated,
    Permission.CreateCatalog,
    Permission.ReadCatalog,
    Permission.UpdateCatalog,
    Permission.DeleteCatalog,
    Permission.CreateSettings,
    Permission.ReadSettings,
    Permission.UpdateSettings,
    Permission.DeleteSettings,
    Permission.CreateCustomer,
    Permission.ReadCustomer,
    Permission.UpdateCustomer,
    Permission.DeleteCustomer,
    Permission.CreateCustomerGroup,
    Permission.ReadCustomerGroup,
    Permission.UpdateCustomerGroup,
    Permission.DeleteCustomerGroup,
    Permission.CreateOrder,
    Permission.ReadOrder,
    Permission.UpdateOrder,
    Permission.DeleteOrder,
    Permission.CreateSystem,
    Permission.ReadSystem,
    Permission.UpdateSystem,
    Permission.DeleteSystem,
]

export const ORDER_MANAGER_PERMISSIONS = [
    Permission.Authenticated,
    Permission.CreateOrder,
    Permission.ReadOrder,
    Permission.UpdateOrder,
    Permission.DeleteOrder,
    Permission.ReadCustomer,
    Permission.ReadPaymentMethod,
    Permission.ReadShippingMethod,
    Permission.ReadPromotion,
    Permission.ReadCountry,
    Permission.ReadZone,
] as const;


/**
 * Mapa de códigos de rol a permisos
 * para asignar permisos cuando creas usuarios desde Auth0
 */
export const ROLE_PERMISSIONS_MAP = {
    '__customer_role__': CUSTOMER_PERMISSIONS,
    'administrator': ADMIN_PERMISSIONS,
    'inventory-manager': INVENTORY_MANAGER_PERMISSIONS,
    'order-manager': ORDER_MANAGER_PERMISSIONS,
    '__super_admin_role__': SUPER_ADMIN_PERMISSIONS,
} as const;

export type RoleCode = keyof typeof ROLE_PERMISSIONS_MAP;