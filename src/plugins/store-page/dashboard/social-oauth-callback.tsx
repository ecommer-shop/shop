import { useEffect, useState } from 'react';

export function SocialOAuthCallback() {
    const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
    const [message, setMessage] = useState('Procesando...');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        const state = params.get('state');
        const error = params.get('error');
        const fullUrl = window.location.href;

        if (error) {
            setStatus('error');
            setMessage(`Error: ${error}`);
            notifyOpener({ type: 'oauth-error', error, fullUrl });
            return;
        }

        if (!code) {
            setStatus('error');
            setMessage('No se recibió el código de autorización');
            notifyOpener({ type: 'oauth-error', error: 'No code in URL', fullUrl });
            return;
        }

        setStatus('success');
        setMessage('Conectado. Cerrando ventana...');
        notifyOpener({ type: 'oauth-code', code, state });
        setTimeout(() => window.close(), 1500);
    }, []);

    function notifyOpener(data: any) {
        try {
            if (window.opener && !window.opener.closed) {
                window.opener.postMessage(data, '*');
            }
        } catch {
            // cross-origin, ignore
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontFamily: 'system-ui, sans-serif',
                padding: '24px',
                textAlign: 'center',
            }}
        >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                {status === 'processing' ? '⏳' : status === 'success' ? '✅' : '❌'}
            </div>
            <h2
                style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: status === 'error' ? '#ef4444' : status === 'success' ? '#22c55e' : 'inherit',
                }}
            >
                {status === 'processing' && 'Procesando...'}
                {status === 'success' && 'Conectado'}
                {status === 'error' && 'Error'}
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>{message}</p>
            <button
                onClick={() => window.close()}
                style={{
                    padding: '10px 24px',
                    borderRadius: '6px',
                    border: status === 'error' ? '1px solid #d1d5db' : 'none',
                    background: status === 'error' ? 'transparent' : '#6366f1',
                    color: status === 'error' ? 'inherit' : '#fff',
                    cursor: 'pointer',
                    fontWeight: 600,
                }}
            >
                Cerrar
            </button>
        </div>
    );
}
