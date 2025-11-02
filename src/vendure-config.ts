import {
  DefaultJobQueuePlugin,
  DefaultSchedulerPlugin,
  DefaultSearchPlugin,
  VendureConfig,
  LanguageCode,
  DefaultLogger,
  LogLevel,
  DefaultAssetNamingStrategy,
} from '@vendure/core';
import {
  defaultEmailHandlers,
  EmailPlugin,
  FileBasedTemplateLoader,
} from '@vendure/email-plugin';
import { AssetServerPlugin, configureS3AssetStorage } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { GraphiqlPlugin } from '@vendure/graphiql-plugin';
import 'dotenv/config';
import path from 'path';
import { ROUTE, ROUTE_STORE } from './consts';
import { PaymentPlugin } from './plugins/payment/payment.plugin';
import { CURRENCY } from './plugins/payment/constants';
import { PaymentPaymentHandler } from './plugins/payment/payment-method-handler';
import { ResendEmailSender } from './config/mail/resend-email-sender';
import { Auth0Plugin } from './plugins/auth0/auth0.plugin';
import { ServientregaPlugin } from './plugins/servientrega/servientrega.plugin';

const IS_DEV = process.env.APP_ENV === 'dev';
const serverPort = +process.env.PORT || 3000;
const storeUrl = process.env.STORE_URL || `https://ecommer.shop`;
const staticDir = process.env.STATIC_DIR || `../static`;

export const config: VendureConfig = {
  logger: new DefaultLogger({
    level: IS_DEV ? LogLevel.Debug : LogLevel.Info,
  }),
  apiOptions: {
    port: serverPort,
    adminApiPath: ROUTE.Admin_Api,
    shopApiPath: ROUTE.Shop_Api,
    // The following options are useful in development mode,
    // but are best turned off for production for security
    // reasons.
    ...(IS_DEV
      ? {
        adminApiDebug: true,
        shopApiDebug: true,
      }
      : {}),
  },
  authOptions: {
    tokenMethod: ['bearer', 'cookie'],
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_USERNAME,
      password: process.env.SUPERADMIN_PASSWORD,
    },
    cookieOptions: {
      secret: process.env.COOKIE_SECRET,
    },
  },
  dbConnectionOptions: {
    type: 'postgres',
    // See the README.md "Migrations" section for an explanation of
    // the `synchronize` and `migrations` options.
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*.+(js|ts)')],
    logging: false,
    // Prefer DATABASE_URL (for e.g. Railway) but fall back to per-value env vars for local dev
    ...(process.env.DATABASE_URL
      ? (() => {
        console.info('[config] Using DATABASE_URL for DB connection');
        const base: any = {
          url: process.env.DATABASE_URL,
        };
        // Optional SSL toggle: set DB_SSL=true in production if SSL required
        if (process.env.DB_SSL === 'true') {
          // TypeORM/pg often expects an `ssl` boolean or object at the top level
          base.ssl = { rejectUnauthorized: false };
          base.extra = { ssl: { rejectUnauthorized: false } };
        }
        return base;
      })()
      : (() => {
        console.info('[config] Using individual DB_* env vars for DB connection');
        return {
          database: process.env.DB_NAME,
          schema: process.env.DB_SCHEMA,
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
        };
      })()),
  },
  paymentOptions: {
    paymentMethodHandlers: [PaymentPaymentHandler],
  },
  // When adding or altering custom field definitions, the database will
  // need to be updated. See the "Migrations" section in README.md.
  customFields: {
    ProductVariant: [
      {
        name: 'weight',
        type: 'float',
        label: [
          { languageCode: LanguageCode.en, value: 'Weight (grams)' },
          { languageCode: LanguageCode.es, value: 'Peso (gramos)' },
        ],
        description:[
          { languageCode: LanguageCode.en, value: 'Product weight in grams' },
          { languageCode: LanguageCode.es, value: 'Peso del producto en gramos' },]
        
      },
      {
        name: 'height',
        type: 'float',
        label: [
          { languageCode: LanguageCode.en, value: 'Height (cm)' },
          { languageCode: LanguageCode.es, value: 'Altura (cm)' },
        ],
        description: [
          { languageCode: LanguageCode.en, value: 'Product height in centimeters' },
          { languageCode: LanguageCode.es, value: 'Altura del producto en centímetros' },
        ]
      },
      {
        name: 'width',
        type: 'float',
        label: [
          { languageCode: LanguageCode.en, value: 'Width (cm)' },
          { languageCode: LanguageCode.es, value: 'Ancho (cm)' },
        ],
        description: [
          { languageCode: LanguageCode.en, value: 'Product width in centimeters' },
          { languageCode: LanguageCode.es, value: 'Ancho del producto en centímetros' },
        ]
      },
    ],
  },
  plugins: [
    GraphiqlPlugin.init(),
    AssetServerPlugin.init({
      route: ROUTE.Assets,
      assetUploadDir:
        process.env.ASSET_UPLOAD_DIR ||
        path.join(__dirname, '../static/assets'),
      // For local dev, the correct value for assetUrlPrefix should
      // be guessed correctly, but for production it will usually need
      // to be set manually to match your production url.
      assetUrlPrefix: process.env.ASSET_URL_PREFIX || (IS_DEV ? undefined : 'https://minio-e.up.railway.app/vendure-assets/'),
      namingStrategy: new DefaultAssetNamingStrategy(),
      storageStrategyFactory: configureS3AssetStorage({
        bucket: process.env.MINIO_BUCKET || 'e-assets',
        credentials: {
          accessKeyId: process.env.MINIO_ACCESS_KEY || process.env.MINIO_ROOT_USER || 'minio-admin',
          secretAccessKey: process.env.MINIO_SECRET_KEY || process.env.MINIO_ROOT_PASSWORD || 'minio-admin',
        },
        nativeS3Configuration: {
          endpoint: process.env.MINIO_ENDPOINT || 'http://localhost:9000',
          forcePathStyle: true,
          signatureVersion: 'v4',
          region: 'eu-west-1', // dummy value, required by aws sdk
        },
      }),
    }),
    Auth0Plugin.init({
      domain: process.env.AUTH0_DOMAIN || '',
      audience: process.env.AUTH0_AUDIENCE || '',
    }),
    DefaultSchedulerPlugin.init(),
    DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
    DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
    EmailPlugin.init({
      transport: { type: 'none' },
      emailSender: new ResendEmailSender(process.env.RESEND_API_KEY),
      route: ROUTE.Mailbox,
      handlers: defaultEmailHandlers,
      templateLoader: new FileBasedTemplateLoader(
        path.join(__dirname, `${staticDir}/email/templates`)
      ),
      globalTemplateVars: {
        fromAddress: 'noreply <ron@rigeltoth.com>',
        verifyEmailAddressUrl: `${storeUrl}${ROUTE_STORE.account.verify}`,
        passwordResetUrl: `${storeUrl}${ROUTE_STORE.account.resetPassword}`,
        changeEmailAddressUrl: `${storeUrl}${ROUTE_STORE.account.changeEmailAddress}`,
      },
    }),
    AdminUiPlugin.init({
      route: ROUTE.Admin,
      port: serverPort + 2,
      adminUiConfig: {
        defaultLanguage: LanguageCode.es,
        defaultLocale: 'CO',
      },
    }),
    PaymentPlugin.init({
      secretKey: process.env.PAYMENT_SECRET_KEY,
      currency: CURRENCY, // TODO: set the whole currency to COP
    }),
    ServientregaPlugin.init({
      url: process.env.SERVIENTREGA_BASE ?? ''
    }),
  ],
};
