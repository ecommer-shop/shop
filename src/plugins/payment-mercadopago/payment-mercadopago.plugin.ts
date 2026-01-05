import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS } from './constants';
import { MercadoPagoController } from './api/payment-mercadopago.controller';
import { PluginInitOptions } from './types';
import { MercadoPagoService } from './services/mercado-pago.service';
import { MercadoPagoAdminResolver } from './api/mercado-pago-admin.resolver';
import { MercadoPagoController } from './api/mercado-pago.controller';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    controllers: [MercadoPagoController],
    providers: [{ provide: PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS, useFactory: () => PaymentMercadopagoPlugin.options }, MercadoPagoService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [MercadoPagoAdminResolver]
    },
})
export class PaymentMercadopagoPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<PaymentMercadopagoPlugin> {
        this.options = options;
        return PaymentMercadopagoPlugin;
    }
}
