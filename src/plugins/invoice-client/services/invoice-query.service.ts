import { Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';
import type {
  ListInvoicesFilter,
  ListInvoicesPagination,
  ListInvoicesResult,
  InvoiceTotalsByDay,
  InvoiceTotalsByMonth,
} from './invoice-query.types';
import { InvoiceMicroHttpClient } from './invoice-micro-http.client';

/**
 * Consultas de facturas vía API del microservicio (sin tablas locales en Vendure).
 */
@Injectable()
export class InvoiceQueryService {
  constructor(private readonly microHttp: InvoiceMicroHttpClient) {}

  async listInvoices(
    _ctx: RequestContext,
    filter: ListInvoicesFilter,
    pagination?: ListInvoicesPagination,
  ): Promise<ListInvoicesResult> {
    const res = await this.microHttp.axios.get<{
      success: boolean;
      data?: { items: Array<Record<string, unknown>>; total: number };
      error?: string;
      message?: string;
    }>('/invoices/list', {
      params: {
        dateFrom: filter.dateFrom?.toISOString(),
        dateTo: filter.dateTo?.toISOString(),
        customerDni: filter.customerDni,
        status: filter.status,
        orderCode: filter.orderCode,
        take: pagination?.take,
        skip: pagination?.skip,
      },
      validateStatus: (s) => s < 500,
    });

    if (res.status === 503) {
      throw new Error(
        res.data?.message ||
          'Invoice microservice database not configured (INVOICE_SERVICE_DATABASE_URL).',
      );
    }

    if (!res.data.success || !res.data.data) {
      throw new Error(res.data.error || res.data.message || 'Failed to list invoices');
    }

    const items = res.data.data.items.map((row) => ({
      id: String(row.id),
      orderCode: row.orderCode as string,
      prefix: row.prefix as string,
      documentNumber: row.documentNumber as string,
      typeDocumentId: Number(row.typeDocumentId),
      operationTypeId: Number(row.operationTypeId),
      status: row.status as string,
      statusMessage: (row.statusMessage as string) ?? null,
      customerName: row.customerName as string,
      customerDni: row.customerDni as string,
      customerEmail: (row.customerEmail as string) ?? null,
      subtotal: row.subtotal as string,
      taxTotal: row.taxTotal as string,
      total: row.total as string,
      currencyCode: row.currencyCode as string,
      pdfUrl: (row.pdfUrl as string) ?? null,
      xmlUrl: (row.xmlUrl as string) ?? null,
      createdAt: new Date(row.createdAt as string),
    }));

    return {
      items,
      total: res.data.data.total,
    };
  }

  async getTotalsByDay(
    _ctx: RequestContext,
    dateFrom: Date,
    dateTo: Date,
  ): Promise<InvoiceTotalsByDay[]> {
    const res = await this.microHttp.axios.get<{
      success: boolean;
      data?: InvoiceTotalsByDay[];
    }>('/invoices/totals/day', {
      params: {
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      },
      validateStatus: (s) => s < 500,
    });

    if (res.status === 503) {
      throw new Error('Invoice microservice database not configured.');
    }
    if (!res.data.success || !res.data.data) {
      throw new Error('Failed to load invoice totals by day');
    }
    return res.data.data;
  }

  async getTotalsByMonth(
    _ctx: RequestContext,
    dateFrom: Date,
    dateTo: Date,
  ): Promise<InvoiceTotalsByMonth[]> {
    const res = await this.microHttp.axios.get<{
      success: boolean;
      data?: InvoiceTotalsByMonth[];
    }>('/invoices/totals/month', {
      params: {
        dateFrom: dateFrom.toISOString(),
        dateTo: dateTo.toISOString(),
      },
      validateStatus: (s) => s < 500,
    });

    if (res.status === 503) {
      throw new Error('Invoice microservice database not configured.');
    }
    if (!res.data.success || !res.data.data) {
      throw new Error('Failed to load invoice totals by month');
    }
    return res.data.data;
  }
}
