import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PAYOUT_PLUGIN_OPTIONS, loggerCtx } from './constants';
import { PluginInitOptions } from './types';
import { PayoutBatch } from './entities/payout-batch.entity';
import { PayoutTransaction } from './entities/payout-transaction.entity';
import { PayoutCalculationService } from './services/payout-calculation.service';
import { PayoutCsvService } from './services/payout-csv.service';
import { PayoutAdminService } from './services/payout-admin.service';
import { PayoutResolver } from './api/payout.resolver';
import { AdminPayoutResolver } from './api/admin-payout.resolver';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [
        PluginCommonModule,
        TypeOrmModule.forFeature([PayoutBatch, PayoutTransaction]),
    ],
    entities: [PayoutBatch, PayoutTransaction],
    providers: [
        { provide: PAYOUT_PLUGIN_OPTIONS, useFactory: () => PayoutPlugin.options },
        PayoutCalculationService,
        PayoutCsvService,
        PayoutAdminService,
    ],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [PayoutResolver, AdminPayoutResolver],
    },
    dashboard: './dashboard/index.tsx',
    compatibility: '^3.0.0',
})
export class PayoutPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<PayoutPlugin> {
        this.options = options;
        return PayoutPlugin;
    }
}
