export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         ADMIN_UI_API_PORT: number;
         HOST_URL: string;
         APP_ENV: string;
         ASSET_UPLOAD_DIR: string;
         COOKIE_SECRET: string;
         PORT: string;
         STORE_URL: string;
         SUPERADMIN_PASSWORD: string;
         SUPERADMIN_USERNAME: string;
         STATIC_DIR: string;
         ASSET_URL_PREFIX: string;
         GOOGLE_OAUTH_CLIENT_ID: string;
         /** Idioma por defecto del panel de administración (ej: 'es', 'en'). Default: 'es' */
         DASHBOARD_DEFAULT_LANGUAGE?: string;
         /** Locale por defecto del panel de administración (ej: 'es-CO', 'en-US'). Default: 'es-CO' */
         DASHBOARD_DEFAULT_LOCALE?: string;
      }
   }
}
