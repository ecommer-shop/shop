import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { SALES_REPORT_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { SalesReportService } from './services/sales-report.service';
import { SalesReportResolver } from './api/sales-report.resolver';
import { shopApiExtensions } from './api/api-extensions';
import { SalesReport } from './entities/sales-report.entity';

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [SalesReport as Type<any>],
  providers: [
    {
      provide: SALES_REPORT_PLUGIN_OPTIONS,
      useFactory: () => SalesReportPlugin.options,
    },
    SalesReportService,
  ],
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [SalesReportResolver],
  },
  compatibility: '^3.0.0',
})
export class SalesReportPlugin {
  static options: PluginInitOptions;

  static init(options: PluginInitOptions = {}): Type<SalesReportPlugin> {
    this.options = options;
    return SalesReportPlugin;
  }
}


