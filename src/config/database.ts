import type { VendureConfig } from '@vendure/core';
import path from 'node:path';
import { IS_DEV } from './environment';

/**
 * Config de TypeORM usada por Vendure.
 */
export const dbConnectionOptions: VendureConfig['dbConnectionOptions'] = {
  type: 'postgres',
  synchronize: IS_DEV,
  logging: false,
  migrations: [path.join(__dirname, '../migrations/*.+(js|ts)')],

  ...(process.env.DATABASE_URL
    ? (() => {
        console.info('[config] Using DATABASE_URL for DB connection');
        const base: any = { url: process.env.DATABASE_URL };

        if (process.env.DB_SSL === 'true') {
          base.ssl = { rejectUnauthorized: false };
          base.extra = { ssl: { rejectUnauthorized: false } };
        }
        return base;
      })()
    : (() => {
        console.info(
          '[config] Using individual DB_* env vars for DB connection',
        );
        return {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT) || 5432,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          schema: process.env.DB_SCHEMA,
        };
      })()),
};
