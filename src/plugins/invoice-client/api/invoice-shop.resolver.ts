import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Allow,
  Ctx,
  Customer,
  Permission,
  RequestContext,
  TransactionalConnection,
} from '@vendure/core';
import { InvoiceQueryService } from '../services/invoice-query.service';
import { BillingPlansService, BillingCertificateType } from '../services/billing-plans.service';

@Resolver()
export class InvoiceShopResolver {
  constructor(
    private connection: TransactionalConnection,
    private invoiceQuery: InvoiceQueryService,
    private billingPlans: BillingPlansService,
  ) { }

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

  @Query()
  @Allow(Permission.Authenticated)
  async myBillingPlanState(@Ctx() ctx: RequestContext) {
    return this.billingPlans.getCurrentChannelPlanState(ctx);
  }

  @Query()
  @Allow(Permission.Authenticated)
  async billingInvoicePlans() {
    return this.billingPlans.getPlanCatalog();
  }

  @Mutation()
  @Allow(Permission.Authenticated)
  async submitBillingCertificate(
    @Ctx() ctx: RequestContext,
    @Args('input')
    input: { chamber: string; rut: string; nit: string; certificateType: string },
  ) {
    const type = input.certificateType === 'MONTHLY' ? 'MONTHLY' : 'ANNUAL';
    return this.billingPlans.submitCertificateDocuments(ctx, {
      chamber: input.chamber,
      rut: input.rut,
      nit: input.nit,
      certificateType: type as BillingCertificateType,
    });
  }

  @Mutation()
  @Allow(Permission.Authenticated)
  async confirmMyBillingCertificatePayment(@Ctx() ctx: RequestContext) {
    return this.billingPlans.confirmCertificatePayment(ctx);
  }

  @Mutation()
  @Allow(Permission.Authenticated)
  async confirmMyBillingPlanPayment(@Ctx() ctx: RequestContext, @Args('planCode') planCode: string) {
    return this.billingPlans.confirmPlanPayment(ctx, { planCode });
  }
}

