import { Injectable } from '@nestjs/common';
import { Administrator, Channel, RequestContext, TransactionalConnection, UserInputError } from '@vendure/core';
import { Request } from 'express';
import { ClickwrapAcceptance } from '../entities/clickwrap-acceptance.entity';

@Injectable()
export class ClickwrapAcceptanceService {
  constructor(private readonly connection: TransactionalConnection) {}

  async recordAcceptance(
    ctx: RequestContext,
    input: {
      accepted?: boolean;
      contractVersion: string;
      contractContext: string;
      planName: string;
      planCode?: string | null;
    },
    req?: Request,
  ): Promise<boolean> {
    if (!input.accepted) {
      throw new UserInputError('Debes aceptar los términos y condiciones antes de pagar.');
    }
    const activeUserId = ctx.activeUserId != null ? Number(ctx.activeUserId) : null;
    let administratorId: number | null = null;
    let administratorEmail: string | null = null;

    if (activeUserId != null) {
      const admin = await this.connection.getRepository(ctx, Administrator).findOne({
        where: { user: { id: activeUserId } },
        relations: ['user'],
      });
      administratorId = admin?.id != null ? Number(admin.id) : null;
      administratorEmail = admin?.emailAddress ?? null;
    }

    const channel = await this.connection.getRepository(ctx, Channel).findOne({
      where: { id: ctx.channelId },
    });

    const record = new ClickwrapAcceptance({
      administratorId,
      administratorEmail,
      userId: activeUserId,
      channelId: channel?.id != null ? Number(channel.id) : null,
      channelCode: channel?.code ?? null,
      contractVersion: input.contractVersion,
      contractContext: input.contractContext,
      planName: input.planName,
      planCode: input.planCode ?? null,
      ipAddress: this.getIpAddress(req),
      userAgent: req?.headers?.['user-agent'] ?? null,
      acceptedAt: new Date(),
    });

    await this.connection.getRepository(ctx, ClickwrapAcceptance).save(record);
    return true;
  }

  private getIpAddress(req?: Request): string | null {
    if (!req) {
      return null;
    }
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string') {
      return forwardedFor.split(',')[0]?.trim() || null;
    }
    if (Array.isArray(forwardedFor)) {
      return forwardedFor[0] ?? null;
    }
    return req.ip ?? req.socket?.remoteAddress ?? null;
  }
}
