import { Inject, Injectable } from '@nestjs/common';
import { Logger, OrderService, RequestContext, UserService } from '@vendure/core';
import { PAYMENT_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import crypto from 'crypto';

@Injectable()
export class PaymentService {
    constructor(
        private readonly orderService: OrderService,
        private readonly userService: UserService,
        @Inject(PAYMENT_PLUGIN_OPTIONS) private readonly options: PluginInitOptions) { }

    async getPaymentSignature(ctx: RequestContext, amountInCents: number, paymentReference: string): Promise<string> {
        Logger.debug('PaymentService: Getting payment signature', JSON.stringify({
            amountInCents,
            paymentReference,
            currency: this.options.currency
        }));

        const integrityKey = this.options.integrityKey ?? this.options.secretKey;
        if (!integrityKey) {
            throw new Error('Wompi integrity key is not set (PAYMENT_INTEGRITY_KEY)');
        }

        const concatenated = `${paymentReference}${amountInCents}${this.options.currency}${integrityKey}`;
        Logger.debug('PaymentService: Concatenated string', concatenated);

        const hash = crypto.createHash('sha256').update(concatenated).digest('hex');
        Logger.debug('PaymentService: Generated payment signature', hash);

        return hash;
    }
}