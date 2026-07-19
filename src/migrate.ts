import 'dotenv/config';
import { runMigrations } from '@vendure/core';
import { config } from './vendure-config';

/**
 * Aplica migraciones pendientes sin levantar el servidor.
 * Uso: npm run migrate  (con DATABASE_URL de stage/local en .env)
 */
runMigrations(config)
  .then(() => {
    console.info('[migrate] Migraciones aplicadas correctamente.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('[migrate] Error:', err);
    process.exit(1);
  });
