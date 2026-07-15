export const WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS = Symbol('WOMPI_SUBSCRIPTION_PLUGIN_OPTIONS');
export const loggerCtx = 'WompiSubscriptionPlugin';

export const FEATURE_CODES = {
    MAX_PRODUCTS: 'max_products',
    MAX_VARIATIONS: 'max_variations',
    AI_ACCESS: 'ai_access',
    ELECTRONIC_BILLING: 'electronic_billing',
} as const;

export const DEFAULT_PLAN_NAMES = {
    FREE: 'Free',
    TIENDA: 'Tienda',
    OMNICHANNEL: 'Omnichannel',
} as const;

export const GRACE_PERIOD_DAYS = 15;
export const SUSPENSION_DAYS = 30;
export const MANUAL_RENEWAL_REMINDER_DAYS = 5;
export const FALLBACK_PRODUCT_LIMIT = 15;
export const FALLBACK_VARIANT_LIMIT = 0;

export const PLAN_HIERARCHY: Record<string, number> = {
    [DEFAULT_PLAN_NAMES.FREE]: 0,
    [DEFAULT_PLAN_NAMES.TIENDA]: 1,
    [DEFAULT_PLAN_NAMES.OMNICHANNEL]: 2,
};
