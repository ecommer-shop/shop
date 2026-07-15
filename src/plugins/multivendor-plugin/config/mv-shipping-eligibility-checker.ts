import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import { idsAreEqual, Injector, ShippingEligibilityChecker, ShippingMethod, TransactionalConnection } from '@vendure/core';

let connection: TransactionalConnection;

/**
 * @description
 * Shipping method is eligible if at least one OrderLine is associated with the Seller's Channel.
 */
export const multivendorShippingEligibilityChecker = new ShippingEligibilityChecker({
    code: 'multivendor-shipping-eligibility-checker',
    description: [{ languageCode: LanguageCode.en, value: 'Multivendor Shipping Eligibility Checker' }],
    args: {},
    init(injector: Injector) {
        connection = injector.get(TransactionalConnection);
    },
    check: async (ctx, order, args, method) => {
        // Query channels directly to avoid entityHydrator $Command redefine error
        const methodWithChannels = await connection
            .getRepository(ctx, ShippingMethod)
            .createQueryBuilder('sm')
            .innerJoinAndSelect('sm.channels', 'channel')
            .where('sm.id = :id', { id: method.id })
            .getOne();
        const sellerChannels = (methodWithChannels?.channels ?? []).filter(
            c => c.code !== DEFAULT_CHANNEL_CODE,
        );
        if (sellerChannels.length === 0) {
            return false;
        }
        const sellerChannelIds = new Set(sellerChannels.map(c => String(c.id)));

        // Ensure order lines have sellerChannelId loaded
        const lines = order.lines ?? [];
        for (const line of lines) {
            if (line.sellerChannelId && sellerChannelIds.has(String(line.sellerChannelId))) {
                return true;
            }
        }
        return false;
    },
});
