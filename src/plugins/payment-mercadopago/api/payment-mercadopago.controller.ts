import { 
    Controller, 
    Post, 
    Body, 
    Req, 
    Inject, 
    HttpException, 
    HttpStatus, 
    HttpCode 
} from '@nestjs/common';
import { 
    Logger, 
    RequestContextService, 
    OrderService, 
    LanguageCode 
} from '@vendure/core';

import { PluginInitOptions } from '../types';
import { PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS, loggerCtx } from '../constants';

@Controller('api/mercado-libre')
export class MercadoPagoController {

    constructor(
        @Inject(PAYMENT_MERCADOPAGO_PLUGIN_OPTIONS) private options: PluginInitOptions,
        private requestContextService: RequestContextService,
        private orderService: OrderService,
    ) {}

    @Post('webhook')
    @HttpCode(200)
    async receiveWebhook(@Body() payload: any, @Req() req: any) {
        Logger.debug('Webhook recibido desde Mercado Libre', loggerCtx);

        // 1. Validar firma (placeholder)
        if (this.options.secret && !this.validateSignature(payload, this.options.secret)) {
            throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
        }

        // 2. Validar estructura del payload
        if (!payload || !payload.resource) {
            throw new HttpException('Missing resource field', HttpStatus.BAD_REQUEST);
        }

        Logger.debug(`Payload recibido: ${JSON.stringify(payload)}`, loggerCtx);

        // 3. (Opcional) buscar ID de pedido dependiendo del recurso
        // Mercado Libre envía: resource: "/orders/1234567890"
        const orderCode = this.extractOrderCode(payload);

        if (!orderCode) {
            Logger.warn('No se pudo extraer el código/ID de la orden', loggerCtx);
            return { ok: true };
        }

        // 4. Crear contexto para Vendure
        const ctx = await this.requestContextService.create({
            languageCode: LanguageCode.es,
            apiType: 'admin'
        });

        const order = await this.orderService.findOneByCode(ctx, orderCode);

        if (!order) {
            Logger.warn(`Orden no encontrada en Vendure: ${orderCode}`, loggerCtx);
            return { ok: true };
        }

        Logger.debug(`Orden encontrada: ${order.code}`, loggerCtx);

        // 5. TODO: lógica cuando el plugin real esté listo
        // por ahora no hacemos nada, solo log
        Logger.debug('Webhook procesado correctamente (modo placeholder)', loggerCtx);

        return { ok: true };
    }

    private validateSignature(payload: any, secret: string): boolean {
        // TODO: implementar firma real de Mercado Libre
        return true;
    }

    private extractOrderCode(payload: any): string | null {
        try {
            if (payload?.resource?.includes('/orders/')) {
                return payload.resource.split('/orders/')[1];
            }
        } catch {}
        return null;
    }
}