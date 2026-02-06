import { MatiasApiService } from './matias-api.service';
import { CreateInvoiceDto, InvoiceResponseDto, InvoiceStatusDto } from '@/models/invoice.dto';
import { transformToMatiasRequest } from '@/models/matias-request.dto';
import { InvoiceStatus } from '@/types/invoice.types';
import logger from '@/utils/logger';

// En memoria por ahora - en producción deberías usar una base de datos
const invoiceStore = new Map<string, InvoiceMetadata>();

interface InvoiceMetadata {
  id: string;
  orderCode: string;
  prefix: string;
  documentNumber: string;
  status: InvoiceStatus;
  cufe?: string;
  pdfUrl?: string;
  xmlUrl?: string;
  issuedAt?: Date;
  error?: string;
  createdAt: Date;
}

export class InvoiceService {
  private matiasApi: MatiasApiService;

  constructor() {
    this.matiasApi = new MatiasApiService();
  }

  /**
   * Crea una nueva factura
   */
  async createInvoice(dto: CreateInvoiceDto): Promise<InvoiceResponseDto> {
    try {
      logger.info('Creating invoice', { orderCode: dto.orderCode });

      // Validar que no exista ya una factura para esta orden
      const existingInvoice = Array.from(invoiceStore.values()).find(
        (inv) => inv.orderCode === dto.orderCode
      );

      if (existingInvoice && existingInvoice.status === InvoiceStatus.ISSUED) {
        throw new Error(`Invoice already exists for order ${dto.orderCode}`);
      }

      // Transformar DTO interno a formato Matias
      const matiasRequest = transformToMatiasRequest(dto);

      // Crear factura en Matias
      const matiasResponse = await this.matiasApi.createInvoice(matiasRequest);

      // Validar respuesta
      // Nota: Matias puede devolver success=true pero IsValid='false' si la DIAN rechaza el documento
      if (!matiasResponse.success) {
        const errorMsg = matiasResponse.message || 'Invoice creation failed';
        throw new Error(errorMsg);
      }

      // Si la DIAN rechazó el documento, incluir detalles en el error
      if (matiasResponse.response?.IsValid !== 'true') {
        const statusCode = matiasResponse.response?.StatusCode;
        const statusMessage = matiasResponse.response?.StatusMessage || 'Document validation failed';
        const errorDetails = matiasResponse.response?.ErrorMessage;
        
        logger.warn('Invoice created in Matias but rejected by DIAN', {
          xmlDocumentKey: matiasResponse.XmlDocumentKey,
          statusCode,
          statusMessage,
          errorDetails: errorDetails ? JSON.stringify(errorDetails) : undefined,
        });

        // Lanzar error con información detallada
        const errorMsg = `${statusMessage}${errorDetails ? ` - Details: ${JSON.stringify(errorDetails)}` : ''}`;
        throw new Error(errorMsg);
      }

      // Guardar metadata
      const invoiceId = `inv_${Date.now()}_${dto.orderCode}`;
      const metadata: InvoiceMetadata = {
        id: invoiceId,
        orderCode: dto.orderCode,
        prefix: dto.prefix,
        documentNumber: dto.documentNumber,
        status: InvoiceStatus.ISSUED,
        cufe: matiasResponse.XmlDocumentKey,
        pdfUrl: matiasResponse.pdf?.url,
        xmlUrl: matiasResponse.AttachedDocument?.url,
        issuedAt: new Date(),
        createdAt: new Date(),
      };

      invoiceStore.set(invoiceId, metadata);

      logger.info('Invoice created successfully', {
        invoiceId,
        orderCode: dto.orderCode,
        cufe: matiasResponse.XmlDocumentKey,
        statusCode: matiasResponse.response?.StatusCode,
      });

      return {
        id: invoiceId,
        orderCode: dto.orderCode,
        status: metadata.status,
        matiasInvoiceId: `${dto.prefix}-${dto.documentNumber}`,
        matiasInvoiceNumber: `${dto.prefix}${dto.documentNumber}`,
        cufe: metadata.cufe,
        pdfUrl: metadata.pdfUrl,
        xmlUrl: metadata.xmlUrl,
        issuedAt: metadata.issuedAt,
        message: matiasResponse.response?.StatusMessage || 'Invoice created successfully',
      };
    } catch (error: any) {
      logger.error('Error creating invoice:', error);

      // Guardar error en metadata si es posible
      const invoiceId = `inv_${Date.now()}_${dto.orderCode}`;
      const errorMetadata: InvoiceMetadata = {
        id: invoiceId,
        orderCode: dto.orderCode,
        prefix: dto.prefix,
        documentNumber: dto.documentNumber,
        status: InvoiceStatus.REJECTED,
        error: error.message,
        createdAt: new Date(),
      };
      invoiceStore.set(invoiceId, errorMetadata);

      throw error;
    }
  }

