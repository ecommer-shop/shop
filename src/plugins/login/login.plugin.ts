import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { LOGIN_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: LOGIN_PLUGIN_OPTIONS, useFactory: () => LoginPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    dashboard: './dashboard/index.tsx',
})
export class LoginPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<LoginPlugin> {
        this.options = options;
        return LoginPlugin;
    }
}
