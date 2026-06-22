import { Injectable, Logger } from '@nestjs/common';
import { Channel, ChannelService, Order, RequestContext, TransactionalConnection } from '@vendure/core';
import type { DataSource } from 'typeorm';
import {
  CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
  CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
  CHANNEL_MATIAS_ACCESS_TOKEN_FIELD,
  CHANNEL_MATIAS_INVOICE_PREFIX_FIELD,
  CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD,
} from '../constants';
import { BillingPlansService } from './billing-plans.service';

export interface InvoiceQuotaStatus {
  channelId: string;
  channelCode: string;
  billingActive: boolean;
  remaining: number | null;
  hasPlan: boolean;
  isBlocked: boolean;
  matiasTokenConfigured: boolean;
  matiasPrefixConfigured: boolean;
  matiasResolutionConfigured: boolean;
  /** Prefijo visible en admin (no es secreto). */
  matiasInvoicePrefix: string | null;
}

/** Perfil de emisión Matias de una tienda (token + prefijo + resolución). */
export interface SellerMatiasEmitConfig {
  channelCode: string;
  matiasBearerToken: string;
  prefix: string;
  resolutionNumber: string;
}

type ChannelCustomFields = Record<string, boolean | number | string | null | undefined>;

@Injectable()
export class InvoiceQuotaService {
  private readonly logger = new Logger(InvoiceQuotaService.name);

  constructor(
    private readonly connection: TransactionalConnection,
    private readonly channelService: ChannelService,
    private readonly billingPlans: BillingPlansService,
  ) {}

