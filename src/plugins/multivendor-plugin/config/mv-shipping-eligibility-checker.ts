import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import {
    Channel,
    idsAreEqual,
    ShippingEligibilityChecker,
    TransactionalConnection,
} from '@vendure/core';

let connection: TransactionalConnection;

/**
 * @description
 * Shipping method is eligible if at least one OrderLine is associated with the Seller's Channel.
 */
export const multivendorShippingEligibilityChecker = new ShippingEligibilityChecker({
    code: 'multivendor-shipping-eligibility-checker',
    description: [{ languageCode: LanguageCode.en, value: 'Multivendor Shipping Eligibility Checker' }],
    args: {},
    init(injector) {
        connection = injector.get(TransactionalConnection);
    },
    check: async (ctx, order, args, method) => {
        const channels = await connection
            .getRepository(ctx, Channel)
            .createQueryBuilder('channel')
            .leftJoin('channel.shippingMethods', 'shippingMethod')
            .where('shippingMethod.id = :shippingMethodId', { shippingMethodId: method.id })
            .getMany();

        const sellerChannel = channels.find(c => c.code !== DEFAULT_CHANNEL_CODE);
        if (!sellerChannel) {
            return false;
        }
        for (const line of order.lines) {
            if (line.sellerChannelId && idsAreEqual(line.sellerChannelId, sellerChannel.id)) {
                return true;
            }
        }
        return false;
    },
});
