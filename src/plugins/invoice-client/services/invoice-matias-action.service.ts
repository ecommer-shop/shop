import { Injectable } from '@nestjs/common';
import { RequestContext, UserInputError } from '@vendure/core';
import { InvoiceClientService } from './invoice-client.service';
import { InvoiceQuotaService } from './invoice-quota.service';

export interface InvoiceMatiasActionResult {
  success: boolean;
  message?: string | null;
  status?: string | null;
  matiasInvoiceId?: string | null;
  matiasInvoiceNumber?: string | null;
  cufe?: string | null;
  error?: string | null;
  pdfUrl?: string | null;
  xmlUrl?: string | null;
}

@Injectable()
export class InvoiceMatiasActionService {
  constructor(
    private readonly invoiceClient: InvoiceClientService,
    private readonly invoiceQuota: InvoiceQuotaService,
  ) {}

  private async assertInvoiceBelongsToOrder(invoiceId: string, orderCode: string): Promise<void> {
    const row = await this.invoiceClient.getInvoiceByOrderCode(orderCode);
    if (!row || row.id !== invoiceId) {
      throw new UserInputError('El id de factura no corresponde al código de pedido indicado.');
    }
  }

  async syncFromMatias(
    ctx: RequestContext,
    invoiceId: string,
    orderCode: string,
  ): Promise<InvoiceMatiasActionResult> {
    await this.assertInvoiceBelongsToOrder(invoiceId, orderCode);
    const emitConfig = await this.invoiceQuota.getSellerEmitConfigForOrder(ctx, orderCode);
    const d = await this.invoiceClient.fetchInvoiceMatiasStatus(invoiceId, emitConfig.matiasBearerToken);
    return {
      success: true,
      message: 'Estado actualizado desde Matias.',
      status: d.status,
      matiasInvoiceId: d.matiasInvoiceId ?? null,
      matiasInvoiceNumber: d.matiasInvoiceNumber ?? null,
      cufe: d.cufe ?? null,
      error: d.error ?? null,
      pdfUrl: d.pdfUrl ?? null,
      xmlUrl: d.xmlUrl ?? null,
    };
  }

  async resendFromMatias(
    ctx: RequestContext,
    invoiceId: string,
    orderCode: string,
    email: string | undefined,
  ): Promise<InvoiceMatiasActionResult> {
    if (!email?.trim()) {
      throw new UserInputError('Indica el email de destino para el reenvío.');
    }
    await this.assertInvoiceBelongsToOrder(invoiceId, orderCode);
    const emitConfig = await this.invoiceQuota.getSellerEmitConfigForOrder(ctx, orderCode);
    const d = await this.invoiceClient.resendInvoiceMatiasEmail(
      invoiceId,
      email.trim(),
      emitConfig.matiasBearerToken,
    );
    return {
      success: true,
      message: d.message ?? 'Correo reenviado correctamente.',
      status: d.status,
      matiasInvoiceId: d.matiasInvoiceId ?? null,
      matiasInvoiceNumber: d.matiasInvoiceNumber ?? null,
      cufe: d.cufe ?? null,
      error: null,
      pdfUrl: d.pdfUrl ?? null,
      xmlUrl: d.xmlUrl ?? null,
    };
  }
}
