import { VendurePlugin, PluginCommonModule, ProductVariantService, EventBus, ProductVariantEvent, TransactionalConnection, ChannelService, RequestContext, Injector, VendureConfig } from '@vendure/core';

import { randomBytes } from 'crypto';


/**
 * Plugin para generar SKU hexadecimal único por canal al crear un producto.
 */
@VendurePlugin({
    imports: [PluginCommonModule],
})
export class AutoSkuPlugin {
    static configure(config: VendureConfig, { eventBus, injector }: { eventBus: EventBus; injector: Injector }) {
        const productVariantService = injector.get(ProductVariantService);
        const connection = injector.get(TransactionalConnection);
        eventBus.ofType(ProductVariantEvent).subscribe(async event => {
            if (event.type === 'created') {
                const ctx = event.ctx as RequestContext;
                const variants = Array.isArray(event.entity) ? event.entity : [event.entity];
                for (const variant of variants) {
                    // Si ya tiene SKU, no hacer nada
                    if (variant.sku) continue;
                    // Generar SKU único para el canal
                    let sku: string;
                    let exists = true;
                    do {
                        sku = randomBytes(6).toString('hex').toUpperCase(); // 12 dígitos hex
                        const count = await connection.getRepository(ctx, 'ProductVariant').count({
                            where: {
                                sku,
                                channel: { id: ctx.channelId },
                            },
                        });
                        exists = count > 0;
                    } while (exists);
                    // Asignar el SKU generado
                    await productVariantService.update(ctx, [{ id: variant.id, sku }]);
                }
            }
        });
        return config;
    }
}
