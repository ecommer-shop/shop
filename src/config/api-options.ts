import type { VendureConfig } from '@vendure/core';
import { ROUTE } from '../consts';
import { IS_DEV, serverPort } from './environment';

export const apiOptions: VendureConfig['apiOptions'] = {
  port: serverPort,
  adminApiPath: ROUTE.AdminApi,
  shopApiPath: ROUTE.ShopApi,
  ...(IS_DEV
    ? {
      adminApiDebug: true,
      shopApiDebug: true,
    }
    : {}),
  cors: {
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:3001',
      'https://store-next-stage.up.railway.app',
      process.env.HOST_URL as string,
    ]
  }
};
