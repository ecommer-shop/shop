import type { RequestContext } from '@vendure/core';

import type {
    CreateDeliveryOrderInput,
    CreateDeliveryOrderResult,
    DeliveryOrderStrategy,
    MessengerDomisDeliveryOrderOptions,
} from '../types';

const DEFAULT_URL =
    'https://us-central1-messengerdomis-19924.cloudfunctions.net/crearDomicilio';
const DEFAULT_TIMEOUT_MS = 10000;

interface MessengerDomisCreateDeliveryResponse {
    success?: boolean;
    message?: string;
    id_documento?: string;
    fecha_creacion?: number;
    error?: string;
    missing_fields?: string[];
    required_fields?: string[];
}

export class MessengerDomisDeliveryOrderStrategy implements DeliveryOrderStrategy {
    private readonly url: string;
    private readonly apiKey: string;
    private readonly timeoutMs: number;

    constructor(options: MessengerDomisDeliveryOrderOptions = {}) {
        this.url =
            options.url ||
            process.env.DELIVERY_ORDER_API_URL ||
            process.env.MESSENGER_DOMIS_CREATE_DELIVERY_URL ||
            DEFAULT_URL;
        this.apiKey =
            options.apiKey ||
            process.env.DELIVERY_ORDER_API_KEY ||
            process.env.MESSENGER_DOMIS_API_KEY ||
            process.env.DELIVERY_COST_API_KEY ||
            '';

        const configuredTimeoutMs = options.timeoutMs ?? Number(process.env.DELIVERY_ORDER_TIMEOUT_MS);
        this.timeoutMs =
            Number.isFinite(configuredTimeoutMs) && configuredTimeoutMs > 0
                ? configuredTimeoutMs
                : DEFAULT_TIMEOUT_MS;
    }

    async create(
        ctx: RequestContext,
        input: CreateDeliveryOrderInput,
    ): Promise<CreateDeliveryOrderResult> {
        if (!this.apiKey) {
            throw new Error('DELIVERY_ORDER_API_KEY environment variable is not set');
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
                body: JSON.stringify(this.toProviderPayload(input)),
                signal: controller.signal,
            });

            const data = await response.json().catch(() => undefined) as
                | MessengerDomisCreateDeliveryResponse
                | undefined;

            if (!response.ok) {
                return {
                    success: false,
                    error:
                        data?.error ||
                        data?.message ||
                        `Create delivery API responded with status ${response.status}`,
                    missing_fields: data?.missing_fields,
                    required_fields: data?.required_fields,
                };
            }

            return this.normalizeResponse(data);
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error(`Create delivery API request timed out after ${this.timeoutMs}ms`);
            }
            throw error;
        } finally {
            clearTimeout(timeout);
        }
    }

    private toProviderPayload(input: CreateDeliveryOrderInput): Record<string, string> {
        const payload: Record<string, string> = {
            barrio_origen: input.barrio_origen,
            barrio_destino: input.barrio_destino,
            origen_lat_lng: input.origen_lat_lng,
            destino_lat_lng: input.destino_lat_lng,
            valor_producto: input.valor_producto,
            valor_servicio: input.valor_servicio,
            metodo_pago: input.metodo_pago,
            id_cliente: input.id_cliente,
            creado_por: input.creado_por,
            telefono_cliente: input.telefono_cliente,
        };

        this.addOptional(payload, 'observacion', input.observacion);
        this.addOptional(payload, 'imagen', input.imagen);
        this.addOptional(payload, 'tiempo_aproximado', input.tiempo_aproximado);

        return payload;
    }

    private addOptional(payload: Record<string, string>, key: string, value: string | undefined): void {
        if (value !== undefined) {
            payload[key] = value;
        }
    }

    private normalizeResponse(
        data: MessengerDomisCreateDeliveryResponse | undefined,
    ): CreateDeliveryOrderResult {
        if (!data) {
            throw new Error('Create delivery API returned an empty response');
        }

        return {
            success: data.success === true,
            message: data.message,
            id_documento: data.id_documento,
            fecha_creacion: data.fecha_creacion,
            error: data.error,
            missing_fields: data.missing_fields,
            required_fields: data.required_fields,
        };
    }
}
