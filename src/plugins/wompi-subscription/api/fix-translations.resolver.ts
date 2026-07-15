import { Injectable } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { RequestContext, TransactionalConnection, Product, ProductVariant, ProductTranslation, ProductVariantTranslation, Logger } from '@vendure/core';
import { LanguageCode } from '@vendure/common/lib/generated-types';
import { hasValidTranslation, getProductFallbackName, getVariantFallbackName } from '../subscribers/translation-utils';

@Injectable()
@Resolver()
export class FixTranslationsResolver {
    constructor(
        private connection: TransactionalConnection,
    ) { }

    @Mutation('fixProductTranslations')
    async fixProductTranslations(
        @Context() ctx: RequestContext,
        @Args('dryRun') dryRun: boolean,
    ) {
        let productsScanned = 0;
        let productsFixed = 0;
        let variantsScanned = 0;
        let variantsFixed = 0;

        const ptRepo = this.connection.rawConnection.getRepository(ProductTranslation);
        const pvtRepo = this.connection.rawConnection.getRepository(ProductVariantTranslation);

        const products = await this.connection.rawConnection.getRepository(Product).find({
            relations: ['translations', 'channels'],
        });

        for (const product of products) {
            productsScanned++;
            if (hasValidTranslation(product.translations)) continue;

            productsFixed++;
            if (dryRun) continue;

            const channelCode = product.channels?.[0]?.code || 'default';
            const { name, slug, description } = getProductFallbackName(product.id as number, channelCode);

            const existing = await ptRepo.findOne({
                where: { base: { id: product.id } as any, languageCode: LanguageCode.es },
            });
            if (existing) {
                await ptRepo.update(existing.id, { name, slug, description });
            } else {
                await ptRepo.save({ base: { id: product.id }, languageCode: LanguageCode.es, name, slug, description } as any);
            }

            Logger.info(`Fix: updated Product ${product.id} translation to "${name}"`);
        }

        const variants = await this.connection.rawConnection.getRepository(ProductVariant).find({
            relations: ['translations', 'product', 'product.channels'],
        });

        for (const variant of variants) {
            variantsScanned++;
            if (hasValidTranslation(variant.translations)) continue;

            variantsFixed++;
            if (dryRun) continue;

            const channelCode = variant.product?.channels?.[0]?.code || 'default';
            const productId = variant.product?.id || 0;
            const name = getVariantFallbackName(variant.id as number, productId as number, channelCode);

            const existing = await pvtRepo.findOne({
                where: { base: { id: variant.id } as any, languageCode: LanguageCode.es },
            });
            if (existing) {
                await pvtRepo.update(existing.id, { name });
            } else {
                await pvtRepo.save({ base: { id: variant.id }, languageCode: LanguageCode.es, name } as any);
            }

            Logger.info(`Fix: updated Variant ${variant.id} translation to "${name}"`);
        }

        Logger.info(`Fix translations complete: ${productsFixed}/${productsScanned} products, ${variantsFixed}/${variantsScanned} variants (dryRun=${dryRun})`);

        return {
            productsScanned,
            productsFixed,
            variantsScanned,
            variantsFixed,
        };
    }
}
