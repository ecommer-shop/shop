
import type { VendureConfig } from '@vendure/core';

export const authOptions: VendureConfig['authOptions'] = {
  tokenMethod: ['bearer', 'cookie'],
  superadminCredentials: {
    identifier: process.env.SUPERADMIN_USERNAME!,
    password: process.env.SUPERADMIN_PASSWORD!,
  },
  cookieOptions: {
    secret: process.env.COOKIE_SECRET,
  },
};
