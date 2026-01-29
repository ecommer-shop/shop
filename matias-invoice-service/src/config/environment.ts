import dotenv from 'dotenv';

dotenv.config();

interface EnvironmentConfig {
  port: number;
  nodeEnv: string;
  matias: {
    apiUrl: string;
    email: string;
    password: string;
  };
  vendure: {
    apiKey: string;
  };
  logging: {
    level: string;
  };
}

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value!;
}


function normalizeApiKey(raw: string): string {
  if (!raw) return raw;

  // Si el valor empieza con "VENDURE_SERVICE_API_KEY=" nos quedamos solo con la parte derecha
  const prefix = 'VENDURE_SERVICE_API_KEY=';
  if (raw.startsWith(prefix)) {
    return raw.slice(prefix.length);
  }

  return raw;
}

export const config: EnvironmentConfig = {
  port: parseInt(getEnvVar('PORT', '3001'), 10),
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
  matias: {
    apiUrl: getEnvVar('MATIAS_API_URL'),
    email: getEnvVar('MATIAS_EMAIL'),
    password: getEnvVar('MATIAS_PASSWORD'),
  },
  vendure: {
    apiKey: normalizeApiKey(getEnvVar('VENDURE_SERVICE_API_KEY')),
  },
  logging: {
    level: getEnvVar('LOG_LEVEL', 'info'),
  },
};

export const isProduction = config.nodeEnv === 'production';
export const isDevelopment = config.nodeEnv === 'development';

