import { Injectable, Logger } from '@nestjs/common';
import {
  Administrator,
  Channel,
  RequestContext,
  TransactionalConnection,
} from '@vendure/core';
import { Resend } from 'resend';

const loggerCtx = 'BillingCertificateNotification';

@Injectable()
export class BillingCertificateNotificationService {
  private resend?: Resend;

  constructor(private readonly connection: TransactionalConnection) {}

  async notifyCertificateReviewResult(
    ctx: RequestContext,
    channel: Channel,
    approved: boolean,
    note?: string | null,
  ): Promise<void> {
    const recipients = await this.resolveChannelAdminEmails(ctx, channel.id);
    if (recipients.length === 0) {
      Logger.warn(
        `Sin email de administrador para canal ${channel.code}; no se envía notificación de certificado.`,
        loggerCtx,
      );
      return;
    }

    const shopName = channel.seller?.name ?? channel.code;
    const subject = approved
      ? `Certificado de facturación aprobado — ${shopName}`
      : `Certificado de facturación rechazado — ${shopName}`;
    const body = approved
      ? `<p>Tu certificado de facturación electrónica para <strong>${shopName}</strong> fue <strong>aprobado</strong>. Ya puedes comprar paquetes de facturas en el panel <em>Planes de facturación</em>.</p>`
      : `<p>Tu certificado para <strong>${shopName}</strong> fue <strong>rechazado</strong>.</p>${
          note?.trim()
            ? `<p><strong>Motivo:</strong> ${this.escapeHtml(note.trim())}</p>`
            : ''
        }<p>Puedes corregir documentos y volver a enviar el trámite desde <em>Planes de facturación</em>.</p>`;

    await this.sendHtml(recipients, subject, body);
  }

  private async resolveChannelAdminEmails(ctx: RequestContext, channelId: string | number): Promise<string[]> {
    const admins = await this.connection.getRepository(ctx, Administrator).find({
      relations: ['user', 'user.roles', 'user.roles.channels'],
    });
    const id = String(channelId);
    const emails = admins
      .filter((admin) =>
        admin.user?.roles?.some((role) => role.channels?.some((ch) => String(ch.id) === id)),
      )
      .map((admin) => admin.emailAddress)
      .filter((e): e is string => !!e?.trim());
    return [...new Set(emails)];
  }

  private async sendHtml(recipients: string[], subject: string, html: string): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.BILLING_NOTIFY_FROM ?? '"EcommerShop" <ceo@ecommer.shop>';
    if (!apiKey) {
      Logger.debug(
        `RESEND_API_KEY no configurada; notificación omitida (${subject} → ${recipients.join(', ')})`,
        loggerCtx,
      );
      return;
    }
    if (!this.resend) {
      this.resend = new Resend(apiKey);
    }
    try {
      const { error } = await this.resend.emails.send({
        from,
        to: recipients,
        subject,
        html,
      });
      if (error) {
        Logger.error(`Resend error: ${JSON.stringify(error)}`, loggerCtx);
      }
    } catch (err: unknown) {
      Logger.error(
        `No se pudo enviar notificación: ${err instanceof Error ? err.message : String(err)}`,
        loggerCtx,
      );
    }
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
