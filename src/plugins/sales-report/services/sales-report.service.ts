import { Injectable, Inject } from '@nestjs/common';
import {
  RequestContext,
  TransactionalConnection,
  OrderService,
  CustomerService,
  UserService,
  Logger,
  Order,
  ID,
} from '@vendure/core';
import { Repository, Between } from 'typeorm';
import { SalesReport } from '../entities/sales-report.entity';
import { SALES_REPORT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class SalesReportService {
  private salesReportRepository: Repository<SalesReport>;

  constructor(
    private connection: TransactionalConnection,
    private orderService: OrderService,
    private customerService: CustomerService,
    private userService: UserService,
    @Inject(SALES_REPORT_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
  ) {
    this.salesReportRepository = this.connection.getRepository(SalesReport);
  }

  /**
   * Genera un reporte quincenal de ventas para un usuario o empresa
   */
  async generateBiweeklyReport(
    ctx: RequestContext,
    periodStart: Date,
    periodEnd: Date,
    userId?: number,
    customerId?: number,
    observations?: string,
  ): Promise<SalesReport> {
    if (!userId && !customerId) {
      throw new Error('Debe proporcionar userId o customerId');
    }

    // Validar que el período sea quincenal (aproximadamente 15 días)
    const daysDiff = Math.ceil(
      (periodEnd.getTime() - periodStart.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (daysDiff < 10 || daysDiff > 20) {
      Logger.warn(
        `El período proporcionado (${daysDiff} días) no parece ser quincenal`,
        'SalesReportService',
      );
    }

    // Obtener órdenes del período
    const orders = await this.getOrdersForPeriod(
      ctx,
      periodStart,
      periodEnd,
      userId,
      customerId,
    );

    // Calcular totales
    const totalSales = orders.reduce(
      (sum, order) => sum + Number(order.totalWithTax),
      0,
    );

    // Calcular total vendido vs pendiente por pagar
    const settledOrders = orders.filter((order) => {
      const payments = order.payments || [];
      return payments.some((p) => p.state === 'Settled');
    });
    const pendingOrders = orders.filter((order) => {
      const payments = order.payments || [];
      return !payments.some((p) => p.state === 'Settled');
    });

    const totalSold = settledOrders.reduce(
      (sum, order) => sum + Number(order.totalWithTax),
      0,
    );
    const totalPending = pendingOrders.reduce(
      (sum, order) => sum + Number(order.totalWithTax),
      0,
    );

    // Generar detalle de ventas
    const salesDetails: Array<{
      productName: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
      orderCode: string;
    }> = [];

    for (const order of orders) {
      for (const line of order.lines || []) {
        const variant = line.productVariant;
        if (variant) {
          salesDetails.push({
            productName: variant.name || 'Producto sin nombre',
            quantity: line.quantity,
            unitPrice: Number(line.unitPriceWithTax),
            totalPrice: Number(line.linePriceWithTax),
            orderCode: order.code,
          });
        }
      }
    }

    // Agrupar métodos de pago
    const paymentMethodsMap = new Map<string, { amount: number; count: number }>();
    for (const order of orders) {
      for (const payment of order.payments || []) {
        const method = payment.method || 'unknown';
        const existing = paymentMethodsMap.get(method) || { amount: 0, count: 0 };
        paymentMethodsMap.set(method, {
          amount: existing.amount + Number(order.totalWithTax),
          count: existing.count + 1,
        });
      }
    }

    const paymentMethods = Array.from(paymentMethodsMap.entries()).map(
      ([method, data]) => ({
        method,
        amount: data.amount,
        count: data.count,
      }),
    );

    // Determinar mes, año y quincena
    const month = periodStart.getMonth() + 1;
    const year = periodStart.getFullYear();
    const biweekly = periodStart.getDate() <= 15 ? 1 : 2;

    // Crear o actualizar reporte
    const whereClause: any = {
      periodStart,
      periodEnd,
    };
    if (userId !== undefined) {
      whereClause.userId = userId;
    }
    if (customerId !== undefined) {
      whereClause.customerId = customerId;
    }
    const existingReport = await this.salesReportRepository.findOne({
      where: whereClause,
    });

    const reportData: Partial<SalesReport> = {
      periodStart,
      periodEnd,
      reportDate: new Date(),
      totalSales,
      totalSoldOrPending: totalPending, // Saldo pendiente por pagar
      salesDetails,
      paymentMethods,
      month,
      year,
      biweekly,
    };
    
    if (userId !== undefined) {
      reportData.userId = userId;
    }
    if (customerId !== undefined) {
      reportData.customerId = customerId;
    }
    if (observations !== undefined) {
      reportData.observations = observations;
    }

    if (existingReport) {
      Object.assign(existingReport, reportData);
      return await this.salesReportRepository.save(existingReport);
    } else {
      const newReport = this.salesReportRepository.create(reportData);
      return await this.salesReportRepository.save(newReport);
    }
  }

  /**
   * Obtiene órdenes del período para un usuario o empresa
   */
  private async getOrdersForPeriod(
    ctx: RequestContext,
    periodStart: Date,
    periodEnd: Date,
    userId?: number,
    customerId?: number,
  ): Promise<Order[]> {
    const orderRepo = this.connection.getRepository(ctx, Order);
    const qb = orderRepo
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.lines', 'line')
      .leftJoinAndSelect('line.productVariant', 'variant')
      .leftJoinAndSelect('order.payments', 'payment')
      .where('order.state = :state', { state: 'PaymentSettled' })
      .andWhere('order.orderPlacedAt >= :start', { start: periodStart })
      .andWhere('order.orderPlacedAt <= :end', { end: periodEnd });

    if (userId) {
      qb.leftJoin('order.customer', 'customer')
        .leftJoin('customer.user', 'user')
        .andWhere('user.id = :userId', { userId });
    } else if (customerId) {
      qb.andWhere('order.customerId = :customerId', { customerId });
    }

    return await qb.getMany();
  }

  /**
   * Obtiene reportes por usuario o empresa
   */
  async getReportsByUser(
    ctx: RequestContext,
    userId?: number,
    customerId?: number,
    year?: number,
    month?: number,
  ): Promise<SalesReport[]> {
    const where: any = {};
    if (userId) {
      where.userId = userId;
    }
    if (customerId) {
      where.customerId = customerId;
    }
    if (year) {
      where.year = year;
    }
    if (month) {
      where.month = month;
    }

    return await this.salesReportRepository.find({
      where,
      order: { periodStart: 'DESC' },
    });
  }

  /**
   * Obtiene un reporte específico por ID
   */
  async getReportById(ctx: RequestContext, id: number): Promise<SalesReport | null> {
    return await this.salesReportRepository.findOne({ where: { id } });
  }

  /**
   * Elimina un reporte
   */
  async deleteReport(ctx: RequestContext, id: number): Promise<boolean> {
    const result = await this.salesReportRepository.delete(id);
    return (result.affected || 0) > 0;
  }

  /**
   * Genera reportes automáticamente para el mes anterior
   * Genera reportes quincenales para todos los usuarios/clientes que tienen órdenes
   */
  async generateMonthlyReports(ctx: RequestContext): Promise<SalesReport[]> {
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth(), 0);

    // Primera quincena (1-15)
    const firstPeriodStart = new Date(lastMonth);
    const firstPeriodEnd = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 15);

    // Segunda quincena (16-fin de mes)
    const secondPeriodStart = new Date(
      lastMonth.getFullYear(),
      lastMonth.getMonth(),
      16,
    );
    const secondPeriodEnd = new Date(monthEnd);

    const reports: SalesReport[] = [];

    // Obtener todas las órdenes del mes anterior para identificar usuarios/clientes únicos
    const orderRepo = this.connection.getRepository(ctx, Order);
    const allOrders = await orderRepo
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.customer', 'customer')
      .leftJoinAndSelect('customer.user', 'user')
      .where('order.orderPlacedAt >= :start', { start: lastMonth })
      .andWhere('order.orderPlacedAt <= :end', { end: monthEnd })
      .getMany();

    // Obtener usuarios y clientes únicos
    const uniqueUsers = new Set<number>();
    const uniqueCustomers = new Set<number>();

    for (const order of allOrders) {
      if (order.customer?.user?.id) {
        const userId = typeof order.customer.user.id === 'string' 
          ? parseInt(order.customer.user.id, 10) 
          : order.customer.user.id;
        if (!isNaN(userId)) {
          uniqueUsers.add(userId);
        }
      }
      if (order.customer?.id) {
        const customerId = typeof order.customer.id === 'string' 
          ? parseInt(order.customer.id, 10) 
          : order.customer.id;
        if (!isNaN(customerId)) {
          uniqueCustomers.add(customerId);
        }
      }
    }

    // Generar reportes para cada usuario
    for (const userId of uniqueUsers) {
      try {
        const userIdNum = typeof userId === 'string' ? parseInt(userId, 10) : userId;
        if (isNaN(userIdNum)) continue;
        
        const report1 = await this.generateBiweeklyReport(
          ctx,
          firstPeriodStart,
          firstPeriodEnd,
          userIdNum,
          undefined,
        );
        reports.push(report1);

        const report2 = await this.generateBiweeklyReport(
          ctx,
          secondPeriodStart,
          secondPeriodEnd,
          userIdNum,
          undefined,
        );
        reports.push(report2);
      } catch (error) {
        Logger.error(
          `Error generando reportes para usuario ${userId}: ${error}`,
          'SalesReportService',
        );
      }
    }

    // Generar reportes para clientes sin usuario asociado
    for (const customerId of uniqueCustomers) {
      // Solo generar si no tiene usuario (ya se generó arriba)
      const customerIdNum = typeof customerId === 'string' ? parseInt(customerId, 10) : customerId;
      if (isNaN(customerIdNum)) continue;
      
      const customer = await this.customerService.findOne(ctx, customerIdNum);
      if (customer && !customer.user) {
        try {
          const report1 = await this.generateBiweeklyReport(
            ctx,
            firstPeriodStart,
            firstPeriodEnd,
            undefined,
            customerIdNum,
          );
          reports.push(report1);

          const report2 = await this.generateBiweeklyReport(
            ctx,
            secondPeriodStart,
            secondPeriodEnd,
            undefined,
            customerIdNum,
          );
          reports.push(report2);
        } catch (error) {
          Logger.error(
            `Error generando reportes para cliente ${customerIdNum}: ${error}`,
            'SalesReportService',
          );
        }
      }
    }

    return reports;
  }
}


