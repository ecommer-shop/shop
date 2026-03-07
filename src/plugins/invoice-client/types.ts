export interface PluginInitOptions {
  invoiceServiceUrl: string;
  apiKey: string;
  /** Prefijo de factura (ej. LZT). Usado para secuencia y envío a Matías. */
  prefix?: string;
  /** Número de resolución DIAN. */
  resolutionNumber?: string;
}
