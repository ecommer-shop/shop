import { Injectable, OnModuleInit } from '@nestjs/common';
import { OrderType } from '@vendure/common/lib/generated-types';
import { EventBus, Logger, Order, OrderService, Payment, PaymentStateTransitionEvent, RequestContextService, TransactionalConnection, manualFulfillmentHandler } from '@vendure/core';

const loggerCtx = 'AutoFulfillService';

/**
 * Escucha el evento de pago liquidado (Settled) y automáticamente:
 * 1. Busca las seller orders asociadas al aggregate order.
 * 2. Crea un Fulfillment para cada seller order con sus líneas pendientes.
 * 3. Transiciona cada Fulfillment a "Shipped".
 * El proceso mv-order-process.ts actualiza automáticamente el estado del aggregate order.
 */
@Injectable()
export class AutoFulfillService implements OnModuleInit {
    constructor(
        private eventBus: EventBus,
        private orderService: OrderService,
        private requestContextService: RequestContextService,
        private connection: TransactionalConnection,
    ) { }

    onModuleInit() {
        this.eventBus.ofType(PaymentStateTransitionEvent).subscribe(async event => {
    if(event.toState !== 'Settled') {
    return;
}

const { ctx, payment } = event;

// Resolver el orderId desde el payment
let orderId = payment.order?.id;
if (!orderId) {
    const paymentWithOrder = await this.connection
        .getRepository(ctx, Payment)
        .findOne({ where: { id: payment.id as any }, relations: ['order'] });
    orderId = paymentWithOrder?.order?.id!;
}

if (!orderId) {
    Logger.warn(`AutoFulfill: Could not resolve order for Payment ${payment.id}, skipping`, loggerCtx);
    return;
}

try {
    const order = await this.orderService.findOne(ctx, orderId);
    if (!order) {
        Logger.warn(`AutoFulfill: Order ${orderId} not found`, loggerCtx);
        return;
    }

    // Determinar qué órdenes necessitan fulfillment:
    // - Si es Aggregate, fulfillamos cada seller order hija
    // - Si es Seller (o Regular sin multivendor), fulfillamos directamente
    let sellerOrders: Order[];
    if (order.type === OrderType.Aggregate) {
        sellerOrders = await this.orderService.getSellerOrders(ctx, order);
        if (!sellerOrders.length) {
            // Fallback: aggregate sin seller orders — fulfillamos el aggregate directamente
            sellerOrders = [order];
        }
    } else {
        sellerOrders = [order];
    }

    for (const sellerOrder of sellerOrders) {
        await this.fulfillOrder(ctx, sellerOrder);
    }
} catch (e: any) {
    Logger.error(
        `AutoFulfill: Excepción procesando Order ${orderId}: ${e?.message}`,
        loggerCtx,
        e?.stack,
    );
}
        });
    }

    private async fulfillOrder(ctx: any, order: Order): Promise < void> {
    // Cargar la orden con líneas y sus fulfillments actuales
    const orderWithLines = await this.connection
        .getRepository(ctx, Order)
        .findOne({
            where: { id: order.id as any },
            relations: ['lines', 'fulfillments', 'fulfillments.lines'],
        });

    if(!orderWithLines) return;

    // Calcular cantidad fulfillada por línea sumando fulfillments no-Cancelled
    const linesToFulfill = orderWithLines.lines
        .map(line => {
            const fulfilledQty = ((orderWithLines as any).fulfillments ?? [])
                .filter((f: any) => f.state !== 'Cancelled')
                .reduce((sum: number, f: any) => {
                    const junction = (f.lines as any[] ?? []).find(
                        (fl: any) => fl.orderLineId === line.id || fl.orderLine?.id === line.id,
                    );
                    return sum + (junction?.quantity ?? 0);
                }, 0);
            return { line, remaining: line.quantity - fulfilledQty };
        })
        .filter(({ remaining }) => remaining > 0);

    if(!linesToFulfill.length) {
    Logger.info(`AutoFulfill: Order ${order.code} ya está completamente fulfillada, omitiendo`, loggerCtx);
    return;
}

Logger.info(
    `AutoFulfill: Creando fulfillment para Order ${order.code} (${linesToFulfill.length} líneas)`,
    loggerCtx,
);

const result = await this.orderService.createFulfillment(ctx, {
    handler: {
        code: manualFulfillmentHandler.code,
        arguments: [{ name: 'method', value: 'Auto' }],
    },
    lines: linesToFulfill.map(({ line, remaining }) => ({
        orderLineId: line.id,
        quantity: remaining,
    })),
});

if ('errorCode' in result) {
    Logger.error(
        `AutoFulfill: Error al crear fulfillment para Order ${order.code}: ${(result as any).message}`,
        loggerCtx,
    );
    return;
}

Logger.info(
    `AutoFulfill: Fulfillment ${result.id} creado para Order ${order.code} — el vendedor lo transicionará a Shipped manualmente`,
    loggerCtx,
);
    }
}

