import type { RequestContext } from '@vendure/core';

export interface DeliveryCostInput {
    origin: string;
    destination: string;
}

export interface DeliveryCostMoney {
    value: number;
    currency: string;
}

export interface DeliveryCostMetric {
    value: number;
    unit: string;
    text?: string;
}

export interface DeliveryCostResult {
    success: boolean;
    price?: DeliveryCostMoney;
    distance?: DeliveryCostMetric;
    duration?: DeliveryCostMetric;
    error?: string;
}

export interface DeliveryCostStrategy {
    calculate(ctx: RequestContext, input: DeliveryCostInput): Promise<DeliveryCostResult>;
}

export type DeliveryCostCalculator = (
    ctx: RequestContext,
    input: DeliveryCostInput,
) => Promise<DeliveryCostResult>;

export interface MessengerDomisDeliveryCostOptions {
    url?: string;
    apiKey?: string;
    timeoutMs?: number;
}

/**
 * Configure either `calculator` for a simple function, or `strategy` for a reusable class.
 * If neither is supplied, the plugin uses Messenger Domis with env-based configuration.
 */
export interface PluginInitOptions {
    calculator?: DeliveryCostCalculator;
    strategy?: DeliveryCostStrategy;
    messengerDomis?: MessengerDomisDeliveryCostOptions;
}
