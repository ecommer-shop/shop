import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { JobQueue, JobQueueService, ProcessContext, TransactionalConnection, Product, ProductVariant, ProductTranslation, ProductVariantTranslation } from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { MoreThan } from 'typeorm';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName } from '../subscribers/translation-utils';

const BATCH_SIZE = 200;
const CONCURRENCY = 3;

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
                    relations: ['translations'],
                    take: BATCH_SIZE,
                    order: { id: 'ASC' },
                });

                const toFix: Product[] = [];
                for (const product of batch) {
                    lastId = product.id as number;
                    if (hasValidTranslation(product.translations)) continue;
                    toFix.push(product);
                }

                if (toFix.length > 0) {
                    const ptBatch = toFix.map(product => {
                        const { name, slug, description } = getProductFallbackName(product.id as number, 'default');
                        return { product, name, slug, description };
                    });

                    await this.withConcurrency(ptBatch, CONCURRENCY, async ({ product, name, slug, description }) => {
                        const esTranslation = product.translations?.find(t => t.languageCode === LanguageCode.es);
                        if (esTranslation) {
                            await ptRepo.update(esTranslation.id, { name, slug, description });
                        } else {
                            await ptRepo.save({ base: { id: product.id }, languageCode: LanguageCode.es, name, slug, description } as any);
                        }
                    });
                    productsFixed += toFix.length;
                }

                this.logger.log(`[FixTranslations] Products batch: ${toFix.length} fixed`);
            } while (batch.length === BATCH_SIZE);
        }

        // Variants
        {
            let lastId = 0;
            let batch: ProductVariant[];
            do {
                batch = await conn.getRepository(ProductVariant).find({
                    where: { id: MoreThan(lastId) },
                    relations: ['translations', 'product'],
                    take: BATCH_SIZE,
                    order: { id: 'ASC' },
                });

                const toFix: ProductVariant[] = [];
                for (const variant of batch) {
                    lastId = variant.id as number;
                    if (hasValidTranslation(variant.translations)) continue;
                    toFix.push(variant);
                }

                if (toFix.length > 0) {
                    const pvtBatch = toFix.map(variant => {
                        const productId = variant.product?.id || 0;
                        const name = getVariantFallbackName(variant.id as number, productId as number, 'default');
                        return { variant, name };
                    });

                    await this.withConcurrency(pvtBatch, CONCURRENCY, async ({ variant, name }) => {
                        const esTranslation = variant.translations?.find(t => t.languageCode === LanguageCode.es);
                        if (esTranslation) {
                            await pvtRepo.update(esTranslation.id, { name });
                        } else {
                            await pvtRepo.save({ base: { id: variant.id }, languageCode: LanguageCode.es, name } as any);
                        }
                    });
                    variantsFixed += toFix.length;
                }

                this.logger.log(`[FixTranslations] Variants batch: ${toFix.length} fixed`);
            } while (batch.length === BATCH_SIZE);
        }

        this.logger.log(`Scheduled fix-translations complete: ${productsFixed} products, ${variantsFixed} variants`);
    }
}
