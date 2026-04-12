import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus, FulfillmentService, Logger, OrderService, PaymentStateTransitionEvent, RequestContextService, manualFulfillmentHandler } from '@vendure/core';

const loggerCtx = 'AutoFulfillService';

/**
 * Escucha el evento de pago liquidado (Settled) y automáticamente:
 * 1. Crea un Fulfillment para todos los OrderLines.
 * 2. Transiciona el Fulfillment a "Shipped".
 * Esto elimina pasos manuales para el vendedor.
 */
@Injectable()
export class AutoFulfillService implements OnModuleInit {
    constructor(
        private eventBus: EventBus,
        private orderService: OrderService,
        private fulfillmentService: FulfillmentService,
        private requestContextService: RequestContextService,
    ) { }

    onModuleInit() {
        this.eventBus.ofType(PaymentStateTransitionEvent).subscribe(async event => {
            if (event.toState !== 'Settled') {
                return;
            }

            const { ctx, payment } = event;

            try {
                // Recargar la orden con sus líneas
                const order = await this.orderService.findOne(ctx, payment.order.id);
                if (!order) {
                    Logger.warn(`AutoFulfill: Order ${payment.order.id} not found`, loggerCtx);
                    return;
                }

                // Verificar que haya líneas sin fulfillment
                const lines = order.lines.filter(line => line.quantity > 0);
                if (!lines.length) {
                    return;
                }

                Logger.info(
                    `AutoFulfill: Payment Settled para Order ${order.code} — creando fulfillment automático`,
                    loggerCtx,
                );

                // Crear el fulfillment con todas las líneas
                const result = await this.orderService.createFulfillment(ctx, {
                    handler: {
                        code: manualFulfillmentHandler.code,
                        arguments: [{ name: 'method', value: 'Auto' }],
                    },
                    lines: lines.map(line => ({
                        orderLineId: line.id,
                        quantity: line.quantity,
                    })),
                });

                if ('errorCode' in result) {
                    Logger.error(
                        `AutoFulfill: Error al crear fulfillment para Order ${order.code}: ${result.message}`,
                        loggerCtx,
                    );
                    return;
                }

                // Transicionar el fulfillment a Shipped
                const transitionResult = await this.fulfillmentService.transitionToState(
                    ctx,
                    result.id,
                    'Shipped',
                );

                if ('errorCode' in transitionResult) {
                    Logger.error(
                        `AutoFulfill: Error al transicionar fulfillment ${result.id} a Shipped: ${transitionResult.message}`,
                        loggerCtx,
                    );
                    return;
                }

                Logger.info(
                    `AutoFulfill: Fulfillment ${result.id} transicionado a Shipped para Order ${order.code}`,
                    loggerCtx,
                );
            } catch (e: any) {
                Logger.error(
                    `AutoFulfill: Excepción procesando Order ${payment.order.id}: ${e?.message}`,
                    loggerCtx,
                    e?.stack,
                );
            }
        });
    }
}
