import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission, Allow, Ctx, RequestContext } from '@vendure/core';
import { SalesReportService } from '../services/sales-report.service';

@Resolver()
export class SalesReportResolver {
  constructor(private salesReportService: SalesReportService) {}

  @Query()
  @Allow(Permission.ReadOrder, Permission.ReadCustomer)
  async getSalesReports(
    @Ctx() ctx: RequestContext,
    @Args('input') input?: {
      userId?: string;
      customerId?: string;
      year?: number;
      month?: number;
    },
  ) {
    const userId = input?.userId ? parseInt(input.userId, 10) : undefined;
    const customerId = input?.customerId
      ? parseInt(input.customerId, 10)
      : undefined;

    return await this.salesReportService.getReportsByUser(
      ctx,
      userId,
      customerId,
      input?.year,
      input?.month,
    );
  }

  @Query()
  @Allow(Permission.ReadOrder, Permission.ReadCustomer)
  async getSalesReportById(
    @Ctx() ctx: RequestContext,
    @Args('id') id: string,
  ) {
    const reportId = parseInt(id, 10);
    return await this.salesReportService.getReportById(ctx, reportId);
  }

  @Mutation()
  @Allow(Permission.UpdateOrder, Permission.UpdateCustomer)
  async generateSalesReport(
    @Ctx() ctx: RequestContext,
    @Args('input') input: {
      userId?: string;
      customerId?: string;
      periodStart: Date;
      periodEnd: Date;
      observations?: string;
    },
  ) {
    const userId = input.userId ? parseInt(input.userId, 10) : undefined;
    const customerId = input.customerId
      ? parseInt(input.customerId, 10)
      : undefined;

    return await this.salesReportService.generateBiweeklyReport(
      ctx,
      new Date(input.periodStart),
      new Date(input.periodEnd),
      userId,
      customerId,
      input.observations,
    );
  }

  @Mutation()
  @Allow(Permission.UpdateOrder, Permission.UpdateCustomer)
  async deleteSalesReport(
    @Ctx() ctx: RequestContext,
    @Args('id') id: string,
  ) {
    const reportId = parseInt(id, 10);
    return await this.salesReportService.deleteReport(ctx, reportId);
  }

  @Mutation()
  @Allow(Permission.UpdateOrder, Permission.UpdateCustomer)
  async generateMonthlyReports(@Ctx() ctx: RequestContext) {
    return await this.salesReportService.generateMonthlyReports(ctx);
  }
}


