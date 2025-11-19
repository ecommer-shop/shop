import type { VendureConfig } from '@vendure/core';
import { ROUTE } from '../consts';
import { IS_DEV, serverPort } from './environment';

export const apiOptions: VendureConfig['apiOptions'] = {
  port: serverPort,
  adminApiPath: ROUTE.Admin_Api,
  shopApiPath: ROUTE.Shop_Api,
  ...(IS_DEV
    ? {
        adminApiDebug: true,
        shopApiDebug: true,
      }
    : {}),
};
