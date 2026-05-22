import { defineDashboardExtension } from '@vendure/dashboard';

import { StoreBannerAssetPickerInput } from './store-banner-asset-picker-input';
import { StoreFeaturedStarInput } from './store-featured-star-input';

defineDashboardExtension({
    customFormComponents: {
        customFields: [
            { id: 'ecommer-store-featured-star', component: StoreFeaturedStarInput },
            { id: 'ecommer-store-banner-asset-picker', component: StoreBannerAssetPickerInput },
        ],
    },
    translations: {
        es: {
            fieldName: {
                storeFeatured: 'Destacado en mi tienda',
                weight: 'Peso (gramos)',
                height: 'Altura (cm)',
                length: 'Largo (cm)',
                width: 'Ancho (cm)',
            },
        },
        en: {
            fieldName: {
                storeFeatured: 'Featured in my store',
                weight: 'Weight (grams)',
                height: 'Height (cm)',
                length: 'Length (cm)',
                width: 'Width (cm)',
            },
        },
    },
});
