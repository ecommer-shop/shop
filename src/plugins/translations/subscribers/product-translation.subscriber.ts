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
import { getProductFallbackName, getVariantFallbackName, getNameFromExisting, getSlugFromName, PLACEHOLDER_NAMES } from './translation-utils';

const LANGUAGES = [LanguageCode.es, LanguageCode.en];
const FILTERED_PLACEHOLDERS = [...PLACEHOLDER_NAMES].filter(Boolean);

@Injectable()
export class ProductTranslationSubscriber implements OnApplicationBootstrap, OnApplicationShutdown {
    private subscriptions: Subscription[] = [];

    constructor(
        private eventBus: EventBus,
        private connection: TransactionalConnection,
    ) { }

    onApplicationBootstrap() {
        this.subscriptions.push(
            this.eventBus.ofType(ProductEvent).subscribe((event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                const productId = event.entity.id as number;
                if (!productId) return;

                setImmediate(async () => {
                    try {
                        const conn = this.connection.rawConnection;

                        for (const lang of LANGUAGES) {
                            const [existing] = await conn.query(
                                `SELECT id FROM "product_translation" WHERE "baseId" = $1 AND "languageCode" = $2 AND name IS NOT NULL AND TRIM(name) != '' AND LOWER(TRIM(name)) != ALL($3)`,
                                [productId, lang, FILTERED_PLACEHOLDERS],
                            );

                            if (existing) continue;

                            const fallbackName = getNameFromExisting(null, lang, () => {
                                const fb = getProductFallbackName(productId, 'default');
                                return fb.name;
                            });
                            const slug = getSlugFromName(fallbackName);

                            const [existingRow] = await conn.query(
                                `SELECT id FROM "product_translation" WHERE "baseId" = $1 AND "languageCode" = $2`,
                                [productId, lang],
                            );

                            if (existingRow) {
                                await conn.query(
                                    `UPDATE "product_translation" SET name = $1, slug = $2, description = '' WHERE id = $3`,
                                    [fallbackName, slug, existingRow.id],
                                );
                            } else {
                                await conn.query(
                                    `INSERT INTO "product_translation" ("baseId", "languageCode", "name", "slug", "description", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, '', NOW(), NOW())`,
                                    [productId, lang, fallbackName, slug],
                                );
                            }

                            Logger.info(`Auto-created ${lang} translation for Product ${productId}: "${fallbackName}"`);
                        }
                    } catch (e: any) {
                        Logger.error(`[FixTranslation] Product ${productId}: ${e.message}`);
                    }
                });
            }),
        );

        this.subscriptions.push(
            this.eventBus.ofType(ProductVariantEvent).subscribe((event) => {
                if (event.type !== 'created' && event.type !== 'updated') return;

                const rawEntities: ProductVariant[] = Array.isArray(event.entity)
                    ? event.entity
                    : [event.entity];

                const ids = rawEntities.map(v => v.id as number).filter(Boolean);
                if (!ids.length) return;

                setImmediate(async () => {
                    try {
                        const conn = this.connection.rawConnection;
                        const fullVariants = await conn.getRepository(ProductVariant).find({
                            where: { id: In(ids) as any },
                            relations: ['translations'],
                        });

                        for (const full of fullVariants) {
                            for (const lang of LANGUAGES) {
                                const hasValid = full.translations?.some(t =>
                                    t.languageCode === lang
                                    && t.name?.trim()
                                    && !PLACEHOLDER_NAMES.has(t.name.trim().toLowerCase()),
                                );

                                if (hasValid) continue;

                                const name = getNameFromExisting(full.translations as any, lang, () => {
                                    return getVariantFallbackName(full.id as number, full.productId as number, 'default');
                                });

                                const [existingRow] = await conn.query(
                                    `SELECT id FROM "product_variant_translation" WHERE "baseId" = $1 AND "languageCode" = $2`,
                                    [full.id, lang],
                                );

                                if (existingRow) {
                                    await conn.query(
                                        `UPDATE "product_variant_translation" SET name = $1 WHERE id = $2`,
                                        [name, existingRow.id],
                                    );
                                } else {
                                    await conn.query(
                                        `INSERT INTO "product_variant_translation" ("baseId", "languageCode", "name", "createdAt", "updatedAt") VALUES ($1, $2, $3, NOW(), NOW())`,
                                        [full.id, lang, name],
                                    );
                                }

                                Logger.info(`Auto-created ${lang} translation for Variant ${full.id}: "${name}"`);
                            }
                        }
                    } catch (e: any) {
                        Logger.error(`[FixTranslation] Variants batch: ${(e as any).message}`);
                    }
                });
            }),
        );
    }

    onApplicationShutdown() {
        for (const sub of this.subscriptions) {
            sub?.unsubscribe();
        }
    }
}
