import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { VendureEntity } from '@vendure/core';

/**
 * Registro local de factura emitida vía Matias.
 * Sirve para reportes y auditoría independiente del proveedor.
 */
@Entity()
@Index(['orderCode'])
@Index(['prefix', 'documentNumber'], { unique: true })
export class Invoice extends VendureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** Código de la orden en Vendure asociada a esta factura. */
  @Column({ type: 'varchar', length: 255 })
  orderCode: string;

  /** Prefijo de la factura (ej. LZT, FPOS). */
  @Column({ type: 'varchar', length: 32 })
  prefix: string;

  /** Número de documento dentro del prefijo. */
  @Column({ type: 'varchar', length: 32 })
  documentNumber: string;

  /** Tipo de documento Matias/DIAN (ej. 7 = factura, 20 = POS). */
  @Column({ type: 'int' })
  typeDocumentId: number;

  /** Tipo de operación (ej. 1 = venta, 14 = nota débito, etc.). */
  @Column({ type: 'int' })
  operationTypeId: number;

  /** ID interno de la factura en el microservicio / Matias (si aplica). */
  @Column({ type: 'varchar', length: 255, nullable: true })
  matiasInvoiceId?: string | null;

  /** Número de factura asignado por Matias (si difiere de prefix+documentNumber). */
  @Column({ type: 'varchar', length: 255, nullable: true })
  matiasInvoiceNumber?: string | null;

  /** CUFE / CUDE asignado por DIAN. */
  @Column({ type: 'varchar', length: 255, nullable: true })
  cufe?: string | null;

  /** Estado lógico de la factura según Matias/DIAN (PENDING, ACCEPTED, REJECTED, etc.). */
  @Column({ type: 'varchar', length: 64 })
  status: string;

  /** Mensaje descriptivo de estado devuelto por Matias/DIAN. */
  @Column({ type: 'text', nullable: true })
  statusMessage?: string | null;

  /** Datos básicos del cliente para consultas rápidas. */
  @Column({ type: 'varchar', length: 255 })
  customerName: string;

  @Column({ type: 'varchar', length: 64 })
  customerDni: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  customerEmail?: string | null;

  /** Totales monetarios en moneda de la factura (normalmente COP). */
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  taxTotal: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: string;

  @Column({ type: 'varchar', length: 3, default: 'COP' })
  currencyCode: string;

  /** Enlaces a representaciones oficiales en Matias (PDF/XML). */
  @Column({ type: 'varchar', length: 1024, nullable: true })
  pdfUrl?: string | null;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  xmlUrl?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

