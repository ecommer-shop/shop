import type { RequestContext } from '@vendure/core';

import type {
    DeliveryCostInput,
    DeliveryCostMetric,
    DeliveryCostMoney,
    DeliveryCostResult,
    DeliveryCostStrategy,
    MessengerDomisDeliveryCostOptions,
} from '../types';

const DEFAULT_URL =
    'https://us-central1-messengerdomis-19924.cloudfunctions.net/calcularCostoDelivery';
const DEFAULT_TIMEOUT_MS = 10000;

interface MessengerDomisResponse {
    success?: boolean;
    price?: Partial<DeliveryCostMoney>;
    distance?: Partial<DeliveryCostMetric>;
    duration?: Partial<DeliveryCostMetric>;
    error?: string;
    message?: string;
}

export class MessengerDomisDeliveryCostStrategy implements DeliveryCostStrategy {
    private readonly url: string;
    private readonly apiKey: string;
    private readonly timeoutMs: number;

    constructor(options: MessengerDomisDeliveryCostOptions = {}) {
        this.url =
            options.url ||
            process.env.DELIVERY_COST_API_URL ||
            process.env.MESSENGER_DOMIS_DELIVERY_COST_URL ||
            DEFAULT_URL;
        this.apiKey =
            options.apiKey ||
            process.env.DELIVERY_COST_API_KEY ||
            process.env.MESSENGER_DOMIS_API_KEY ||
            '';
        const configuredTimeoutMs = options.timeoutMs ?? Number(process.env.DELIVERY_COST_TIMEOUT_MS);
        this.timeoutMs =
            Number.isFinite(configuredTimeoutMs) && configuredTimeoutMs > 0
                ? configuredTimeoutMs
                : DEFAULT_TIMEOUT_MS;
    }

    async calculate(
        ctx: RequestContext,
        input: DeliveryCostInput,
    ): Promise<DeliveryCostResult> {
        if (!this.apiKey) {
            throw new Error('DELIVERY_COST_API_KEY environment variable is not set');
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                },
                body: JSON.stringify({
                    origin: input.origin,
                    destination: input.destination,
                }),
                signal: controller.signal,
            });

            const data = await response.json().catch(() => undefined) as MessengerDomisResponse | undefined;

            if (!response.ok) {
                throw new Error(data?.message || data?.error || `Delivery API responded with status ${response.status}`);
            }

            return this.normalizeResponse(data);
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error(`Delivery API request timed out after ${this.timeoutMs}ms`);
            }
            throw error;
        } finally {
            clearTimeout(timeout);
        }
    }

    private normalizeResponse(data: MessengerDomisResponse | undefined): DeliveryCostResult {
        if (!data) {
            throw new Error('Delivery API returned an empty response');
        }

        if (data.success === false) {
            return {
                success: false,
                error: data.error || data.message || 'Delivery API could not calculate the price',
            };
        }

        if (data.price?.value == null || !data.price.currency) {
            throw new Error('Delivery API returned an invalid price');
        }

        return {
            success: true,
            price: {
                value: Number(data.price.value),
                currency: data.price.currency,
            },
            distance: this.normalizeMetric(data.distance),
            duration: this.normalizeMetric(data.duration),
        };
    }

    private normalizeMetric(metric: Partial<DeliveryCostMetric> | undefined): DeliveryCostMetric | undefined {
        if (metric?.value == null || !metric.unit) {
            return undefined;
        }

        return {
            value: Number(metric.value),
            unit: metric.unit,
            text: metric.text,
        };
    }
}
