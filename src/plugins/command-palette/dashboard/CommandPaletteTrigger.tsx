import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search } from 'lucide-react';
import { CommandPaletteDialog } from './CommandPaletteDialog';

export function CommandPaletteTrigger() {
    const [open, setOpen] = useState(false);

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
            {/* Toolbar button */}
            <button
                onClick={handleOpen}
                title="Buscar comandos (⌘K)"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    border: 'none',
                    background: 'transparent',
                    borderRadius: 8,
                    cursor: 'pointer',
                    color: 'var(--muted-foreground)',
                    transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--accent, hsl(var(--accent)))';
                    e.currentTarget.style.color = 'var(--accent-foreground, var(--foreground))';
                    e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--muted-foreground)';
                    e.currentTarget.style.opacity = '1';
                }}
            >
                <Search style={{ width: 18, height: 18 }} />
            </button>

            {/* Floating FAB via portal */}
            {createPortal(
                <>
                    <button
                        onClick={handleOpen}
                        title="Buscar comandos (⌘K)"
                        style={{
                            position: 'fixed',
                            bottom: 140,
                            right: 24,
                            width: 48,
                            height: 48,
                            borderRadius: 14,
                            border: 'none',
                            background: 'var(--primary, hsl(var(--primary)))',
                            color: 'var(--primary-foreground, white)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                            zIndex: 9997,
                            transition: 'transform 0.15s, box-shadow 0.15s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.08)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                        }}
                    >
                        <Search style={{ width: 22, height: 22 }} />
                    </button>
                    <CommandPaletteDialog open={open} onClose={handleClose} />
                </>,
                document.body,
            )}
        </>
    );
}
