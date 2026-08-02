import { PluginCommonModule, VendurePlugin } from '@vendure/core';

/**
 * Ajustes de UX del dashboard para vendedores colombianos que se pueden hacer
 * por vías oficiales de Vendure. Hoy: overrides de traducción vía
 * dashboard/es.po (el build del dashboard descubre cualquier .po dentro de la
 * carpeta dashboard de un plugin y lo fusiona sobre las traducciones del core).
 *
 * Los ajustes sin API oficial siguen en scripts/patch-*.mjs.
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class SellerUxPlugin { }
