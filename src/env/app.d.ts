export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         ADMIN_UI_API_PORT: number;
         APP_ENV: string;
         ASSET_UPLOAD_DIR: string;
         COOKIE_SECRET: string;
         PORT: string;
         STORE_URL: string;
         SUPERADMIN_PASSWORD: string;
         SUPERADMIN_USERNAME: string;
         STATIC_DIR: string;
         ASSET_URL_PREFIX: string;
      }
   }
}
