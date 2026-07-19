import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import {
    EventBus,
    ProductEvent,
    ProductVariantEvent,
    TransactionalConnection,
    Product,
    ProductVariant,
    ProductTranslation,
    ProductVariantTranslation,
    Logger,
} from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { In } from 'typeorm';
import { Subscription } from 'rxjs';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName, PLACEHOLDER_NAMES } from './translation-utils';

@Injectable()
export class ProductTranslationSubscriber implements OnApplicationBootstrap, OnApplicationShutdown {
    private subscriptions: Subscription[] = [];

    constructor(
        private eventBus: EventBus,
        private connection: TransactionalConnection,
    ) { }

    onApplicationBootstrap() {
        this.subscriptions.push(
            this.eventBus.ofType(ProductEvent).subscribe(async (event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                const productId = event.entity.id as number;
                if (!productId) return;

                try {
                    const ptRepo = this.connection.getRepository(event.ctx, ProductTranslation);
                    const placeholders = [...PLACEHOLDER_NAMES].filter(Boolean);

                    const row = await ptRepo
                        .createQueryBuilder('pt')
                        .select('pt.id')
                        .where('pt.base = :productId', { productId })
                        .andWhere('pt.languageCode = :joinLang', { joinLang: LanguageCode.es })
                        .andWhere('pt.name IS NOT NULL')
                        .andWhere("TRIM(pt.name) != ''")
                        .andWhere('LOWER(TRIM(pt.name)) NOT IN (:...placeholders)', { placeholders })
                        .getRawOne<{ pt_id: number }>();

                    if (row) return;

                    const { name, slug, description } = getProductFallbackName(productId, 'default');

                    const existingRow = await ptRepo.findOne({
                        where: { base: { id: productId } as any, languageCode: LanguageCode.es },
                    });
                    if (existingRow) {
                        await ptRepo.update(existingRow.id, { name, slug, description });
                    } else {
                        await ptRepo.save({ base: { id: productId }, languageCode: LanguageCode.es, name, slug, description } as any);
                    }

                    Logger.info(`Auto-created ES translation for Product ${productId}: "${name}"`);
                } catch (e: any) {
                    Logger.error(`Failed to create translation for Product: ${e.message}`);
                }
            }),
        );

        this.subscriptions.push(
            this.eventBus.ofType(ProductVariantEvent).subscribe(async (event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                const rawEntities: ProductVariant[] = Array.isArray(event.entity)
                    ? event.entity
                    : [event.entity];

                const ids = rawEntities.map(v => v.id as number).filter(Boolean);
                if (!ids.length) return;

                const fullVariants = await this.connection.getRepository(ProductVariant).find({
                    where: { id: In(ids) as any },
                    relations: ['translations', 'product', 'product.channels'],
                });

                for (const full of fullVariants) {
                    try {
                        if (hasValidTranslation(full.translations)) continue;

                        const channelCode = full.product?.channels?.[0]?.code || 'default';
                        const productId = full.product?.id || 0;
                        const name = getVariantFallbackName(full.id as number, productId as number, channelCode);

                        const pvtRepo = this.connection.getRepository(event.ctx, ProductVariantTranslation);
                        const existing = await pvtRepo.findOne({
                            where: { base: { id: full.id } as any, languageCode: LanguageCode.es },
                        });
                        if (existing) {
                            await pvtRepo.update(existing.id, { name });
                        } else {
                            await pvtRepo.save({ base: { id: full.id }, languageCode: LanguageCode.es, name } as any);
                        }

                        Logger.info(`Auto-created ES translation for Variant ${full.id}: "${name}"`);
                    } catch (e: any) {
                        Logger.error(`Failed to create translation for Variant ${full.id}: ${(e as any).message}`);
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
