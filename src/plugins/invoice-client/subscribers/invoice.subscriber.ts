import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventBus,
  OrderStateTransitionEvent,
  OrderService,
  RequestContextService,
  Logger,
  LanguageCode,
} from '@vendure/core';
import { InvoiceClientService } from '../services/invoice-client.service';

const loggerCtx = 'InvoiceSubscriber';

@Injectable()
export class InvoiceSubscriber implements OnApplicationBootstrap {

  constructor(
    private eventBus: EventBus,
    private invoiceClientService: InvoiceClientService,
    private orderService: OrderService,
    private requestContextService: RequestContextService
  ) {}

  async onApplicationBootstrap() {
    // Suscribirse al evento de transición de estado de orden
    this.eventBus.ofType(OrderStateTransitionEvent).subscribe(async (event) => {
      // Solo procesar cuando la orden pasa a "PaymentSettled"
      if (event.toState === 'PaymentSettled') {
        await this.handleOrderCompleted(String(event.order.id));
      }
    });
  }

  private async handleOrderCompleted(orderId: string) {
    try {
      Logger.info(`Order ${orderId} completed, creating invoice...`, loggerCtx);

      // Crear contexto para operaciones de Vendure
      const ctx = await this.requestContextService.create({
        apiType: 'admin',
        languageCode: LanguageCode.es,
      });


      const order = await this.orderService.findOne(ctx, orderId, [
        'customer',
        'lines',
        'lines.productVariant',
        'lines.productVariant.product',
        'payments',
      ]);

      if (!order) {
        Logger.warn(`Order ${orderId} not found`, loggerCtx);
        return;
      }

      // Verificar si ya existe una factura para esta orden
      Logger.info(`Checking if invoice exists for order ${order.code}...`, loggerCtx);
      const existingInvoice = await this.invoiceClientService.getInvoiceByOrderCode(order.code);
      if (existingInvoice?.data) {
        Logger.info(`Invoice already exists for order ${order.code}`, loggerCtx);
        return;
      }
      Logger.info(`No existing invoice found for order ${order.code}, proceeding to create...`, loggerCtx);

      // Generar número de documento 
      const documentNumber = this.generateDocumentNumber(order.code);
      Logger.info(`Generated document number: ${documentNumber} for order ${order.code}`, loggerCtx);

      // Crear factura
      Logger.info(`Calling createInvoiceFromOrder for order ${order.code}...`, loggerCtx);
      await this.invoiceClientService.createInvoiceFromOrder(ctx, order, {
        resolutionNumber: process.env.MATIAS_RESOLUTION_NUMBER || '18764074347312',
        prefix: process.env.MATIAS_PREFIX || 'LZT',
        documentNumber,
        operationTypeId: 1,
        typeDocumentId: 7, // Factura de venta
        sendEmail: 1,
      });

      Logger.info(`Invoice created successfully for order ${order.code}`, loggerCtx);
    } catch (error: any) {
      // No bloquear el flujo de la orden si falla la facturación
      Logger.error(`Error creating invoice for order ${orderId}: ${error.message}`, loggerCtx);
    }
  }

  /**
   * Genera un número de documento único
   * En producción, deberías usar una secuencia o contador en base de datos
   * Matias requiere que el número esté entre 1 y 10000
   */
  private generateDocumentNumber(orderCode: string): string {
    // Generar un número entre 1 y 10000 usando el timestamp
    // Usamos módulo 10000 + 1 para asegurar que esté en el rango válido
    const timestamp = Date.now();
    const documentNumber = (timestamp % 10000) + 1;
    return documentNumber.toString();
  }
}
