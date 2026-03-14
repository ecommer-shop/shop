import { Injectable } from '@nestjs/common';
import { RequestContext, TransactionalConnection } from '@vendure/core';
import { Invoice } from '../entities/invoice.entity';
import type {
  ListInvoicesFilter,
  ListInvoicesPagination,
  ListInvoicesResult,
  InvoiceTotalsByDay,
  InvoiceTotalsByMonth,
} from './invoice-query.types';

/**
 * Servicio de consultas de facturas: listado por filtros (QueryBuilder)
 * y totales por día/mes (raw SQL con parámetros).
 */
@Injectable()
export class InvoiceQueryService {
  constructor(private connection: TransactionalConnection) {}

  /**
   * Obtiene la primera factura por código de orden.
   */
  async getInvoiceByOrderCode(
    ctx: RequestContext,
    orderCode: string,
  ): Promise<ListInvoicesResult['items'][0] | null> {
    const result = await this.listInvoices(ctx, { orderCode }, { take: 1 });
    return result.items[0] ?? null;
  }

  /**
   * Listado de facturas por rango de fechas, cliente (NIT/DNI) y/o estado.
   */
  async listInvoices(
    ctx: RequestContext,
    filter: ListInvoicesFilter,
    pagination?: ListInvoicesPagination,
  ): Promise<ListInvoicesResult> {
    const repo = this.connection.getRepository(ctx, Invoice);
    const qb = repo
      .createQueryBuilder('invoice')
      .select([
        'invoice.id',
        'invoice.orderCode',
        'invoice.prefix',
        'invoice.documentNumber',
        'invoice.typeDocumentId',
        'invoice.operationTypeId',
        'invoice.status',
        'invoice.statusMessage',
        'invoice.customerName',
        'invoice.customerDni',
        'invoice.customerEmail',
        'invoice.subtotal',
        'invoice.taxTotal',
        'invoice.total',
        'invoice.currencyCode',
        'invoice.pdfUrl',
        'invoice.xmlUrl',
        'invoice.createdAt',
      ]);

    if (filter.dateFrom) {
      qb.andWhere('invoice.createdAt >= :dateFrom', { dateFrom: filter.dateFrom });
    }
    if (filter.dateTo) {
      qb.andWhere('invoice.createdAt <= :dateTo', { dateTo: filter.dateTo });
    }
    if (filter.customerDni) {
      qb.andWhere('invoice.customerDni = :customerDni', { customerDni: filter.customerDni });
    }
    if (filter.status) {
      qb.andWhere('invoice.status = :status', { status: filter.status });
    }
    if (filter.orderCode) {
      qb.andWhere('invoice.orderCode = :orderCode', { orderCode: filter.orderCode });
    }

    const total = await qb.getCount();

    qb.orderBy('invoice.createdAt', 'DESC');

    if (pagination?.skip != null) {
      qb.skip(pagination.skip);
    }
    if (pagination?.take != null) {
      qb.take(pagination.take);
    }

    const items = await qb.getMany();

    return {
      items: items.map((row) => ({
        id: row.id,
        orderCode: row.orderCode,
        prefix: row.prefix,
        documentNumber: row.documentNumber,
        typeDocumentId: row.typeDocumentId,
        operationTypeId: row.operationTypeId,
        status: row.status,
        statusMessage: row.statusMessage ?? null,
        customerName: row.customerName,
        customerDni: row.customerDni,
        customerEmail: row.customerEmail ?? null,
        subtotal: row.subtotal,
        taxTotal: row.taxTotal,
        total: row.total,
        currencyCode: row.currencyCode,
        pdfUrl: row.pdfUrl ?? null,
        xmlUrl: row.xmlUrl ?? null,
        createdAt: row.createdAt,
      })),
      total,
    };
  }

