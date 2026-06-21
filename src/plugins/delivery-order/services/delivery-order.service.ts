import { Inject, Injectable } from '@nestjs/common';
import { Logger, RequestContext, TransactionalConnection } from '@vendure/core';

import { DELIVERY_ORDER_PLUGIN_OPTIONS } from '../constants';
import {
    ExternalDeliveryOrder,
    MESSENGER_DOMIS_PROVIDER_CODE,
} from '../entities/external-delivery-order.entity';
import { MessengerDomisDeliveryOrderStrategy } from '../strategies/messenger-domis-delivery-order.strategy';
import type {
    CreateDeliveryOrderInput,
    CreateDeliveryOrderResult,
    DeliveryOrderStrategy,
    DeliveryOrderStatusUpdateInput,
    DeliveryOrderStatusUpdateResult,
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
const loggerCtx = 'DeliveryOrderService';

interface NormalizedDeliveryOrderStatusUpdate {
    provider: string;
    providerDocumentId: string | null;
    orderId: string | null;
    orderCode: string | null;
    sellerChannelCode: string | null;
    sellerName: string | null;
    status: string | null;
    statusLabel: string | null;
    trackingUrl: string | null;
    rawPayload?: Record<string, unknown>;
}

@Injectable()
export class DeliveryOrderService {
    private readonly strategy: DeliveryOrderStrategy;

    constructor(
        @Inject(DELIVERY_ORDER_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
        private readonly connection: TransactionalConnection,
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

            const normalized = this.normalizeResult(result);

            if (normalized.success) {
                await this.saveCreatedDeliveryOrder(input, normalized);
            }

            return normalized;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Could not create delivery order',
            };
        }
    }

    async findByOrderCode(ctx: RequestContext, orderCode: string): Promise<ExternalDeliveryOrder[]> {
        if (!this.hasValue(orderCode)) {
            return [];
        }

        return this.connection.rawConnection.getRepository(ExternalDeliveryOrder).find({
            where: { orderCode: orderCode.trim() },
            order: { createdAt: 'ASC' },
        });
    }

    async updateStatus(input: DeliveryOrderStatusUpdateInput): Promise<DeliveryOrderStatusUpdateResult> {
        const normalized = this.normalizeStatusUpdateInput(input);
        if (!normalized.status) {
            return {
                success: false,
                error: 'status es obligatorio',
            };
        }

        if (!normalized.providerDocumentId && !normalized.orderCode) {
            return {
                success: false,
                error: 'providerDocumentId o orderCode es obligatorio',
            };
        }

        const deliveryOrder = await this.findOrCreateDeliveryOrderForStatusUpdate({
            ...normalized,
            status: normalized.status,
        });
        deliveryOrder.status = normalized.status;
        deliveryOrder.statusLabel = normalized.statusLabel;
        deliveryOrder.trackingUrl = normalized.trackingUrl;
        deliveryOrder.statusUpdatedAt = new Date();
        deliveryOrder.lastPayload = normalized.rawPayload ?? (input as Record<string, unknown>);

        const saved = await this.connection.rawConnection
            .getRepository(ExternalDeliveryOrder)
            .save(deliveryOrder);

        return {
            success: true,
            deliveryOrder: saved,
        };
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

    private async saveCreatedDeliveryOrder(
        input: CreateDeliveryOrderInput,
        result: CreateDeliveryOrderResult,
    ): Promise<void> {
        if (!result.id_documento) {
            Logger.warn('Create delivery response did not include id_documento', loggerCtx);
            return;
        }

        const repository = this.connection.rawConnection.getRepository(ExternalDeliveryOrder);
        const provider = MESSENGER_DOMIS_PROVIDER_CODE;
        const existing = await repository.findOne({
            where: {
                provider,
                providerDocumentId: result.id_documento,
            },
        });

        const deliveryOrder = existing ?? new ExternalDeliveryOrder();
        deliveryOrder.provider = provider;
        deliveryOrder.providerDocumentId = result.id_documento;
        deliveryOrder.orderId = this.toNullableString(input.orderId);
        deliveryOrder.orderCode = this.toNullableString(input.orderCode);
        deliveryOrder.sellerChannelCode = this.toNullableString(input.sellerChannelCode);
        deliveryOrder.sellerName = this.toNullableString(input.sellerName);
        deliveryOrder.status = existing?.status ?? 'CREATED';
        deliveryOrder.statusLabel = existing?.statusLabel ?? result.message ?? 'Domicilio creado';
        deliveryOrder.trackingUrl = existing?.trackingUrl ?? null;
        deliveryOrder.statusUpdatedAt = existing?.statusUpdatedAt ?? new Date();
        deliveryOrder.lastPayload = {
            providerResult: result,
        };

        await repository.save(deliveryOrder);
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

    private async findOrCreateDeliveryOrderForStatusUpdate(
        input: NormalizedDeliveryOrderStatusUpdate & { status: string },
    ): Promise<ExternalDeliveryOrder> {
        const repository = this.connection.rawConnection.getRepository(ExternalDeliveryOrder);

        if (input.providerDocumentId) {
            const byProviderDocumentId = await repository.findOne({
                where: {
                    provider: input.provider,
                    providerDocumentId: input.providerDocumentId,
                },
            });

            if (byProviderDocumentId) {
                return byProviderDocumentId;
            }
        }

        if (input.orderCode && input.sellerChannelCode) {
            const byOrderAndSeller = await repository.findOne({
                where: {
                    orderCode: input.orderCode,
                    sellerChannelCode: input.sellerChannelCode,
                    provider: input.provider,
                },
            });

            if (byOrderAndSeller) {
                return byOrderAndSeller;
            }
        }

        return new ExternalDeliveryOrder({
            orderId: this.toNullableString(input.orderId),
            orderCode: this.toNullableString(input.orderCode),
            sellerChannelCode: this.toNullableString(input.sellerChannelCode),
            sellerName: this.toNullableString(input.sellerName),
            provider: input.provider,
            providerDocumentId: this.toNullableString(input.providerDocumentId),
        });
    }

    private normalizeStatusUpdateInput(input: DeliveryOrderStatusUpdateInput): NormalizedDeliveryOrderStatusUpdate {
        const raw = input as Record<string, unknown>;

        return {
            provider:
                this.firstString(input.provider, raw.provider_code) ||
                MESSENGER_DOMIS_PROVIDER_CODE,
            providerDocumentId: this.firstString(
                input.providerDocumentId,
                input.id_documento,
                raw.deliveryId,
                raw.delivery_id,
                raw.externalId,
                raw.external_id,
                raw.idDocumento,
                raw.id,
            ),
            orderId: this.firstString(input.orderId, raw.order_id),
            orderCode: this.firstString(input.orderCode, raw.order_code),
            sellerChannelCode: this.firstString(input.sellerChannelCode, raw.seller_channel_code),
            sellerName: this.firstString(input.sellerName, raw.seller_name),
            status: this.firstString(input.status, input.estado, input.state, raw.deliveryStatus),
            statusLabel: this.firstString(
                input.statusLabel,
                input.message,
                input.mensaje,
                raw.description,
                raw.descripcion,
                raw.status_text,
                raw.estado_texto,
            ),
            trackingUrl: this.firstString(input.trackingUrl, input.tracking_url, raw.url_rastreo),
            rawPayload: input.rawPayload,
        };
    }

    private firstString(...values: unknown[]): string | null {
        const value = values.find(item => typeof item === 'string' && item.trim().length > 0);
        return typeof value === 'string' ? value.trim() : null;
    }

    private toNullableString(value: unknown): string | null {
        return this.firstString(value);
    }
}
