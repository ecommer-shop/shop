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

        if (!this.options.secretKey) {
            throw new Error('PAYMENT_SECRET_KEY environment variable is not set');
        }

        const concatenated = `${paymentReference}${amountInCents}${this.options.currency}${this.options.secretKey}`;
        Logger.debug('PaymentService: Concatenated string', concatenated);

        const hash = crypto.createHash('sha256').update(concatenated).digest('hex');
        Logger.debug('PaymentService: Generated payment signature', hash);

        return hash;
    }
}