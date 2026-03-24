export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         PAYMENT_INTEGRITY_KEY: string;
         PAYMENT_SECRET_KEY: string;
      }
   }
}
