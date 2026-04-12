import { defineDashboardExtension } from '@vendure/dashboard';

import { CustomWidget } from './custom-widget';
import { reviewDetail } from './review-detail';
import { reviewList } from './review-list';
import { routeWithoutAuth } from './route-without-auth';

defineDashboardExtension({
    routes: [reviewList, reviewDetail, routeWithoutAuth],
    widgets: [
        {
            id: 'custom-widget',
            name: 'Custom Widget',
            component: CustomWidget,
            defaultSize: { w: 3, h: 3 },
        },
    ],

    detailForms: [
        {
            pageId: 'product-variant-detail',
            // extendDetailDocument: `
            //     query {
            //         productVariant(id: $id) {
            //             stockOnHand
            //             product {
            //               facetValues {
            //                 id
            //                 name
            //                 facet {
            //                 code
            //                 }
            //               }
            //               customFields {
            //                 featuredReview {
            //                     id
            //                     productVariant {
            //                         id
            //                         name
            //                     }
            //                     product {
            //                     name
            //                     }
            //                 }
            //               }
            //             }
            //         }
            //     }
            // `,
        },
        {
            pageId: 'review-detail',
        },
    ],
    dataTables: [
        {
            pageId: 'product-list',
            // extendListDocument: `
            //     query {
            //         products {
            //             items {
            //                 customFields {
            //                     featuredReview {
            //                         id
            //                         productVariant {
            //                             id
            //                             name
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // `,
        },
    ],
});
