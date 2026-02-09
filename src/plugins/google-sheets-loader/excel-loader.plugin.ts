import * as path from 'path';
import { Injector, PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { EXCEL_LOADER_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { GoogleSheet } from './entities/google-sheet.entity';
import { adminApiExtensions } from './api/api-extensions';
import { GoogleSheetTranslation } from './entities/google-sheet-translation.entity';
import { ExcelImportService } from './services/excel-import.service';
import { ExcelImportResolver } from './api/excel-import.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: EXCEL_LOADER_PLUGIN_OPTIONS, useFactory: () => ExcelLoaderPlugin.options }, ExcelImportService, Injector],
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
        resolvers: [ExcelImportResolver]
    },
})
export class ExcelLoaderPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<ExcelLoaderPlugin> {
        this.options = options;
        return ExcelLoaderPlugin;
    }
}
