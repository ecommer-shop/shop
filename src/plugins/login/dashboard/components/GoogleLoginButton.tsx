import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        google?: {
            accounts: {
                oauth2: {
                    initTokenClient: (config: {
                        client_id: string;
                        scope: string;
                        callback: (response: { access_token?: string; error?: string }) => void;
                        error_callback?: (error: { message?: string }) => void;
                    }) => {
                        requestAccessToken: (overrides?: { prompt?: string }) => void;
                    };
                };
            };
        };
    }
}

interface GoogleLoginButtonProps {
    clientId: string;
    onSuccess: (token: string) => void;
    onError?: (error: string) => void;
    text?: 'signin_with' | 'signup_with' | 'continue_with';
    disabled?: boolean;
}

/**
 * @description
 * Abre el popup de google para iniciar sesion al hacer click. Acepta tanto ID tokens como access tokens, y delega la verificación al backend.
 */
export function GoogleLoginButton({
    clientId,
    onSuccess,
    onError,
    disabled = false,
}: GoogleLoginButtonProps) {
    const scriptLoaded = useRef(false);
    const tokenClientRef = useRef<ReturnType<
        NonNullable<Window['google']>['accounts']['oauth2']['initTokenClient']
    > | null>(null);
    const [ready, setReady] = useState(false);
    const GOOGLE_SRC_API = 'https://accounts.google.com/gsi/client'
    useEffect(() => {
        const initializeGoogle = () => {
            if (!window.google) return;

            try {
                tokenClientRef.current = window.google.accounts.oauth2.initTokenClient({
                    client_id: clientId,
                    scope: 'openid email profile',
                    callback: (tokenResponse) => {
                        if (tokenResponse.access_token) {
                            onSuccess(tokenResponse.access_token);
                        } else {
                            onError?.(tokenResponse.error || 'No access token received');
                        }
                    },
                    error_callback: (error) => {
                        onError?.(error?.message || 'Google OAuth error');
                    },
                });
                setReady(true);
            } catch (e) {
                console.error('[GoogleLoginButton] initTokenClient failed:', e);
                onError?.('Failed to initialize Google OAuth');
            }
        };

        if (window.google) {
            initializeGoogle();
            return;
        }

        if (!scriptLoaded.current) {
            scriptLoaded.current = true;
            const script = document.createElement('script');
            script.src = GOOGLE_SRC_API;
            script.async = true;
            script.defer = true;
            script.onload = initializeGoogle;
            script.onerror = () => onError?.('Failed to load Google Identity Services');
            document.head.appendChild(script);
        }
    }, [clientId, onSuccess, onError]);

    const handleClick = () => {
        if (tokenClientRef.current) {
            tokenClientRef.current.requestAccessToken({ prompt: 'select_account' });
        } else {
            onError?.('Google OAuth not initialized yet');
        }
    };

    const isDisabled = disabled || !ready;

    return (
        <button
            onClick={handleClick}
            type="button"
            disabled={isDisabled}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '320px',
                height: '44px',
                border: '1px solid #dadce0',
                borderRadius: '4px',
                backgroundColor: isDisabled ? '#f1f1f1' : '#fff',
                cursor: isDisabled ? 'default' : 'pointer',
                fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: isDisabled ? '#9aa0a6' : '#3c4043',
                padding: '0 12px',
                transition: 'background-color 0.2s',
                opacity: isDisabled ? 0.7 : 1,
            }}
            onMouseOver={(e) => {
                if (!isDisabled) e.currentTarget.style.backgroundColor = '#f7f8f8';
            }}
            onMouseOut={(e) => {
                if (!isDisabled) e.currentTarget.style.backgroundColor = '#fff';
            }}
        >
            <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            Iniciar sesión con Google
        </button>
    );
}
