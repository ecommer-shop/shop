import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    """
    Configuración pública usada por el dashboard de autenticación.
    """
    type LoginConfig {
        """
        Google OAuth Client ID usado por el dashboard de login.
        """
        googleOAuthClientId: String!
        """
        Google Maps JavaScript API key usado para seleccionar dirección de recogida.
        """
        googleMapsApiKey: String!
        """
        Código del canal por defecto. El superadmin debe usar este canal
        para evitar problemas de filtrado de productos.
        """
        defaultChannelToken: String!
    }

    """
    Input requerido para registrar un vendedor usando Google OAuth.
    """
    input RegisterSellerWithGoogleInput {
        """
        ID Token de Google obtenido desde Google Identity Services.
        """
        token: String!

        """
        Nombre de la tienda del vendedor.
        """
        shopName: String!

        """
        Dirección de recogida de la tienda seleccionada desde Google Maps.
        """
        pickupAddress: String!

        """
        Latitud de la dirección de recogida.
        """
        pickupLatitude: Float!

        """
        Longitud de la dirección de recogida.
        """
        pickupLongitude: Float!

        """
        Barrio o sector detectado para la dirección de recogida.
        """
        pickupNeighborhood: String

        """
        Google Place ID de la dirección de recogida.
        """
        pickupGooglePlaceId: String
    }

    """
    Resultado del registro del vendedor.
    """
    type GoogleSellerRegistrationResult {
        success: Boolean!
        email: String!
    }

    extend type Query {
        """
        Retorna configuración pública del login para el dashboard.
        """
        loginConfig: LoginConfig!
    }

    """
    Resultado de eliminar la cuenta del seller.
    """
    type DeleteSellerAccountResult {
        success: Boolean!
        message: String!
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

        """
        Elimina permanentemente la cuenta del seller autenticado.
        Realiza un soft-delete anonimizando los datos del Administrator,
        User y Seller. También deshabilita los productos del seller
        y cancela la suscripción activa.
        """
        deleteSellerAccount: DeleteSellerAccountResult!
    }
`;
