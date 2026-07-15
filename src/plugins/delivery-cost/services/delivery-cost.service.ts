import { Inject, Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';

import { DELIVERY_COST_PLUGIN_OPTIONS } from '../constants';
import { MessengerDomisDeliveryCostStrategy } from '../strategies/messenger-domis-delivery-cost.strategy';
import type { DeliveryCostInput, DeliveryCostResult, DeliveryCostStrategy, PluginInitOptions } from '../types';

@Injectable()
export class DeliveryCostService {
    private readonly strategy: DeliveryCostStrategy;

    constructor(
        @Inject(DELIVERY_COST_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
    ) {
        this.strategy =
            this.options.strategy ??
            new MessengerDomisDeliveryCostStrategy(this.options.messengerDomis);
    }

    async calculate(ctx: RequestContext, input: DeliveryCostInput): Promise<DeliveryCostResult> {
        this.validateInput(input);

        try {
            const result = this.options.calculator
                ? await this.options.calculator(ctx, input)
                : await this.strategy.calculate(ctx, input);

            return this.normalizeResult(result);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Could not calculate delivery cost',
            };
        }
    }

    private validateInput(input: DeliveryCostInput): void {
        this.validateCoordinatePair(input.origin, 'origin');
        this.validateCoordinatePair(input.destination, 'destination');
    }

    private validateCoordinatePair(value: string, field: string): void {
        const [lat, lng] = value.split(',').map(part => Number(part.trim()));

        if (
            value.split(',').length !== 2 ||
            !Number.isFinite(lat) ||
            !Number.isFinite(lng) ||
            lat < -90 ||
            lat > 90 ||
            lng < -180 ||
            lng > 180
        ) {
            throw new Error(`${field} must use "latitude,longitude" format`);
        }
    }

    private normalizeResult(result: DeliveryCostResult): DeliveryCostResult {
        if (!result.success) {
            return {
                success: false,
                error: result.error || 'Could not calculate delivery cost',
            };
        }

        if (!result.price) {
            return {
                success: false,
                error: 'Delivery calculator did not return a price',
            };
        }

        return {
            ...result,
            success: true,
            price: {
                value: Number(result.price.value),
                currency: result.price.currency,
            },
        };
    }
}
