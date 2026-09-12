import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Drawer, DrawerContent, useNavigate } from '@vendure/dashboard';
import { MessageSquare } from 'lucide-react';
import { AiChatDrawerContent } from './AiChatDrawerContent';

export function AiChatFabTrigger() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggle = useCallback(() => setOpen(prev => !prev), []);

    const handleNavigateToFullChat = useCallback(() => {
        setOpen(false);
        navigate({ to: '/ai-chat' });
    }, [navigate]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const isMod = e.metaKey || e.ctrlKey;
            if (isMod && e.shiftKey && e.key === 'K') {
                e.preventDefault();
                setOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <>
            <button
                onClick={handleToggle}
                title="Asistente IA (Ctrl+Shift+K)"
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
                <MessageSquare style={{ width: 18, height: 18 }} />
            </button>

            {createPortal(
                <Drawer open={open} onOpenChange={setOpen} direction="right">
                    <DrawerContent className="flex flex-col sm:max-w-[400px]">
                        <AiChatDrawerContent onNavigateToFullChat={handleNavigateToFullChat} />
                    </DrawerContent>
                </Drawer>,
                document.body,
            )}
        </>
    );
}