export { };

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_UI_API_PORT: number;
      APP_ENV: string;
      ASSET_UPLOAD_DIR: string;
      COOKIE_SECRET: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_PASSWORD: string;
      DB_PORT: number;
      DB_SCHEMA: string;
      DB_USERNAME: string;
      PORT: string;
      STORE_URL: string;
      SUPERADMIN_PASSWORD: string;
      SUPERADMIN_USERNAME: string;
      PAYMENT_SECRET_KEY: string;
    }
  }
}
