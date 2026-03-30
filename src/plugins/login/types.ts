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
}

export interface RegisterSellerWithGoogleInput {
    token: string;
    shopName: string;
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
}
