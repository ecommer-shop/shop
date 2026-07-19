import { Injectable, Logger } from '@nestjs/common';
import {
  Administrator,
  Channel,
  Permission,
  RequestContext,
  TransactionalConnection,
  User,
} from '@vendure/core';
import { Resend } from 'resend';

const loggerCtx = 'BillingCertificateNotification';

export type CertificateSuperAdminNotifyReason =
  | 'documents_uploaded'
  | 'ready_for_review'
  | 'documents_resubmitted';

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
        }<p>Corrige los documentos y vuelve a enviarlos desde <em>Planes de facturación</em>. Si ya pagaste el certificado, <strong>no necesitas pagar de nuevo</strong>.</p>`;

    await this.sendHtml(recipients, subject, body);
  }

  /** Avisa al super admin cuando una tienda sube o reenvía documentos de certificado. */
  async notifySuperAdminCertificateEvent(
    ctx: RequestContext,
    channel: Channel,
    reason: CertificateSuperAdminNotifyReason,
  ): Promise<void> {
    const recipients = await this.resolveSuperAdminEmails(ctx);
    if (recipients.length === 0) {
      Logger.warn(
        `Sin email de super admin; no se envía aviso de certificado (${reason}, canal ${channel.code}).`,
        loggerCtx,
      );
      return;
    }

    const shopName = channel.seller?.name ?? channel.code;
    const reviewPath = process.env.BILLING_CERT_REVIEW_ADMIN_PATH ?? '/certificados-facturacion';
    const reviewLink = this.buildAdminReviewLink(reviewPath);

    const subjects: Record<CertificateSuperAdminNotifyReason, string> = {
      documents_uploaded: `Documentos de certificado subidos — ${shopName}`,
      ready_for_review: `Certificado listo para revisión — ${shopName}`,
      documents_resubmitted: `Documentos corregidos — revisar de nuevo — ${shopName}`,
    };

    const bodies: Record<CertificateSuperAdminNotifyReason, string> = {
      documents_uploaded: `<p>La tienda <strong>${this.escapeHtml(shopName)}</strong> (canal <code>${this.escapeHtml(channel.code)}</code>) subió los documentos del certificado de facturación.</p><p>Estado: <strong>pendiente de pago</strong>. Cuando el vendedor pague, volverás a recibir un aviso para revisar.</p>`,
      ready_for_review: `<p>La tienda <strong>${this.escapeHtml(shopName)}</strong> (canal <code>${this.escapeHtml(channel.code)}</code>) pagó el certificado y está <strong>lista para tu revisión</strong>.</p><p>Revisa Cámara de Comercio, RUT, NIT y Resolución DIAN en el panel de validación.</p>`,
      documents_resubmitted: `<p>La tienda <strong>${this.escapeHtml(shopName)}</strong> (canal <code>${this.escapeHtml(channel.code)}</code>) <strong>corrigió y reenvió</strong> los documentos tras un rechazo.</p><p>El trámite volvió a cola de revisión. El pago ya estaba confirmado; solo debes validar los nuevos archivos.</p>`,
    };

    const linkBlock = reviewLink
      ? `<p><a href="${this.escapeHtml(reviewLink)}">Abrir validación de certificados</a></p>`
      : `<p>Ve a <em>Validación de certificados</em> en el panel de administración.</p>`;

    await this.sendHtml(recipients, subjects[reason], `${bodies[reason]}${linkBlock}`);
  }

  private buildAdminReviewLink(reviewPath: string): string | null {
    const base = process.env.BILLING_ADMIN_BASE_URL?.trim();
    if (!base) return null;
    const normalizedBase = base.replace(/\/+$/, '');
    const normalizedPath = reviewPath.startsWith('/') ? reviewPath : `/${reviewPath}`;
    return `${normalizedBase}${normalizedPath}`;
  }

  private async resolveSuperAdminEmails(ctx: RequestContext): Promise<string[]> {
    const fromEnv = this.normalizeEmails(
      process.env.BILLING_SUPERADMIN_NOTIFY_EMAILS?.split(',') ?? [],
    );
    if (fromEnv.length) {
      return fromEnv;
    }

    const admins = await this.connection.getRepository(ctx, Administrator).find({
      relations: ['user', 'user.roles'],
    });
    const fromRoles = this.normalizeEmails(
      admins
        .filter((admin) =>
          admin.user?.roles?.some(
            (role) =>
              role.code === '__super_admin_role__' ||
              (role.permissions as string[] | undefined)?.includes(Permission.SuperAdmin),
          ),
        )
        .map((admin) => admin.emailAddress),
    );

    if (fromRoles.length > 0) {
      return fromRoles;
    }

    const superIdentifier = process.env.SUPERADMIN_USERNAME?.trim();
    if (superIdentifier) {
      const superUser = await this.connection.getRepository(ctx, User).findOne({
        where: { identifier: superIdentifier },
        relations: ['roles'],
      });
      const superAdmin = admins.find((a) => a.user?.id === superUser?.id);
      const fromSuper = this.normalizeEmails([superAdmin?.emailAddress]);
      if (fromSuper.length) {
        return fromSuper;
      }
      if (superAdmin?.emailAddress?.trim()) {
        Logger.warn(
          `El superadmin «${superIdentifier}» tiene emailAddress inválido («${superAdmin.emailAddress}»). Define BILLING_SUPERADMIN_NOTIFY_EMAILS con un correo real (ej. tu@dominio.com).`,
          loggerCtx,
        );
      }
    }

    return [];
  }

  private async resolveChannelAdminEmails(ctx: RequestContext, channelId: string | number): Promise<string[]> {
    const admins = await this.connection.getRepository(ctx, Administrator).find({
      relations: ['user', 'user.roles', 'user.roles.channels'],
    });
    const id = String(channelId);
    return this.normalizeEmails(
      admins
        .filter((admin) =>
          admin.user?.roles?.some((role) => role.channels?.some((ch) => String(ch.id) === id)),
        )
        .map((admin) => admin.emailAddress),
    );
  }

  /** Solo direcciones válidas para Resend (`email@dominio` o `Name <email@dominio>`). */
  private normalizeEmails(raw: Array<string | null | undefined>): string[] {
    const valid: string[] = [];
    const seen = new Set<string>();
    for (const value of raw) {
      const trimmed = typeof value === 'string' ? value.trim() : '';
      if (!trimmed) continue;
      if (!this.isResendCompatibleEmail(trimmed)) {
        Logger.warn(
          `Destinatario omitido por formato inválido: «${trimmed}». Usa email@ejemplo.com o "Nombre <email@ejemplo.com>".`,
          loggerCtx,
        );
        continue;
      }
      const key = trimmed.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      valid.push(trimmed);
    }
    return valid;
  }

  private isResendCompatibleEmail(value: string): boolean {
    // Formato permitido por Resend: email@ejemplo.com o Nombre <email@ejemplo.com>
    const plain = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
    const named = /^.+\s<[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+>$/;
    return plain.test(value) || named.test(value);
  }

  private async sendHtml(recipients: string[], subject: string, html: string): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.BILLING_NOTIFY_FROM ?? '"EcommerShop" <ceo@ecommer.shop>';
    const to = this.normalizeEmails(recipients);
    if (!apiKey) {
      Logger.debug(
        `RESEND_API_KEY no configurada; notificación omitida (${subject} → ${to.join(', ')})`,
        loggerCtx,
      );
      return;
    }
    if (to.length === 0) {
      Logger.warn(
        `Ningún destinatario válido para «${subject}». Configura BILLING_SUPERADMIN_NOTIFY_EMAILS o un emailAddress real en el administrador.`,
        loggerCtx,
      );
      return;
    }
    if (!this.resend) {
      this.resend = new Resend(apiKey);
    }
    try {
      Logger.log(`Enviando notificación «${subject}» → ${to.join(', ')}`, loggerCtx);
      const { error } = await this.resend.emails.send({
        from,
        to,
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
