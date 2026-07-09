import gql from 'graphql-tag';

export const storePageShopApiExtensions = gql`
    type SellerShopLink {
        channelCode: String!
        sellerName: String!
        pickupAddress: String
        pickupLatLng: String
        pickupNeighborhood: String
    }

    type SocialLink {
        platform: String!
        username: String!
        dmLink: String!
        profileUrl: String!
        displayName: String
        inPipeline: Boolean!
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
        """
        Redes sociales de una tienda por su channelCode (público).
        """
        storeSocialLinks(channelCode: String!): [SocialLink!]!
    }

    type StorePageProfileResult {
        storeName: String!
        storeDescription: String
        storeBannerUrl: String
        socialLinks: [SocialLink!]!
    }
`;

export const storePageAdminApiExtensions = gql`
    type SocialLink {
        platform: String!
        username: String!
        dmLink: String!
        profileUrl: String!
        displayName: String
        avatarUrl: String
        inPipeline: Boolean!
        inboxId: String
        platformAccountId: String
        status: String!
        connectedAt: String!
    }

    input SocialLinkInput {
        platform: String!
        username: String!
        dmLink: String!
        profileUrl: String!
        displayName: String
        avatarUrl: String
        inPipeline: Boolean!
        inboxId: String
        platformAccountId: String
        status: String
    }

    extend type Query {
        sellerSocialLinks: [SocialLink!]!
        getFacebookOAuthUrl: String!
        getInstagramOAuthUrl: String!
    }

    extend type Mutation {
        """
        Toggle store featured flag with validation (max 3 per channel).
        """
        setProductStoreFeatured(productId: ID!, featured: Boolean!): Product!
        """
        Guarda las redes sociales del vendedor.
        """
        updateSellerSocialLinks(input: [SocialLinkInput!]!): Boolean!
        """
        Conecta Facebook vía OAuth: intercambia code por token y guarda datos.
        """
        connectFacebook(authCode: String!): SocialLink!
        """
        Conecta Instagram vía OAuth: intercambia code por token y guarda datos.
        """
        connectInstagram(authCode: String!): SocialLink!
        """
        Desconecta una red social.
        """
        disconnectSocialPlatform(platform: String!): Boolean!
    }
`;
