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
  CHANNEL_MATIAS_ACCESS_TOKEN_FIELD,
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
  matiasTokenConfigured: boolean;
  matiasInvoicePrefix: string | null;
  matiasResolutionNumber: string | null;
  matiasEmitProfileComplete: boolean;
}

export interface UpdateMatiasBillingStoreInput {
  channelId: string;
  billingActive: boolean;
  invoiceLimitRemaining?: number | null;
  matiasInvoicePrefix?: string | null;
  matiasResolutionNumber?: string | null;
  matiasAccessToken?: string | null;
}

type ChannelCustomFields = Record<string, boolean | number | string | null | undefined>;

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
    const oldPrefix =
      typeof oldCf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD] === 'string'
        ? oldCf[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]!.trim().toUpperCase()
        : '';
    const hadToken =
      typeof oldCf?.[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD] === 'string' &&
      oldCf[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD]!.trim().length > 0;

    const prefixTrim =
      input.matiasInvoicePrefix === undefined || input.matiasInvoicePrefix === null
        ? oldPrefix
        : input.matiasInvoicePrefix.trim().toUpperCase();
    const resolutionTrim =
      input.matiasResolutionNumber === undefined || input.matiasResolutionNumber === null
        ? typeof oldCf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD] === 'string'
          ? oldCf[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]!.trim()
          : ''
        : input.matiasResolutionNumber.trim();

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

    if (billingActive) {
      if (!prefixTrim) {
        throw new UserInputError('El prefijo de factura es obligatorio con facturación activa.');
      }
      if (!resolutionTrim) {
        throw new UserInputError('La resolución es obligatoria con facturación activa.');
      }
      const willHaveToken = hadToken || !!(input.matiasAccessToken?.trim());
      if (!willHaveToken) {
        throw new UserInputError('El token Matias es obligatorio al activar facturación.');
      }
      if (newRemaining == null || newRemaining <= 0) {
        throw new UserInputError('Indica un cupo restante mayor que 0 al activar facturación.');
      }
    }

    if (prefixTrim) {
      await this.assertPrefixUnique(ctx, prefixTrim, String(channel.id));
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
      [CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]: prefixTrim || null,
      [CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]: resolutionTrim || null,
    };

    if (input.matiasAccessToken?.trim()) {
      newCf[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD] = input.matiasAccessToken.trim();
    }

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

  /**
   * Cupo asignado a la tienda: si desactivas facturación, el cupo deja de contar para el pool;
   * al subir el cupo restante en el formulario, se descuenta del pool global.
   */
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

  private async assertPrefixUnique(
    ctx: RequestContext,
    normalizedPrefix: string,
    excludeChannelId: string,
  ): Promise<void> {
    const channels = await this.connection.getRepository(ctx, Channel).find({
      where: { sellerId: Not(IsNull()) },
    });

    for (const ch of channels) {
      if (String(ch.id) === excludeChannelId) {
        continue;
      }
      const cf = ch.customFields as ChannelCustomFields | undefined;
      const p =
        typeof cf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD] === 'string'
          ? cf[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]!.trim().toUpperCase()
          : '';
      if (p && p === normalizedPrefix) {
        throw new UserInputError(
          `El prefijo «${normalizedPrefix}» ya está asignado a la tienda «${ch.code}». Cada tienda debe tener un prefijo distinto (lo defines manualmente según Matias).`,
        );
      }
    }
  }

  private channelToRow(c: Channel): MatiasBillingStoreRow {
    const cf = c.customFields as Record<string, unknown> | undefined;
    const tokenRaw = cf?.[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD];
    const token = typeof tokenRaw === 'string' ? tokenRaw.trim() : '';
    const prefixRaw = cf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD];
    const prefix = typeof prefixRaw === 'string' ? prefixRaw.trim() : '';
    const resolutionRaw = cf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD];
    const resolution = typeof resolutionRaw === 'string' ? resolutionRaw.trim() : '';
    const remaining = this.readInt(cf?.[CHANNEL_INVOICE_LIMIT_REMAINING_FIELD]);

    const matiasTokenConfigured = token.length > 0;
    const matiasPrefixConfigured = prefix.length > 0;
    const matiasResolutionConfigured = resolution.length > 0;

    return {
      channelId: String(c.id),
      channelCode: c.code,
      sellerName: c.seller?.name ?? null,
      billingActive: !!cf?.[CHANNEL_INVOICE_BILLING_ACTIVE_FIELD],
      remaining,
      matiasTokenConfigured,
      matiasInvoicePrefix: prefix || null,
      matiasResolutionNumber: resolution || null,
      matiasEmitProfileComplete:
        matiasTokenConfigured && matiasPrefixConfigured && matiasResolutionConfigured,
    };
  }

  private readInt(value: unknown): number | null {
    if (value == null) {
      return null;
    }
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
}
