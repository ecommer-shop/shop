import { VendurePlugin, PluginCommonModule } from '@vendure/core';
import { ProductVariantEnforcementSubscriber } from './product-variant-enforcement.subscriber';
import { ProductVariantEnforcementResolver } from './product-variant-enforcement.resolver';

/**
 * ProductVariantEnforcementPlugin
 *
 * Garantiza que:
 *  1. Los productos sin variantes activas sean deshabilitados automáticamente
 *     (reactivo vía eventos de ProductVariantEvent).
 *  2. No se pueda habilitar un producto vía la Admin API si no tiene variantes activas
 *     (bloqueado en el resolver de updateProduct).
 *
 * Registro en vendure-config.ts:
 *
 *   import { ProductVariantEnforcementPlugin } from './plugins/product-variant-enforcement';
 *
 *   plugins: [
 *     ProductVariantEnforcementPlugin,
 *     // ...resto de plugins
 *   ],
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [ProductVariantEnforcementSubscriber],
    adminApiExtensions: {
        // Sobrescribe la mutación updateProduct para validar antes de habilitar
        resolvers: [ProductVariantEnforcementResolver],
    },
})
export class ProductVariantEnforcementPlugin { }