  /**
   * Obtiene una factura por código de orden
   */
  async getInvoiceByOrderCode(orderCode: string): Promise<InvoiceResponseDto | null> {
    logger.info('Getting invoice by order code', { orderCode });

    const invoice = Array.from(invoiceStore.values()).find(
      (inv) => inv.orderCode === orderCode
    );

    if (!invoice) {
      return null;
    }

    return {
      id: invoice.id,
      orderCode: invoice.orderCode,
      status: invoice.status,
      matiasInvoiceId: `${invoice.prefix}-${invoice.documentNumber}`,
      matiasInvoiceNumber: `${invoice.prefix}${invoice.documentNumber}`,
      cufe: invoice.cufe,
      pdfUrl: invoice.pdfUrl,
      xmlUrl: invoice.xmlUrl,
      issuedAt: invoice.issuedAt,
      error: invoice.error,
    };
  }

  /**
   * Obtiene el estado de una factura
   */
  async getInvoiceStatus(invoiceId: string): Promise<InvoiceStatusDto> {
    logger.info('Getting invoice status', { invoiceId });

    const invoice = invoiceStore.get(invoiceId);

    if (!invoice) {
      throw new Error(`Invoice not found: ${invoiceId}`);
    }

    // Si hay prefijo y número, obtener estado actualizado de Matias
    if (invoice.prefix && invoice.documentNumber) {
      try {
        const matiasResponse = await this.matiasApi.getInvoice(invoice.prefix, invoice.documentNumber);
        
        // Actualizar metadata local
        if (matiasResponse.response?.IsValid === 'true') {
          invoice.status = InvoiceStatus.ISSUED;
        }
        invoice.cufe = matiasResponse.XmlDocumentKey || invoice.cufe;
        invoice.pdfUrl = matiasResponse.pdf?.url || invoice.pdfUrl;
        invoice.xmlUrl = matiasResponse.AttachedDocument?.url || invoice.xmlUrl;
        
        invoiceStore.set(invoiceId, invoice);
      } catch (error: any) {
        logger.warn('Could not fetch updated status from Matias:', error);
        // Continuar con el estado local
      }
    }

    return {
      status: invoice.status,
      matiasInvoiceId: `${invoice.prefix}-${invoice.documentNumber}`,
      matiasInvoiceNumber: `${invoice.prefix}${invoice.documentNumber}`,
      cufe: invoice.cufe,
      pdfUrl: invoice.pdfUrl,
      xmlUrl: invoice.xmlUrl,
      error: invoice.error,
    };
  }

  /**
   * Reenvía una factura por email
   */
  async resendInvoice(invoiceId: string, email?: string): Promise<InvoiceResponseDto> {
    logger.info('Resending invoice', { invoiceId, email });

    const invoice = invoiceStore.get(invoiceId);

    if (!invoice) {
      throw new Error(`Invoice not found: ${invoiceId}`);
    }

    if (!invoice.prefix || !invoice.documentNumber) {
      throw new Error(`Invoice does not have prefix/documentNumber: ${invoiceId}`);
    }

    try {
      if (email) {
        await this.matiasApi.resendInvoiceEmail(invoice.prefix, invoice.documentNumber, email);
      }

      logger.info('Invoice resent successfully', { invoiceId });

      return {
        id: invoice.id,
        orderCode: invoice.orderCode,
        status: invoice.status,
        matiasInvoiceId: `${invoice.prefix}-${invoice.documentNumber}`,
        matiasInvoiceNumber: `${invoice.prefix}${invoice.documentNumber}`,
        cufe: invoice.cufe,
        pdfUrl: invoice.pdfUrl,
        xmlUrl: invoice.xmlUrl,
        issuedAt: invoice.issuedAt,
        message: 'Invoice resent successfully',
      };
    } catch (error: any) {
      logger.error('Error resending invoice:', error);
      throw error;
    }
  }
}
