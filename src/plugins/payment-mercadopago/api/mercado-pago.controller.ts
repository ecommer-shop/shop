import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { MercadoPagoService } from '../services/mercado-pago.service';
import { CreatePreferenceDto, CreatePreferenceResponse } from '../models/create-preference.dto';

@Controller('payments')
export class MercadoPagoController {
    constructor(private mercadoPagoService: MercadoPagoService) {}

    @Post('create-preference')
    @HttpCode(200)
    async createPreference(@Body() body: CreatePreferenceDto): Promise<CreatePreferenceResponse> {
        try {
            // Validar que el body tenga datos
            if (!body || Object.keys(body).length === 0) {
                throw new HttpException(
                    'El cuerpo de la solicitud no puede estar vacío',
                    HttpStatus.BAD_REQUEST
                );
            }

            // Crear la preferencia usando el servicio
            const result = await this.mercadoPagoService.createPreference(body);

            return result;
        } catch (error: any) {
            // Si es un HttpException, re-lanzarlo
            if (error instanceof HttpException) {
                throw error;
            }

            // Si es un error de validación del servicio, retornar 400
            if (error.message && (
                error.message.includes('Debe proporcionar') ||
                error.message.includes('falta') ||
                error.message.includes('debe ser mayor')
            )) {
                throw new HttpException(
                    { message: error.message },
                    HttpStatus.BAD_REQUEST
                );
            }

            // Si es un error de configuración de MercadoPago, retornar 500
            if (error.message && error.message.includes('MercadoPago')) {
                throw new HttpException(
                    {
                        message: 'Error al comunicarse con Mercado Pago',
                        error: process.env.APP_ENV === 'dev' ? error.message : undefined,
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }

            // Cualquier otro error, retornar 500
            throw new HttpException(
                {
                    message: 'Error interno del servidor',
                    error: process.env.APP_ENV === 'dev' ? error.message : undefined,
                },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}

