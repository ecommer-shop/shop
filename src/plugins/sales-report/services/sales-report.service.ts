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
    const identifier = userId ? `usuario ${userId}` : `cliente ${customerId}`;
    
    if (!userId && !customerId) {
      const errorMsg = 'No se puede generar reporte: falta userId o customerId';
      Logger.error(errorMsg, 'SalesReportService');
      throw new Error(errorMsg);
    }

    // Validar que el período sea quincenal (aproximadamente 15 días)
    const daysDiff = Math.ceil(
      (periodEnd.getTime() - periodStart.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (daysDiff < 10 || daysDiff > 20) {
      Logger.warn(
        `Período inusual para ${identifier}: ${daysDiff} días (esperado: 10-20 días). Período: ${periodStart.toISOString()} a ${periodEnd.toISOString()}`,
        'SalesReportService',
      );
    }

    // Validar existencia de usuario/cliente
    if (userId) {
      try {
        const user = await this.userService.getUserById(ctx, userId);
        if (!user) {
          const errorMsg = `No se puede generar reporte: usuario ${userId} no existe`;
          Logger.error(errorMsg, 'SalesReportService');
          throw new Error(errorMsg);
        }
      } catch (error) {
        const errorMsg = `Error validando usuario ${userId}: ${error instanceof Error ? error.message : String(error)}`;
        Logger.error(errorMsg, 'SalesReportService');
        throw new Error(errorMsg);
      }
    } else if (customerId) {
      try {
        const customer = await this.customerService.findOne(ctx, customerId);
        if (!customer) {
          const errorMsg = `No se puede generar reporte: cliente ${customerId} no existe`;
          Logger.error(errorMsg, 'SalesReportService');
          throw new Error(errorMsg);
        }
      } catch (error) {
        const errorMsg = `Error validando cliente ${customerId}: ${error instanceof Error ? error.message : String(error)}`;
        Logger.error(errorMsg, 'SalesReportService');
        throw new Error(errorMsg);
      }
    }

    Logger.info(
      `Iniciando generación de reporte quincenal para ${identifier}. Período: ${periodStart.toISOString()} a ${periodEnd.toISOString()}`,
      'SalesReportService',
    );

    // Obtener órdenes del período
    const orders = await this.getOrdersForPeriod(
      ctx,
      periodStart,
      periodEnd,
      userId,
      customerId,
    );

    if (orders.length === 0) {
      Logger.warn(
        `No se encontraron órdenes para ${identifier} en el período ${periodStart.toISOString()} a ${periodEnd.toISOString()}. Se generará reporte con totales en cero.`,
        'SalesReportService',
      );
    } else {
      Logger.info(
        `Se encontraron ${orders.length} órdenes para ${identifier} en el período especificado`,
        'SalesReportService',
      );
    }

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
      Logger.info(
        `Actualizando reporte existente (ID: ${existingReport.id}) para ${identifier}. Total ventas: ${totalSales}, Pendiente: ${totalPending}`,
        'SalesReportService',
      );
      Object.assign(existingReport, reportData);
      const savedReport = await this.salesReportRepository.save(existingReport);
      Logger.info(
        `Reporte actualizado exitosamente (ID: ${savedReport.id}) para ${identifier}`,
        'SalesReportService',
      );
      return savedReport;
    } else {
      Logger.info(
        `Creando nuevo reporte para ${identifier}. Total ventas: ${totalSales}, Pendiente: ${totalPending}, Productos: ${salesDetails.length}, Métodos de pago: ${paymentMethods.length}`,
        'SalesReportService',
      );
      const newReport = this.salesReportRepository.create(reportData);
      const savedReport = await this.salesReportRepository.save(newReport);
      Logger.info(
        `Reporte creado exitosamente (ID: ${savedReport.id}) para ${identifier}`,
        'SalesReportService',
      );
      return savedReport;
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

    Logger.info(
      `Iniciando generación automática de reportes mensuales para el mes anterior (${lastMonth.toISOString()} a ${monthEnd.toISOString()})`,
      'SalesReportService',
    );

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

    Logger.info(
      `Se encontraron ${allOrders.length} órdenes en el mes anterior. Identificando usuarios y clientes únicos...`,
      'SalesReportService',
    );

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
        } else {
          Logger.warn(
            `ID de usuario inválido en orden ${order.code}: ${order.customer.user.id}`,
            'SalesReportService',
          );
        }
      }
      if (order.customer?.id) {
        const customerId = typeof order.customer.id === 'string' 
          ? parseInt(order.customer.id, 10) 
          : order.customer.id;
        if (!isNaN(customerId)) {
          uniqueCustomers.add(customerId);
        } else {
          Logger.warn(
            `ID de cliente inválido en orden ${order.code}: ${order.customer.id}`,
            'SalesReportService',
          );
        }
      } else {
        Logger.warn(
          `Orden ${order.code} no tiene cliente asociado`,
          'SalesReportService',
        );
      }
    }

    Logger.info(
      `Se identificaron ${uniqueUsers.size} usuarios únicos y ${uniqueCustomers.size} clientes únicos para generar reportes`,
      'SalesReportService',
    );

    // Generar reportes para cada usuario
    let userSuccessCount = 0;
    let userErrorCount = 0;
    
    for (const userId of uniqueUsers) {
      try {
        const userIdNum = typeof userId === 'string' ? parseInt(userId, 10) : userId;
        if (isNaN(userIdNum)) {
          Logger.warn(
            `ID de usuario inválido, saltando: ${userId} (tipo: ${typeof userId})`,
            'SalesReportService',
          );
          userErrorCount++;
          continue;
        }
        
        Logger.info(
          `Generando reportes quincenales para usuario ${userIdNum} (${userSuccessCount + userErrorCount + 1}/${uniqueUsers.size})`,
          'SalesReportService',
        );
        
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
        
        userSuccessCount++;
      } catch (error) {
        userErrorCount++;
        const errorMessage = error instanceof Error ? error.message : String(error);
        const errorStack = error instanceof Error ? error.stack : undefined;
        Logger.error(
          `Error generando reportes para usuario ${userId}: ${errorMessage}. Causa: ${errorMessage.includes('no existe') ? 'Usuario no encontrado en la base de datos' : errorMessage.includes('órdenes') ? 'No se encontraron órdenes válidas' : 'Error en la generación del reporte'}. Stack: ${errorStack || 'N/A'}`,
          'SalesReportService',
        );
      }
    }

    // Generar reportes para clientes sin usuario asociado
    let customerSuccessCount = 0;
    let customerErrorCount = 0;
    let customerSkippedCount = 0;
    
    for (const customerId of uniqueCustomers) {
      // Solo generar si no tiene usuario (ya se generó arriba)
      const customerIdNum = typeof customerId === 'string' ? parseInt(customerId, 10) : customerId;
      if (isNaN(customerIdNum)) {
        Logger.warn(
          `ID de cliente inválido, saltando: ${customerId} (tipo: ${typeof customerId})`,
          'SalesReportService',
        );
        customerErrorCount++;
        continue;
      }
      
      try {
        const customer = await this.customerService.findOne(ctx, customerIdNum);
        if (!customer) {
          Logger.warn(
            `Cliente ${customerIdNum} no existe en la base de datos, saltando generación de reportes`,
            'SalesReportService',
          );
          customerErrorCount++;
          continue;
        }
        
        if (customer.user) {
          Logger.info(
            `Cliente ${customerIdNum} tiene usuario asociado (${customer.user.id}), reportes ya generados. Saltando.`,
            'SalesReportService',
          );
          customerSkippedCount++;
          continue;
        }
        
        Logger.info(
          `Generando reportes quincenales para cliente ${customerIdNum} sin usuario (${customerSuccessCount + customerErrorCount + customerSkippedCount + 1}/${uniqueCustomers.size})`,
          'SalesReportService',
        );
        
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
        
        customerSuccessCount++;
      } catch (error) {
        customerErrorCount++;
        const errorMessage = error instanceof Error ? error.message : String(error);
        const errorStack = error instanceof Error ? error.stack : undefined;
        Logger.error(
          `Error generando reportes para cliente ${customerIdNum}: ${errorMessage}. Causa: ${errorMessage.includes('no existe') ? 'Cliente no encontrado en la base de datos' : errorMessage.includes('órdenes') ? 'No se encontraron órdenes válidas' : 'Error en la generación del reporte'}. Stack: ${errorStack || 'N/A'}`,
          'SalesReportService',
        );
      }
    }

    Logger.info(
      `Generación automática de reportes mensuales completada. Resumen: ${reports.length} reportes generados exitosamente. Usuarios: ${userSuccessCount} exitosos, ${userErrorCount} con errores. Clientes: ${customerSuccessCount} exitosos, ${customerErrorCount} con errores, ${customerSkippedCount} omitidos (tienen usuario).`,
      'SalesReportService',
    );

    return reports;
  }
}


