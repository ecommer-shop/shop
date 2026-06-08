import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import {
    EventBus,
    ProductEvent,
    ProductVariantEvent,
    ProductService,
    ProductVariantService,
    TransactionalConnection,
    Product,
    ProductVariant,
    Logger,
} from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { Subscription } from 'rxjs';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName } from './translation-utils';

@Injectable()
export class ProductTranslationSubscriber implements OnApplicationBootstrap, OnApplicationShutdown {
    private subscriptions: Subscription[] = [];

    constructor(
        private eventBus: EventBus,
        private productService: ProductService,
        private productVariantService: ProductVariantService,
        private connection: TransactionalConnection,
    ) { }

    onApplicationBootstrap() {
        this.subscriptions.push(
            this.eventBus.ofType(ProductEvent).subscribe(async (event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                try {
                    const full = await this.connection.getRepository(Product).findOne({
                        where: { id: event.entity.id as number },
                        relations: ['translations', 'channels'],
                    });
                    if (!full) return;
                    if (hasValidTranslation(full.translations)) return;

                    const channelCode = full.channels?.[0]?.code || 'default';
                    const { name, slug, description } = getProductFallbackName(full.id as number, channelCode);

                    await this.productService.update(event.ctx, {
                        id: full.id,
                        translations: [{ languageCode: LanguageCode.es, name, slug, description }],
                    });

                    Logger.info(`Auto-created ES translation for Product ${full.id}: "${name}"`);
                } catch (e: any) {
                    Logger.error(`Failed to create translation for Product: ${e.message}`);
                }
            }),
        );

        this.subscriptions.push(
            this.eventBus.ofType(ProductVariantEvent).subscribe(async (event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                const variants: ProductVariant[] = Array.isArray(event.entity)
                    ? event.entity
                    : [event.entity];

                for (const variant of variants) {
                    try {
                        const full = await this.connection.getRepository(ProductVariant).findOne({
                            where: { id: variant.id as number },
                            relations: ['translations', 'product', 'product.channels'],
                        });
                        if (!full) continue;
                        if (full.translations?.some(t => t.name?.trim())) continue;

                        const channelCode = full.product?.channels?.[0]?.code || 'default';
                        const productId = full.product?.id || 0;
                        const name = getVariantFallbackName(full.id as number, productId as number, channelCode);

                        await this.productVariantService.update(event.ctx, [{
                            id: full.id,
                            translations: [{ languageCode: LanguageCode.es, name }],
                        }]);

                        Logger.info(`Auto-created ES translation for Variant ${full.id}: "${name}"`);
                    } catch (e: any) {
                        Logger.error(`Failed to create translation for Variant ${variant.id}: ${e.message}`);
                    }
                }
            }),
        );
    }

    onApplicationShutdown() {
        for (const sub of this.subscriptions) {
            sub?.unsubscribe();
        }
    }
}
