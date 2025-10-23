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
      // DB
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
      STATIC_DIR: string;
      //PAYMENT
      PAYMENT_SECRET_KEY: string;
      //EMAIL
      RESEND_API_KEY: string;
      //SERVIENTREGA
      SERVIENTREGA_BASE: string;
    }
  }
}
