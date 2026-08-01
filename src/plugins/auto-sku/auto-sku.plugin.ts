import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
    EventBus,
    Logger,
    PluginCommonModule,
    ProductVariantEvent,
    ProductVariantService,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';
import { randomBytes } from 'crypto';

/**
 * Genera un SKU hexadecimal único por canal cuando una variante se crea sin SKU.
 * El formulario de variantes del dashboard permite dejar el campo vacío
 * (ver scripts/patch-seller-labels.mjs); este plugin lo rellena.
 */
@Injectable()
export class AutoSkuService implements OnApplicationBootstrap {
    constructor(
        private eventBus: EventBus,
        private productVariantService: ProductVariantService,
        private connection: TransactionalConnection,
    ) {}

    onApplicationBootstrap() {
        this.eventBus.ofType(ProductVariantEvent).subscribe(async event => {
            if (event.type !== 'created') return;
            try {
                const variants = Array.isArray(event.entity) ? event.entity : [event.entity];
                for (const variant of variants) {
                    if (variant.sku) continue;
                    let sku: string;
                    let exists = true;
                    do {
                        sku = randomBytes(6).toString('hex').toUpperCase();
                        const count = await this.connection.getRepository(event.ctx, 'ProductVariant').count({
                            where: {
                                sku,
                                channels: { id: event.ctx.channelId },
                            },
                        });
                        exists = count > 0;
                    } while (exists);
                    await this.productVariantService.update(event.ctx, [{ id: variant.id, sku }]);
                    Logger.info(`SKU generado automáticamente para la variante ${variant.id}: ${sku}`, 'AutoSkuPlugin');
                }
            } catch (err: any) {
                Logger.error(`No se pudo generar el SKU automático: ${err?.message}`, 'AutoSkuPlugin');
            }
        });
    }
}

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [AutoSkuService],
    compatibility: '^3.0.0',
})
export class AutoSkuPlugin { }
