import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { IsNull } from 'typeorm';
import {
    EventBus,
    ProductVariantEvent,
    ProductService,
    TransactionalConnection,
    RequestContext,
    ProductVariant,
} from '@vendure/core';
import { Subscription } from 'rxjs';

/**
 * Escucha eventos de variantes y actualiza el estado enabled del producto padre.
 *
 * Reglas:
 *  - Si un producto queda sin variantes activas → se deshabilita automáticamente.
 *  - Si recupera al menos una variante activa → se habilita automáticamente.
 */
@Injectable()
export class ProductVariantEnforcementSubscriber
    implements OnApplicationBootstrap, OnApplicationShutdown {
    private subscription: Subscription;

    constructor(
        private readonly eventBus: EventBus,
        private readonly productService: ProductService,
        private readonly connection: TransactionalConnection,
    ) { }

    onApplicationBootstrap() {
        this.subscription = this.eventBus
            .ofType(ProductVariantEvent)
            .subscribe(async event => {
                // event.entity puede ser una sola variante o un array según la versión de Vendure
                const variants: ProductVariant[] = Array.isArray(event.entity)
                    ? event.entity
                    : [event.entity];

                // Colectar IDs únicos de productos afectados
                const productIds = new Set(variants.map(v => v.productId));

                for (const productId of productIds) {
                    await this.syncProductEnabledState(event.ctx, productId);
                }
            });
    }

    onApplicationShutdown() {
        this.subscription?.unsubscribe();
    }

    /**
     * Sincroniza el estado `enabled` del producto con la existencia de variantes activas.
     */
    private async syncProductEnabledState(
        ctx: RequestContext,
        productId: number | string,
    ): Promise<void> {
        const id = String(productId);

        const activeVariantCount = await this.connection
            .getRepository(ctx, ProductVariant)
            .count({
                where: {
                    product: { id: Number(id) },
                    enabled: true,
                    deletedAt: IsNull(), // excluir variantes eliminadas (soft-delete)
                },
            });

        const product = await this.productService.findOne(ctx, id);
        if (!product) return;

        const shouldBeEnabled = activeVariantCount > 0;

        if (product.enabled !== shouldBeEnabled) {
            await this.productService.update(ctx, {
                id,
                enabled: shouldBeEnabled,
            });
        }
    }
}