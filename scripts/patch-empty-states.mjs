import { readFileSync, writeFileSync } from 'fs';

// Replaces the plain "No results" cell of the core dashboard DataTable with a
// friendlier illustrated empty state (GitHub-style). Runs before every
// dashboard build, same pattern as patch-base-ui.mjs — node_modules is
// regenerated on install, so the patch must stay repeatable.

const FILE = 'node_modules/@vendure/dashboard/src/lib/components/data-table/data-table.tsx';

const TARGET = `<Trans>No results</Trans>`;

const REPLACEMENT = `<div className="flex flex-col items-center justify-center gap-2 py-6 animate-in fade-in duration-300">{/* [patch-empty-states] */}
                                                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40" aria-hidden="true">
                                                        <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
                                                        <path d="M3 8l9 5 9-5" />
                                                        <path d="M12 13v8" />
                                                        <path d="M19.5 2.5l.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4z" />
                                                        <path d="M3.5 1.8l.3.8.8.3-.8.3-.3.8-.3-.8-.8-.3.8-.3z" />
                                                    </svg>
                                                    <p className="font-medium text-foreground">Nada por aquí todavía</p>
                                                    <p className="text-sm text-muted-foreground max-w-xs">Cuando haya información nueva la verás en esta tabla. Si usaste filtros, prueba ajustarlos.</p>
                                                </div>`;

let content;
try {
    content = readFileSync(FILE, 'utf-8');
} catch (err) {
    console.log(`[patch-empty-states] skipping, file not found: ${FILE}`);
    process.exit(0);
}

if (content.includes('[patch-empty-states]')) {
    console.log('[patch-empty-states] already applied, nothing to do');
} else if (content.includes(TARGET)) {
    writeFileSync(FILE, content.replace(TARGET, REPLACEMENT));
    console.log(`[patch-empty-states] patched empty state in ${FILE}`);
} else {
    console.warn('[patch-empty-states] WARNING: target markup not found — dashboard version may have changed, empty state left as default');
}
