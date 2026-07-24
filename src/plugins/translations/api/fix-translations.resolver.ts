import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { RequestContext, TransactionalConnection, Product, ProductVariant, ProductTranslation, ProductVariantTranslation, Logger } from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { MoreThan } from 'typeorm';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName, getNameFromExisting, getSlugFromName } from '../subscribers/translation-utils';

const BATCH_SIZE = 200;
const CONCURRENCY = 3;
const LANGUAGES = [LanguageCode.es, LanguageCode.en];

@Injectable()
@Resolver()
export class FixTranslationsResolver {
    constructor(
        private connection: TransactionalConnection,
    ) { }

    private async withConcurrency<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
        const executing = new Set<Promise<void>>();
        for (const item of items) {
            const p = fn(item).catch((e: any) => {
                Logger.error(`[FixTranslations] Item failed: ${e.message}`);
            }).finally(() => executing.delete(p));
            executing.add(p);
            if (executing.size >= limit) {
                await Promise.race(executing);
            }
        }
        await Promise.allSettled(executing);
    }

    @Mutation('fixProductTranslations')
    async fixProductTranslations(
        @Context() ctx: RequestContext,
        @Args('dryRun') dryRun: boolean,
    ) {
        Logger.info(`[Translations] Fix start dryRun=${dryRun}`);
        let productsScanned = 0;
        let productsFixed = 0;
        let variantsScanned = 0;
        let variantsFixed = 0;

        const conn = this.connection.rawConnection;
        const ptRepo = conn.getRepository(ProductTranslation);
        const pvtRepo = conn.getRepository(ProductVariantTranslation);

        // Products
        {
            let lastId = 0;
            let batch: Product[];
            do {
                batch = await conn.getRepository(Product).find({
                    where: { id: MoreThan(lastId) },
                    relations: ['translations', 'channels'],
                    take: BATCH_SIZE,
                    order: { id: 'ASC' },
                });

                const toFix: Product[] = [];
                for (const product of batch) {
                    productsScanned++;
                    lastId = product.id as number;
                    if (LANGUAGES.some(lang => !hasValidTranslation(product.translations, lang))) {
                        productsFixed++;
                        toFix.push(product);
                    }
                }

                if (!dryRun && toFix.length > 0) {
                    const ptBatch = toFix.flatMap(product => {
                        const channelCode = product.channels?.[0]?.code || '__default_channel__';
                        return LANGUAGES.filter(lang => !hasValidTranslation(product.translations, lang)).map(lang => {
                            const name = getNameFromExisting(product.translations, lang, () => {
                                const fb = getProductFallbackName(product.id as number, channelCode);
                                return fb.name;
                            });
                            const slug = getSlugFromName(name);
                            return { product, lang, name, slug };
                        });
                    });

                    await this.withConcurrency(ptBatch, CONCURRENCY, async ({ product, lang, name, slug }) => {
                        const existing = product.translations?.find(t => t.languageCode === lang);
                        if (existing) {
                            await ptRepo.update(existing.id, { name, slug, description: '' });
                        } else {
                            try {
                                await ptRepo.insert({ base: { id: product.id }, languageCode: lang, name, slug, description: '' } as any);
                            } catch {
                                const retry = await ptRepo.findOne({
                                    where: { base: { id: product.id } as any, languageCode: lang },
                                });
                                if (retry) {
                                    await ptRepo.update(retry.id, { name, slug, description: '' });
                                }
                            }
                        }
                    });
                    Logger.info(`[Translations] Products batch: ${toFix.length} fixed`);
                } else if (dryRun && toFix.length > 0) {
                    Logger.info(`[Translations] Products batch: ${toFix.length} would be fixed`);
                }
            } while (batch.length === BATCH_SIZE);
        }

        // Variants
        {
            let lastId = 0;
            let batch: ProductVariant[];
            do {
                batch = await conn.getRepository(ProductVariant).find({
                    where: { id: MoreThan(lastId) },
                    relations: ['translations'],
                    take: BATCH_SIZE,
                    order: { id: 'ASC' },
                });

                const toFix: ProductVariant[] = [];
                for (const variant of batch) {
                    variantsScanned++;
                    lastId = variant.id as number;
                    if (LANGUAGES.some(lang => !hasValidTranslation(variant.translations, lang))) {
                        variantsFixed++;
                        toFix.push(variant);
                    }
                }

                if (!dryRun && toFix.length > 0) {
                    const pvtBatch = toFix.flatMap(variant => {
                        return LANGUAGES.filter(lang => !hasValidTranslation(variant.translations, lang)).map(lang => {
                            const name = getNameFromExisting(variant.translations, lang, () => {
                                return getVariantFallbackName(variant.id as number, variant.productId as number, 'default');
                            });
                            return { variant, lang, name };
                        });
                    });

                    await this.withConcurrency(pvtBatch, CONCURRENCY, async ({ variant, lang, name }) => {
                        const existing = await pvtRepo.findOne({
                            where: { base: { id: variant.id } as any, languageCode: lang },
                        });
                        if (existing) {
                            await pvtRepo.update(existing.id, { name });
                        } else {
                            try {
                                await pvtRepo.insert({ base: { id: variant.id }, languageCode: lang, name } as any);
                            } catch {
                                const retry = await pvtRepo.findOne({
                                    where: { base: { id: variant.id } as any, languageCode: lang },
                                });
                                if (retry) {
                                    await pvtRepo.update(retry.id, { name });
                                }
                            }
                        }
                    });
                    Logger.info(`[Translations] Variants batch: ${toFix.length} fixed`);
                } else if (dryRun && toFix.length > 0) {
                    Logger.info(`[Translations] Variants batch: ${toFix.length} would be fixed`);
                }
            } while (batch.length === BATCH_SIZE);
        }

        Logger.info(`[Translations] Fix complete: ${productsFixed}/${productsScanned} products, ${variantsFixed}/${variantsScanned} variants`);
        return {
            productsScanned,
            productsFixed,
            variantsScanned,
            variantsFixed,
        };
    }
}
