import { useState, useRef, useEffect, useCallback } from 'react';

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const SHOP_API_URL = import.meta.env.VITE_SHOP_API_URL ?? '/shop-api';
const PERSIST_KEY = 'ecommer-chat-messages';

const WELCOME_MSG: ChatMessage = {
    id: '1',
    role: 'assistant',
    content: '¡Hola! Soy el asistente de Ecommer. ¿En qué puedo ayudarte hoy?',
    timestamp: new Date(),
};

function parseContextMessages(): ChatMessage[] | null {
    try {
        const ctx = sessionStorage.getItem('ecommer-ai-context');
        if (ctx) {
            sessionStorage.removeItem('ecommer-ai-context');
            const { query: q, response: r } = JSON.parse(ctx);
            if (q && r) {
                return [
                    WELCOME_MSG,
                    { id: 'ctx-user', role: 'user', content: q, timestamp: new Date() },
                    { id: 'ctx-ai', role: 'assistant', content: r, timestamp: new Date() },
                ];
            }
        }
    } catch {}
    return null;
}

function loadMessages(): ChatMessage[] {
    try {
        const saved = sessionStorage.getItem(PERSIST_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }));
            }
        }
    } catch {}
    const ctx = parseContextMessages();
    if (ctx) return ctx;
    return [WELCOME_MSG];
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>(loadMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const contextRef = useRef<string | null>(null);
    const contextPromiseRef = useRef<Promise<string> | null>(null);
    const messagesRef = useRef(messages);
    messagesRef.current = messages;

    const scrollToBottom = useCallback(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const fetchUserContext = useCallback(async (): Promise<string> => {
        try {
            const res = await fetch('/admin-api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    query: `
                        query ChatUserContext {
                            activeAdministrator {
                                user { roles { code permissions } }
                                customFields { storeDescription }
                            }
                            activeChannel { code token seller { name } }
                        }
                    `,
                }),
            });
            const json = await res.json();
            const admin = json?.data?.activeAdministrator;
            const channel = json?.data?.activeChannel;
            const roles = admin?.user?.roles ?? [];
            const isSuper = roles.some(
                (r: any) => r.code === '__super_admin' || r.permissions?.includes?.('SuperAdmin'),
            );
            const channelToken = channel?.token || 'unknown';
            const channelCode = channel?.code || 'unknown';
            const meta = `[from: admin] [channel: ${channelToken}] [code: ${channelCode}]`;
            const role = isSuper
                ? 'Eres superadministrador de Ecommer.'
                : channel?.seller?.name
                    ? `Eres vendedor de "${channel.seller.name}" (canal: ${channelCode}).`
                    : 'Eres administrador de Ecommer.';
            return `${meta}\n${role}`;
        } catch {
            return '';
        }
    }, []);

    const ensureContext = useCallback(async (): Promise<string> => {
        if (contextRef.current !== null) return contextRef.current;
        if (!contextPromiseRef.current) {
            contextPromiseRef.current = fetchUserContext().then(ctx => {
                contextRef.current = ctx;
                return ctx;
            });
        }
        return contextPromiseRef.current;
    }, [fetchUserContext]);

    const sendMessage = useCallback(async (content: string) => {
        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        scrollToBottom();

        try {
            const history = messagesRef.current.map(m => ({
                role: m.role,
                content: m.content,
            }));

            const ctx = await ensureContext();
            const fullContent = ctx ? `${ctx}\n\n${content}` : content;

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
                    variables: { message: fullContent, history },
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
    }, [ensureContext, scrollToBottom]);

    const handleSend = useCallback(async (overrideMessage?: string) => {
        const content = (overrideMessage || input).trim();
        if (!content || isTyping) return;
        if (!overrideMessage) setInput('');
        await sendMessage(content);
    }, [input, isTyping, sendMessage]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }, [handleSend]);

    useEffect(() => {
        sessionStorage.setItem(PERSIST_KEY, JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        const pending = sessionStorage.getItem('ecommer-ai-prompt');
        if (pending) {
            sessionStorage.removeItem('ecommer-ai-prompt');
            setTimeout(() => handleSend(pending), 200);
        }
    }, [handleSend]);

    return {
        messages,
        input,
        isTyping,
        setInput,
        handleSend,
        handleKeyDown,
        bottomRef,
        scrollToBottom,
    };
}
