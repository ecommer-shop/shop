// src/vendure-config.ts
import {
  VendureConfig,
  DefaultLogger,
  LogLevel,
  LanguageCode,
} from '@vendure/core';

import { IS_DEV } from './config/environment';
import { apiOptions } from './config/api-options';
import { authOptions } from './config/auth-options';
import { dbConnectionOptions } from './config/database';
import { paymentOptions } from './config/payment-options';
import { customFields } from './config/custom-fields';
import { plugins } from './config/plugins';

import { catalogOptions } from './config/catalog-options';
import { ExcelLoaderPlugin } from './plugins/google-sheets-loader/excel-loader.plugin';

export const config: VendureConfig = {
  logger: new DefaultLogger({
    level: IS_DEV ? LogLevel.Debug : LogLevel.Info,
  }),
  defaultLanguageCode: LanguageCode.es,
  apiOptions,
  authOptions,
  dbConnectionOptions,
  paymentOptions,
  customFields,
  catalogOptions,
  plugins,
};
