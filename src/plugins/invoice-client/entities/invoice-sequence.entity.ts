import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';
import { VendureEntity } from '@vendure/core';

/**
 * Secuencia persistente de números de factura por prefijo.
 * Garantiza numeración consecutiva sin huecos para cumplir con DIAN/Matías.
 */
@Entity()
@Unique(['prefix'])
export class InvoiceSequence extends VendureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** Prefijo de la factura (ej. LZT). Una secuencia por prefijo. */
  @Column({ type: 'varchar', length: 32 })
  prefix: string;

  /** Último número de documento asignado. El siguiente será lastNumber + 1. */
  @Column({ type: 'integer', default: 0, name: 'last_number' })
  lastNumber: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
