import { PluginCommonModule, VendurePlugin } from '@vendure/core';

@VendurePlugin({
    imports: [PluginCommonModule],
    dashboard: './dashboard/index.tsx',
    compatibility: '^3.0.0',
})
export class CommandPalettePlugin {}
