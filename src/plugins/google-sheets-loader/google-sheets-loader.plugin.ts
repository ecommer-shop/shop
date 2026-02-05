import * as path from 'path';
import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { GOOGLE_SHEETS_LOADER_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { GoogleSheet } from './entities/google-sheet.entity';
import { GoogleSheetService } from './services/google-sheet.service';
import { GoogleSheetAdminResolver } from './api/google-sheet-admin.resolver';
import { adminApiExtensions } from './api/api-extensions';
import { GoogleSheetTranslation } from './entities/google-sheet-translation.entity';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: GOOGLE_SHEETS_LOADER_PLUGIN_OPTIONS, useFactory: () => GoogleSheetsLoaderPlugin.options }, GoogleSheetService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
    entities: [GoogleSheet, GoogleSheetTranslation],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [GoogleSheetAdminResolver]
    },
})
export class GoogleSheetsLoaderPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<GoogleSheetsLoaderPlugin> {
        this.options = options;
        return GoogleSheetsLoaderPlugin;
    }
}
