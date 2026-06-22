import { Inject, Injectable, Logger } from '@nestjs/common';
import { Order, RequestContext } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS, MATIAS_BEARER_TOKEN_HEADER } from '../constants';
import type { PluginInitOptions } from '../types';
import { InvoiceMicroHttpClient } from './invoice-micro-http.client';
import { resolveInvoiceBillingCustomer } from './invoice-order-billing';

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

export interface InvoiceMatiasStatusPayload {
  status: string;
  matiasInvoiceId?: string;
  matiasInvoiceNumber?: string;
  cufe?: string;
  error?: string;
  pdfUrl?: string;
  xmlUrl?: string;
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
      matiasBearerToken?: string | null;
    },
  ): Promise<InvoiceResponse> {
    try {
      this.logger.log(`Creating invoice for order ${order.code}`);

      const billingCustomer = resolveInvoiceBillingCustomer(order);

      const items = order.lines.map((line) => {
        const productVariant = line.productVariant;
        const taxRate = line.taxRate ?? 19;
        const discountedLinePrice =
          typeof line.discountedLinePrice === 'number'
            ? line.discountedLinePrice
            : line.unitPrice * line.quantity;
        const unitPrice = line.quantity > 0 ? discountedLinePrice / line.quantity : 0;
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

      const shippingLines = (order.shippingLines ?? [])
        .map((line, index) => {
          const price =
            typeof line.discountedPrice === 'number'
              ? line.discountedPrice
              : typeof line.price === 'number'
                ? line.price
                : 0;
          if (price <= 0) {
            return null;
          }
          return {
            description: line.shippingMethod?.name || 'Domicilio',
            code: line.shippingMethod?.code || `SHIPPING-${index + 1}`,
            quantity: 1,
            unitPrice: Number(price.toFixed(2)),
            taxPercent: 0,
            quantityUnitsId: '1093',
            typeItemIdentificationsId: '4',
            referencePriceId: '1',
          };
        })
        .filter((item): item is NonNullable<typeof item> => item != null);

      items.push(...shippingLines);

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
          companyName: billingCustomer.companyName,
          dni: billingCustomer.dni,
          email: billingCustomer.email,
          mobile: billingCustomer.mobile,
          address: billingCustomer.address,
          postalCode: billingCustomer.postalCode,
          countryId: '45',
          cityId: billingCustomer.cityId,
          identityDocumentId: billingCustomer.identityDocumentId,
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

      const trimmed = config.matiasBearerToken?.trim();
      const headers = trimmed ? { [MATIAS_BEARER_TOKEN_HEADER]: trimmed } : undefined;
      const response = await this.microHttp.axios.post<InvoiceResponse>('/invoices', request, { headers });
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

  async fetchInvoiceMatiasStatus(
    invoiceId: string,
    matiasBearerToken?: string | null,
  ): Promise<InvoiceMatiasStatusPayload> {
    const trimmed = matiasBearerToken?.trim();
    const headers = trimmed ? { [MATIAS_BEARER_TOKEN_HEADER]: trimmed } : undefined;
    const res = await this.microHttp.axios.get<{
      success: boolean;
      data?: InvoiceMatiasStatusPayload;
      error?: string;
      message?: string;
    }>(`/invoices/${encodeURIComponent(invoiceId)}/status`, { headers });
    if (!res.data.success || !res.data.data) {
      throw new Error(
        res.data.error ||
          res.data.message ||
          'No se pudo obtener el estado de la factura en el microservicio.',
      );
    }
    return res.data.data;
  }

  async resendInvoiceMatiasEmail(
    invoiceId: string,
    email: string | undefined,
    matiasBearerToken?: string | null,
  ): Promise<InvoiceCreateResponseData> {
    const trimmed = matiasBearerToken?.trim();
    const headers = trimmed ? { [MATIAS_BEARER_TOKEN_HEADER]: trimmed } : undefined;
    const res = await this.microHttp.axios.post<InvoiceResponse>(
      `/invoices/${encodeURIComponent(invoiceId)}/resend`,
      email?.trim() ? { email: email.trim() } : {},
      { headers },
    );
    if (!res.data.success || !res.data.data) {
      throw new Error(
        res.data.error ||
          res.data.message ||
          'No se pudo reenviar el correo de la factura en el microservicio.',
      );
    }
    return res.data.data;
  }
}
