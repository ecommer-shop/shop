import 'dotenv/config';
// @ts-ignore
import { Client } from 'pg';
// npx ts-node run-migration.ts
async function main() {
    const connectionString = process.env.DATABASE_URL;
    const c = new Client(
        connectionString
            ? { connectionString, ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined }
            : {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT) || 5432,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            }
    );

    await c.connect();
    console.log('Connected to database');

    // Check existing columns
    const check = await c.query(
        "SELECT column_name FROM information_schema.columns WHERE table_name = 'seller' AND (column_name LIKE '%terms%' OR column_name LIKE '%legal%')"
    );
    console.log('Existing columns:', check.rows);

    if (check.rows.length === 0) {
        console.log('Running migration...');
        await c.query('ALTER TABLE "seller" ADD "customFieldsAcceptedtermsandprivacy" boolean DEFAULT false');
        await c.query('ALTER TABLE "seller" ADD "customFieldsConfirmedlegalage" boolean DEFAULT false');
        console.log('Migration completed successfully!');
    } else {
        console.log('Columns already exist, skipping migration.');
    }

    await c.end();
}

main().catch((e) => {
    console.error('Error:', e.message);
    process.exit(1);
});
