/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    /**
     * Google OAuth Client ID (e.g. xxxxx.apps.googleusercontent.com)
     * Obtenido desde Google Cloud Console.
     */
    googleOAuthClientId: string;
    /**
     * Google Maps JavaScript API key. Se usa en el formulario de registro
     * del vendedor para seleccionar la dirección de recogida.
     */
    googleMapsApiKey?: string;
}

export interface RegisterSellerWithGoogleInput {
    token: string;
    shopName: string;
    pickupAddress: string;
    pickupLatitude: number;
    pickupLongitude: number;
    pickupNeighborhood?: string | null;
    pickupPostalCode?: string | null;
    pickupGooglePlaceId?: string | null;
}

export interface GoogleSellerRegistrationResult {
    success: boolean;
    email: string;
}

export interface SellerOnboardingInput {
    shopName: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    pickupAddress: string;
    pickupLatitude: number;
    pickupLongitude: number;
    pickupNeighborhood?: string | null;
    pickupPostalCode?: string | null;
    pickupGooglePlaceId?: string | null;
}
