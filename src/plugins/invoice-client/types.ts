export interface PluginInitOptions {
  /** URL base del microservicio de facturas, con `/api` (ej. http://localhost:3010/api). */
  invoiceServiceUrl: string;
  /** API key para autenticar contra el microservicio. */
  apiKey: string;
  /** Prefijo de factura (ej. LZT). Opcional, se puede tomar de env. */
  prefix?: string;
  /** Número de resolución DIAN Matias. Opcional, se puede tomar de env. */
  resolutionNumber?: string;
}

