import { Injectable } from '@nestjs/common';
import {
  Administrator,
  Logger,
  RequestContext,
  TransactionalConnection,
  UserInputError,
} from '@vendure/core';
import { Request } from 'express';
import { WompiService } from '../../wompi-subscription/services/wompi.service';
import { PAYMENT_METHOD_FLOW, PaymentFlowType } from '../../wompi-subscription/payment-methods';
import { buildCertPaymentReference, parseCertPaymentReference } from '../payment-reference.util';
import { BillingPlansService, BillingPlanState } from './billing-plans.service';
import { ClickwrapAcceptanceService } from './clickwrap-acceptance.service';

const loggerCtx = 'BillingCertificateWompiPayment';

/** Precio del certificado anual (COP), alineado con la UI. */
export const CERTIFICATE_ANNUAL_PRICE_COP = 199_000;

export interface BillingCertificatePaymentResult {
  reference: string;
  transactionStatus: string | null;
  asyncPaymentUrl: string | null;
  qrImage: string | null;
  transactionId: string | null;
  applied: boolean;
  billingPlanState: BillingPlanState;
}

/**
 * Pago del certificado vía API Wompi (mismo patrón que suscripciones / paquetes),
 * sin Web Checkout (checkout.wompi.co/p o /l).
 */
@Injectable()
export class BillingCertificateWompiPaymentService {
  constructor(
    private readonly wompiService: WompiService,
    private readonly billingPlans: BillingPlansService,
    private readonly connection: TransactionalConnection,
    private readonly clickwrapAcceptance: ClickwrapAcceptanceService,
  ) {}

