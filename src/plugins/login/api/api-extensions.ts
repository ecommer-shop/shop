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
    }

    """
    Resultado del registro del vendedor.
    """
    type GoogleSellerRegistrationResult {
        success: Boolean!
        email: String!
    }

    """
    Resultado de sincronizar el canal del seller.
    """
    type SyncSellerChannelResult {
        success: Boolean!
        channelToken: String
    }

    extend type Query {
        """
        Retorna configuración pública del login para el dashboard.
        """
        loginConfig: LoginConfig!
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
        Sincroniza el canal activo del seller después del login.
        Usado para asegurar que el administrador quede operando
        sobre su canal correspondiente.
        """
        syncSellerChannelAfterLogin: SyncSellerChannelResult!
    }
`;