import { DefaultProductVariantPriceUpdateStrategy, VendureConfig } from "@vendure/core";

export const catalogOptions: VendureConfig["catalogOptions"] = {
    productVariantPriceUpdateStrategy: new DefaultProductVariantPriceUpdateStrategy({
        syncPricesAcrossChannels: true
    })
}