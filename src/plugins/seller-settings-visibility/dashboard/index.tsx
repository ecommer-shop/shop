import { defineDashboardExtension } from '@vendure/dashboard';

// IDs de vistas en Configuración (Settings) que se bloquean para canales vendedores:
//   sellers           → Vendedores
//   channels          → Canales
//   administrators    → Administradores
//   roles             → Roles
//   countries         → Países
//   zones             → Zonas
//   global-settings   → Configuración global
//   store-management  → Tiendas
//   store-analytics   → Analíticas de Tiendas
//
// IDs disponibles para bloquear en el futuro (añadir al array):
//   stock-locations   → Ubicaciones de stock
//   shipping-methods  → Métodos de envío
//   payment-methods   → Métodos de pago
//   tax-categories    → Categorías de impuestos
//   tax-rates         → Tasas de impuestos
const RESTRICTED_NAV_IDS = [
  'sellers',
  'channels',
  'administrators',
  'roles',
  'countries',
  'zones',
  'global-settings',
  'store-management',
  'store-analytics',
  'shipping-methods',
];

export default defineDashboardExtension({
  navSections: (config) => ({
    sections: config.sections.map((section) => {
      if (section.id === 'settings' && 'items' in section) {
        return {
          ...section,
          items: section.items?.map((item) =>
            RESTRICTED_NAV_IDS.includes(item.id)
              ? { ...item, requiresPermission: ['SuperAdmin'] }
              : item,
          ),
        };
      }
      return section;
    }),
  }),
});
