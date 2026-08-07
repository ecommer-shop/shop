import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import { Injector, ShippingEligibilityChecker, ShippingMethod, TransactionalConnection } from '@vendure/core';

import { normalizeCity } from './mv-shipping-helpers';

let connection: TransactionalConnection;

/**
 * @description
 * Shipping method is eligible if at least one OrderLine is associated with the Seller's Channel
 * AND the destination city is NOT Popayán.
 */
export const enviaShippingEligibilityChecker = new ShippingEligibilityChecker({
    code: 'envia-shipping-eligibility-checker',
    description: [
        {
            languageCode: LanguageCode.en,
            value: 'Envia Shipping Eligibility Checker',
        },
    ],
    args: {},
    init(injector: Injector) {
        connection = injector.get(TransactionalConnection);
    },
        check: async (ctx, order, args, method) => {
            const methodWithChannels = await connection
                .getRepository(ctx, ShippingMethod)
                .createQueryBuilder('sm')
                .innerJoinAndSelect('sm.channels', 'channel')
                .where('sm.id = :id', { id: method.id })
                .getOne();

            const allChannels = methodWithChannels?.channels ?? [];
            if (allChannels.length === 0) {
                return false;
            }

            const isInDefaultChannel = allChannels.some(c => c.code === DEFAULT_CHANNEL_CODE);

            const sellerChannels = allChannels.filter(c => c.code !== DEFAULT_CHANNEL_CODE);
            const sellerChannelIds = new Set(sellerChannels.map(c => String(c.id)));

            const city = normalizeCity(order.shippingAddress?.city ?? '');
            if (!city) {
                return false;
            }

            const lines = order.lines ?? [];
            for (const line of lines) {
                if (line.sellerChannelId && sellerChannelIds.has(String(line.sellerChannelId))) {
                    return city !== 'popayan';
                }
                if (!line.sellerChannelId && isInDefaultChannel) {
                    return city !== 'popayan';
                }
            }
            return false;
        },
});