  async getCurrentChannelQuotaStatus(ctx: RequestContext): Promise<InvoiceQuotaStatus> {
    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: ctx.channelId },
    });
    if (!channel) {
      throw new Error(`Channel ${String(ctx.channelId)} not found`);
    }

    const profile = this.parseEmitProfile(
      channel.customFields as ChannelCustomFields | undefined,
      channel.code,
      { throwOnMissing: false },
    );

    const billingActive = !!(
      channel.customFields as ChannelCustomFields | undefined
    )?.[CHANNEL_INVOICE_BILLING_ACTIVE_FIELD];
    const remainingRaw = (channel.customFields as ChannelCustomFields | undefined)?.[
      CHANNEL_INVOICE_LIMIT_REMAINING_FIELD
    ];
    const remaining = remainingRaw == null ? null : Number(remainingRaw);
    const hasPlan = billingActive && remaining != null;
    const profileComplete =
      profile.matiasTokenConfigured &&
      profile.matiasPrefixConfigured &&
      profile.matiasResolutionConfigured;
    const isBlocked =
      !billingActive || remaining == null || remaining <= 0 || !profileComplete;

    return {
      channelId: String(channel.id),
      channelCode: channel.code,
      billingActive,
      remaining,
      hasPlan,
      isBlocked,
      matiasTokenConfigured: profile.matiasTokenConfigured,
      matiasPrefixConfigured: profile.matiasPrefixConfigured,
      matiasResolutionConfigured: profile.matiasResolutionConfigured,
      matiasInvoicePrefix: profile.prefix,
    };
  }

  resolveSellerChannelFromOrder(order: Order, defaultChannelId: string): Channel | null {
    const channels = order.channels;
    if (!channels?.length) {
      return null;
    }
    return channels.find((ch) => String(ch.id) !== String(defaultChannelId)) ?? null;
  }

  /**
   * Perfil de emisión del canal vendedor de la orden (sin descontar cupo).
   */
  async getSellerEmitConfigForOrder(ctx: RequestContext, orderCode: string): Promise<SellerMatiasEmitConfig> {
    const order = await this.connection.getRepository(ctx, Order).findOne({
      where: { code: orderCode },
      relations: ['channels'],
    });
    if (!order) {
      throw new Error(`Pedido ${orderCode} no encontrado.`);
    }
    return this.getSellerEmitConfigForOrderEntity(ctx, order);
  }

  /**
   * Reserva 1 factura del cupo del vendedor de forma atómica y devuelve el perfil Matias.
   * Si no hay cupo al momento exacto del UPDATE, no emite.
   */
  async reserveQuotaForOrder(ctx: RequestContext, order: Order): Promise<SellerMatiasEmitConfig> {
    const emitConfig = await this.getSellerEmitConfigForOrderEntity(ctx, order);
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = this.resolveSellerChannelFromOrder(order, String(defaultChannel.id));
    if (!sellerChannel) {
      throw new Error(
        `La orden ${order.code} no tiene canal de tienda (vendedor). No se factura con la cuenta global de Ecommer.`,
      );
    }

    const fullChannel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: sellerChannel.id },
    });
    if (!fullChannel) {
      throw new Error(`No se encontró el canal vendedor ${sellerChannel.id}.`);
    }

    this.billingPlans.assertCertificateAllowsInvoiceEmission(fullChannel);

    const ds = this.connection.rawConnection;
    const { escapedTable, escapedId } = this.getChannelTableParts(ds);
    const escapedRemaining = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
    );
    const escapedActive = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
    );

    const updatedRows = (await ds.query(
      `UPDATE ${escapedTable}
       SET ${escapedRemaining} = ${escapedRemaining} - 1,
           ${escapedActive} = CASE
             WHEN (${escapedRemaining} - 1) <= 0 THEN false
             ELSE ${escapedActive}
           END
       WHERE ${escapedId} = $1
         AND ${escapedActive} = true
         AND ${escapedRemaining} IS NOT NULL
         AND ${escapedRemaining} > 0
       RETURNING ${escapedRemaining} AS remaining`,
      [sellerChannel.id],
    )) as Array<{ remaining: number }>;

    if (updatedRows.length === 0) {
      throw new Error(
        `La tienda «${fullChannel.code}» no tiene cupo de facturas disponible o la facturación está desactivada.`,
      );
    }

    this.logger.log(
      `Invoice quota reserved for channel ${fullChannel.code}. Remaining: ${updatedRows[0].remaining}`,
    );
    return emitConfig;
  }

  async releaseReservedQuotaForOrder(ctx: RequestContext, order: Order): Promise<void> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = this.resolveSellerChannelFromOrder(order, String(defaultChannel.id));
    if (!sellerChannel) {
      return;
    }

    const ds = this.connection.rawConnection;
    const { escapedTable, escapedId } = this.getChannelTableParts(ds);
    const escapedRemaining = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
    );
    const escapedActive = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
    );

    await ds.query(
      `UPDATE ${escapedTable}
       SET ${escapedRemaining} = COALESCE(${escapedRemaining}, 0) + 1,
           ${escapedActive} = true
       WHERE ${escapedId} = $1`,
      [sellerChannel.id],
    );
  }

  private async getSellerEmitConfigForOrderEntity(
    ctx: RequestContext,
    order: Order,
  ): Promise<SellerMatiasEmitConfig> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = this.resolveSellerChannelFromOrder(order, String(defaultChannel.id));

    if (!sellerChannel) {
      throw new Error(
        `La orden ${order.code} no está asociada a un canal de tienda (vendedor). No se puede facturar con la cuenta global de Ecommer.`,
      );
    }

    const fullChannel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: sellerChannel.id },
    });
    if (!fullChannel) {
      throw new Error(`No se encontró el canal vendedor ${sellerChannel.id}.`);
    }

    return this.parseEmitProfile(
      fullChannel.customFields as ChannelCustomFields | undefined,
      fullChannel.code,
      { throwOnMissing: true },
    );
  }

  private parseEmitProfile(
    cf: ChannelCustomFields | undefined,
    channelCode: string,
    opts: { throwOnMissing: boolean },
  ): SellerMatiasEmitConfig & {
    matiasTokenConfigured: boolean;
    matiasPrefixConfigured: boolean;
    matiasResolutionConfigured: boolean;
    prefix: string | null;
  } {
    const token =
      typeof cf?.[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_ACCESS_TOKEN_FIELD]!.trim()
        : '';
    const prefix =
      typeof cf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]!.trim()
        : '';
    const resolutionNumber =
      typeof cf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]!.trim()
        : '';

    const matiasTokenConfigured = token.length > 0;
    const matiasPrefixConfigured = prefix.length > 0;
    const matiasResolutionConfigured = resolutionNumber.length > 0;

    if (opts.throwOnMissing) {
      if (!matiasTokenConfigured) {
        throw new Error(
          `La tienda «${channelCode}» no tiene token Matias. Configúralo en Ventas → Matias por tienda.`,
        );
      }
      if (!matiasPrefixConfigured) {
        throw new Error(
          `La tienda «${channelCode}» no tiene prefijo de factura. Asígnalo al contratar Matias (Ventas → Matias por tienda).`,
        );
      }
      if (!matiasResolutionConfigured) {
        throw new Error(
          `La tienda «${channelCode}» no tiene número de resolución. Asígnalo al contratar Matias (Ventas → Matias por tienda).`,
        );
      }
    }

    return {
      channelCode,
      matiasBearerToken: token,
      prefix,
      resolutionNumber,
      matiasTokenConfigured,
      matiasPrefixConfigured,
      matiasResolutionConfigured,
    };
  }

  private getChannelTableParts(ds: DataSource): { escapedTable: string; escapedId: string } {
    const channelMeta = ds.getMetadata(Channel);
    const escapedTable = channelMeta.tablePath
      .split('.')
      .map((part) => ds.driver.escape(part))
      .join('.');
    const escapedId = ds.driver.escape(channelMeta.primaryColumns[0].databaseName);
    return { escapedTable, escapedId };
  }

  private getEscapedChannelCustomFieldColumn(ds: DataSource, propertyName: string): string {
    const channelMeta = ds.getMetadata(Channel);
    const col = channelMeta.columns.find(
      (c) =>
        c.propertyName === propertyName && c.embeddedMetadata?.propertyName === 'customFields',
    );
    if (!col) {
      throw new Error(
        `No se encontró la columna TypeORM para Channel.customFields.${propertyName}. ¿Migración / synchronize aplicados?`,
      );
    }
    return ds.driver.escape(col.databaseName);
  }
}
