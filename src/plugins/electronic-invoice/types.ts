/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    exampleOption?: string;
}
export interface InvoiceData {
  orderCode: string;
  total: number;
  customerEmail: string;
  pdfPath: string;
}

