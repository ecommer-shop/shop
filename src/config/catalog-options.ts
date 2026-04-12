import { DefaultProductVariantPriceUpdateStrategy, MultiChannelStockLocationStrategy, VendureConfig } from "@vendure/core";

export const catalogOptions: VendureConfig["catalogOptions"] = {
    productVariantPriceUpdateStrategy: new DefaultProductVariantPriceUpdateStrategy({
        syncPricesAcrossChannels: true
    }),
    stockLocationStrategy: new MultiChannelStockLocationStrategy(),
}