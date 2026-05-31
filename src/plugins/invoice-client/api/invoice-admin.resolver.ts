import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, Permission, RequestContext } from '@vendure/core';
import { UseGuards } from '@nestjs/common';
import { FeatureAccessGuard } from '../../wompi-subscription/guards/feature.guard';
import { RequiresFeature } from '../../wompi-subscription/decorators/requires-feature.decorator';
import { FEATURE_CODES } from '../../wompi-subscription/constants';
import { InvoiceQueryService } from '../services/invoice-query.service';

@Resolver()
export class InvoiceAdminResolver {
  constructor(private invoiceQuery: InvoiceQueryService) {}

  @Query()
  @Allow(Permission.ReadOrder)
  @UseGuards(FeatureAccessGuard)
  @RequiresFeature(FEATURE_CODES.ELECTRONIC_BILLING)
  async invoices(
    @Ctx() ctx: RequestContext,
    @Args('options') options?: {
      filter?: {
        dateFrom?: string;
        dateTo?: string;
        customerDni?: string;
        status?: string;
        orderCode?: string;
      };
      take?: number;
      skip?: number;
    },
  ) {
    const filter = options?.filter
      ? {
          dateFrom: options.filter.dateFrom ? new Date(options.filter.dateFrom) : undefined,
          dateTo: options.filter.dateTo ? new Date(options.filter.dateTo) : undefined,
          customerDni: options.filter.customerDni ?? undefined,
          status: options.filter.status ?? undefined,
          orderCode: options.filter.orderCode ?? undefined,
        }
      : {};

    const pagination =
      options?.take != null || options?.skip != null
        ? { take: options.take, skip: options.skip }
        : undefined;

    const result = await this.invoiceQuery.listInvoices(ctx, filter, pagination);
    return {
      items: result.items,
      total: result.total,
    };
  }

  @Query()
  @Allow(Permission.ReadOrder)
  @UseGuards(FeatureAccessGuard)
  @RequiresFeature(FEATURE_CODES.ELECTRONIC_BILLING)
  async invoiceTotalsByDay(
    @Ctx() ctx: RequestContext,
    @Args('dateFrom') dateFrom: string,
    @Args('dateTo') dateTo: string,
  ) {
    return this.invoiceQuery.getTotalsByDay(ctx, new Date(dateFrom), new Date(dateTo));
  }

  @Query()
  @Allow(Permission.ReadOrder)
  @UseGuards(FeatureAccessGuard)
  @RequiresFeature(FEATURE_CODES.ELECTRONIC_BILLING)
  async invoiceTotalsByMonth(
    @Ctx() ctx: RequestContext,
    @Args('dateFrom') dateFrom: string,
    @Args('dateTo') dateTo: string,
  ) {
    return this.invoiceQuery.getTotalsByMonth(ctx, new Date(dateFrom), new Date(dateTo));
  }
}

