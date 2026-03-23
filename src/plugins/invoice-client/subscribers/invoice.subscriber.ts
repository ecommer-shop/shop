import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  EventBus,
  LanguageCode,
  Logger,
  OrderService,
  OrderStateTransitionEvent,
  RequestContextService,
} from '@vendure/core';
import { InvoiceClientService } from '../services/invoice-client.service';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

const loggerCtx = 'InvoiceSubscriber';

@Injectable()
export class InvoiceSubscriber implements OnApplicationBootstrap {
  constructor(
    private eventBus: EventBus,
    private invoiceClientService: InvoiceClientService,
    private orderService: OrderService,
    private requestContextService: RequestContextService,
    @Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
  ) {}

  async onApplicationBootstrap() {
    this.eventBus.ofType(OrderStateTransitionEvent).subscribe(async (event) => {
      if (event.toState === 'PaymentSettled') {
        await this.handleOrderCompleted(String(event.order.id));
      }
    });
  }

  private async handleOrderCompleted(orderId: string) {
    try {
      Logger.info(`Order ${orderId} completed, creating invoice...`, loggerCtx);

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

      Logger.info(`Checking if invoice exists for order ${order.code}...`, loggerCtx);
      const existing = await this.invoiceClientService.getInvoiceByOrderCode(order.code);
      if (existing) {
        Logger.info(`Invoice already exists for order ${order.code}`, loggerCtx);
        return;
      }

      const prefix = this.options.prefix ?? process.env.MATIAS_PREFIX ?? 'LZT';
      const resolutionNumber =
        this.options.resolutionNumber ??
        process.env.MATIAS_RESOLUTION_NUMBER ??
        '18764074347312';

      const documentNumber = await this.invoiceClientService.fetchNextDocumentNumber(prefix);
      Logger.info(
        `Generated document number ${documentNumber} for order ${order.code} (prefix ${prefix})`,
        loggerCtx,
      );

      await this.invoiceClientService.createInvoiceFromOrder(ctx, order, {
        resolutionNumber,
        prefix,
        documentNumber,
        operationTypeId: 1,
        typeDocumentId: 7,
        sendEmail: 1,
      });

      Logger.info(`Invoice created successfully for order ${order.code}`, loggerCtx);
    } catch (error: any) {
      Logger.error(`Error creating invoice for order ${orderId}: ${error.message}`, loggerCtx);
    }
  }
}
