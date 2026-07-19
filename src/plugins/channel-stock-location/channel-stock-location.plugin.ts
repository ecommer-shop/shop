import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
    ChannelService,
    EventBus,
    idsAreEqual,
    Logger,
    PluginCommonModule,
    ProductVariantEvent,
    StockLevelService,
    StockLocation,
    StockMovementService,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';

/**
 * Corrige un bug del core en marketplaces multi-bodega: al crear una variante
 * con `stockOnHand` numérico, Vendure escribe el stock en la bodega más antigua
 * de TODA la plataforma ("Default Stock Location") en vez de la bodega del canal
 * del vendedor. El vendedor ve "0 / 0" y sus pedidos no pueden asignar stock.
 *
 * Este plugin escucha la creación de variantes y, si el canal activo no es el
 * canal por defecto y no puede ver la bodega donde quedó el stock, lo mueve a
 * la primera bodega del canal (deja rastro como StockAdjustment).
 */
@Injectable()
export class ChannelStockLocationService implements OnApplicationBootstrap {
    constructor(
        private eventBus: EventBus,
        private channelService: ChannelService,
        private connection: TransactionalConnection,
        private stockLevelService: StockLevelService,
        private stockMovementService: StockMovementService,
    ) {}

    onApplicationBootstrap() {
        this.eventBus.ofType(ProductVariantEvent).subscribe(async event => {
            if (event.type !== 'created') return;
            try {
                const ctx = event.ctx;
                const defaultChannel = await this.channelService.getDefaultChannel(ctx);
                if (idsAreEqual(ctx.channelId, defaultChannel.id)) return;

                const channelLocations = await this.connection
                    .getRepository(ctx, StockLocation)
                    .find({
                        where: { channels: { id: ctx.channelId } },
                        order: { createdAt: 'ASC' },
                    });
                if (channelLocations.length === 0) return;

                const globalOldest = await this.connection
                    .getRepository(ctx, StockLocation)
                    .find({ order: { createdAt: 'ASC' }, take: 1 })
                    .then(items => items[0]);
                if (!globalOldest) return;
                if (channelLocations.some(l => idsAreEqual(l.id, globalOldest.id))) {
                    // El canal sí ve la bodega por defecto: el core hizo lo correcto.
                    return;
                }

                const target = channelLocations[0];
                const variants = Array.isArray(event.entity) ? event.entity : [event.entity];
                for (const variant of variants) {
                    const misplaced = await this.stockLevelService.getStockLevel(ctx, variant.id, globalOldest.id);
                    if (!misplaced || misplaced.stockOnHand <= 0) continue;
                    const quantity = misplaced.stockOnHand;
                    const existing = await this.stockLevelService.getStockLevel(ctx, variant.id, target.id);
                    await this.stockMovementService.adjustProductVariantStock(ctx, variant.id, [
                        { stockLocationId: globalOldest.id, stockOnHand: 0 },
                        { stockLocationId: target.id, stockOnHand: (existing?.stockOnHand ?? 0) + quantity },
                    ]);
                    Logger.info(
                        `Stock inicial de la variante ${variant.id} (${quantity} uds) movido de "${globalOldest.name}" a la bodega del canal "${target.name}"`,
                        'ChannelStockLocationPlugin',
                    );
                }
            } catch (err: any) {
                Logger.error(
                    `No se pudo reubicar el stock inicial: ${err?.message}`,
                    'ChannelStockLocationPlugin',
                );
            }
        });
    }
}

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [ChannelStockLocationService],
    compatibility: '^3.0.0',
})
export class ChannelStockLocationPlugin { }
