import { Inject, Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';

import { DELIVERY_ORDER_PLUGIN_OPTIONS } from '../constants';
import { MessengerDomisDeliveryOrderStrategy } from '../strategies/messenger-domis-delivery-order.strategy';
import type {
    CreateDeliveryOrderInput,
    CreateDeliveryOrderResult,
    DeliveryOrderStrategy,
    PluginInitOptions,
} from '../types';

const REQUIRED_FIELDS: Array<keyof CreateDeliveryOrderInput> = [
    'barrio_origen',
    'barrio_destino',
    'origen_lat_lng',
    'destino_lat_lng',
    'valor_producto',
    'valor_servicio',
    'metodo_pago',
    'id_cliente',
    'creado_por',
    'telefono_cliente',
];

const VALID_PAYMENT_METHODS = ['Efectivo', 'Transferencia'];

@Injectable()
export class DeliveryOrderService {
    private readonly strategy: DeliveryOrderStrategy;

    constructor(
        @Inject(DELIVERY_ORDER_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
    ) {
        this.strategy =
            this.options.strategy ??
            new MessengerDomisDeliveryOrderStrategy(this.options.messengerDomis);
    }

    async create(ctx: RequestContext, input: CreateDeliveryOrderInput): Promise<CreateDeliveryOrderResult> {
        const validation = this.validateInput(input);
        if (validation) {
            return validation;
        }

        try {
            const result = this.options.creator
                ? await this.options.creator(ctx, input)
                : await this.strategy.create(ctx, input);

            return this.normalizeResult(result);
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Could not create delivery order',
            };
        }
    }

    private validateInput(input: CreateDeliveryOrderInput): CreateDeliveryOrderResult | undefined {
        const missingFields = REQUIRED_FIELDS.filter(field => !this.hasValue(input[field]));

        if (missingFields.length) {
            return {
                success: false,
                error: 'Campos obligatorios faltantes',
                missing_fields: missingFields,
                required_fields: REQUIRED_FIELDS,
            };
        }

        const originValidation = this.validateCoordinatePair(input.origen_lat_lng, 'origen_lat_lng');
        if (originValidation) {
            return originValidation;
        }

        const destinationValidation = this.validateCoordinatePair(input.destino_lat_lng, 'destino_lat_lng');
        if (destinationValidation) {
            return destinationValidation;
        }

        if (!VALID_PAYMENT_METHODS.includes(input.metodo_pago)) {
            return {
                success: false,
                error: 'metodo_pago debe ser exactamente "Efectivo" o "Transferencia"',
            };
        }

        return undefined;
    }

    private hasValue(value: unknown): boolean {
        return typeof value === 'string' ? value.trim().length > 0 : value != null;
    }

    private validateCoordinatePair(value: string, field: string): CreateDeliveryOrderResult | undefined {
        const parts = value.split(',');
        const [lat, lng] = parts.map(part => Number(part.trim()));

        if (
            parts.length !== 2 ||
            !Number.isFinite(lat) ||
            !Number.isFinite(lng) ||
            lat < -90 ||
            lat > 90 ||
            lng < -180 ||
            lng > 180
        ) {
            return {
                success: false,
                error: `${field} debe usar formato "lat,lng" con coordenadas validas`,
            };
        }

        return undefined;
    }

    private normalizeResult(result: CreateDeliveryOrderResult): CreateDeliveryOrderResult {
        return {
            success: result.success === true,
            message: result.message,
            id_documento: result.id_documento,
            fecha_creacion: result.fecha_creacion,
            error: result.error,
            missing_fields: result.missing_fields,
            required_fields: result.required_fields,
        };
    }
}
