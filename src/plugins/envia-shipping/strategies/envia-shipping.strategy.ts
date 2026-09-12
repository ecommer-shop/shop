import type { EnviaShippingOptions, EnviaShippingStrategy } from '../types';

const DEFAULT_BASE_URLS: Record<string, string> = {
    sandbox: 'https://api-test.envia.com',
    production: 'https://api.envia.com',
};
const DEFAULT_TIMEOUT_MS = 10000;

export class EnviaDefaultStrategy implements EnviaShippingStrategy {
    private readonly token: string;
    private readonly baseUrl: string;
    private readonly timeoutMs: number;

    constructor(options: EnviaShippingOptions = {}) {
        const token = options.token || process.env.ENVIA_TOKEN;
        if (!token) {
            throw new Error('ENVIA_TOKEN environment variable is required');
        }
        this.token = token;

        const env = options.env || process.env.ENVIA_ENV || 'sandbox';
        if (env !== 'sandbox' && env !== 'production') {
            throw new Error(`ENVIA_ENV must be "sandbox" or "production", got "${env}"`);
        }
        this.baseUrl = DEFAULT_BASE_URLS[env];

        const configuredTimeoutMs = options.timeoutMs ?? Number(process.env.ENVIA_TIMEOUT_MS);
        this.timeoutMs =
            Number.isFinite(configuredTimeoutMs) && configuredTimeoutMs > 0
                ? configuredTimeoutMs
                : DEFAULT_TIMEOUT_MS;
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    getAuthHeaders(): { Authorization: string; 'Content-Type': string } {
        return {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        };
    }

    protected async fetchWithTimeout(
        path: string,
        init: RequestInit = {},
    ): Promise<Response> {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                ...init,
                headers: {
                    ...this.getAuthHeaders(),
                    ...(init.headers as Record<string, string> | undefined),
                },
                signal: controller.signal,
            });
            return response;
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error(`Envia API request timed out after ${this.timeoutMs}ms`);
            }
            throw error;
        } finally {
            clearTimeout(timeout);
        }
    }
}
