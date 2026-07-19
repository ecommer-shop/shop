import { copyFileSync, existsSync, readFileSync } from 'fs';

// Reemplaza el MoneyInput del dashboard por una versión adaptada a COP
// (solo dígitos, separador de miles en vivo, sin decimales, select-all al
// enfocar). La versión parcheada vive en scripts/templates/money-input.patched.tsx
// y conserva el comportamiento original para monedas con decimales.
// Mismo patrón que patch-empty-states.mjs: node_modules se regenera al
// instalar, así que el parche se aplica antes de cada build.

const TARGET = 'node_modules/@vendure/dashboard/src/lib/components/data-input/money-input.tsx';
// .tpl para que el editor no intente typecheckear el archivo fuera de su
// destino (los alias @/vdb solo resuelven dentro del paquete del dashboard).
const TEMPLATE = 'scripts/templates/money-input.patched.tsx.tpl';

if (!existsSync(TARGET)) {
    console.log(`[patch-money-input] skipping, target not found: ${TARGET}`);
    process.exit(0);
}
if (!existsSync(TEMPLATE)) {
    console.error(`[patch-money-input] ERROR: template missing: ${TEMPLATE}`);
    process.exit(1);
}

const current = readFileSync(TARGET, 'utf-8');
if (current.includes('[patch-money-input]')) {
    console.log('[patch-money-input] already applied, nothing to do');
} else {
    if (!current.includes('export function MoneyInput')) {
        console.warn('[patch-money-input] WARNING: target file changed shape — review the patch before trusting it');
    }
    copyFileSync(TEMPLATE, TARGET);
    console.log(`[patch-money-input] replaced ${TARGET}`);
}
