/**
 * Filtros para listado de facturas.
 */
export interface ListInvoicesFilter {
  /** Inicio del rango de fechas (inclusive). Se usa createdAt. */
  dateFrom?: Date;
  /** Fin del rango de fechas (inclusive). Se usa createdAt. */
  dateTo?: Date;
  /** Filtrar por NIT/DNI del cliente. */
  customerDni?: string;
  /** Filtrar por estado DIAN/Matias (ej. ACCEPTED, REJECTED, PENDING). */
  status?: string;
  /** Filtrar por código de orden Vendure. */
  orderCode?: string;
}

/**
 * Paginación para listado.
 */
export interface ListInvoicesPagination {
  take?: number;
  skip?: number;
}

/**
 * Resultado paginado de listado de facturas.
 */
export interface ListInvoicesResult {
  items: Array<{
    id: number;
    orderCode: string;
    prefix: string;
    documentNumber: string;
    typeDocumentId: number;
    operationTypeId: number;
    status: string;
    statusMessage: string | null;
    customerName: string;
    customerDni: string;
    customerEmail: string | null;
    subtotal: string;
    taxTotal: string;
    total: string;
    currencyCode: string;
    pdfUrl: string | null;
    xmlUrl: string | null;
    createdAt: Date;
  }>;
  total: number;
}

export interface InvoiceTotalsByDay {
  date: string;
  subtotal: string;
  taxTotal: string;
  total: string;
  count: number;
}

export interface InvoiceTotalsByMonth {
  year: number;
  month: number;
  subtotal: string;
  taxTotal: string;
  total: string;
  count: number;
}

