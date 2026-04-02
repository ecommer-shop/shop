import pg from 'pg';
const { Client } = pg;

const client = new Client({
    connectionString: 'postgresql://postgres:MfWjIfJAePJgzGKARIbdoVmxrfLWYDvm@switchyard.proxy.rlwy.net:41847/railway',
    ssl: { rejectUnauthorized: false }
});

await client.connect();

// Get all products missing translations, deriving names from the first variant translation
const res = await client.query(`
  SELECT DISTINCT ON (p.id)
         p.id AS product_id,
         pvt.name AS variant_name,
         pvt."languageCode"
  FROM product p
  LEFT JOIN product_translation pt ON pt."baseId" = p.id
  JOIN product_variant pv ON pv."productId" = p.id AND pv."deletedAt" IS NULL
  JOIN product_variant_translation pvt ON pvt."baseId" = pv.id
  WHERE pt.id IS NULL
    AND p."deletedAt" IS NULL
  ORDER BY p.id, pv.id ASC
`);

console.log(`Found ${res.rows.length} products without translations`);

if (res.rows.length === 0) {
    console.log('No products to fix!');
    await client.end();
    process.exit(0);
}

// Helper to derive product name from variant name (strip size/variant suffixes)
function deriveProductName(variantName) {
    // Remove common variant suffixes like "Size 40", "8GB", etc.
    return variantName
        .replace(/\s+Size\s+\d+$/i, '')
        .replace(/\s+\d+\s*(GB|TB|inch|cm|mm|ml|oz|kg|g)$/i, '')
        .trim();
}

function slugify(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

// Insert missing product_translation rows
let inserted = 0;
for (const row of res.rows) {
    const productName = deriveProductName(row.variant_name);
    const slug = slugify(productName);
    const lang = row.languageCode;

    try {
        await client.query(`
      INSERT INTO product_translation ("createdAt", "updatedAt", "languageCode", name, slug, description, "baseId")
      VALUES (NOW(), NOW(), $1, $2, $3, '', $4)
      ON CONFLICT DO NOTHING
    `, [lang, productName, slug, row.product_id]);
        inserted++;
        console.log(`  [OK] Product ${row.product_id}: "${productName}" (${lang})`);
    } catch (e) {
        console.error(`  [FAIL] Product ${row.product_id}: ${e.message}`);
    }
}

console.log(`\nInserted ${inserted} product translations`);

// Verify
const verify = await client.query(`
  SELECT COUNT(*) AS missing
  FROM product p
  LEFT JOIN product_translation pt ON pt."baseId" = p.id
  WHERE p."deletedAt" IS NULL AND pt.id IS NULL
`);
console.log(`Products still missing translations: ${verify.rows[0].missing}`);

await client.end();
