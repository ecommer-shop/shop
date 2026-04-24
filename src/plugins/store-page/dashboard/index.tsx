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
});
