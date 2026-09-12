import { Injectable, Logger } from '@nestjs/common';
import { Channel, ChannelService, Order, RequestContext, TransactionalConnection } from '@vendure/core';
import type { DataSource } from 'typeorm';
import {
  CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
  CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
  CHANNEL_MATIAS_COMPANY_ID_FIELD,
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
  matiasCompanyIdConfigured: boolean;
  matiasCompanyId: string | null;
  matiasEmitProfileComplete: boolean;
}

/** Perfil de emisión Matias de una tienda (companyId + prefijo + resolución). */
export interface SellerMatiasEmitConfig {
  channelCode: string;
  matiasCompanyId: string;
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
    const profileComplete = profile.matiasEmitProfileComplete;
    const isBlocked =
      !billingActive || remaining == null || remaining <= 0 || !profileComplete;

    return {
      channelId: String(channel.id),
      channelCode: channel.code,
      billingActive,
      remaining,
      hasPlan,
      isBlocked,
      matiasCompanyIdConfigured: profile.matiasCompanyIdConfigured,
      matiasCompanyId: profile.matiasCompanyId || null,
      matiasEmitProfileComplete: profileComplete,
    };
  }

  private async resolveSellerChannelFromOrder(
    ctx: RequestContext,
    order: Order,
    defaultChannelId: string,
  ): Promise<Channel | null> {
    const sellerChannelIds = new Set<string>();
    const loadedChannels = new Map<string, Channel>();

    for (const channel of order.channels ?? []) {
      if (String(channel.id) !== String(defaultChannelId)) {
        sellerChannelIds.add(String(channel.id));
        loadedChannels.set(String(channel.id), channel);
      }
    }

    for (const line of order.lines ?? []) {
      for (const ch of line.productVariant?.channels ?? []) {
        if (String(ch.id) !== String(defaultChannelId)) {
          sellerChannelIds.add(String(ch.id));
        }
      }
    }

    if (sellerChannelIds.size === 0) {
      return null;
    }

    if (sellerChannelIds.size > 1) {
      this.logger.warn(
        `Order ${order.code} spans multiple seller channels (${[...sellerChannelIds].join(', ')}); using first match.`,
      );
    }

    const chosenId = [...sellerChannelIds][0];
    if (loadedChannels.has(chosenId)) {
      return loadedChannels.get(chosenId)!;
    }

    return this.connection.getRepository(ctx, Channel).findOne({
      where: { id: chosenId as any },
      relations: ['seller'],
    });
  }

  async reserveQuotaForOrder(ctx: RequestContext, order: Order): Promise<SellerMatiasEmitConfig> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = await this.resolveSellerChannelFromOrder(
      ctx,
      order,
      String(defaultChannel.id),
    );

    if (!sellerChannel) {
      throw new Error(
        `La orden ${order.code} no está asociada a un canal de tienda vendedor para facturación.`,
      );
    }

    const ds = this.connection.rawConnection;
    const { escapedTable, escapedId } = this.getChannelTableParts(ds);
    const billingActiveCol = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
    );
    const limitCol = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
    );

    const lockResult = await ds.query(
      `SELECT ${escapedId} AS id, ${billingActiveCol} AS billing_active, ${limitCol} AS remaining
       FROM ${escapedTable}
       WHERE ${escapedId} = $1
       FOR UPDATE`,
      [sellerChannel.id],
    );

    const row = lockResult?.[0];
    if (!row) {
      throw new Error(`No se encontró el canal vendedor ${sellerChannel.id}.`);
    }

    const billingActive = !!row.billing_active;
    const remaining = row.remaining == null ? null : Number(row.remaining);

    if (!billingActive) {
      throw new Error(
        `La tienda «${sellerChannel.code}» no tiene facturación activa. Compra un paquete en Planes de facturación.`,
      );
    }
    if (remaining == null || remaining <= 0) {
      throw new Error(`La tienda «${sellerChannel.code}» no tiene cupo de facturas disponible.`);
    }

    await this.billingPlans.assertCertificateAllowsInvoiceEmission(sellerChannel);

    const emitConfig = this.parseEmitProfile(
      sellerChannel.customFields as ChannelCustomFields | undefined,
      sellerChannel.code,
      { throwOnMissing: true },
    );

    await ds.query(
      `UPDATE ${escapedTable}
       SET ${limitCol} = $1, ${billingActiveCol} = $2
       WHERE ${escapedId} = $3`,
      [remaining - 1, remaining - 1 > 0, sellerChannel.id],
    );

    return emitConfig;
  }

  async releaseReservedQuotaForOrder(ctx: RequestContext, order: Order): Promise<void> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = await this.resolveSellerChannelFromOrder(
      ctx,
      order,
      String(defaultChannel.id),
    );
    if (!sellerChannel) {
      return;
    }

    const ds = this.connection.rawConnection;
    const { escapedTable, escapedId } = this.getChannelTableParts(ds);
    const billingActiveCol = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_BILLING_ACTIVE_FIELD,
    );
    const limitCol = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_INVOICE_LIMIT_REMAINING_FIELD,
    );

    await ds.query(
      `UPDATE ${escapedTable}
       SET ${limitCol} = COALESCE(${limitCol}, 0) + 1, ${billingActiveCol} = true
       WHERE ${escapedId} = $1`,
      [sellerChannel.id],
    );
  }

  async getSellerEmitConfigForOrder(
    ctx: RequestContext,
    orderCode: string,
  ): Promise<SellerMatiasEmitConfig> {
    const order = await this.connection.getRepository(ctx, Order).findOne({
      where: { code: orderCode },
      relations: [
        'channels',
        'lines',
        'lines.productVariant',
        'lines.productVariant.channels',
      ],
    });
    if (!order) {
      throw new Error(`Order ${orderCode} not found`);
    }

    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const sellerChannel = await this.resolveSellerChannelFromOrder(
      ctx,
      order,
      String(defaultChannel.id),
    );
    if (!sellerChannel) {
      throw new Error(`Order ${orderCode} is not associated with a seller channel.`);
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
    matiasCompanyIdConfigured: boolean;
    matiasEmitProfileComplete: boolean;
  } {
    const companyId =
      typeof cf?.[CHANNEL_MATIAS_COMPANY_ID_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_COMPANY_ID_FIELD]!.trim()
        : '';
    const prefix =
      typeof cf?.[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_INVOICE_PREFIX_FIELD]!.trim()
        : '';
    const resolutionNumber =
      typeof cf?.[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD] === 'string'
        ? cf[CHANNEL_MATIAS_RESOLUTION_NUMBER_FIELD]!.trim()
        : '';
    const matiasCompanyIdConfigured = companyId.length > 0;
    const matiasEmitProfileComplete = !!(companyId && prefix && resolutionNumber);

    if (opts.throwOnMissing && !matiasEmitProfileComplete) {
      const missing: string[] = [];
      if (!companyId) missing.push('Company ID');
      if (!prefix) missing.push('prefijo');
      if (!resolutionNumber) missing.push('número de resolución');
      throw new Error(
        `La tienda «${channelCode}» no tiene perfil Matias completo (falta: ${missing.join(', ')}). Configúralo en Ventas → Matias por tienda.`,
      );
    }

    return {
      channelCode,
      matiasCompanyId: companyId || '',
      prefix: prefix || '',
      resolutionNumber: resolutionNumber || '',
      matiasCompanyIdConfigured,
      matiasEmitProfileComplete,
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
        c.propertyName === propertyName &&
        c.embeddedMetadata?.propertyName === 'customFields',
    );
    if (!col) {
      throw new Error(`Channel custom field column not found: ${propertyName}`);
    }
    return ds.driver.escape(col.databaseName);
  }
}
