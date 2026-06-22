import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  Order,
  EventBus,
  LanguageCode,
  Logger,
  OrderService,
  OrderStateTransitionEvent,
  RequestContextService,
  RequestContext,
  TransactionalConnection,
} from '@vendure/core';
import { InvoiceClientService } from '../services/invoice-client.service';
import { InvoiceQuotaService } from '../services/invoice-quota.service';

const loggerCtx = 'InvoiceSubscriber';

@Injectable()
export class InvoiceSubscriber implements OnApplicationBootstrap {
  constructor(
    private eventBus: EventBus,
    private invoiceClientService: InvoiceClientService,
    private invoiceQuotaService: InvoiceQuotaService,
    private orderService: OrderService,
    private requestContextService: RequestContextService,
    private connection: TransactionalConnection,
  ) {}

  async onApplicationBootstrap() {
    this.eventBus.ofType(OrderStateTransitionEvent).subscribe(async (event) => {
      if (event.toState === 'PaymentSettled') {
        await this.handleOrderCompleted(String(event.order.id));
      }
    });
  }

  private async handleOrderCompleted(orderId: string) {
    let reservedOrder: Order | null = null;
    let reservedCtx: RequestContext | null = null;
    try {
      Logger.info(`Order ${orderId} completed, creating invoice...`, loggerCtx);

      const ctx = await this.requestContextService.create({
        apiType: 'admin',
        languageCode: LanguageCode.es,
      });
      reservedCtx = ctx;

      const order = await this.orderService.findOne(ctx, orderId, [
        'customer',
        'lines',
        'lines.productVariant',
        'lines.productVariant.product',
        'payments',
        'shippingLines',
        'shippingLines.shippingMethod',
        'channels',
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

      const emitConfig = await this.invoiceQuotaService.reserveQuotaForOrder(ctx, order);
      reservedOrder = order;

      const documentNumber = await this.invoiceClientService.fetchNextDocumentNumber(emitConfig.prefix);
      Logger.info(
        `Generated document number ${documentNumber} for order ${order.code} (prefix ${emitConfig.prefix})`,
        loggerCtx,
      );

      await this.invoiceClientService.createInvoiceFromOrder(ctx, order, {
        resolutionNumber: emitConfig.resolutionNumber,
        prefix: emitConfig.prefix,
        documentNumber,
        operationTypeId: 1,
        typeDocumentId: 7,
        sendEmail: 1,
        matiasBearerToken: emitConfig.matiasBearerToken,
      });

      reservedOrder = null;
      await this.persistInvoiceLastError(ctx, order, null);
      Logger.info(`Invoice created successfully for order ${order.code}`, loggerCtx);
    } catch (error: any) {
      Logger.error(`Error creating invoice for order ${orderId}: ${error.message}`, loggerCtx);
      if (reservedOrder && reservedCtx) {
        try {
          await this.invoiceQuotaService.releaseReservedQuotaForOrder(reservedCtx, reservedOrder);
        } catch (releaseError: any) {
          Logger.error(
            `Error releasing reserved invoice quota for order ${orderId}: ${releaseError.message}`,
            loggerCtx,
          );
        }
      }
      const ctx = await this.requestContextService.create({
        apiType: 'admin',
        languageCode: LanguageCode.es,
      });
      await this.persistInvoiceLastErrorById(ctx, orderId, error.message);
    }
  }

  private async persistInvoiceLastError(
    ctx: RequestContext,
    order: Order,
    error: string | null,
  ): Promise<void> {
    await this.persistInvoiceLastErrorById(ctx, String(order.id), error);
  }

  private async persistInvoiceLastErrorById(
    ctx: RequestContext,
    orderId: string,
    error: string | null,
  ): Promise<void> {
    const ds = this.connection.rawConnection;
    const orderMeta = ds.getMetadata(Order);
    const invoiceErrorColumn = orderMeta.columns.find(
      (c) => c.propertyName === 'invoiceLastError' && c.embeddedMetadata?.propertyName === 'customFields',
    );
    if (!invoiceErrorColumn) {
      Logger.warn('Order.customFields.invoiceLastError column not found; invoice error not persisted.', loggerCtx);
      return;
    }
    const table = orderMeta.tablePath
      .split('.')
      .map((part) => ds.driver.escape(part))
      .join('.');
    await ds.query(
      `UPDATE ${table} SET ${ds.driver.escape(invoiceErrorColumn.databaseName)} = $1 WHERE ${ds.driver.escape(orderMeta.primaryColumns[0].databaseName)} = $2`,
      [error, orderId],
    );
  }
}
