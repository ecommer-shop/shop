import { Injectable } from '@nestjs/common';
import {
  Channel,
  ChannelService,
  RequestContext,
  TransactionalConnection,
  UserInputError,
} from '@vendure/core';
import { IsNull, Not } from 'typeorm';
import {
  CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
  CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
  CHANNEL_MATIAS_COMPANY_ID_FIELD,
  CHANNEL_MATIAS_INVOICE_PREFIX_FIELD,
  CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD,
} from '../constants';
import { MatiasGlobalPoolService } from './matias-global-pool.service';

export interface MatiasBillingStoreRow {
  channelId: string;
  channelCode: string;
  sellerName: string | null;
  billingActive: boolean;
  remaining: number | null;
  matiasCompanyId: string | null;
  matiasCompanyIdConfigured: boolean;
  matiasInvoicePrefix: string | null;
  matiasResolutionNumber: string | null;
  matiasEmitProfileComplete: boolean;
}

export interface UpdateMatiasBillingStoreInput {
  channelId: string;
  billingActive: boolean;
  invoiceLimitRemaining?: number | null;
  matiasCompanyId?: string | null;
  matiasInvoicePrefix?: string | null;
  matiasResolutionNumber?: string | null;
}

type ChannelCustomFields = Record<string, boolean | number | string | null | undefined>;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Listado y alta de facturación Matias por tienda (super admin).
 */
@Injectable()
export class MatiasBillingStoresService {
  constructor(
    private readonly connection: TransactionalConnection,
    private readonly channelService: ChannelService,
    private readonly globalPool: MatiasGlobalPoolService,
  ) {}

  async listSellerChannels(ctx: RequestContext): Promise<MatiasBillingStoreRow[]> {
    const channels = await this.connection.getRepository(ctx, Channel).find({
      where: { sellerId: Not(IsNull()) },
      relations: ['seller'],
      order: { code: 'ASC' },
    });

    return channels.map((c) => this.channelToRow(c));
  }

  async updateStoreBilling(
    ctx: RequestContext,
    input: UpdateMatiasBillingStoreInput,
  ): Promise<MatiasBillingStoreRow> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: input.channelId, sellerId: Not(IsNull()) },
      relations: ['seller'],
    });

    if (!channel) {
      throw new UserInputError('Canal de tienda no encontrado o no es un canal con vendedor.');
    }

    const oldCf = channel.customFields as ChannelCustomFields | undefined;
    const oldActive = !!oldCf?.[CHANNEL_INVOICE_BILLING_ACTIVE_FIELD];
    const oldRemaining = this.readInt(oldCf?.[CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]);
    const oldCompanyId = this.readText(oldCf?.[CHANNEL_MATIAS_COMPANY_ID_FIELD]);
    const oldPrefix = this.readText(oldCf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]);
    const oldResolution = this.readText(oldCf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]);

    const companyIdTrim =
      input.matiasCompanyId === undefined || input.matiasCompanyId === null
        ? oldCompanyId
        : input.matiasCompanyId.trim();
    const prefixTrim =
      input.matiasInvoicePrefix === undefined || input.matiasInvoicePrefix === null
        ? oldPrefix
        : input.matiasInvoicePrefix.trim();
    const resolutionTrim =
      input.matiasResolutionNumber === undefined || input.matiasResolutionNumber === null
        ? oldResolution
        : input.matiasResolutionNumber.trim();

    if (companyIdTrim && !UUID_RE.test(companyIdTrim)) {
      throw new UserInputError('El Company ID debe ser un UUID válido (formato Matias).');
    }

    const newRemaining =
      input.invoiceLimitRemaining === undefined
        ? oldRemaining
        : input.invoiceLimitRemaining == null
          ? null
          : Number(input.invoiceLimitRemaining);

    if (newRemaining != null && (!Number.isFinite(newRemaining) || newRemaining < 0)) {
      throw new UserInputError('El cupo restante debe ser un entero ≥ 0 o vacío.');
    }

    const billingActive = input.billingActive;
    const profileComplete = !!(companyIdTrim && prefixTrim && resolutionTrim);

    if (billingActive && !profileComplete) {
      throw new UserInputError(
        'Con facturación activa son obligatorios Company ID, prefijo y número de resolución DIAN.',
      );
    }

    const poolDelta = this.computePoolSellDelta(oldActive, oldRemaining, billingActive, newRemaining);

    if (poolDelta > 0) {
      const pool = await this.globalPool.getPoolStatus(ctx);
      if (pool.sellableRemaining == null) {
        throw new UserInputError(
          'Configura primero el pool global de facturas (paquete Ecommer en Matias) antes de vender paquetes a tiendas.',
        );
      }
    }

    const newCf: ChannelCustomFields = {
      ...oldCf,
      [CHANNEL_INVOICE_BILLING_ACTIVE_FIELD]: billingActive,
      [CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]: billingActive ? newRemaining : newRemaining,
      [CHANNEL_MATIAS_COMPANY_ID_FIELD]: companyIdTrim || null,
      [CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]: prefixTrim || null,
      [CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]: resolutionTrim || null,
    };

    await this.connection.withTransaction(ctx, async (txCtx) => {
      await this.globalPool.applySellableDelta(txCtx, poolDelta);
      await this.channelService.update(txCtx, {
        id: channel.id,
        customFields: newCf,
      });
    });

    const updated = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: channel.id },
      relations: ['seller'],
    });
    if (!updated) {
      throw new Error('No se pudo recargar el canal tras guardar.');
    }
    return this.channelToRow(updated);
  }

  private computePoolSellDelta(
    oldActive: boolean,
    oldRemaining: number | null,
    newActive: boolean,
    newRemaining: number | null,
  ): number {
    const oldEff = oldActive ? (oldRemaining ?? 0) : 0;
    const newEff = newActive ? (newRemaining ?? 0) : 0;
    return newEff - oldEff;
  }

  private channelToRow(c: Channel): MatiasBillingStoreRow {
    const cf = c.customFields as Record<string, unknown> | undefined;
    const companyId = this.readText(cf?.[CHANNEL_MATIAS_COMPANY_ID_FIELD]);
    const prefix = this.readText(cf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]);
    const resolution = this.readText(cf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]);
    const remaining = this.readInt(cf?.[CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]);
    const matiasCompanyIdConfigured = companyId.length > 0;
    const matiasEmitProfileComplete = !!(companyId && prefix && resolution);

    return {
      channelId: String(c.id),
      channelCode: c.code,
      sellerName: c.seller?.name ?? null,
      billingActive: !!cf?.[CHANNEL_INVOICE_BILLING_ACTIVE_FIELD],
      remaining,
      matiasCompanyId: companyId || null,
      matiasCompanyIdConfigured,
      matiasInvoicePrefix: prefix || null,
      matiasResolutionNumber: resolution || null,
      matiasEmitProfileComplete,
    };
  }

  private readText(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
  }

  private readInt(value: unknown): number | null {
    if (value == null) {
      return null;
    }
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
}
