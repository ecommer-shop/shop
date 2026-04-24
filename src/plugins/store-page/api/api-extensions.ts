import gql from 'graphql-tag';

export const storePageShopApiExtensions = gql`
    extend type Query {
        """
        Featured product ids in a collection (max 3), ordered by update date.
        """
        storeFeaturedProductIds(collectionSlug: String!): [ID!]!
        """
        Public seller profile data for the store page.
        """
        storePageProfile(collectionSlug: String!): StorePageProfileResult!
    }

    type StorePageProfileResult {
        storeName: String!
        storeDescription: String
        storeBannerUrl: String
    }
`;

export const storePageAdminApiExtensions = gql`
    extend type Mutation {
        """
        Toggle store featured flag with validation (max 3 per channel).
        """
        setProductStoreFeatured(productId: ID!, featured: Boolean!): Product!
    }
`;
