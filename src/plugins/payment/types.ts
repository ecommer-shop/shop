/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    currency: string;
    integrityKey?: string;
    /**
     * @deprecated Use integrityKey for Wompi checkout signature generation.
     */
    secretKey?: string;
}
