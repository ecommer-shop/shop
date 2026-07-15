import { VendurePlugin } from '@vendure/core';

@VendurePlugin({
  compatibility: '^3.0.0',
  dashboard: './dashboard/index.tsx',
})
export class SellerSettingsVisibilityPlugin {}
