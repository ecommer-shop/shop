import { OnApplicationBootstrap } from '@nestjs/common';
import {
    PluginCommonModule,
    RequestContext,
    ShippingLine,
    ShippingMethod,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
})
export class SafeShippingPlugin implements OnApplicationBootstrap {
    constructor(private connection: TransactionalConnection) {}

    async onApplicationBootstrap() {
        // @ts-ignore - internal vendure module
        const { ShippingLineEntityResolver } = require('@vendure/core/dist/api/resolvers/entity/shipping-line-entity.resolver');
        const connection = this.connection;
        ShippingLineEntityResolver.prototype.shippingMethod = async function (
            ctx: RequestContext,
            shippingLine: ShippingLine,
        ) {
            if (!shippingLine.shippingMethodId) return null;
            const method = await connection
                .getRepository(ctx, ShippingMethod)
                .findOne({ where: { id: shippingLine.shippingMethodId as any } });
            return method ?? null;
        };
    }
}
