import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    input RegisterSellerWithGoogleInput {
        """
        ID Token de Google obtenido desde Google Identity Services
        """
        token: String!
        """
        Nombre de la tienda del vendedor
        """
        shopName: String!
    }

    type GoogleSellerRegistrationResult {
        success: Boolean!
        email: String!
    }

    extend type Mutation {
        """
        Registra un nuevo vendedor usando autenticación de Google.
        El email, nombre y apellido se extraen del token de Google.
        Solo se necesita el nombre de la tienda como dato adicional.
        """
        registerSellerWithGoogle(
            input: RegisterSellerWithGoogleInput!
        ): GoogleSellerRegistrationResult!
    }
`;
