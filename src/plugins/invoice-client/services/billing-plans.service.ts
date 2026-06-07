import { Injectable } from '@nestjs/common';
import { Channel, ChannelService, RequestContext, TransactionalConnection, UserInputError } from '@vendure/core';
import { createHash } from 'crypto';
import { IsNull, Not } from 'typeorm';
import {
  CHANNEL_BILLING_CERT_DOC_CHAMBER_FIELD,
  CHANNEL_BILLING_CERT_DOC_NIT_FIELD,
  CHANNEL_BILLING_CERT_DOC_RUT_FIELD,
  CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD,
  CHANNEL_BILLING_CERT_PAID_AT_FIELD,
  CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD,
  CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD,
  CHANNEL_BILLING_CERT_STATUS_FIELD,
  CHANNEL_BILLING_CERT_TYPE_FIELD,
  CHANNEL_BILLING_PLAN_LAST_PURCHASED_AT_FIELD,
  CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD,
  CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
  CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
} from '../constants';
import { BillingCertificateNotificationService } from './billing-certificate-notification.service';

type ChannelCustomFields = Record<string, unknown>;

export type BillingCertificateStatus =
  | 'NONE'
  | 'PENDING_PAYMENT'
  | 'UNDER_REVIEW'
  | 'ACTIVE'
  | 'REJECTED'
  | 'EXPIRED';
export type BillingCertificatePaymentStatus = 'UNPAID' | 'PAID';
export type BillingCertificateType = 'MONTHLY' | 'ANNUAL';

export interface BillingPlanState {
  channelId: string;
  channelCode: string;
  sellerName: string | null;
  certificateStatus: BillingCertificateStatus;
  certificatePaymentStatus: BillingCertificatePaymentStatus;
  certificateType: BillingCertificateType | null;
  certificateExpiresAt: string | null;
  certificatePaidAt: string | null;
  certificateReviewNote: string | null;
  documents: { chamber: string | null; rut: string | null; nit: string | null };
  invoicesRemaining: number;
  canBuyPlans: boolean;
  purchaseHistory: BillingPlanPurchaseEntry[];
}

export interface BillingPlanPurchaseEntry {
  purchasedAt: string;
  planCode: string;
  planName: string;
  invoicesAdded: number;
  priceCop: number;
  paymentReference: string | null;
  source: string;
}

export interface CertificateReviewRow extends BillingPlanState { }

export interface InvoicePlanDefinition {
  code: string;
  name: string;
  invoices: number;
  priceCop: number;
}

const INVOICE_PLANS: InvoicePlanDefinition[] = [
  { code: 'starter', name: 'Starter', invoices: 10, priceCop: 4000 },
  { code: 'plus', name: 'Plus', invoices: 20, priceCop: 6000 },
  { code: 'pro', name: 'Pro', invoices: 50, priceCop: 10000 },
  { code: 'pyme', name: 'Pyme', invoices: 100, priceCop: 18000 },
  { code: 'business', name: 'Business', invoices: 200, priceCop: 32000 },
  { code: 'elite', name: 'Elite', invoices: 500, priceCop: 70000 },
  { code: 'infinity', name: 'Infinity', invoices: 1000, priceCop: 120000 },
];

@Injectable()
export class BillingPlansService {
  constructor(
    private readonly connection: TransactionalConnection,
    private readonly channelService: ChannelService,
    private readonly certificateNotifications: BillingCertificateNotificationService,
  ) { }

  /** Valida certificado vigente antes de emitir facturas (Matias). */
  assertCertificateAllowsInvoiceEmission(channel: Channel): void {
    const state = this.toState(channel);
    if (state.canBuyPlans) return;
    if (state.certificateStatus === 'EXPIRED') {
      throw new Error(
        `El certificado de facturación de la tienda «${channel.code}» está vencido. Renueva el certificado en Planes de facturación.`,
      );
    }
    if (state.certificateStatus === 'REJECTED') {
      throw new Error(
        `El certificado de la tienda «${channel.code}» fue rechazado. Corrige documentos y vuelve a tramitar.`,
      );
    }
    if (state.certificateStatus === 'UNDER_REVIEW') {
      throw new Error(
        `El certificado de la tienda «${channel.code}» está en revisión. No puedes emitir hasta que el super admin lo apruebe.`,
      );
    }
    throw new Error(
      `La tienda «${channel.code}» no tiene certificado de facturación activo. Complétalo en Planes de facturación.`,
    );
  }

