import { OnApplicationBootstrap } from '@nestjs/common';
import {
    EventBus,
    ProductEvent,
    ProductChannelEvent,
    PluginCommonModule,
    ProductService,
    Type,
    VendurePlugin,
    RequestContextService,
    ChannelService
} from '@vendure/core';

import { SUPERADMINVISIBILITY_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: SUPERADMINVISIBILITY_PLUGIN_OPTIONS, useFactory: () => SuperadminvisibilityPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class SuperadminvisibilityPlugin implements OnApplicationBootstrap {
    constructor(
        private eventBus: EventBus,
        private channelService: ChannelService,
        private productService: ProductService,
        private requestContextService: RequestContextService,
    ) { }
    static options: PluginInitOptions;

    onApplicationBootstrap() {
        this.eventBus.ofType(ProductEvent).subscribe(async (event) => {
            if (event.type !== 'created') return;
            const defaultChannel = await this.channelService.getDefaultChannel();

            const isInDefaultChannel = event.entity.channels.some(
                (c) => c.id === defaultChannel.id,
            );
            if (isInDefaultChannel) return;
            // Crear un ctx con el default channel para la asignación
            const ctx = await this.requestContextService.create({
                apiType: 'admin',
                channelOrToken: defaultChannel,
            });

            await this.productService.assignProductsToChannel(ctx, {
                productIds: [event.entity.id],
                channelId: defaultChannel.id,
                priceFactor: 1,
            });
        })
    }
    static init(options: PluginInitOptions): Type<SuperadminvisibilityPlugin> {
        this.options = options;
        return SuperadminvisibilityPlugin;
    }
}
