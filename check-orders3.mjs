import pg from 'pg';
const { Client } = pg;

const client = new Client({
    connectionString: 'postgresql://postgres:MfWjIfJAePJgzGKARIbdoVmxrfLWYDvm@switchyard.proxy.rlwy.net:41847/railway',
    ssl: { rejectUnauthorized: false }
});

await client.connect();

const affected = [17, 34, 47, 40, 37, 38, 28, 36, 4];

// Check variant translations for hints on product names
const res1 = await client.query(`
  SELECT pv.id AS variant_id, pv."productId", pvt.name AS variant_name, pvt."languageCode"
  FROM product_variant pv
  LEFT JOIN product_variant_translation pvt ON pvt."baseId" = pv.id
  WHERE pv."productId" = ANY($1)
  ORDER BY pv."productId"
`, [affected]);
console.log('=== Variant translations for affected products ===');
console.log(JSON.stringify(res1.rows, null, 2));

// Check total products vs products with translations
const res2 = await client.query(`
  SELECT 
    (SELECT COUNT(*) FROM product WHERE "deletedAt" IS NULL) AS total_products,
    (SELECT COUNT(DISTINCT pt."baseId") FROM product_translation pt JOIN product p ON pt."baseId" = p.id WHERE p."deletedAt" IS NULL) AS products_with_trans
`);
console.log('\n=== Product translation coverage ===');
console.log(JSON.stringify(res2.rows[0], null, 2));

// List ALL products without translations
const res3 = await client.query(`
  SELECT p.id, p."createdAt"
  FROM product p
  LEFT JOIN product_translation pt ON pt."baseId" = p.id
  WHERE p."deletedAt" IS NULL AND pt.id IS NULL
  ORDER BY p.id
`);
console.log('\n=== All products without translations ===');
console.log(JSON.stringify(res3.rows.map(r => r.id)));

await client.end();
