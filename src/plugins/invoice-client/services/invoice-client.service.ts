import { Inject, Injectable, Logger } from '@nestjs/common';
import { Order, RequestContext } from '@vendure/core';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import axios, { AxiosInstance } from 'axios';

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

  constructor(@Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) private options: PluginInitOptions) {
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
   * Mapea el nombre de ciudad a ID de Matias
   * Por ahora retorna el ID por defecto (Bogotá: 836)
   * En producción, deberías tener una tabla de mapeo ciudad -> ID de Matias
   */
  private mapCityToMatiasId(cityName?: string): string {
    // Por ahora, siempre usar Bogotá por defecto
    // En producción, implementar mapeo real basado en cityName
    return '836'; // Bogotá
  }

  /**
   * Crea una factura desde una orden de Vendure
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
    }
  ): Promise<InvoiceResponse> {
    try {
      this.logger.log(`Creating invoice for order ${order.code}`);

      // Transformar orden de Vendure a formato del microservicio
      const customer = order.customer;
      if (!customer) {
        throw new Error('Order does not have a customer');
      }

      const shippingAddress = order.shippingAddress;
      const billingAddress = order.billingAddress || shippingAddress;

      // Transformar items de la orden
      const items = order.lines.map((line) => {
        const productVariant = line.productVariant;
        // Calcular precio unitario sin impuestos
        const taxRate = line.taxRate || 19; // IVA por defecto 19%
        const unitPrice = line.unitPriceWithTax / (1 + taxRate / 100);

        // Manejar casos donde productVariant puede ser undefined o no tener propiedades cargadas
        const description = productVariant?.name || line.productVariant?.name || line.productVariant?.product?.name || `Producto ${line.id}`;
        const sku = productVariant?.sku || `SKU-${productVariant?.id || line.id}`;

        return {
          description,
          code: sku,
          quantity: line.quantity,
          unitPrice: Number(unitPrice.toFixed(2)), // Mantener 2 decimales
          taxPercent: taxRate,
          quantityUnitsId: '1093', // Unidad por defecto
          typeItemIdentificationsId: '4',
          referencePriceId: '1',
        };
      });

      // Calcular totales
      const subtotal = order.subTotalWithTax / (1 + 19 / 100); // Asumiendo IVA 19%
      const taxAmount = order.subTotalWithTax - subtotal;
      const total = order.totalWithTax;

      // Transformar pagos
      // El valuePaid debe ser el total de la orden, no el monto individual del pago
      const totalPaid = order.totalWithTax;
      const payments = [
        {
          paymentMethodId: 1, // Ajustar según tu configuración
          meansPaymentId: 10, // Ajustar según tu configuración
          valuePaid: Number(totalPaid.toFixed(2)), // Total de la orden con 2 decimales
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
        typeDocumentId: config.typeDocumentId ?? 7, // Factura de venta
        customer: {
          companyName: customer.firstName && customer.lastName
            ? `${customer.firstName} ${customer.lastName}`
            : customer.firstName || customer.lastName || 'Cliente',
          dni: (customer.customFields as any)?.dni || customer.phoneNumber || '0000000000',
          email: customer.emailAddress,
          mobile: customer.phoneNumber,
          address: billingAddress?.streetLine1 || '',
          postalCode: billingAddress?.postalCode || '',
          countryId: '45', // Colombia (ID de Matias)
          // cityId debe ser un ID numérico de Matias, no el nombre de la ciudad
          // Por defecto usar Bogotá (836)
          cityId: this.mapCityToMatiasId(billingAddress?.city),
          identityDocumentId: '1', // CC por defecto
          typeOrganizationId: 2,
          taxRegimeId: 2,
          taxLevelId: 5,
        },
        items,
        payments,
      };

      this.logger.log(`Sending POST request to ${this.options.invoiceServiceUrl}/invoices for order ${order.code}`);
      this.logger.debug(`Request payload: ${JSON.stringify(request, null, 2)}`);
      
      const response = await this.httpClient.post<InvoiceResponse>('/invoices', request);

      if (!response.data.success) {
        throw new Error(response.data.error || response.data.message || 'Failed to create invoice');
      }

      this.logger.log(`Invoice created successfully for order ${order.code}`, {
        invoiceId: response.data.data?.id,
        cufe: response.data.data?.cufe,
      });

      return response.data;
    } catch (error: any) {
      this.logger.error(`Error creating invoice for order ${order.code}:`, error.message);
      throw error;
    }
  }

  /**
   * Obtiene una factura por código de orden
   */
  async getInvoiceByOrderCode(orderCode: string): Promise<InvoiceResponse | null> {
    try {
      const response = await this.httpClient.get<InvoiceResponse>(
        `/invoices/by-order-code/${orderCode}`,
      );

      if (!response.data.success || !response.data.data) {
        return null;
      }

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      this.logger.error(`Error getting invoice for order ${orderCode}:`, error.message);
      throw error;
    }
  }

  /**
   * Obtiene el estado de una factura
   */
  async getInvoiceStatus(invoiceId: string): Promise<InvoiceResponse> {
    try {
      const response = await this.httpClient.get<InvoiceResponse>(`/invoices/${invoiceId}/status`);

      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to get invoice status');
      }

      return response.data;
    } catch (error: any) {
      this.logger.error(`Error getting invoice status for ${invoiceId}:`, error.message);
      throw error;
    }
  }

  /**
   * Reenvía una factura por email
   */
  async resendInvoice(invoiceId: string, email?: string): Promise<InvoiceResponse> {
    try {
      const response = await this.httpClient.post<InvoiceResponse>(
        `/invoices/${invoiceId}/resend`,
        email ? { email } : {}
      );

      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to resend invoice');
      }

      return response.data;
    } catch (error: any) {
      this.logger.error(`Error resending invoice ${invoiceId}:`, error.message);
      throw error;
    }
  }
}
