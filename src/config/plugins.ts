import path from 'node:path';
import fs from 'node:fs';
import type { VendureConfig } from '@vendure/core';
import {
  DefaultAssetNamingStrategy,
  DefaultJobQueuePlugin,
  DefaultSchedulerPlugin,
  DefaultSearchPlugin,
  LanguageCode,
  Role,
} from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import {
  defaultEmailHandlers,
  EmailPlugin,
  FileBasedTemplateLoader,
} from '@vendure/email-plugin';
import {
  AssetServerPlugin,
  configureS3AssetStorage,
} from '@vendure/asset-server-plugin';

import { ROUTE, ROUTE_STORE } from '../consts';
import { PaymentPlugin } from '../plugins/payment/payment.plugin';
import { CURRENCY } from '../plugins/payment/constants';
import { ClerkPlugin } from '../plugins/auth0/auth0.plugin';
import { ServientregaPlugin } from '../plugins/servientrega/servientrega.plugin';
import { PaymentMercadopagoPlugin } from '../plugins/payment-mercadopago/payment-mercadopago.plugin';
import { SalesReportPlugin } from '../plugins/sales-report/sales-report.plugin';
import { InvoiceClientPlugin } from '../plugins/invoice-client/invoice-client.plugin';
import { ResendEmailSender } from './mail/resend-email-sender';
import {
  IS_DEV,
  serverPort,
  staticDir,
  storeUrl,
  assetUploadDir,
} from './environment';
import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
import { DashboardPlugin } from '@vendure/dashboard/plugin';
import { MultivendorPlugin } from '../plugins/multivendor-plugin/multivendor.plugin';

const useS3Storage =
  !!process.env.MINIO_ENDPOINT || !!process.env.MINIO_BUCKET;

const assetServerPlugin = AssetServerPlugin.init({
  route: ROUTE.Assets,
  assetUploadDir,
  assetUrlPrefix:
    process.env.ASSET_URL_PREFIX ||
    (IS_DEV ? undefined : process.env.MINIO_PUBLIC_URL),
  namingStrategy: new DefaultAssetNamingStrategy(),
  ...(useS3Storage
    ? {
      storageStrategyFactory: configureS3AssetStorage({
        bucket: process.env.MINIO_BUCKET || 'e-assets',
        credentials: {
          accessKeyId:
            process.env.MINIO_ACCESS_KEY ||
            process.env.MINIO_ROOT_USER ||
            'minio-admin',
          secretAccessKey:
            process.env.MINIO_SECRET_KEY ||
            process.env.MINIO_ROOT_PASSWORD ||
            'minio-admin',
        },
        nativeS3Configuration: {
          endpoint:
            process.env.MINIO_ENDPOINT || 'http://localhost:9000',
          forcePathStyle: true,
          signatureVersion: 'v4',
          region: 'eu-west-1', // dummy requerido por aws-sdk
        },
      }),
    }
    : {}),
});


const emailTemplatePath = path.join(__dirname, '../', staticDir, 'email', 'templates');
const partialsPath = path.join(emailTemplatePath, 'partials');

if (!fs.existsSync(partialsPath)) {
  fs.mkdirSync(partialsPath, { recursive: true });
}

const emailPlugin = EmailPlugin.init({
  transport: { type: 'none' },

  emailSender: new ResendEmailSender(process.env.RESEND_API_KEY),

  route: ROUTE.Mailbox,
  handlers: [...defaultEmailHandlers],
  templateLoader: new FileBasedTemplateLoader(emailTemplatePath),
  globalTemplateVars: {
    fromAddress: '"EcommerShop" <ceo@ecommer.shop>',
    verifyEmailAddressUrl: `${storeUrl}${ROUTE_STORE.account.verify}`,
    passwordResetUrl: `${storeUrl}${ROUTE_STORE.account.resetPassword}`,
    changeEmailAddressUrl: `${storeUrl}${ROUTE_STORE.account.changeEmailAddress}`,
  },
});



export const plugins: VendureConfig['plugins'] = [
  MultivendorPlugin.init({
    platformFeePercent: 10,
    platformFeeSKU: "FEE"
  }),

  GraphiqlPlugin.init(),

  assetServerPlugin,

  ClerkPlugin.init(),

  DefaultSchedulerPlugin.init(),
  DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
  DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),

  emailPlugin,

  AdminUiPlugin.init({
    route: ROUTE.Admin,
    port: serverPort + 2,
    adminUiConfig: {
      defaultLanguage: LanguageCode.es,
      defaultLocale: 'CO',
    },
  }),

  DashboardPlugin.init({
    route: ROUTE.Dashboard,
    appDir: './dist/dashboard',
  }),

  PaymentPlugin.init({
    secretKey: process.env.PAYMENT_SECRET_KEY,
    currency: CURRENCY,
  }),

  PaymentMercadopagoPlugin.init({}),

  ServientregaPlugin.init({
    url: process.env.SERVIENTREGA_BASE!,
  }),

  SalesReportPlugin.init({}),

  InvoiceClientPlugin.init({
    invoiceServiceUrl: process.env.INVOICE_SERVICE_URL || 'http://localhost:3001/api',
    apiKey: process.env.INVOICE_SERVICE_API_KEY || '',
  }),
];
