import { Injectable } from '@nestjs/common';
import {
  Channel,
  ChannelService,
  RequestContext,
  TransactionalConnection,
  UserInputError,
} from '@vendure/core';
import type { DataSource } from 'typeorm';
import {
  CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD,
  CHANNEL_MATIAS_GLOBAL_POOL_TOTAL_FIELD,
} from '../constants';

export interface MatiasGlobalInvoicePoolStatus {
  defaultChannelId: string;
  defaultChannelCode: string;
  total: number | null;
  sellableRemaining: number | null;
}

type ChannelCustomFields = Record<string, boolean | number | string | null | undefined>;

@Injectable()
export class MatiasGlobalPoolService {
  constructor(
    private readonly connection: TransactionalConnection,
    private readonly channelService: ChannelService,
  ) {}

  async getPoolStatus(ctx: RequestContext): Promise<MatiasGlobalInvoicePoolStatus> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const cf = defaultChannel.customFields as ChannelCustomFields | undefined;
    return {
      defaultChannelId: String(defaultChannel.id),
      defaultChannelCode: defaultChannel.code,
      total: this.readInt(cf?.[CHANNEL_MATIAS_GLOBAL_POOL_TOTAL_FIELD]),
      sellableRemaining: this.readInt(cf?.[CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD]),
    };
  }

  /**
   * Ajusta total y/o vendible del pool global (canal por defecto). Usar al comprar paquete grande en Matias.
   */
  async updatePool(
    ctx: RequestContext,
    input: { total?: number | null; sellableRemaining?: number | null },
  ): Promise<MatiasGlobalInvoicePoolStatus> {
    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const cf = (defaultChannel.customFields ?? {}) as ChannelCustomFields;

    if (input.total !== undefined) {
      if (input.total != null && (!Number.isFinite(input.total) || input.total < 0)) {
        throw new UserInputError('El total del pool global debe ser un entero ≥ 0.');
      }
      cf[CHANNEL_MATIAS_GLOBAL_POOL_TOTAL_FIELD] = input.total;
    }
    if (input.sellableRemaining !== undefined) {
      if (
        input.sellableRemaining != null &&
        (!Number.isFinite(input.sellableRemaining) || input.sellableRemaining < 0)
      ) {
        throw new UserInputError('El vendible restante del pool global debe ser un entero ≥ 0.');
      }
      cf[CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD] = input.sellableRemaining;
    }

    const total = this.readInt(cf[CHANNEL_MATIAS_GLOBAL_POOL_TOTAL_FIELD]);
    const sellable = this.readInt(cf[CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD]);
    if (total != null && sellable != null && sellable > total) {
      throw new UserInputError('El vendible restante no puede superar el total del pool global.');
    }

    await this.channelService.update(ctx, {
      id: defaultChannel.id,
      customFields: cf,
    });

    return this.getPoolStatus(ctx);
  }

  /**
   * Resta unidades del pool vendible al asignar cupo a una tienda (delta > 0).
   * Devuelve unidades al pool si delta < 0.
   */
  async applySellableDelta(ctx: RequestContext, delta: number): Promise<void> {
    if (delta === 0) {
      return;
    }
    if (!Number.isFinite(delta) || !Number.isInteger(delta)) {
      throw new UserInputError('Delta de pool global inválido.');
    }

    const defaultChannel = await this.channelService.getDefaultChannel(ctx);
    const ds = this.connection.rawConnection;
    const { escapedTable, escapedId } = this.getChannelTableParts(ds);
    const escapedSellable = this.getEscapedChannelCustomFieldColumn(
      ds,
      CHANNEL_MATIAS_GLOBAL_POOL_SELLABLE_FIELD,
    );

    if (delta > 0) {
      const rows = (await ds.query(
        `UPDATE ${escapedTable}
         SET ${escapedSellable} = ${escapedSellable} - $1
         WHERE ${escapedId} = $2
           AND ${escapedSellable} IS NOT NULL
           AND ${escapedSellable} >= $1
         RETURNING ${escapedSellable} AS remaining`,
        [delta, defaultChannel.id],
      )) as Array<{ remaining: number }>;

      if (rows.length === 0) {
        const current = await this.getPoolStatus(ctx);
        throw new UserInputError(
          `No hay suficientes facturas en el pool global de Ecommer (vendible restante: ${current.sellableRemaining ?? 0}). Compra más en Matias o reduce el cupo de la tienda.`,
        );
      }
      return;
    }

    const addBack = -delta;
    await ds.query(
      `UPDATE ${escapedTable}
       SET ${escapedSellable} = COALESCE(${escapedSellable}, 0) + $1
       WHERE ${escapedId} = $2`,
      [addBack, defaultChannel.id],
    );
  }

  private readInt(value: unknown): number | null {
    if (value == null) {
      return null;
    }
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
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
