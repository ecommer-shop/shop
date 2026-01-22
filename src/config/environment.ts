import 'dotenv/config';
import path from 'node:path';

/**
 * Flags y valores básicos que se usan en varios módulos de config.
 */
export const IS_DEV = process.env.APP_ENV === 'dev';

export const serverPort = Number(process.env.PORT) || 3000;
// 
export const storeUrl =
  'https://ecommer.shop';

export const staticDir = process.env.STATIC_DIR || '../static';

/**
 * Directorio base de assets estáticos (imágenes, plantillas de email, etc.)
 * Se usa en la config de AssetServer y EmailPlugin.
 */
export const assetUploadDir =
  process.env.ASSET_UPLOAD_DIR ||
  path.join(__dirname, '../static/assets');
