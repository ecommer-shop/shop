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

    async getPaymentSignature(ctx: RequestContext, amountInCents: number): Promise<string> {
        if (!this.options.secretKey) {
            throw new Error('PAYMENT_SECRET_KEY environment variable is not set');
        }
        if (!ctx.activeUserId) {
            throw new Error('No active user found');
        }
        const user = await this.userService.getUserById(ctx, ctx.activeUserId);
        if (!user?.id) {
            throw new Error('No active user found');
        }
        const order = await this.orderService.getActiveOrderForUser(ctx, user.id);
        if (!order) {
            throw new Error('No active order found');
        }
        const concatenated = `${order.code}${amountInCents}${this.options.currency}${this.options.secretKey}`; // todo: add expiration time
        const hash = crypto.createHash('sha256').update(concatenated).digest('hex');
        Logger.debug('PaymentService: Generated payment signature', hash);
        return hash;
    }
}