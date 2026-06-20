import type { VendureConfig } from '@vendure/core';
import type { Request, Response, NextFunction } from 'express';
import { ROUTE } from '../constants';
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
      'https://ecommer.shop',
      'https://www.ecommer.shop',
      'https://admin.ecommer.shop',
      'https://stg.ecommer.shop',
      'https://admin-stg.ecommer.shop',
      process.env.STORE_URL,
      process.env.HOST_URL,
    ].filter(Boolean) as string[],
    credentials: true,
  },
  middleware: [
    {
      route: '/',
      beforeListen: true,
      handler: (req: Request, res: Response, next: NextFunction) => {
        if (req.method === 'GET' && req.path === '/') {
          res.redirect('/dashboard');
          return;
        }
        next();
      },
    },
  ],
};
