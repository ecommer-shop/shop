import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { MY_NEW_FEATURE_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { ElectronicInvoiceService } from './services/electronic-invoice.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: MY_NEW_FEATURE_PLUGIN_OPTIONS, useFactory: () => MyNewFeaturePlugin.options }, ElectronicInvoiceService, ElectronicInvoiceService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
})
export class MyNewFeaturePlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<MyNewFeaturePlugin> {
        this.options = options;
        return MyNewFeaturePlugin;
    }
}
