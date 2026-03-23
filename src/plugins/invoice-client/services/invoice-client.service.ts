import { Inject, Injectable, Logger } from '@nestjs/common';
import { Order, RequestContext } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import type { PluginInitOptions } from '../types';
import { InvoiceMicroHttpClient } from './invoice-micro-http.client';

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
  reportSubtotal?: string;
  reportTaxTotal?: string;
  reportTotal?: string;
  currencyCode?: string;
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

export interface InvoiceCreateResponseData {
  id: string;
  orderCode: string;
  status: string;
  matiasInvoiceId?: string;
  matiasInvoiceNumber?: string;
  cufe?: string;
  pdfUrl?: string;
  xmlUrl?: string;
  message?: string;
}

interface InvoiceResponse {
  success: boolean;
  data?: InvoiceCreateResponseData;
  error?: string;
  message?: string;
}

@Injectable()
export class InvoiceClientService {
  private readonly logger = new Logger(InvoiceClientService.name);

  constructor(
    private readonly microHttp: InvoiceMicroHttpClient,
    @Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
  ) {}

  /**
   * Siguiente número de documento (persistido en la BD del microservicio).
   */
  async fetchNextDocumentNumber(prefix: string): Promise<string> {
    const res = await this.microHttp.axios.get<{
      success: boolean;
      data?: { documentNumber: string };
      error?: string;
    }>('/sequence/next', { params: { prefix } });

    if (!res.data.success || !res.data.data?.documentNumber) {
      throw new Error(res.data.error || 'Failed to get next document number from invoice service');
    }
    return res.data.data.documentNumber;
  }

  /**
   * Comprueba si ya existe factura para la orden (solo lectura en el micro).
   */
  async getInvoiceByOrderCode(orderCode: string): Promise<InvoiceCreateResponseData | null> {
    try {
      const res = await this.microHttp.axios.get<InvoiceResponse>(
        `/invoices/by-order-code/${encodeURIComponent(orderCode)}`,
      );
      if (!res.data.success || !res.data.data) {
        return null;
      }
      return res.data.data;
    } catch (err: any) {
      if (err.response?.status === 404) {
        return null;
      }
      throw err;
    }
  }

  private mapCityToMatiasId(_cityName?: string): string {
    return '836';
  }

  /**
   * Crea una factura vía microservicio Matias. No persiste nada en la BD de Vendure.
   */
  async createInvoiceFromOrder(
    _ctx: RequestContext,
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

      const items = order.lines.map((line) => {
        const productVariant = line.productVariant;
        const taxRate = line.taxRate || 19;
        const unitPrice = line.unitPriceWithTax / (1 + taxRate / 100);
        const description =
          productVariant?.name ||
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

      // Totales coherentes con las líneas enviadas al micro/Matias
      const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
      const taxAmount = items.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity * ((item.taxPercent ?? 0) / 100),
        0,
      );
      const total = subtotal + taxAmount;

      const totalPaid = total;
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
        reportSubtotal: subtotal.toFixed(2),
        reportTaxTotal: taxAmount.toFixed(2),
        reportTotal: total.toFixed(2),
        currencyCode: order.currencyCode || 'COP',
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
        `Sending POST ${this.options.invoiceServiceUrl.replace(/\/+$/, '')}/invoices for order ${order.code}`,
      );

      const response = await this.microHttp.axios.post<InvoiceResponse>('/invoices', request);
      if (!response.data.success) {
        throw new Error(response.data.error || response.data.message || 'Failed to create invoice');
      }

      const data = response.data.data;

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
