import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;

const ADMINISTRATOR_SQL = [
    `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStoreheaderbannerurlid" integer`,
    `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStoreheaderbannerurlid"`,
    `ALTER TABLE "administrator" ADD CONSTRAINT "FK_administrator_customFieldsStoreheaderbannerurlid" FOREIGN KEY ("customFieldsStoreheaderbannerurlid") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    `ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorebannerurlid" integer`,
    `ALTER TABLE "administrator" DROP CONSTRAINT IF EXISTS "FK_administrator_customFieldsStorebannerurlid"`,
    `ALTER TABLE "administrator" ADD CONSTRAINT "FK_administrator_customFieldsStorebannerurlid" FOREIGN KEY ("customFieldsStorebannerurlid") REFERENCES "asset"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
];

const CHANNEL_SQL = [
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsInvoicebillingactive" boolean NOT NULL DEFAULT false`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsInvoicelimitremaining" integer`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiascompanyid" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasaccesstoken" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasinvoiceprefix" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasresolutionnumber" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasglobalpooltotal" integer`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsMatiasglobalpoolsellable" integer`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatestatus" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatepaymentstatus" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatetype" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificateexpiresat" TIMESTAMP`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatepaidat" TIMESTAMP`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocchamber" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocrut" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocnit" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatedocdianresolution" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingcertificatereviewnote" character varying`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingplanlastpurchasedat" TIMESTAMP`,
    `ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsBillingplanpurchasehistory" text`,
];

const CUSTOMER_SQL = [
    `ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsDni" character varying`,
    `ALTER TABLE "customer" ADD COLUMN IF NOT EXISTS "customFieldsIdentitydocumentid" character varying`,
];

const ADDRESS_SQL = [
    `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsMatiascityid" character varying`,
    `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsDni" character varying`,
    `ALTER TABLE "address" ADD COLUMN IF NOT EXISTS "customFieldsIdentitydocumentid" character varying`,
];

const ORDER_SQL = [
    `ALTER TABLE "order" ADD COLUMN IF NOT EXISTS "customFieldsInvoicelasterror" text`,
];

async function columnExists(client, table, column) {
    const result = await client.query(
        `SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1 AND column_name = $2`,
        [table, column],
    );
    return result.rows.length > 0;
}

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});

await client.connect();

const sections = [
    ['administrator', ADMINISTRATOR_SQL],
    ['channel', CHANNEL_SQL],
    ['customer', CUSTOMER_SQL],
    ['address', ADDRESS_SQL],
    ['order', ORDER_SQL],
];

for (const [name, statements] of sections) {
    console.info(`[repair-store-schema] Reparando ${name}…`);
    for (const sql of statements) {
        await client.query(sql);
    }
}

const checks = [
    ['administrator', 'customFieldsStoreheaderbannerurlid'],
    ['administrator', 'customFieldsStorebannerurlid'],
    ['channel', 'customFieldsInvoicebillingactive'],
    ['customer', 'customFieldsDni'],
    ['address', 'customFieldsDni'],
];

for (const [table, column] of checks) {
    const ok = await columnExists(client, table, column);
    console.info(`[repair-store-schema] ${table}.${column}: ${ok ? 'OK' : 'FALTA'}`);
    if (!ok) {
        throw new Error(`Columna faltante: ${table}.${column}`);
    }
}

console.info('[repair-store-schema] Listo.');
await client.end();
