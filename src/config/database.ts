import type { VendureConfig } from '@vendure/core';
import path from 'node:path';
import { IS_DEV } from './environment';

const appName = process.argv[1]?.includes('index-worker') ? 'vendure-worker' : 'vendure-server';
process.env.PGAPPNAME = appName;

/**
 * `synchronize` solo en BD local de desarrollo.
 * Con BD compartida (stage/prod) usar `DB_SYNCHRONIZE=false` en .env — evita ALTER automáticos
 * (p. ej. columna `asset.name` NOT NULL con filas legacy en NULL).
 */
function resolveSynchronize(): boolean {
  if (process.env.DB_SYNCHRONIZE === 'false') {
    return false;
  }
  if (process.env.DB_SYNCHRONIZE === 'true') {
    return true;
  }
  return IS_DEV && process.env.NODE_ENV !== 'production';
}

/**
 * Config de TypeORM usada por Vendure.
 */
export const dbConnectionOptions: VendureConfig['dbConnectionOptions'] = {
  type: 'postgres',
  synchronize: resolveSynchronize(),
  logging: false,
  migrations: [path.join(__dirname, '../migrations/*.+(js|ts)')],

  ...(process.env.DATABASE_URL
    ? (() => {
        console.info('[config] Using DATABASE_URL for DB connection');
        const baseUrl = new URL(process.env.DATABASE_URL!);
        baseUrl.searchParams.set('application_name', appName);
        const base: any = { url: baseUrl.toString() };
        base.extra = { application_name: appName };

        if (process.env.DB_SSL === 'true') {
          base.ssl = { rejectUnauthorized: false };
          base.extra.ssl = { rejectUnauthorized: false };
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
          extra: { application_name: appName },
        };
      })()),
};
