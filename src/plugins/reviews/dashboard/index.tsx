import { defineDashboardExtension } from '@vendure/dashboard';

import {
    BodyInputComponent,
    ResponseDisplay,
    ReviewMultiSelect,
    ReviewSingleSelect,
    ReviewStateSelect,
    TextareaCustomField,
} from './custom-form-components';
import { CustomWidget } from './custom-widget';
import { reviewDetail } from './review-detail';
import { reviewList } from './review-list';
import { ReviewSelectWithCreate } from './review-select-with-create';
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
    customFormComponents: {
        customFields: [
            {
                id: 'textarea',
                component: TextareaCustomField,
            },
            {
                id: 'review-single-select',
                component: ReviewSingleSelect,
            },
            {
                id: 'review-multi-select',
                component: ReviewMultiSelect,
            },
            {
                id: 'review-multi-select-with-create',
                component: ReviewSelectWithCreate,
            },
        ],
    },
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
            inputs: [
                {
                    blockId: 'main-form',
                    field: 'body',
                    component: BodyInputComponent,
                },
                {
                    blockId: 'main-form',
                    field: 'state',
                    component: ReviewStateSelect,
                },
                {
                    blockId: 'main-form',
                    field: 'response',
                    component: ResponseDisplay,
                },
            ],
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
