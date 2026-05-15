import gql from 'graphql-tag';

export const storePageShopApiExtensions = gql`
    type SellerShopLink {
        channelCode: String!
        sellerName: String!
    }

    extend type Product {
        """
        Canal del vendedor (code = segmento de URL en /store/{code}).
        """
        sellerShop: SellerShopLink
    }

    extend type Query {
        """
        Featured product ids del canal Shop actual (cabecera vendure-token).
        Opcionalmente collectionSlug filtra por colección (traducciones); solo por compatibilidad.
        """
        storeFeaturedProductIds(collectionSlug: String): [ID!]!
        """
        Perfil público de tienda: sin argumentos usa el Seller del canal (token).
        Con collectionSlug usa colección por slug de traducción (compat. antigua).
        """
        storePageProfile(collectionSlug: String): StorePageProfileResult!
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
