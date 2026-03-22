declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INVOICE_SERVICE_URL?: string;
      INVOICE_SERVICE_API_KEY?: string;
      
      MATIAS_RESOLUTION_NUMBER?: string;
      MATIAS_PREFIX?: string;
    }
  }
}

export {};
