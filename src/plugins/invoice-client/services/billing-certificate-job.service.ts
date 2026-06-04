import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Channel, ChannelService, LanguageCode, RequestContextService, TransactionalConnection } from '@vendure/core';
import { IsNull, Not } from 'typeorm';
import { CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD, CHANNEL_BILLING_CERT_STATUS_FIELD } from '../constants';

const loggerCtx = 'BillingCertificateJob';

@Injectable()
export class BillingCertificateJobService implements OnModuleInit {
  constructor(
    private readonly connection: TransactionalConnection,
    private readonly channelService: ChannelService,
    private readonly requestContextService: RequestContextService,
  ) {}

  onModuleInit(): void {
    const run = () => {
      this.processExpiredCertificates().catch((err) =>
        Logger.error(`Job certificados vencidos: ${err?.message ?? err}`, loggerCtx),
      );
    };
    run();
    setInterval(run, 6 * 60 * 60 * 1000);
    Logger.log('Job de vencimiento de certificados de facturación registrado (cada 6 h)', loggerCtx);
  }

  async processExpiredCertificates(): Promise<number> {
    const ctx = await this.requestContextService.create({
      apiType: 'admin',
      languageCode: LanguageCode.es,
    });
    const channels = await this.connection.getRepository(ctx, Channel).find({
      where: { sellerId: Not(IsNull()) },
    });
    const now = Date.now();
    let updated = 0;
    for (const channel of channels) {
      const cf = (channel.customFields as Record<string, unknown>) ?? {};
      const status = String(cf[CHANNEL_BILLING_CERT_STATUS_FIELD] ?? '');
      if (status !== 'ACTIVE') continue;
      const expiresRaw = cf[CHANNEL_BILLING_CERT_EXPIRES_AT_FIELD];
      if (!expiresRaw) continue;
      const expiresAt = new Date(String(expiresRaw)).getTime();
      if (expiresAt >= now) continue;
      await this.channelService.update(ctx, {
        id: channel.id,
        customFields: {
          ...cf,
          [CHANNEL_BILLING_CERT_STATUS_FIELD]: 'EXPIRED',
        },
      });
      updated++;
      Logger.log(`Certificado vencido persistido en canal ${channel.code}`, loggerCtx);
    }
    if (updated > 0) {
      Logger.log(`Marcados ${updated} certificados como EXPIRED`, loggerCtx);
    }
    return updated;
  }
}
