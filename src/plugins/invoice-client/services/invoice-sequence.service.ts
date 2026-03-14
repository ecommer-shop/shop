import { Injectable } from '@nestjs/common';
import { TransactionalConnection } from '@vendure/core';

/**
 * Servicio que asigna números de documento de factura consecutivos por prefijo.
 */
@Injectable()
export class InvoiceSequenceService {
  constructor(private connection: TransactionalConnection) {}

  /**
   * Obtiene el siguiente número de documento para el prefijo dado.
   */
  async getNextDocumentNumber(prefix: string): Promise<string> {
    const result = await this.connection.rawConnection.query(
      `INSERT INTO invoice_sequence (prefix, last_number)
       VALUES ($1, 1)
       ON CONFLICT (prefix) DO UPDATE SET
         last_number = invoice_sequence.last_number + 1,
         "updatedAt" = CURRENT_TIMESTAMP
       RETURNING last_number`,
      [prefix],
    );

    const rows = Array.isArray(result) ? result : (result as { rows?: any[] }).rows ?? [];
    const row = rows[0];
    if (!row || row.last_number == null) {
      throw new Error(`Failed to get next document number for prefix ${prefix}`);
    }

    return String(row.last_number);
  }
}

