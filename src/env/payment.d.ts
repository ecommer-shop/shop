export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         PAYMENT_SECRET_KEY: string;
         WOMPI_API_URL?: string;
         WOMPI_API_KEY?: string;
         WOMPI_EVENTS_SECRET?: string;
         WOMPI_INTEGRITY_SECRET?: string;
         WOMPI_CURRENCY?: string;
      }
   }
}
