import { useCallback } from 'react';
import { useChat } from './useChat';
import './chat.css';
import avatarUrl from './simteria-avatar.png';
import { DrawerHeader, DrawerTitle, DrawerDescription } from '@vendure/dashboard';
import { ExternalLink } from 'lucide-react';

function formatTime(date: Date): string {
    return date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}

interface Props {
    onNavigateToFullChat?: () => void;
}

export function AiChatDrawerContent({ onNavigateToFullChat }: Props) {
    const chat = useChat();

    const handleGoFull = useCallback(() => {
        sessionStorage.setItem('ecommer-chat-messages', JSON.stringify(chat.messages));
        onNavigateToFullChat?.();
    }, [chat.messages, onNavigateToFullChat]);

    return (
        <>
            <DrawerHeader className="shrink-0 border-b border-border">
                <div className="flex items-center gap-3">
                    <div className="ac-chat-avatar">
                        <img src={avatarUrl} alt="SimetrIA" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                        <DrawerTitle className="text-sm">Chat Ecommer: SimetrIA</DrawerTitle>
                        <DrawerDescription className="flex items-center gap-1.5 text-xs">
                            <span className="ac-status-dot inline-block" />
                            En línea
                        </DrawerDescription>
                    </div>
                </div>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto px-5 py-4" style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--chat-bg, var(--background))' }}>
                {chat.messages.map(msg => (
                    <div
                        key={msg.id}
                        className={`ac-message ${msg.role === 'user' ? 'ac-user' : 'ac-ai'}`}
                    >
                        <div className="ac-message-avatar">
                            {msg.role === 'user' ? (
                                '👤'
                            ) : (
                                <img src={avatarUrl} alt="SimetrIA" style={{ width: '65%', height: '65%', objectFit: 'contain' }} />
                            )}
                        </div>
                        <div className="ac-message-content">
                            <div className="ac-message-bubble">
                                <div
                                    className="ac-message-text"
                                    dangerouslySetInnerHTML={{ __html: msg.content }}
                                />
                            </div>
                            <div className="ac-message-time">{formatTime(msg.timestamp)}</div>
                        </div>
                    </div>
                ))}

                {chat.isTyping && (
                    <div className="ac-message ac-ai">
                        <div className="ac-message-avatar">
                            <img src={avatarUrl} alt="SimetrIA" style={{ width: '65%', height: '65%', objectFit: 'contain' }} />
                        </div>
                        <div className="ac-typing-bubble">
                            <span className="ac-typing-dot" />
                            <span className="ac-typing-dot" />
                            <span className="ac-typing-dot" />
                        </div>
                    </div>
                )}

                <div ref={chat.bottomRef} />
            </div>

            <div className="shrink-0 border-t border-border bg-[var(--chat-surface,var(--card))]">
                <div className="ac-chat-input-container">
                    <div className="ac-input-wrapper">
                        <textarea
                            className="ac-chat-input"
                            placeholder="Escribe un mensaje..."
                            value={chat.input}
                            onChange={e => chat.setInput(e.target.value)}
                            onKeyDown={chat.handleKeyDown}
                            rows={1}
                        />
                    </div>
                    <button
                        className="ac-send-button"
                        onClick={() => chat.handleSend()}
                        disabled={chat.isTyping || !chat.input.trim()}
                        aria-label="Enviar mensaje"
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
                {onNavigateToFullChat && (
                    <div className="flex justify-center py-2">
                        <button
                            onClick={handleGoFull}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                padding: '6px 14px',
                                fontSize: 12,
                                fontWeight: 500,
                                borderRadius: 6,
                                border: '1px solid var(--border)',
                                background: 'var(--card)',
                                color: 'var(--muted-foreground)',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                transition: 'all 0.15s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--accent, hsl(var(--accent)))';
                                e.currentTarget.style.color = 'var(--accent-foreground, var(--foreground))';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--card)';
                                e.currentTarget.style.color = 'var(--muted-foreground)';
                            }}
                        >
                            <ExternalLink style={{ width: 12, height: 12 }} />
                            Abrir en chat completo
                        </button>
                    </div>
                )}
                <div className="ac-powered-by">Powered by SimetrIA</div>
            </div>
        </>
    );
}