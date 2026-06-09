import { defineDashboardExtension } from '@vendure/dashboard';

import { reviewDetail } from './review-detail';
import { reviewList } from './review-list';
import { routeWithoutAuth } from './route-without-auth';

defineDashboardExtension({
    routes: [reviewList, reviewDetail, routeWithoutAuth],
    widgets: [],
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
            transformVariables: (variables: any) => {
                // Si el sort viene vacío o inválido, forzar updatedAt ASC
                if (!variables?.options?.sort ||
                    Object.keys(variables.options.sort).length === 0) {
                    return {
                        ...variables,
                        options: {
                            ...variables.options,
                            sort: { updatedAt: 'DESC' },
                        },
                    };
                }
                return variables;
            },
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