// src/vendure-config.ts
import {
  VendureConfig,
  DefaultLogger,
  LogLevel,
} from '@vendure/core';

import { IS_DEV } from './config/environment';
import { apiOptions } from './config/api-options';
import { authOptions } from './config/auth-options';
import { dbConnectionOptions } from './config/database';
import { paymentOptions } from './config/payment-options';
import { customFields } from './config/custom-fields';
import { plugins } from './config/plugins';
import './config/mercadopago.config';
import { PaymentMercadopagoPlugin } from './plugins/payment-mercadopago/payment-mercadopago.plugin';
import { catalogOptions } from './config/catalog-options';

export const config: VendureConfig = {
  logger: new DefaultLogger({
    level: IS_DEV ? LogLevel.Debug : LogLevel.Info,
  }),
  apiOptions,
  authOptions,
  dbConnectionOptions,
  paymentOptions,
  customFields,
  catalogOptions,
  plugins,
};
