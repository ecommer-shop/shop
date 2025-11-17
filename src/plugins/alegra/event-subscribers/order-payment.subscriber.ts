import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus, PaymentStateTransitionEvent, Logger } from '@vendure/core';
import { AlegraService } from '../alegra.service';
import { loggerCtx } from '../constants';

@Injectable()
export class PaymentSubscriber implements OnModuleInit {
  constructor(
    private readonly eventBus: EventBus,
    private readonly alegraService: AlegraService,
  ) {}

  onModuleInit() {
    this.eventBus.ofType(PaymentStateTransitionEvent).subscribe(async (event) => {
      const { fromState, toState, payment, ctx } = event;
      Logger.debug(
        `Payment ${payment.id} transitioned from ${fromState} to ${toState}`,
        loggerCtx
      );

      // Solo actuar cuando el pago ha sido completado
      if (toState === 'Settled') {
        try {
          // La orden está disponible en payment.order
          const order = payment.order;
          if (!order) {
            Logger.warn(`Payment ${payment.id} has no order associated`, loggerCtx);
            return;
          }

          Logger.info(`💰 Pago completado. Enviando factura a Alegra para la orden ${order.code}`, loggerCtx);
          await this.alegraService.sendInvoice(ctx, order);
        } catch (error: any) {
          Logger.error(
            `Error enviando factura a Alegra para pago ${payment.id}: ${error.message}`,
            loggerCtx,
            error.stack
          );
        }
      }
    });
  }
}
