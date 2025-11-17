import { Inject, Injectable } from '@nestjs/common';
import { Logger, Order, RequestContext } from '@vendure/core';
import { ALEGRA_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AlegraService {
    private readonly axiosInstance: AxiosInstance;
    private readonly loggerCtx = 'AlegraService';

    constructor(
        @Inject(ALEGRA_PLUGIN_OPTIONS) private readonly options: PluginInitOptions
    ) {
        // Configurar instancia de axios con autenticación básica
        const apiUrl = this.options.apiUrl || 'https://api.alegra.com/api/v1';
        const email = this.options.email || '';
        const token = this.options.token || '';

        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            auth: {
                username: email,
                password: token,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Envía una factura a Alegra basada en la orden de Vendure
     */
    async sendInvoice(ctx: RequestContext, order: Order): Promise<any> {
        if (!this.options.email || !this.options.token) {
            Logger.warn('Alegra credentials not configured. Skipping invoice creation.', this.loggerCtx);
            return null;
        }

        try {
            const invoiceData = this.buildInvoicePayload(order);
            
            Logger.info(`Sending invoice to Alegra for order ${order.code}`, this.loggerCtx);
            
            const response = await this.axiosInstance.post('/invoices', invoiceData);
            
            Logger.info(`Invoice created successfully in Alegra for order ${order.code}. Invoice ID: ${response.data.id}`, this.loggerCtx);
            
            return response.data;
        } catch (error: any) {
            Logger.error(
                `Failed to send invoice to Alegra for order ${order.code}: ${error.message}`,
                this.loggerCtx,
                error.response?.data || error.stack
            );
            throw error;
        }
    }

    /**
     * Construye el payload de la factura según el formato de Alegra
     * Documentación: https://developer.alegra.com/docs/facturas-de-venta-1
     */
    private buildInvoicePayload(order: Order): any {
        // Convertir el total de la orden (que está en centavos) a pesos
        const total = this.convertMoneyToNumber(order.totalWithTax);
        
        // Construir los items de la factura desde las líneas de la orden
        const items = order.lines.map(line => {
            const price = this.convertMoneyToNumber(line.proratedUnitPriceWithTax);
            const quantity = line.quantity;
            
            // Obtener el nombre del producto desde productVariant
            const productName = line.productVariant?.name || 'Producto';
            const productDescription = line.productVariant?.product?.description || '';
            
            return {
                id: line.productVariant?.id?.toString() || undefined,
                name: productName,
                description: productDescription,
                price: price,
                quantity: quantity,
            };
        });

        // Construir información del cliente
        const customer = order.customer;
        const billingAddress = order.billingAddress;
        
        const invoicePayload: any = {
            date: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
            dueDate: new Date().toISOString().split('T')[0], // Misma fecha 
            client: {
                name: customer?.firstName && customer?.lastName 
                    ? `${customer.firstName} ${customer.lastName}` 
                    : customer?.emailAddress || 'Cliente',
                email: customer?.emailAddress || '',
                identification: (customer?.customFields as any)?.identification || billingAddress?.phoneNumber || '',
                phonePrimary: billingAddress?.phoneNumber || '',
                address: {
                    address: billingAddress?.streetLine1 || '',
                    city: billingAddress?.city || '',
                    country: billingAddress?.country || 'Colombia',
                },
            },
            items: items,
            // Información adicional
            observations: `Orden Vendure: ${order.code}`,
        };

        // Si hay envío, agregarlo como un item adicional
        const shippingAmount = this.convertMoneyToNumber(order.shippingWithTax);
        if (shippingAmount > 0) {
            invoicePayload.items.push({
                name: 'Envío',
                description: `Costo de envío para orden ${order.code}`,
                price: shippingAmount,
                quantity: 1,
            });
        }

        return invoicePayload;
    }

    /**
     * Vendure almacena los montos en centavos, así que dividimos por 100
     */
    private convertMoneyToNumber(money: any): number {
        if (typeof money === 'number') {
            return money / 100; // Convertir centavos a pesos
        }
        if (money?.value) {
            return money.value / 100;
        }
        return 0;
    }
}

