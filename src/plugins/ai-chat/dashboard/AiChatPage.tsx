import { AiChatWindow } from './AiChatWindow';

export function AiChatPage() {
    return (
        <div style={{ padding: '24px', height: '100%' }}>
            <h1 style={{ 
                marginBottom: '8px', 
                fontSize: '1.4rem', 
                fontWeight: 600,
                color: 'var(--sl-color-neutral-900)'
            }}>
                Asistente IA
            </h1>
            <p style={{
                marginBottom: '20px',
                fontSize: '0.875rem',
                color: 'var(--sl-color-neutral-500)'
            }}>
                Consultá al asistente de Ecommer sobre productos, órdenes o cualquier duda operativa.
            </p>
            <AiChatWindow />
        </div>
    );
}