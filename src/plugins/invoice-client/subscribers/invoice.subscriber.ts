import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventBus,
  OrderStateTransitionEvent,
  OrderService,
  RequestContextService,
  Logger,
  LanguageCode,
} from '@vendure/core';
import { InvoiceClientService } from '../services/invoice-client.service';
import { InvoiceSequenceService } from '../services/invoice-sequence.service';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

const loggerCtx = 'InvoiceSubscriber';

@Injectable()
export class InvoiceSubscriber implements OnApplicationBootstrap {

  constructor(
    private eventBus: EventBus,
    private invoiceClientService: InvoiceClientService,
    private invoiceSequenceService: InvoiceSequenceService,
    private orderService: OrderService,
    private requestContextService: RequestContextService,
    @Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
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

      const prefix = this.options.prefix ?? process.env.MATIAS_PREFIX ?? 'LZT';
      const resolutionNumber = this.options.resolutionNumber ?? process.env.MATIAS_RESOLUTION_NUMBER ?? '18764074347312';

      const documentNumber = await this.invoiceSequenceService.getNextDocumentNumber(prefix);
      Logger.info(`Generated document number: ${documentNumber} for order ${order.code} (prefix: ${prefix})`, loggerCtx);

      Logger.info(`Calling createInvoiceFromOrder for order ${order.code}...`, loggerCtx);
      await this.invoiceClientService.createInvoiceFromOrder(ctx, order, {
        resolutionNumber,
        prefix,
        documentNumber,
        operationTypeId: 1,
        typeDocumentId: 7, // Factura de venta
        sendEmail: 1,
      });

      Logger.info(`Invoice created successfully for order ${order.code}`, loggerCtx);
    } catch (error: any) {
      Logger.error(`Error creating invoice for order ${orderId}: ${error.message}`, loggerCtx);
    }
  }
}
