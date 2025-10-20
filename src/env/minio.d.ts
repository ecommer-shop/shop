export { };

declare global {
   namespace NodeJS {
      interface ProcessEnv {
         MINIO_ROOT_USER: string;
         MINIO_ROOT_PASSWORD: string;
         MINIO_BUCKET: string;
         MINIO_ENDPOINT: string;
      }
   }
}
