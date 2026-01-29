import { Inject, Injectable, Logger } from '@nestjs/common';
import { ID, Product, RequestContext, TransactionalConnection } from '@vendure/core';
import { PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import { CreatePreferenceDto, CreatePreferenceResponse } from '../models/create-preference.dto';
import { mercadoPagoConfig, assertMercadoPagoReady } from '../../../config/mercadopago.config';
import { Preference } from 'mercadopago';
import { IS_DEV, storeUrl } from '../../../config/environment';

@Injectable()
export class MercadoPagoService {
    private readonly logger = new Logger('MercadoPagoService');

    constructor(
        private connection: TransactionalConnection,
        @Inject(PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS) private options: PluginInitOptions
    ) {}

    /**
     * Crea una preferencia de pago en Mercado Pago
     */
    async createPreference(dto: CreatePreferenceDto): Promise<CreatePreferenceResponse> {
        // Validar que MercadoPago esté configurado
        assertMercadoPagoReady();

        if (!mercadoPagoConfig.client) {
            throw new Error('MercadoPago client no está inicializado');
        }

        // Validar datos de entrada
        this.validatePreferenceData(dto);

        try {
            // Crear instancia de Preference
            const preferences = new Preference(mercadoPagoConfig.client);

            // Preparar items para la preferencia
            const items = dto.productos.map(producto => ({
                id: producto.id,
                title: producto.title,
                description: producto.description || '',
                quantity: producto.quantity,
                unit_price: producto.unit_price,
                currency_id: producto.currency_id || 'COP', // Por defecto COP para Colombia
            }));

            // Configurar URLs de retorno
            const baseUrl = storeUrl;
            const backUrls = {
                success: `${baseUrl}/checkout/success`,
                failure: `${baseUrl}/checkout/failure`,
                pending: `${baseUrl}/checkout/pending`,
            };

            // Crear la preferencia
            const preferenceData = {
                items,
                payer: dto.email ? { email: dto.email } : undefined,
                back_urls: backUrls,
                auto_return: 'approved' as const,
                ...(IS_DEV && { statement_descriptor: 'TEST - Mercado Pago' }),
            };

            this.logger.debug(`Creando preferencia con ${items.length} items`);
            const preference = await preferences.create({ body: preferenceData });

            if (!preference || !preference.id || !preference.init_point) {
                throw new Error('La respuesta de MercadoPago no contiene los datos esperados');
            }

            this.logger.debug(`Preferencia creada exitosamente: ${preference.id}`);

            return {
                preferenceId: preference.id,
                init_point: preference.init_point,
            };
        } catch (error: any) {
            this.logger.error(`Error al crear preferencia en MercadoPago: ${error.message}`, error.stack);
            throw new Error(`Error al crear preferencia en MercadoPago: ${error.message}`);
        }
    }

    /**
     * Valida los datos de entrada para crear una preferencia
     */
    private validatePreferenceData(dto: CreatePreferenceDto): void {
        if (!dto.productos || !Array.isArray(dto.productos) || dto.productos.length === 0) {
            throw new Error('Debe proporcionar al menos un producto');
        }

        if (!dto.email && !dto.userId) {
            throw new Error('Debe proporcionar email o userId');
        }

        // Validar cada producto
        dto.productos.forEach((producto, index) => {
            if (!producto.id) {
                throw new Error(`Producto en índice ${index}: falta el id`);
            }
            if (!producto.title || producto.title.trim() === '') {
                throw new Error(`Producto en índice ${index}: falta el título`);
            }
            if (!producto.quantity || producto.quantity <= 0) {
                throw new Error(`Producto en índice ${index}: la cantidad debe ser mayor a 0`);
            }
            if (!producto.unit_price || producto.unit_price <= 0) {
                throw new Error(`Producto en índice ${index}: el precio unitario debe ser mayor a 0`);
            }
        });
    }

    async exampleMethod(ctx: RequestContext, id: ID) {
        // Add your method logic here
        const result = await this.connection.getRepository(ctx, Product).findOne({ where: { id } });
        return result;
    }

    async createMercadoPagoPreference(ctx: RequestContext, id: ID): Promise<boolean> {
        return true;
    }
}
