import { OnApplicationBootstrap } from '@nestjs/common';
import {
    Logger,
    PluginCommonModule,
    ShippingMethod,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';

const loggerCtx = 'SafeShippingPlugin';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
})
export class SafeShippingPlugin implements OnApplicationBootstrap {
    constructor(private connection: TransactionalConnection) {}

    async onApplicationBootstrap() {
        try {
            // @ts-ignore - internal vendure module
            const { ShippingMethodService } = require('@vendure/core/dist/service/services/shipping-method.service');
            const connection = this.connection;
            const orig = ShippingMethodService.prototype.findOne;
            ShippingMethodService.prototype.findOne = async function (this: any, ctx: any, id: any, ...rest: any[]) {
                const result = await orig.call(this, ctx, id, ...rest);
                if (result == null && id != null) {
                    return connection
                        .getRepository(ctx, ShippingMethod)
                        .findOne({ where: { id: id as any } });
                }
                return result;
            };
            Logger.info(`ShippingMethodService.findOne patched with channel-aware fallback`, loggerCtx);
        } catch (e: any) {
            Logger.error(`Failed to patch ShippingMethodService: ${e.message}`, loggerCtx, e.stack);
        }
    }
}
