import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { INVOICE_CLIENT_PLUGIN_OPTIONS } from '../constants';
import type { PluginInitOptions } from '../types';

/**
 * Cliente HTTP único hacia el microservicio Matias (misma base URL y X-API-Key que {@link InvoiceClientService}).
 */
@Injectable()
export class InvoiceMicroHttpClient {
  readonly axios: AxiosInstance;

  constructor(@Inject(INVOICE_CLIENT_PLUGIN_OPTIONS) options: PluginInitOptions) {
    const baseURL = options.invoiceServiceUrl.replace(/\/+$/, '');
    this.axios = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': options.apiKey,
      },
    });
  }
}
