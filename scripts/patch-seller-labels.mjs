import { readFileSync, writeFileSync } from 'fs';

// Ajustes de UX para vendedores colombianos SIN vía oficial en Vendure,
// aplicados sobre el core del dashboard antes de cada build (mismo patrón que
// patch-empty-states.mjs):
//
// - El SKU deja de ser obligatorio en los formularios de variantes: si se deja
//   vacío, AutoSkuPlugin (src/plugins/auto-sku) lo genera automáticamente.
//
// Nota: el rename "SKU" → "Referencia" NO va aquí — se hace por la vía oficial
// con overrides de traducción en src/plugins/seller-ux/dashboard/es.po.

const PATCHES = [
    {
        file: 'node_modules/@vendure/dashboard/src/app/routes/_authenticated/_products/components/add-product-variant-dialog.tsx',
        replacements: [
            {
                target: `sku: z.string().min(1, 'SKU is required'),`,
                replacement: `sku: z.string(), // [patch-seller-labels] opcional: AutoSkuPlugin lo genera si queda vacío`,
            },
            {
                target: `                            name="sku"
                            label={<Trans>SKU</Trans>}
                            render={({ field }) => <Input {...field} />}`,
                replacement: `                            name="sku"
                            label={<Trans>SKU</Trans>}
                            render={({ field }) => (
                                <Input {...field} placeholder="Se genera automáticamente si lo dejas vacío" />
                            )}`,
            },
        ],
    },
    {
        file: 'node_modules/@vendure/dashboard/src/app/routes/_authenticated/_products/components/generate-variants-panel.tsx',
        replacements: [
            {
                target: `        if (!data.sku || data.sku.length === 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'SKU is required',
                path: ['sku'],
            });
        }
`,
                replacement: `        // [patch-seller-labels] SKU opcional: AutoSkuPlugin lo genera si queda vacío
`,
            },
            {
                target: `placeholder="SKU"`,
                replacement: `placeholder="Se genera automáticamente"`,
            },
        ],
    },
];

let applied = 0;
let skipped = 0;
for (const { file, replacements } of PATCHES) {
    let content;
    try {
        content = readFileSync(file, 'utf-8');
    } catch {
        console.log(`[patch-seller-labels] skipping missing file: ${file}`);
        continue;
    }
    let changed = false;
    for (const { target, replacement } of replacements) {
        if (content.includes(replacement)) {
            skipped++;
        } else if (content.includes(target)) {
            content = content.replace(target, replacement);
            changed = true;
            applied++;
        } else {
            console.warn(`[patch-seller-labels] WARNING: target not found in ${file} — dashboard version may have changed`);
        }
    }
    if (changed) {
        writeFileSync(file, content);
        console.log(`[patch-seller-labels] patched ${file}`);
    }
}
console.log(`[patch-seller-labels] done (${applied} applied, ${skipped} already present)`);
