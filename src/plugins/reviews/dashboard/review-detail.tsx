import { graphql } from '@/gql';
import { DashboardRouteDefinition, DetailPage, detailPageRouteLoader } from '@vendure/dashboard';

const reviewDetailDocument = graphql(`
    query GetReviewDetail($id: ID!) {
        productReview(id: $id) {
            id
            createdAt
            updatedAt
            product {
                id
                name
            }
            productVariant {
                id
                name
                sku
            }
            summary
            body
            rating
            authorName
            authorLocation
            upvotes
            downvotes
            state
            response
            responseCreatedAt
            translations {
                id
                languageCode
                text
            }
        }
    }
`);

const updateReviewDocument = graphql(`
    mutation UpdateReview($input: UpdateProductReviewInput!) {
        updateProductReview(input: $input) {
            id
        }
    }
`);

// Definir el tipo manualmente
interface ReviewDetail {
    id: string;
    createdAt: string;
    updatedAt: string;
    product: {
        id: string;
        name: string;
    };
    productVariant?: {
        id: string;
        name: string;
        sku: string;
    } | null;
    summary: string;
    body: string;
    rating: number;
    authorName: string;
    authorLocation?: string;
    upvotes: number;
    downvotes: number;
    state: string;
    response?: string;
    responseCreatedAt?: string;
    translations: Array<{
        id: string;
        languageCode: string;
        text: string;
    }>;
    customFields?: any;
}

export const reviewDetail: DashboardRouteDefinition = {
    path: '/reviews/$id',
    loader: detailPageRouteLoader({
        queryDocument: reviewDetailDocument,
        breadcrumb: (isNew, entity) => [
            { path: '/reviews', label: 'Reviews' },
            isNew ? 'New review' : (entity as any)?.summary ?? 'Review',
        ],
    }),
    component: route => {
        const DetailPageComponent = DetailPage as any;
        return (
            <DetailPageComponent
                pageId="review-detail"
                queryDocument={reviewDetailDocument}
                updateDocument={updateReviewDocument}
                route={route}
                title={(review: any) => review?.summary ?? 'Review'}
                setValuesForUpdate={(review: any) => {
                    return {
                        id: review?.id,
                        summary: review?.summary,
                        body: review?.body,
                        response: review?.response,
                        state: review?.state,
                        customFields: review?.customFields,
                        translations: review?.translations,
                    };
                }}
            />
        );
    },
};