import {
    Body,
    Controller,
    Headers,
    HttpCode,
    HttpException,
    HttpStatus,
    Inject,
    Post,
} from '@nestjs/common';
import { Logger } from '@vendure/core';

import { DELIVERY_ORDER_PLUGIN_OPTIONS } from '../constants';
import { DeliveryOrderService } from '../services/delivery-order.service';
import type { PluginInitOptions } from '../types';

const loggerCtx = 'DeliveryOrderWebhookController';

@Controller('api/delivery-order')
export class DeliveryOrderWebhookController {
    constructor(
        @Inject(DELIVERY_ORDER_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
        private readonly deliveryOrderService: DeliveryOrderService,
    ) {}

    @Post('status')
    @HttpCode(200)
    async updateDeliveryOrderStatus(
        @Body() payload: Record<string, unknown>,
        @Headers() headers: Record<string, string | string[] | undefined>,
    ) {
        this.validateWebhookSecret(headers);

        const result = await this.deliveryOrderService.updateStatus({
            ...payload,
            rawPayload: payload,
        });

        if (!result.success) {
            throw new HttpException(result.error || 'Invalid delivery status payload', HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    private validateWebhookSecret(headers: Record<string, string | string[] | undefined>): void {
        const expectedSecret =
            this.options.webhookSecret ||
            this.options.messengerDomis?.webhookSecret ||
            process.env.DELIVERY_ORDER_WEBHOOK_SECRET ||
            process.env.MESSENGER_DOMIS_WEBHOOK_SECRET ||
            process.env.DELIVERY_ORDER_WEBHOOK_API_KEY ||
            process.env.MESSENGER_DOMIS_WEBHOOK_API_KEY;

        if (!expectedSecret) {
            Logger.warn('Delivery order webhook secret is not configured', loggerCtx);
            return;
        }

        const providedSecret =
            this.firstHeader(headers['x-api-key']) ||
            this.firstHeader(headers['x-webhook-secret']) ||
            this.firstHeader(headers.authorization)?.replace(/^Bearer\s+/i, '');

        if (providedSecret !== expectedSecret) {
            throw new HttpException('Invalid delivery webhook secret', HttpStatus.UNAUTHORIZED);
        }
    }

    private firstHeader(value: string | string[] | undefined): string | null {
        if (Array.isArray(value)) {
            return value[0] || null;
        }

        return value || null;
    }
}
