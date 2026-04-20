import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  Allow,
  Ctx,
  Customer,
  Permission,
  RequestContext,
  TransactionalConnection,
} from '@vendure/core';
import { InvoiceQueryService } from '../services/invoice-query.service';

@Resolver()
export class InvoiceShopResolver {
  constructor(
    private connection: TransactionalConnection,
    private invoiceQuery: InvoiceQueryService,
  ) {}

  @Query()
  @Allow(Permission.Authenticated)
  async myInvoices(
    @Ctx() ctx: RequestContext,
    @Args('take') take?: number,
    @Args('skip') skip?: number,
  ) {
    if (!ctx.activeUserId) {
      return { items: [], total: 0 };
    }

    const customer = await this.connection
      .getRepository(ctx, Customer)
      .findOne({ where: { user: { id: ctx.activeUserId } } });

    if (!customer) {
      return { items: [], total: 0 };
    }

    const dni =
      (customer.customFields as Record<string, string> | undefined)?.dni ||
      customer.phoneNumber ||
      '';

    if (!dni) {
      return { items: [], total: 0 };
    }

    const result = await this.invoiceQuery.listInvoices(
      ctx,
      { customerDni: dni },
      { take: take ?? 50, skip: skip ?? 0 },
    );

    return {
      items: result.items,
      total: result.total,
    };
  }
}

