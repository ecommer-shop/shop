import { defineDashboardExtension } from '@vendure/dashboard';

// Este plugin no aporta rutas ni widgets: existe para que el build del
// dashboard descubra los .po de esta carpeta (overrides de traducción).
export default defineDashboardExtension({});
