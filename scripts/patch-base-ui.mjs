import { readFileSync, writeFileSync } from 'fs';

const files = [
    'node_modules/@base-ui/react/esm/menu/item/useMenuItemCommonProps.js',
    'node_modules/@base-ui/react/menu/item/useMenuItemCommonProps.js',
];

const patches = [
    {
        TARGET: `itemRef.current.click();`,
        REPLACEMENT: `// [patch-base-ui-mouseup] segundo click removido para no cerrar modals`,
    },
];

let totalPatched = 0;
for (const file of files) {
    let content = readFileSync(file, 'utf-8');
    let filePatchedCount = 0;
    for (const patch of patches) {
        if (content.includes(patch.TARGET)) {
            content = content.replace(patch.TARGET, patch.REPLACEMENT);
            console.log(`[patch-base-ui] patched '${patch.TARGET.substring(0, 20)}...' in ${file}`);
            filePatchedCount++;
        }
    }
    if (filePatchedCount > 0) {
        writeFileSync(file, content);
        totalPatched += filePatchedCount;
    } else {
        console.log(`[patch-base-ui] no changes needed for ${file}`);
    }
}
console.log(`[patch-base-ui] done (${totalPatched} total patches applied)`);
