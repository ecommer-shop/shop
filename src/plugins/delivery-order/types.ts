import type { RequestContext } from '@vendure/core';

export type DeliveryOrderPaymentMethod = 'Efectivo' | 'Transferencia';

export interface CreateDeliveryOrderInput {
    barrio_origen: string;
    barrio_destino: string;
    origen_lat_lng: string;
    destino_lat_lng: string;
    valor_producto: string;
    valor_servicio: string;
    metodo_pago: DeliveryOrderPaymentMethod;
    id_cliente: string;
    creado_por: string;
    telefono_cliente: string;
    observacion?: string;
    imagen?: string;
    tiempo_aproximado?: string;
}

export interface CreateDeliveryOrderResult {
    success: boolean;
    message?: string;
    id_documento?: string;
    fecha_creacion?: number;
    error?: string;
    missing_fields?: string[];
    required_fields?: string[];
}

export interface DeliveryOrderStrategy {
    create(ctx: RequestContext, input: CreateDeliveryOrderInput): Promise<CreateDeliveryOrderResult>;
}

export type DeliveryOrderCreator = (
    ctx: RequestContext,
    input: CreateDeliveryOrderInput,
) => Promise<CreateDeliveryOrderResult>;

export interface MessengerDomisDeliveryOrderOptions {
    url?: string;
    apiKey?: string;
    timeoutMs?: number;
}

/**
 * Configure either `creator` for a simple function, or `strategy` for a reusable provider client.
 * If neither is supplied, the plugin uses Messenger Domis with env-based configuration.
 */
export interface PluginInitOptions {
    creator?: DeliveryOrderCreator;
    strategy?: DeliveryOrderStrategy;
    messengerDomis?: MessengerDomisDeliveryOrderOptions;
}
