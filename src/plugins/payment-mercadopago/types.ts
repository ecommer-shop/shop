/**
 * @description
 * The plugin can be configured using the following options:
 */
export interface PluginInitOptions {
    accessToken: string;        
    webhookSecret?: string;     
    successUrl?: string;        
    failureUrl?: string;        
    secret?: string;            
    testMode?: boolean; 
}