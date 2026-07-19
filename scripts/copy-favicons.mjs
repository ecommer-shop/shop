import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import path from 'path';

// Copia los favicons de marca (src/dashboard-assets/favicons) a la salida del
// build del dashboard. Corre después de `vite build` (ver package.json).

const SRC = 'src/dashboard-assets/favicons';
const DEST = 'dist/dashboard';

if (!existsSync(SRC)) {
    console.error(`[copy-favicons] ERROR: no existe ${SRC}`);
    process.exit(1);
}
if (!existsSync(DEST)) {
    console.error(`[copy-favicons] ERROR: no existe ${DEST} — ¿corrió vite build?`);
    process.exit(1);
}
mkdirSync(DEST, { recursive: true });
let copied = 0;
for (const file of readdirSync(SRC)) {
    copyFileSync(path.join(SRC, file), path.join(DEST, file));
    copied++;
}
console.log(`[copy-favicons] ${copied} archivos copiados a ${DEST}`);
