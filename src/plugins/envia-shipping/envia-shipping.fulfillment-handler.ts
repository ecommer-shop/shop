import { FulfillmentHandler, LanguageCode, Logger } from '@vendure/core';
import type { Order, RequestContext } from '@vendure/core';
import type { OrderLineInput } from '@vendure/common/lib/generated-types';

import type { EnviaShippingService } from './services/envia-shipping.service';
import type { EnviaAddressInput, EnviaCreateLabelInput, EnviaPackageInput } from './types';

let _service: EnviaShippingService | null = null;

const loggerCtx = 'EnviaFulfillmentHandler';

const DEFAULT_PACKAGE: Omit<EnviaPackageInput, 'declaredValue' | 'content'> = {
    type: 'box',
    amount: 1,
    weight: 1,
    weightUnit: 'KG',
    lengthUnit: 'CM',
    dimensions: { length: 30, width: 20, height: 10 },
};

export function setEnviaFulfillmentService(service: EnviaShippingService): void {
    _service = service;
}

export const enviaFulfillmentHandler = new FulfillmentHandler({
    code: 'envia-fulfillment-handler',
    description: [
        {
            languageCode: LanguageCode.es,
            value: 'Genera una guía de envío usando la API de Envia',
        },
        {
            languageCode: LanguageCode.en,
            value: 'Generates a shipping label via Envia API',
        },
    ],
    args: {
        carrier: {
            type: 'string',
            required: true,
            label: [
                { languageCode: LanguageCode.es, value: 'Transportadora' },
                { languageCode: LanguageCode.en, value: 'Carrier' },
            ],
        },
        service: {
            type: 'string',
            required: true,
            label: [
                { languageCode: LanguageCode.es, value: 'Servicio' },
                { languageCode: LanguageCode.en, value: 'Service' },
            ],
        },
    },
    async createFulfillment(
        _ctx: RequestContext,
        orders: Order[],
        _lines: OrderLineInput[],
        args: Record<string, string>,
    ) {
        if (!_service) {
            throw new Error('EnviaShippingService not initialized for fulfillment handler');
        }

        const service = _service;

        const order = orders[0];
        if (!order) {
            throw new Error('No order found for fulfillment');
        }

        const origin = await service.resolveSellerOriginAddress(_ctx, order as any);

        if (!origin) {
            throw new Error(
                'Envia origin address is not configured and no seller postal code found. Set originAddress in EnviaShippingPlugin.init() or add storePickupPostalCode to the seller.',
            );
        }

        const { shippingAddress } = order;
        if (!shippingAddress) {
            throw new Error('Order has no shipping address');
        }

        const postalCode = shippingAddress.postalCode || '';
        const countryCode = shippingAddress.countryCode || 'CO';

        const daneCode = await service.getDaneCode(countryCode, postalCode);

        if (!daneCode) {
            throw new Error(
                `No DANE code found for country=${countryCode} zip=${postalCode}. Cannot create label.`,
            );
        }

        const destination: EnviaAddressInput = {
            name: shippingAddress.fullName || 'Cliente',
            phone: shippingAddress.phoneNumber || '',
            street: shippingAddress.streetLine1 || '',
            number: shippingAddress.streetLine2 || '',
            city: daneCode,
            state: shippingAddress.province || '',
            country: countryCode,
            postalCode: daneCode,
        };

        const orderTotal = order.totalWithTax / 100;
        const declaredValue =
            Number.isFinite(orderTotal) && orderTotal > 0 ? orderTotal : 50000;

        const packages: EnviaPackageInput[] = [
            {
                ...DEFAULT_PACKAGE,
                content: order.code || 'Productos',
                declaredValue,
            },
        ];

        const carrier = args.carrier;
        const serviceName = args.service;

        const input: EnviaCreateLabelInput = {
            origin,
            destination,
            packages,
            shipment: {
                type: 1,
                carrier,
                service: serviceName,
            },
            settings: {
                printFormat: 'PDF',
                printSize: 'STOCK_4X6',
            },
        };

        Logger.info(
            `Creating label for order=${order.code} carrier=${carrier} service=${serviceName} dane=${daneCode}`,
            loggerCtx,
        );

        const result = await service.createLabel(input);

        const label = result.data?.[0];
        if (!label) {
            throw new Error('Envia label generation returned no data');
        }

        Logger.info(
            `Label created for order=${order.code} tracking=${label.trackingNumber} shipment=${label.shipmentId} labelUrl=${label.label} trackUrl=${label.trackUrl}`,
            loggerCtx,
        );

        return {
            method: `Envia - ${carrier} - ${serviceName}`,
            trackingCode: label.trackingNumber,
        };
    },
});
