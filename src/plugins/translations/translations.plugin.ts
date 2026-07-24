import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { Global, Module } from '@nestjs/common';
import { FixTranslationsResolver } from './api/fix-translations.resolver';
import { translationsApiExtensions } from './api/api-extensions';
import { ProductTranslationSubscriber } from './subscribers/product-translation.subscriber';
import { FixTranslationJobService } from './services/fix-translation-job.service';

@Global()
@Module({
    imports: [PluginCommonModule],
    providers: [
        FixTranslationsResolver,
        ProductTranslationSubscriber,
        FixTranslationJobService,
    ],
    exports: [],
})
export class TranslationsModule { }

@VendurePlugin({
    imports: [PluginCommonModule, TranslationsModule],
    providers: [],
    adminApiExtensions: {
        schema: translationsApiExtensions,
        resolvers: [FixTranslationsResolver],
    },
    shopApiExtensions: {
        schema: translationsApiExtensions,
        resolvers: [FixTranslationsResolver],
    },
    configuration: (config) => {
        return config;
    },
    compatibility: '^3.0.0',
})
export class TranslationsPlugin {
    static init(): Type<TranslationsPlugin> {
        return TranslationsPlugin;
    }
}
