import { Inject, Injectable } from '@nestjs/common';

import { ENVIA_SHIPPING_PLUGIN_OPTIONS } from '../constants';
import { EnviaDefaultStrategy } from '../strategies/envia-shipping.strategy';
import type { EnviaShippingStrategy, PluginInitOptions } from '../types';

@Injectable()
export class EnviaShippingService {
    readonly strategy: EnviaShippingStrategy;

    constructor(
        @Inject(ENVIA_SHIPPING_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
    ) {
        this.strategy = this.options.strategy ?? new EnviaDefaultStrategy(this.options.envia);
    }
}