  getPlanCatalog(): InvoicePlanDefinition[] {
    return INVOICE_PLANS;
  }

  /** Firma de integridad Wompi (misma fórmula que PaymentPlugin). */
  buildWompiPaymentSignature(amountInCents: number, paymentReference: string): string {
    const currency = process.env.WOMPI_CURRENCY || 'COP';
    const secret = process.env.WOMPI_INTEGRITY_SECRET || process.env.WOMPI_INTEGRITY_SECRET_KEY || '';
    if (!secret) {
      throw new UserInputError('WOMPI_INTEGRITY_SECRET no está configurado en el servidor.');
    }
    const concatenated = `${paymentReference}${amountInCents}${currency}${secret}`;
    return createHash('sha256').update(concatenated).digest('hex');
  }

  async getCurrentChannelPlanState(ctx: RequestContext): Promise<BillingPlanState> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: ctx.channelId },
      relations: ['seller'],
    });
    if (!channel) {
      throw new UserInputError('Canal no encontrado.');
    }
    return this.toState(channel);
  }

  async listCertificateReviewQueue(ctx: RequestContext): Promise<CertificateReviewRow[]> {
    const channels = await this.connection.getRepository(ctx, Channel).find({
      where: { sellerId: Not(IsNull()) },
      relations: ['seller'],
      order: { code: 'ASC' },
    });
    return channels.map((c) => this.toState(c));
  }

  async submitCertificateDocuments(
    ctx: RequestContext,
    input: { chamber: string; rut: string; nit: string; certificateType: BillingCertificateType },
  ): Promise<BillingPlanState> {
    const channel = await this.getCurrentSellerChannel(ctx);
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    const prevStatus = String(cf[CHANNEL_BILLING_CERT_STATUS_FIELD] ?? 'NONE');
    const isRenewal = prevStatus === 'EXPIRED' || prevStatus === 'REJECTED';
    const customFields: ChannelCustomFields = {
      ...cf,
      [CHANNEL_BILLING_CERT_DOC_CHAMBER_FIELD]: input.chamber.trim(),
      [CHANNEL_BILLING_CERT_DOC_RUT_FIELD]: input.rut.trim(),
      [CHANNEL_BILLING_CERT_DOC_NIT_FIELD]: input.nit.trim(),
      [CHANNEL_BILLING_CERT_TYPE_FIELD]: input.certificateType,
      [CHANNEL_BILLING_CERT_STATUS_FIELD]: 'PENDING_PAYMENT',
      [CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD]: 'UNPAID',
      [CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD]: isRenewal ? null : cf[CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD] ?? null,
      [CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD]: null,
      [CHANNEL_BILLING_CERT_PAID_AT_FIELD]: null,
    };
    await this.channelService.update(ctx, { id: channel.id, customFields });
    return this.getCurrentChannelPlanState(ctx);
  }

  async confirmCertificatePayment(ctx: RequestContext): Promise<BillingPlanState> {
    const channel = await this.getCurrentSellerChannel(ctx);
    await this.applyCertificatePaymentByChannelId(ctx, String(channel.id));
    return this.getCurrentChannelPlanState(ctx);
  }

  async approveCertificate(
    ctx: RequestContext,
    input: { channelId: string; approve: boolean; note?: string | null },
  ): Promise<BillingPlanState> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: input.channelId, sellerId: Not(IsNull()) },
      relations: ['seller'],
    });
    if (!channel) {
      throw new UserInputError('Canal vendedor no encontrado.');
    }
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    const paymentStatus = String(cf[CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD] ?? 'UNPAID');
    if (input.approve && paymentStatus !== 'PAID') {
      throw new UserInputError('No se puede aprobar certificado sin pago confirmado.');
    }
    const certType = String(cf[CHANNEL_BILLING_CERT_TYPE_FIELD] ?? 'ANNUAL') as BillingCertificateType;
    const now = new Date();
    const expires =
      certType === 'MONTHLY'
        ? new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
        : new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    const updatedCf: ChannelCustomFields = {
      ...cf,
      [CHANNEL_BILLING_CERT_STATUS_FIELD]: input.approve ? 'ACTIVE' : 'REJECTED',
      [CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD]: input.note?.trim() || null,
      [CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD]: input.approve ? expires : null,
    };
    await this.channelService.update(ctx, { id: channel.id, customFields: updatedCf });
    const fresh = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: channel.id },
      relations: ['seller'],
    });
    if (!fresh) throw new Error('No se pudo recargar canal.');
    void this.certificateNotifications.notifyCertificateReviewResult(
      ctx,
      fresh,
      input.approve,
      input.note,
    );
    return this.toState(fresh);
  }

  /** Aplica compra de plan tras webhook Wompi (referencia PLAN-). */
  async applyPlanPurchaseFromWebhook(
    ctx: RequestContext,
    channelCode: string,
    planCode: string,
    paymentReference?: string,
  ): Promise<void> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { code: channelCode, sellerId: Not(IsNull()) },
      relations: ['seller'],
    });
    if (!channel) return;
    const state = this.toState(channel);
    if (!state.canBuyPlans) return;
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    if (
      paymentReference &&
      this.parsePurchaseHistoryRaw(cf[CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD]).some(
        (e) => e.paymentReference === paymentReference,
      )
    ) {
      return;
    }
    const plan = this.getPlanByCode(planCode);
    const currentRemaining = state.invoicesRemaining;
    const customFields: ChannelCustomFields = {
      ...cf,
      [CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]: currentRemaining + plan.invoices,
      [CHANNEL_INVOICE_BILLING_ACTIVE_FIELD]: true,
      [CHANNEL_BILLING_PLAN_LAST_PURCHASED_AT_FIELD]: new Date(),
      [CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD]: this.appendPurchaseHistoryJson(
        cf[CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD],
        {
          purchasedAt: new Date().toISOString(),
          planCode: plan.code,
          planName: plan.name,
          invoicesAdded: plan.invoices,
          priceCop: plan.priceCop,
          paymentReference: paymentReference ?? null,
          source: 'wompi',
        },
      ),
    };
    await this.channelService.update(ctx, { id: channel.id, customFields });
  }

  async confirmPlanPayment(
    ctx: RequestContext,
    input: { planCode: string; channelId?: string | null },
  ): Promise<BillingPlanState> {
    const plan = this.getPlanByCode(input.planCode);
    const channel =
      input.channelId != null
        ? await this.connection.getRepository(ctx, Channel).findOne({
          where: { id: input.channelId, sellerId: Not(IsNull()) },
          relations: ['seller'],
        })
        : await this.getCurrentSellerChannel(ctx);
    if (!channel) {
      throw new UserInputError('Canal vendedor no encontrado.');
    }
    const state = this.toState(channel);
    if (!state.canBuyPlans) {
      throw new UserInputError(
        'Debes tener certificado activo y pago confirmado para comprar planes de facturación.',
      );
    }
    const currentRemaining = state.invoicesRemaining;
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    const customFields: ChannelCustomFields = {
      ...cf,
      [CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]: currentRemaining + plan.invoices,
      [CHANNEL_INVOICE_BILLING_ACTIVE_FIELD]: true,
      [CHANNEL_BILLING_PLAN_LAST_PURCHASED_AT_FIELD]: new Date(),
      [CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD]: this.appendPurchaseHistoryJson(
        cf[CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD],
        {
          purchasedAt: new Date().toISOString(),
          planCode: plan.code,
          planName: plan.name,
          invoicesAdded: plan.invoices,
          priceCop: plan.priceCop,
          paymentReference: null,
          source: 'admin',
        },
      ),
    };
    await this.channelService.update(ctx, { id: channel.id, customFields });
    const fresh = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: channel.id },
      relations: ['seller'],
    });
    if (!fresh) throw new Error('No se pudo recargar canal.');
    return this.toState(fresh);
  }

  async applyCertificatePaymentByChannelCode(ctx: RequestContext, channelCode: string): Promise<void> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { code: channelCode, sellerId: Not(IsNull()) },
    });
    if (!channel) {
      throw new UserInputError(`Canal vendedor ${channelCode} no encontrado.`);
    }
    await this.applyCertificatePaymentByChannelId(ctx, String(channel.id));
  }

  async applyCertificatePaymentByChannelId(ctx: RequestContext, channelId: string): Promise<void> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: channelId, sellerId: Not(IsNull()) },
    });
    if (!channel) {
      throw new UserInputError(`Canal vendedor ${channelId} no encontrado.`);
    }
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    const docs = [
      cf[CHANNEL_BILLING_CERT_DOC_CHAMBER_FIELD],
      cf[CHANNEL_BILLING_CERT_DOC_RUT_FIELD],
      cf[CHANNEL_BILLING_CERT_DOC_NIT_FIELD],
    ].map((v) => String(v ?? '').trim());
    if (docs.some((d) => !d)) {
      throw new UserInputError('Debes subir Cámara y Comercio, RUT y NIT antes de pagar.');
    }
    const updatedCf: ChannelCustomFields = {
      ...cf,
      [CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD]: 'PAID',
      [CHANNEL_BILLING_CERT_STATUS_FIELD]: 'UNDER_REVIEW',
      [CHANNEL_BILLING_CERT_PAID_AT_FIELD]: new Date(),
    };
    await this.channelService.update(ctx, { id: channel.id, customFields: updatedCf });
  }

  private async getCurrentSellerChannel(ctx: RequestContext): Promise<Channel> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: ctx.channelId },
      relations: ['seller'],
    });
    if (!channel || channel.sellerId == null) {
      throw new UserInputError('Este canal no es de vendedor.');
    }
    return channel;
  }

  private getPlanByCode(code: string): InvoicePlanDefinition {
    const plan = INVOICE_PLANS.find((p) => p.code === code);
    if (!plan) throw new UserInputError(`Plan no válido: ${code}`);
    return plan;
  }

  private toState(channel: Channel): BillingPlanState {
    const cf = (channel.customFields as ChannelCustomFields) ?? {};
    const certStatus = String(cf[CHANNEL_BILLING_CERT_STATUS_FIELD] ?? 'NONE') as BillingCertificateStatus;
    const certPayment = String(
      cf[CHANNEL_BILLING_CERT_PAYMENT_STATUS_FIELD] ?? 'UNPAID',
    ) as BillingCertificatePaymentStatus;
    const expiresRaw = cf[CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD];
    const expiresAt = expiresRaw ? new Date(String(expiresRaw)) : null;
    const isExpired = certStatus === 'ACTIVE' && expiresAt != null && expiresAt.getTime() < Date.now();
    const normalizedStatus: BillingCertificateStatus = isExpired ? 'EXPIRED' : certStatus;
    const remaining = Number(cf[CHANNEL_INVOICE_LIMIT_REMAINING_FIELD] ?? 0);
    return {
      channelId: String(channel.id),
      channelCode: channel.code,
      sellerName: channel.seller?.name ?? null,
      certificateStatus: normalizedStatus,
      certificatePaymentStatus: certPayment,
      certificateType: (cf[CHANNEL_BILLING_CERT_TYPE_FIELD] as BillingCertificateType | null) ?? null,
      certificateExpiresAt: expiresAt ? expiresAt.toISOString() : null,
      certificatePaidAt: cf[CHANNEL_BILLING_CERT_PAID_AT_FIELD]
        ? new Date(String(cf[CHANNEL_BILLING_CERT_PAID_AT_FIELD])).toISOString()
        : null,
      certificateReviewNote: (cf[CHANNEL_BILLING_CERT_REVIEW_NOTE_FIELD] as string | null) ?? null,
      documents: {
        chamber: (cf[CHANNEL_BILLING_CERT_DOC_CHAMBER_FIELD] as string | null) ?? null,
        rut: (cf[CHANNEL_BILLING_CERT_DOC_RUT_FIELD] as string | null) ?? null,
        nit: (cf[CHANNEL_BILLING_CERT_DOC_NIT_FIELD] as string | null) ?? null,
      },
      invoicesRemaining: Number.isFinite(remaining) ? remaining : 0,
      canBuyPlans: normalizedStatus === 'ACTIVE' && certPayment === 'PAID',
      purchaseHistory: this.parsePurchaseHistory(cf[CHANNEL_BILLING_PLAN_PURCHASE_HISTORY_FIELD]),
    };
  }

  private parsePurchaseHistoryRaw(raw: unknown): BillingPlanPurchaseEntry[] {
    if (!raw || typeof raw !== 'string') return [];
    try {
      const parsed = JSON.parse(raw) as BillingPlanPurchaseEntry[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private parsePurchaseHistory(raw: unknown): BillingPlanPurchaseEntry[] {
    return [...this.parsePurchaseHistoryRaw(raw)].reverse();
  }

  private appendPurchaseHistoryJson(raw: unknown, entry: BillingPlanPurchaseEntry): string {
    const list = this.parsePurchaseHistoryRaw(raw);
    list.push(entry);
    return JSON.stringify(list.slice(-50));
  }
}
