export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         PAYMENT_SECRET_KEY: string;
      }
   }
}
