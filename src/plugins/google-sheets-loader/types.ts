/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    googleApiKey?: string;
}

export type ImportProduct = {
    sku: string;
    name: string;
    description?: string;
    price: number;
};