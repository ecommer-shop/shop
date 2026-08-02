import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { JobQueue, JobQueueService, ProcessContext, TransactionalConnection, Product, ProductVariant, ProductTranslation, ProductVariantTranslation } from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { MoreThan } from 'typeorm';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName, getNameFromExisting, getSlugFromName } from '../subscribers/translation-utils';

const BATCH_SIZE = 200;
const CONCURRENCY = 3;
const LANGUAGES = [LanguageCode.es, LanguageCode.en];

@Injectable()
export class FixTranslationJobService implements OnModuleInit {
    private readonly logger = new Logger(FixTranslationJobService.name);
    private queue: JobQueue<{}>;

    constructor(
        private connection: TransactionalConnection,
        private jobQueueService: JobQueueService,
        private processContext: ProcessContext,
    ) { }

    async onModuleInit() {
        this.queue = await this.jobQueueService.createQueue({
            name: 'fix-translations',
            process: async (job) => {
                await this.processFix();
            },
        });

        if (this.processContext.isServer) {
            this.scheduleRecurring();
        }

        this.logger.log('Created fix-translations job queue');
    }

    private scheduleRecurring() {
        const delay = this.getDelayUntilNextExecution(4, 0);
        setTimeout(async () => {
            await this.enqueueJob();
            setInterval(async () => {
                await this.enqueueJob();
            }, 24 * 60 * 60 * 1000);
        }, delay);
    }

    private getDelayUntilNextExecution(hour: number, minute: number): number {
        const now = new Date();
        const next = new Date(now);
        next.setHours(hour, minute, 0, 0);
        if (next <= now) {
            next.setDate(next.getDate() + 1);
        }
        return next.getTime() - now.getTime();
    }

    private async enqueueJob() {
        try {
            await this.queue.add({}, { retries: 3 });
            this.logger.log('Enqueued fix-translations job');
        } catch (e: any) {
            this.logger.error(`Failed to enqueue fix-translations job: ${e.message}`);
        }
    }

    private async withConcurrency<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
        const executing = new Set<Promise<void>>();
        for (const item of items) {
            const p = fn(item).catch((e: any) => {
                this.logger.error(`[FixTranslations] Item failed: ${e.message}`);
            }).finally(() => executing.delete(p));
            executing.add(p);
            if (executing.size >= limit) {
                await Promise.race(executing);
            }
        }
        await Promise.allSettled(executing);
    }

    private async processFix() {
        this.logger.log('Starting scheduled fix-translations process');

        const conn = this.connection.rawConnection;
        const ptRepo = conn.getRepository(ProductTranslation);
        const pvtRepo = conn.getRepository(ProductVariantTranslation);

        let productsFixed = 0;
        let variantsFixed = 0;

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
                    lastId = product.id as number;
                    if (LANGUAGES.every(lang => hasValidTranslation(product.translations, lang))) continue;
                    toFix.push(product);
                }

                if (toFix.length > 0) {
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
                    productsFixed += toFix.length;
                }
                this.logger.log(`[Translations] Products batch: ${toFix.length} fixed`);
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
                    lastId = variant.id as number;
                    if (LANGUAGES.every(lang => hasValidTranslation(variant.translations, lang))) continue;
                    toFix.push(variant);
                }

                if (toFix.length > 0) {
                    const pvtBatch = toFix.flatMap(variant =>
                        LANGUAGES.filter(lang => !hasValidTranslation(variant.translations, lang)).map(lang => {
                            const name = getNameFromExisting(variant.translations, lang, () => {
                                return getVariantFallbackName(variant.id as number, variant.productId as number, 'default');
                            });
                            return { variant, lang, name };
                        }),
                    );

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
                    variantsFixed += toFix.length;
                }
                this.logger.log(`[Translations] Variants batch: ${toFix.length} fixed`);
            } while (batch.length === BATCH_SIZE);
        }

        this.logger.log(`Scheduled fix-translations complete: ${productsFixed} products, ${variantsFixed} variants`);
    }
}
