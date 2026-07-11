import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search } from 'lucide-react';
import { useIsMobile } from '@vendure/dashboard';
import { CommandPaletteDialog } from './CommandPaletteDialog';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

export function CommandPaletteTrigger() {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const isMod = e.metaKey || e.ctrlKey;
            if (isMod && e.key === 'k') {
                e.preventDefault();
                setOpen(prev => !prev);
            }
            if (e.key === 'Escape' && open) {
                setOpen(false);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [open]);

    return (
        <>
            {/* Header trigger: pill de búsqueda en desktop, icono en móvil */}
            <button
                onClick={handleOpen}
                title={`Buscar comandos (${isMac ? '⌘K' : 'Ctrl+K'})`}
                aria-label="Buscar comandos"
                className="ai-glow-trigger"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    height: 34,
                    padding: isMobile ? '0 8px' : '0 10px',
                    borderRadius: 9999,
                    cursor: 'pointer',
                    color: 'var(--muted-foreground)',
                }}
            >
                <Search style={{ width: 16, height: 16, flexShrink: 0 }} />
                {!isMobile && (
                    <>
                        <span style={{ fontSize: 13 }}>Buscar</span>
                        <kbd
                            style={{
                                fontSize: 11,
                                fontFamily: 'inherit',
                                lineHeight: 1,
                                padding: '3px 5px',
                                borderRadius: 6,
                                border: '1px solid var(--border)',
                                background: 'var(--background)',
                                color: 'var(--muted-foreground)',
                            }}
                        >
                            {isMac ? '⌘K' : 'Ctrl K'}
                        </kbd>
                    </>
                )}
            </button>

            {/* Dialog via portal */}
            {createPortal(
                <CommandPaletteDialog open={open} onClose={handleClose} />,
                document.body,
            )}
        </>
    );
}
