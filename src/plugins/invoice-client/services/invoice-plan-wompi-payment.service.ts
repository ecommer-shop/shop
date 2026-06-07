import { Injectable } from '@nestjs/common';
import {
  Administrator,
  Logger,
  RequestContext,
  TransactionalConnection,
  UserInputError,
} from '@vendure/core';
import { WompiService } from '../../wompi-subscription/services/wompi.service';
import { PAYMENT_METHOD_FLOW, PaymentFlowType } from '../../wompi-subscription/payment-methods';
import { BillingPlansService, BillingPlanState } from './billing-plans.service';

export interface InvoicePlanPurchaseResult {
  reference: string;
  transactionStatus: string | null;
  asyncPaymentUrl: string | null;
  qrImage: string | null;
  transactionId: string | null;
  applied: boolean;
  billingPlanState: BillingPlanState;
}

@Injectable()
export class InvoicePlanWompiPaymentService {
  constructor(
    private readonly wompiService: WompiService,
    private readonly billingPlans: BillingPlansService,
    private readonly connection: TransactionalConnection,
  ) {}

  buildPlanReference(channelCode: string, planCode: string): string {
    return `PLAN-${channelCode}-${planCode}-${Date.now()}`;
  }

  async createPendingPurchase(
    ctx: RequestContext,
    planCode: string,
    paymentMethod: string,
  ): Promise<InvoicePlanPurchaseResult> {
    const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
    if (!flowType) {
      throw new UserInputError(`Método de pago no válido: ${paymentMethod}`);
    }
    if (flowType !== PaymentFlowType.MANUAL) {
      throw new UserInputError('Usa purchaseInvoicePlanWithPayment para métodos tokenizables.');
    }

    const state = await this.billingPlans.getCurrentChannelPlanState(ctx);
    if (!state.canBuyPlans) {
      throw new UserInputError(
        'Debes tener certificado activo y pago confirmado para comprar paquetes de facturación.',
      );
    }

    const plan = this.billingPlans.getPlanCatalog().find((p) => p.code === planCode);
    if (!plan) {
      throw new UserInputError(`Plan no válido: ${planCode}`);
    }

    const adminEmail = await this.resolveAdminEmail(ctx);
    const reference = this.buildPlanReference(state.channelCode, plan.code);
    const amountInCents = Math.round(plan.priceCop * 100);
    const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();

    const transaction = await this.wompiService.createTransaction({
      amount_in_cents: amountInCents,
      currency: 'COP',
      reference,
      customer_email: adminEmail,
      payment_method: { type: paymentMethod },
      acceptance_token: acceptanceToken,
      accept_personal_auth: personalAuthToken,
      redirect_url: '',
    });

    let applied = false;
    if (transaction.status === 'APPROVED') {
      await this.billingPlans.applyPlanPurchaseFromWebhook(
        ctx,
        state.channelCode,
        plan.code,
        reference,
      );
      applied = true;
    }

    const billingPlanState = await this.billingPlans.getCurrentChannelPlanState(ctx);

    return {
      reference,
      transactionStatus: transaction.status ?? null,
      asyncPaymentUrl:
        transaction.payment_method?.extra?.async_payment_url ||
        transaction.payment_method?.extra?.url ||
        null,
      qrImage: transaction.payment_method?.extra?.qr_image || null,
      transactionId: transaction.id ?? null,
      applied,
      billingPlanState,
    };
  }

  async purchaseWithToken(
    ctx: RequestContext,
    planCode: string,
    paymentMethod: string,
    token: string,
    sessionId?: string,
    deviceId?: string,
  ): Promise<InvoicePlanPurchaseResult> {
    const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
    if (!flowType) {
      throw new UserInputError(`Método de pago no válido: ${paymentMethod}`);
    }
    if (flowType !== PaymentFlowType.RECURRENTE) {
      throw new UserInputError('Usa createPendingInvoicePlanPurchase para métodos de pago manual.');
    }

    const state = await this.billingPlans.getCurrentChannelPlanState(ctx);
    if (!state.canBuyPlans) {
      throw new UserInputError(
        'Debes tener certificado activo y pago confirmado para comprar paquetes de facturación.',
      );
    }

    const plan = this.billingPlans.getPlanCatalog().find((p) => p.code === planCode);
    if (!plan) {
      throw new UserInputError(`Plan no válido: ${planCode}`);
    }

    const adminEmail = await this.resolveAdminEmail(ctx);
    const reference = this.buildPlanReference(state.channelCode, plan.code);
    const amountInCents = Math.round(plan.priceCop * 100);
    const { acceptanceToken, personalAuthToken } = await this.wompiService.getAcceptanceTokens();

    const paymentSource = await this.wompiService.createPaymentSource(
      paymentMethod,
      token,
      adminEmail,
      acceptanceToken,
      personalAuthToken,
      sessionId,
      deviceId,
    );

    const paymentMethodInfo =
      paymentMethod === 'CARD' ? { type: 'CARD' as const, installments: 1 } : undefined;

    let applied = false;
    let transactionStatus: string | null = null;
    let transactionId: string | null = null;

    try {
      const transaction = await this.wompiService.createRecurringTransaction(
        paymentSource.id,
        amountInCents,
        reference,
        adminEmail,
        acceptanceToken,
        personalAuthToken,
        paymentMethodInfo,
      );
      transactionStatus = transaction.status ?? null;
      transactionId = transaction.id ?? null;

      if (transaction.status === 'APPROVED') {
        await this.billingPlans.applyPlanPurchaseFromWebhook(
          ctx,
          state.channelCode,
          plan.code,
          reference,
        );
        applied = true;
      } else {
        Logger.debug(
          `Invoice plan payment ${transaction.id} status ${transaction.status} — awaiting webhook`,
          'InvoicePlanWompiPaymentService',
        );
      }
    } catch (error) {
      Logger.error(`Invoice plan charge failed: ${error}`, 'InvoicePlanWompiPaymentService');
      throw error;
    }

    const billingPlanState = await this.billingPlans.getCurrentChannelPlanState(ctx);

    return {
      reference,
      transactionStatus,
      asyncPaymentUrl: null,
      qrImage: null,
      transactionId,
      applied,
      billingPlanState,
    };
  }

  private async resolveAdminEmail(ctx: RequestContext): Promise<string> {
    if (!ctx.activeUserId) {
      throw new UserInputError('No autenticado.');
    }
    const repo = this.connection.rawConnection.getRepository(Administrator);
    const admin = await repo.findOne({
      where: { user: { id: Number(ctx.activeUserId) } },
      relations: ['user'],
    });
    if (!admin?.emailAddress) {
      throw new UserInputError('Administrador no encontrado o sin correo.');
    }
    return admin.emailAddress;
  }
}
