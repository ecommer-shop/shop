export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         DB_HOST: string;
         DB_NAME: string;
         DB_PASSWORD: string;
         DB_PORT: number;
         DB_SCHEMA: string;
         DB_USERNAME: string;
         DATABASE_URL: string;
         DB_SSL: string;
      }
   }
}
