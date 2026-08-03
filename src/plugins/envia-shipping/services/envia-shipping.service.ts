import { Inject, Injectable } from '@nestjs/common';
import { Administrator, RequestContext, TransactionalConnection } from '@vendure/core';

import { ENVIA_SHIPPING_PLUGIN_OPTIONS } from '../constants';
import { EnviaDefaultStrategy } from '../strategies/envia-shipping.strategy';
import type { EnviaAddressInput, EnviaCreateLabelInput, EnviaCreateLabelResult, EnviaGetRatesInput, EnviaGetRatesResult, EnviaShippingStrategy, EnviaZipCodeInfo, PluginInitOptions } from '../types';

@Injectable()
export class EnviaShippingService {
    readonly strategy: EnviaShippingStrategy;
    readonly originAddress?: EnviaAddressInput;

    constructor(
        @Inject(ENVIA_SHIPPING_PLUGIN_OPTIONS) private readonly options: PluginInitOptions,
        private readonly connection: TransactionalConnection,
    ) {
        this.strategy = this.options.strategy ?? new EnviaDefaultStrategy(this.options.envia);
        this.originAddress = this.options.originAddress;
    }

    async getRates(input: EnviaGetRatesInput): Promise<EnviaGetRatesResult> {
        return this.strategy.getRates(input);
    }

    async getDaneCode(countryCode: string, zipCode: string): Promise<string | null> {
        return this.strategy.getDaneCode(countryCode, zipCode);
    }

    async getZipCodeInfo(countryCode: string, zipCode: string): Promise<EnviaZipCodeInfo | null> {
        return this.strategy.getZipCodeInfo(countryCode, zipCode);
    }

    async createLabel(input: EnviaCreateLabelInput): Promise<EnviaCreateLabelResult> {
        return this.strategy.createLabel(input);
    }

    getOriginAddress(): EnviaAddressInput | undefined {
        return this.originAddress;
    }

    async resolveSellerOriginAddress(
        ctx: RequestContext,
        order: { lines?: Array<{ sellerChannelId?: string | number | null }> },
    ): Promise<EnviaAddressInput | undefined> {
        const sellerChannelId = order.lines?.[0]?.sellerChannelId;
        if (!sellerChannelId) {
            return this.originAddress;
        }

        try {
            const admin = await this.connection
                .getRepository(ctx, Administrator)
                .createQueryBuilder('admin')
                .innerJoin('admin.user', 'user')
                .innerJoin('user.roles', 'role')
                .innerJoin('role.channels', 'channel')
                .where('channel.id = :channelId', { channelId: sellerChannelId as string })
                .getOne();

            const postalCode: string | undefined =
                (admin as any)?.customFields?.storePickupPostalCode;
            if (!postalCode) {
                return this.originAddress;
            }

            const zipCodeInfo = await this.strategy.getZipCodeInfo('CO', postalCode);
            if (!zipCodeInfo) {
                return this.originAddress;
            }

            const pickupAddress: string =
                (admin as any)?.customFields?.storePickupAddress || '';

            return {
                name: `${admin?.firstName || ''} ${admin?.lastName || ''}`.trim() || 'Tienda',
                company: '',
                email: admin?.emailAddress || '',
                phone: '',
                street: pickupAddress,
                number: '',
                city: zipCodeInfo.daneCode,
                state: zipCodeInfo.stateCode,
                country: 'CO',
                postalCode: zipCodeInfo.daneCode,
            };
        } catch {
            return this.originAddress;
        }
    }
}