  /**
   * Totales por día (ventas e impuestos) en el rango dado.
   */
  async getTotalsByDay(
    ctx: RequestContext,
    dateFrom: Date,
    dateTo: Date,
  ): Promise<InvoiceTotalsByDay[]> {
    const repo = this.connection.getRepository(ctx, Invoice);
    const meta = repo.metadata;
    const tableName = meta.tableName;
    const schema = meta.schema;
    const fullTable = schema ? `"${schema}".${tableName}` : tableName;
    const createdCol =
      meta.columns.find((c) => c.propertyName === 'createdAt')?.databaseName ?? 'created_at';
    const subtotalCol =
      meta.columns.find((c) => c.propertyName === 'subtotal')?.databaseName ?? 'subtotal';
    const taxCol =
      meta.columns.find((c) => c.propertyName === 'taxTotal')?.databaseName ?? 'tax_total';
    const totalCol =
      meta.columns.find((c) => c.propertyName === 'total')?.databaseName ?? 'total';

    const raw = await this.connection.rawConnection.query(
      `SELECT
        (invoice."${createdCol}"::date)::text AS date,
        COALESCE(SUM((invoice."${subtotalCol}")::numeric), 0)::text AS subtotal,
        COALESCE(SUM((invoice."${taxCol}")::numeric), 0)::text AS "taxTotal",
        COALESCE(SUM((invoice."${totalCol}")::numeric), 0)::text AS total,
        COUNT(*)::int AS count
       FROM ${fullTable} AS invoice
       WHERE invoice."${createdCol}" >= $1 AND invoice."${createdCol}" <= $2
       GROUP BY (invoice."${createdCol}"::date)
       ORDER BY (invoice."${createdCol}"::date) ASC`,
      [dateFrom, dateTo],
    );

    const rows = Array.isArray(raw) ? raw : (raw as { rows?: InvoiceTotalsByDay[] }).rows ?? [];
    return rows as InvoiceTotalsByDay[];
  }

  /**
   * Totales por mes (ventas e impuestos) en el rango dado.
   */
  async getTotalsByMonth(
    ctx: RequestContext,
    dateFrom: Date,
    dateTo: Date,
  ): Promise<InvoiceTotalsByMonth[]> {
    const repo = this.connection.getRepository(ctx, Invoice);
    const meta = repo.metadata;
    const tableName = meta.tableName;
    const schema = meta.schema;
    const fullTable = schema ? `"${schema}".${tableName}` : tableName;
    const createdCol =
      meta.columns.find((c) => c.propertyName === 'createdAt')?.databaseName ?? 'created_at';
    const subtotalCol =
      meta.columns.find((c) => c.propertyName === 'subtotal')?.databaseName ?? 'subtotal';
    const taxCol =
      meta.columns.find((c) => c.propertyName === 'taxTotal')?.databaseName ?? 'tax_total';
    const totalCol =
      meta.columns.find((c) => c.propertyName === 'total')?.databaseName ?? 'total';

    const raw = await this.connection.rawConnection.query(
      `SELECT
        EXTRACT(YEAR FROM invoice."${createdCol}")::int AS year,
        EXTRACT(MONTH FROM invoice."${createdCol}")::int AS month,
        COALESCE(SUM((invoice."${subtotalCol}")::numeric), 0)::text AS subtotal,
        COALESCE(SUM((invoice."${taxCol}")::numeric), 0)::text AS "taxTotal",
        COALESCE(SUM((invoice."${totalCol}")::numeric), 0)::text AS total,
        COUNT(*)::int AS count
       FROM ${fullTable} AS invoice
       WHERE invoice."${createdCol}" >= $1 AND invoice."${createdCol}" <= $2
       GROUP BY EXTRACT(YEAR FROM invoice."${createdCol}"), EXTRACT(MONTH FROM invoice."${createdCol}")
       ORDER BY year ASC, month ASC`,
      [dateFrom, dateTo],
    );

    const rows = Array.isArray(raw) ? raw : (raw as { rows?: InvoiceTotalsByMonth[] }).rows ?? [];
    return rows as InvoiceTotalsByMonth[];
  }
}

