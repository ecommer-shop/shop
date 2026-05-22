import { useState, useRef } from 'react';
import './chat.css';

import avatarUrl from './simteria-avatar.png';

interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const SHOP_API_URL = import.meta.env.VITE_SHOP_API_URL ?? '/shop-api';

function formatTime(date: Date): string {
    return date.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
}

export function AiChatWindow() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            role: 'assistant',
            content: '¡Hola! Soy el asistente de Ecommer. ¿En qué puedo ayudarte hoy?',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = async () => {
        const content = input.trim();
        if (!content || isTyping) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);
        scrollToBottom();

        try {
            const history = messages.map(m => ({
                role: m.role,
                content: m.content,
            }));

            const res = await fetch(SHOP_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        mutation SendChatMessage($message: String!, $history: [ChatHistoryInput!]) {
                            sendChatMessage(message: $message, history: $history) {
                                response
                                error
                            }
                        }
                    `,
                    variables: { message: content, history },
                }),
            });

            const data = await res.json();
            const aiResponse = data?.data?.sendChatMessage?.response;
            const aiError = data?.data?.sendChatMessage?.error;

            setMessages(prev => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: aiResponse || aiError || 'No se pudo obtener respuesta.',
                    timestamp: new Date(),
                },
            ]);
        } catch {
            setMessages(prev => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: 'Hubo un error al conectar con el asistente. Intenta de nuevo.',
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsTyping(false);
            scrollToBottom();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="ac-chat-window">
            {/* HEADER */}
            <div className="ac-chat-header">
                <div className="ac-chat-avatar">
                    <img src={avatarUrl} alt="SimetrIA" />
                </div>
                <div className="ac-chat-info">
                    <div className="ac-chat-title">Chat Ecommer: SimetrIA</div>
                    <div className="ac-chat-subtitle">
                        <span className="ac-status-dot" />
                        En línea
                    </div>
                </div>
            </div>

            {/* MENSAJES */}
            <div className="ac-chat-messages">
                {messages.map(msg => (
                    <div
                        key={msg.id}
                        ref={el => {
                            if (el) messageRefs.current.set(msg.id, el);
                        }}
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

                {isTyping && (
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

                <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <div className="ac-chat-input-container">
                <div className="ac-input-wrapper">
                    <textarea
                        className="ac-chat-input"
                        placeholder="Escribe un mensaje..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={1}
                    />
                </div>
                <button
                    className="ac-send-button"
                    onClick={handleSend}
                    disabled={isTyping || !input.trim()}
                    aria-label="Enviar mensaje"
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>

            <div className="ac-powered-by">Powered by SimetrIA</div>
        </div>
    );
}