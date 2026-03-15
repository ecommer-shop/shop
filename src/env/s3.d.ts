export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         // ─── AWS S3 ───────────────────────────────────────────────────────
         AWS_ACCESS_KEY_ID: string;
         AWS_SECRET_ACCESS_KEY: string;
         /** Región del bucket, ej: us-east-1 */
         AWS_REGION: string;
         /** Nombre del bucket, ej: vendure-assets-stg */
         AWS_S3_BUCKET: string;
      }
   }
}
