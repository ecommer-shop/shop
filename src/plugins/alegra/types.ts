/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    /** API URL base de Alegra (ej: https://api.alegra.com/api/v1) */
    apiUrl?: string;
    /** Email o usuario de Alegra para autenticación */
    email?: string;
    /** Token de API de Alegra para autenticación */
    token?: string;
    /** Si es true, solo enviará facturas cuando el estado de la orden sea 'PaymentSettled' */
    onlyOnPaymentSettled?: boolean;
}

