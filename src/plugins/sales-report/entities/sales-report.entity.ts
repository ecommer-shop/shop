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
 * Entidad para almacenar reportes quincenales de ventas por usuario o empresa
 */
@Entity()
@Index(['userId', 'periodStart', 'periodEnd'])
@Index(['customerId', 'periodStart', 'periodEnd'])
export class SalesReport extends VendureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Usuario responsable de las ventas 
   */
  @Column({ nullable: true })
  userId?: number;

  /**
   * Cliente/Empresa responsable de las ventas 
   */
  @Column({ nullable: true })
  customerId?: number;

  /**
   * Fecha de inicio del período quincenal
   */
  @Column({ type: 'timestamp' })
  periodStart: Date;

  /**
   * Fecha de fin del período quincenal
   */
  @Column({ type: 'timestamp' })
  periodEnd: Date;

  /**
   * Día correspondiente al reporte (fecha del reporte)
   */
  @Column({ type: 'timestamp' })
  reportDate: Date;

  /**
   * Total de ventas realizadas en el período
   */
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSales: number;

  /**
   * Total vendido o saldo pendiente por pagar al cierre de la quincena
   */
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSoldOrPending: number;

  /**
   * Detalle de ventas (JSON con resumen de productos/servicios vendidos)
   */
  @Column({ type: 'jsonb', nullable: true })
  salesDetails?: Array<{
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    orderCode: string;
  }>;

  /**
   * Métodos de pago utilizados 
   */
  @Column({ type: 'jsonb', nullable: true })
  paymentMethods?: Array<{
    method: string; // efectivo, tarjeta, transferencia, etc.
    amount: number;
    count: number;
  }>;

  /**
   * Observaciones del período (descuentos, devoluciones, incidencias)
   */
  @Column({ type: 'text', nullable: true })
  observations?: string;

  /**
   * Mes del reporte 
   */
  @Column({ type: 'int' })
  month: number;

  /**
   * Año del reporte
   */
  @Column({ type: 'int' })
  year: number;

  /**
   * Quincena (1 o 2)
   */
  @Column({ type: 'int' })
  biweekly: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



