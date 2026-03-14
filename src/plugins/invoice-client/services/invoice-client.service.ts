import { Inject, Injectable, Logger } from '@nestjs/common';
import { Order, RequestContext, TransactionalConnection } from '@vendure/core';
import axios, { AxiosInstance } from 'axios';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import { Invoice } from '../entities/invoice.entity';

interface CreateInvoiceRequest {
  orderCode: string;
  resolutionNumber: string;
  prefix: string;
  documentNumber: string;
  notes?: string;
  graphicRepresentation?: number;
  sendEmail?: number;
  operationTypeId: number;
  typeDocumentId: number;
  customer: {
    companyName: string;
    dni: string;
    email?: string;
    mobile?: string;
    address?: string;
    postalCode?: string;
    countryId: string;
    cityId: string;
    identityDocumentId: string;
    typeOrganizationId: number;
    taxRegimeId: number;
    taxLevelId: number;
  };
  items: Array<{
    description: string;
    code: string;
    quantity: number;
    unitPrice: number;
    taxPercent?: number;
    quantityUnitsId?: string;
    typeItemIdentificationsId?: string;
    referencePriceId?: string;
  }>;
  payments: Array<{
    paymentMethodId: number;
    meansPaymentId: number;
    valuePaid: number;
  }>;
}

interface InvoiceResponse {
  success: boolean;
  data?: {
    id: string;
    orderCode: string;
    status: string;
    matiasInvoiceId?: string;
    matiasInvoiceNumber?: string;
    cufe?: string;
    pdfUrl?: string;
    xmlUrl?: string;
    message?: string;
  };
  error?: string;
  message?: string;
}

@Injectable()
export class InvoiceClientService {
  private readonly logger = new Logger(InvoiceClientService.name);
  private httpClient: AxiosInstance;

  constructor(
    @Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) private options: PluginInitOptions,
    private connection: TransactionalConnection,
  ) {
    this.httpClient = axios.create({
      baseURL: options.invoiceServiceUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': options.apiKey,
      },
    });
  }

  /**
   * De momento siempre retorna Bogotá (ID Matias 836).
   */
  private mapCityToMatiasId(_cityName?: string): string {
    return '836';
  }

  /**
   * Crea una factura desde una orden de Vendure y la persiste en la tabla Invoice.
   */
  async createInvoiceFromOrder(
    ctx: RequestContext,
    order: Order,
    config: {
      resolutionNumber: string;
      prefix: string;
      documentNumber: string;
      operationTypeId?: number;
      typeDocumentId?: number;
      sendEmail?: number;
    },
  ): Promise<InvoiceResponse> {
    try {
      this.logger.log(`Creating invoice for order ${order.code}`);

      const customer = order.customer;
      if (!customer) {
        throw new Error('Order does not have a customer');
      }

      const billingAddress = order.billingAddress || order.shippingAddress;
      const customerName =
        (customer.firstName && customer.lastName
          ? `${customer.firstName} ${customer.lastName}`
          : customer.firstName || customer.lastName) || 'Cliente';
      const customerDni =
        (customer.customFields as Record<string, string> | undefined)?.dni ||
        customer.phoneNumber ||
        '0000000000';

      // Items de la orden -> items de Matias
      const items = order.lines.map((line) => {
        const productVariant = line.productVariant;
        const taxRate = line.taxRate || 19;
        const unitPrice = line.unitPriceWithTax / (1 + taxRate / 100);
        const description =
          productVariant?.name ||
          line.productVariant?.name ||
          line.productVariant?.product?.name ||
          `Producto ${line.id}`;
        const sku = productVariant?.sku || `SKU-${productVariant?.id || line.id}`;

        return {
          description,
          code: sku,
          quantity: line.quantity,
          unitPrice: Number(unitPrice.toFixed(2)),
          taxPercent: taxRate,
          quantityUnitsId: '1093',
          typeItemIdentificationsId: '4',
          referencePriceId: '1',
        };
      });

      // Totales (para guardar en BD)
      const subtotal = order.subTotalWithTax / (1 + 19 / 100);
      const taxAmount = order.subTotalWithTax - subtotal;
      const total = order.totalWithTax;

      // Pagos: por simplicidad, un pago = total
      const totalPaid = order.totalWithTax;
      const payments = [
        {
          paymentMethodId: 1,
          meansPaymentId: 10,
          valuePaid: Number(totalPaid.toFixed(2)),
        },
      ];

      const request: CreateInvoiceRequest = {
        orderCode: order.code,
        resolutionNumber: config.resolutionNumber,
        prefix: config.prefix,
        documentNumber: config.documentNumber,
        notes: `Orden ${order.code}`,
        graphicRepresentation: 0,
        sendEmail: config.sendEmail ?? 1,
        operationTypeId: config.operationTypeId ?? 1,
        typeDocumentId: config.typeDocumentId ?? 7,
        customer: {
          companyName: customerName,
          dni: customerDni,
          email: customer.emailAddress,
          mobile: customer.phoneNumber,
          address: billingAddress?.streetLine1 || '',
          postalCode: billingAddress?.postalCode || '',
          countryId: '45',
          cityId: this.mapCityToMatiasId(billingAddress?.city),
          identityDocumentId: '1',
          typeOrganizationId: 2,
          taxRegimeId: 2,
          taxLevelId: 5,
        },
        items,
        payments,
      };

      this.logger.log(
        `Sending POST request to ${this.options.invoiceServiceUrl}/invoices for order ${order.code}`,
      );

      const response = await this.httpClient.post<InvoiceResponse>('/invoices', request);
      if (!response.data.success) {
        throw new Error(response.data.error || response.data.message || 'Failed to create invoice');
      }

      const data = response.data.data;

      // Persistir en Postgres
      try {
        const repo = this.connection.getRepository(ctx, Invoice);
        const invoice = repo.create({
          orderCode: order.code,
          prefix: config.prefix,
          documentNumber: config.documentNumber,
          typeDocumentId: config.typeDocumentId ?? 7,
          operationTypeId: config.operationTypeId ?? 1,
          matiasInvoiceId: data?.id ?? null,
          matiasInvoiceNumber: data?.matiasInvoiceNumber ?? null,
          cufe: data?.cufe ?? null,
          status: data?.status ?? 'UNKNOWN',
          statusMessage: data?.message ?? response.data.message ?? null,
          customerName,
          customerDni,
          customerEmail: customer.emailAddress,
          subtotal: subtotal.toFixed(2),
          taxTotal: taxAmount.toFixed(2),
          total: total.toFixed(2),
          currencyCode: order.currencyCode || 'COP',
          pdfUrl: data?.pdfUrl ?? null,
          xmlUrl: data?.xmlUrl ?? null,
        });

        await repo.save(invoice);
      } catch (persistError: any) {
        this.logger.error(
          `Failed to persist invoice record for order ${order.code}: ${persistError.message}`,
        );
      }

      this.logger.log(`Invoice created successfully for order ${order.code}`, {
        invoiceId: data?.id,
        cufe: data?.cufe,
      });

      return response.data;
    } catch (error: any) {
      this.logger.error(`Error creating invoice for order ${order.code}:`, error.message);
      throw error;
    }
  }
}