  async createPendingPayment(
    ctx: RequestContext,
    paymentMethod: string,
    clickwrap: { accepted: boolean; contractVersion: string },
    req?: Request,
  ): Promise<BillingCertificatePaymentResult> {
    const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
    if (!flowType) {
      throw new UserInputError(`Método de pago no válido: ${paymentMethod}`);
    }
    if (flowType !== PaymentFlowType.MANUAL) {
      throw new UserInputError('Usa purchaseBillingCertificateWithPayment para métodos tokenizables.');
    }

    const state = await this.assertCanPayCertificate(ctx);

    await this.clickwrapAcceptance.recordAcceptance(
      ctx,
      {
        accepted: clickwrap.accepted,
        contractVersion: clickwrap.contractVersion,
        contractContext: 'BILLING_CERTIFICATE',
        planName: 'Certificado anual',
        planCode: 'certificate-annual',
      },
      req,
    );

    const adminEmail = await this.resolvePayerEmail(ctx);
    const reference = buildCertPaymentReference(state.channelCode);
    const amountInCents = Math.round(CERTIFICATE_ANNUAL_PRICE_COP * 100);
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
      await this.billingPlans.applyCertificatePaymentByChannelCode(ctx, state.channelCode);
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
      applied: applied || billingPlanState.certificatePaymentStatus === 'PAID',
      billingPlanState,
    };
  }

  async purchaseWithToken(
    ctx: RequestContext,
    paymentMethod: string,
    token: string,
    clickwrap: { accepted: boolean; contractVersion: string },
    req?: Request,
    sessionId?: string,
    deviceId?: string,
  ): Promise<BillingCertificatePaymentResult> {
    const flowType = PAYMENT_METHOD_FLOW[paymentMethod as keyof typeof PAYMENT_METHOD_FLOW];
    if (!flowType) {
      throw new UserInputError(`Método de pago no válido: ${paymentMethod}`);
    }
    if (flowType !== PaymentFlowType.RECURRENTE) {
      throw new UserInputError('Usa createPendingBillingCertificatePayment para métodos de pago manual.');
    }

    const state = await this.assertCanPayCertificate(ctx);

    await this.clickwrapAcceptance.recordAcceptance(
      ctx,
      {
        accepted: clickwrap.accepted,
        contractVersion: clickwrap.contractVersion,
        contractContext: 'BILLING_CERTIFICATE',
        planName: 'Certificado anual',
        planCode: 'certificate-annual',
      },
      req,
    );

    const adminEmail = await this.resolvePayerEmail(ctx);
    const reference = buildCertPaymentReference(state.channelCode);
    const amountInCents = Math.round(CERTIFICATE_ANNUAL_PRICE_COP * 100);
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
        await this.billingPlans.applyCertificatePaymentByChannelCode(ctx, state.channelCode);
        applied = true;
      } else {
        Logger.debug(
          `Certificate payment ${transaction.id} status ${transaction.status} — awaiting webhook`,
          loggerCtx,
        );
      }
    } catch (error) {
      Logger.error(`Certificate charge failed: ${error}`, loggerCtx);
      throw error;
    } finally {
      await this.wompiService.deletePaymentSource(paymentSource.id);
    }

    const billingPlanState = await this.billingPlans.getCurrentChannelPlanState(ctx);

    return {
      reference,
      transactionStatus,
      asyncPaymentUrl: null,
      qrImage: null,
      transactionId,
      applied: applied || billingPlanState.certificatePaymentStatus === 'PAID',
      billingPlanState,
    };
  }

  async checkPaymentStatus(
    ctx: RequestContext,
    reference: string,
    transactionId?: string | null,
  ): Promise<BillingCertificatePaymentResult> {
    let transactionStatus: string | null = null;
    const cleanTransactionId = transactionId?.trim() || null;
    const channelCode = parseCertPaymentReference(reference);

    if (cleanTransactionId) {
      const transaction = await this.wompiService.getTransaction(cleanTransactionId);
      transactionStatus = transaction.status ?? null;

      if (transaction.status === 'APPROVED' && channelCode) {
        await this.billingPlans.applyCertificatePaymentByChannelCode(ctx, channelCode);
      }
    }

    const billingPlanState = await this.billingPlans.getCurrentChannelPlanState(ctx);

    return {
      reference,
      transactionStatus,
      asyncPaymentUrl: null,
      qrImage: null,
      transactionId: cleanTransactionId,
      applied: billingPlanState.certificatePaymentStatus === 'PAID',
      billingPlanState,
    };
  }

  private async assertCanPayCertificate(ctx: RequestContext): Promise<BillingPlanState> {
    const state = await this.billingPlans.getCurrentChannelPlanState(ctx);
    if (state.certificatePaymentStatus === 'PAID') {
      throw new UserInputError('El certificado ya está pagado.');
    }
    const docs = state.documents;
    if (
      !docs.chamber?.trim() ||
      !docs.rut?.trim() ||
      !docs.nit?.trim() ||
      !docs.dianResolution?.trim() ||
      !docs.storeLogo?.trim()
    ) {
      throw new UserInputError('Debes guardar todos los documentos y el logo antes de pagar.');
    }
    return state;
  }

  private async resolvePayerEmail(ctx: RequestContext): Promise<string> {
    const fromEnv = process.env.BILLING_PAYER_EMAIL?.trim();
    if (fromEnv && this.isValidEmail(fromEnv)) {
      return fromEnv;
    }

    if (!ctx.activeUserId) {
      throw new UserInputError('No autenticado.');
    }
    const repo = this.connection.rawConnection.getRepository(Administrator);
    const admin = await repo.findOne({
      where: { user: { id: Number(ctx.activeUserId) } },
      relations: ['user'],
    });
    const email = admin?.emailAddress?.trim() ?? '';
    if (!this.isValidEmail(email)) {
      throw new UserInputError(
        'Tu cuenta no tiene un correo válido para Wompi. Actualiza el email del administrador (ej. tu@dominio.com) o define BILLING_PAYER_EMAIL en el servidor.',
      );
    }
    return email;
  }

  private isValidEmail(value: string): boolean {
    return /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(value);
  }
}
