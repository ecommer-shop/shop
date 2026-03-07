import { Injectable } from '@nestjs/common';
import { TransactionalConnection } from '@vendure/core';

/**
 * Servicio que asigna números de documento de factura consecutivos por prefijo.
 * Usa una sola sentencia atómica (INSERT ... ON CONFLICT) para que varias
 * facturas simultáneas obtengan cada una su número sin errores ni reintentos.
 */
@Injectable()
export class InvoiceSequenceService {
  constructor(private connection: TransactionalConnection) {}

  /**
   * Obtiene el siguiente número de documento para el prefijo dado.
   * Consecutivo, sin huecos. Varias peticiones a la vez reciben el codigo de la factura sin fallar ninguna.
   */
  async getNextDocumentNumber(prefix: string): Promise<string> {
    const result = await this.connection.rawConnection.query(
      `INSERT INTO invoice_sequence (prefix, last_number)
       VALUES ($1, 1)
       ON CONFLICT (prefix) DO UPDATE SET
         last_number = invoice_sequence.last_number + 1,
         updated_at = CURRENT_TIMESTAMP
       RETURNING last_number`,
      [prefix],
    );

    const rows = Array.isArray(result) ? result : (result as { rows?: unknown[] }).rows ?? [];
    const row = rows[0];
    if (!row || row.last_number == null) {
      throw new Error(`Failed to get next document number for prefix ${prefix}`);
    }

    return String(row.last_number);
  }
}
