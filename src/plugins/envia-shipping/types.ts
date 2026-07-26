export interface EnviaShippingOptions {
    token?: string;
    env?: string;
    timeoutMs?: number;
}

export interface EnviaShippingStrategy {
    getBaseUrl(): string;
    getAuthHeaders(): { Authorization: string; 'Content-Type': string };
}

export interface PluginInitOptions {
    envia?: EnviaShippingOptions;
    strategy?: EnviaShippingStrategy;
}
