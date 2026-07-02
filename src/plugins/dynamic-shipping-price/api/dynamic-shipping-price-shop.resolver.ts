import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
    ActiveOrderService,
    Allow,
    Ctx,
    Order,
    RequestContext,
    ShippingLine,
    Transaction,
    TransactionalConnection,
    UserInputError,
} from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';

@Resolver()
export class DynamicShippingPriceShopResolver {
    constructor(
        private readonly activeOrderService: ActiveOrderService,
        private readonly connection: TransactionalConnection,
    ) { }

    @Transaction()
    @Mutation()
    @Allow(Permission.Owner)
    async setDynamicShippingPrice(
        @Ctx() ctx: RequestContext,
        @Args() args: { price: number },
    ): Promise<boolean> {
        const price = Math.round(Number(args.price));

        if (!Number.isFinite(price) || price < 0) {
            throw new UserInputError('El precio de envio debe ser un numero valido.');
        }

        const activeOrder = await this.activeOrderService.getActiveOrder(ctx, undefined);

        if (!activeOrder) {
            throw new UserInputError('No hay una orden activa para actualizar el envio.');
        }

        const order = await this.connection.getEntityOrThrow(ctx, Order, activeOrder.id, {
            relations: ['shippingLines', 'shippingLines.shippingMethod'],
        });
        const shippingLine = order.shippingLines?.[0];

        if (!shippingLine) {
            throw new UserInputError('Selecciona un metodo de envio antes de calcular el domicilio.');
        }
        if (!shippingLine.shippingMethodId) {
            throw new UserInputError('La línea de envío no tiene un método de envío asignado.');
        }
        if (!shippingLine.shippingMethod?.code) {
            throw new UserInputError('El método de envío no tiene un código válido.');
        }

        shippingLine.listPrice = price;
        shippingLine.listPriceIncludesTax = ctx.channel.pricesIncludeTax;
        shippingLine.adjustments = [];
        shippingLine.taxLines = [];

        await this.connection.getRepository(ctx, ShippingLine).save(shippingLine, { reload: false });

        const shipping = order.shippingLines.reduce((total, line) => total + line.price, 0);
        const shippingWithTax = order.shippingLines.reduce((total, line) => total + line.priceWithTax, 0);

        await this.connection
            .getRepository(ctx, Order)
            .update(order.id, { shipping, shippingWithTax });

        return true;
    }
}
