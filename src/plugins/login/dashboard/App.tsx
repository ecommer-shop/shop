import { useState, useCallback } from 'react';
import { GoogleLoginButton } from './components/GoogleLoginButton';
import { SellerRegistrationForm } from './components/SellerRegistrationForm';
import { POST_LOGIN_RELOAD_KEY } from './components/PostLoginReloadBlock';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID || '';

// Detectar la URL del Admin API basándose en la URL actual del dashboard
function getAdminApiUrl(): string {
    const origin = window.location.origin;
    return `${origin}/admin-api`;
}

type AuthView = 'login' | 'register';

interface GoogleLoginOptions {
    fromRegistration?: boolean;
}

export function App() {
    const [view, setView] = useState<AuthView>('login');
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [registerNotice, setRegisterNotice] = useState<string | null>(null);

    const adminApiUrl = getAdminApiUrl();

    const redirectToRegisterFlow = useCallback(() => {
        setView('register');
        setError(null);
        setStatus(null);
        setRegisterNotice(
            'No encontramos una cuenta registrada con este correo. Completa el formulario para crear tu tienda.',
        );
    }, []);

    const handleGoogleLogin = useCallback(
        async (idToken: string, options?: GoogleLoginOptions) => {
            const fromRegistration = options?.fromRegistration === true;
            setError(null);
            setRegisterNotice(null);
            setStatus(
                fromRegistration
                    ? 'Registro exitoso. Iniciando sesión automáticamente...'
                    : 'Iniciando sesión...',
            );

            try {
                const response = await fetch(adminApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        query: `
                            mutation Authenticate($input: AuthenticationInput!) {
                                authenticate(input: $input) {
                                    ... on CurrentUser {
                                        id
                                        identifier
                                        channels {
                                            id
                                            code
                                            permissions
                                        }
                                    }
                                    ... on InvalidCredentialsError {
                                        message
                                        errorCode
                                    }
                                }
                            }
                        `,
                        variables: {
                            input: {
                                google: { token: idToken },
                            },
                        },
                    }),
                });

                const result = await response.json();

                if (result.errors?.length) {
                    const errorMessage = result.errors[0]?.message || 'Error de autenticación';
                    const looksLikeInvalidCredentials = /invalid credentials|credenciales/i.test(
                        errorMessage,
                    );

                    if (!fromRegistration && looksLikeInvalidCredentials) {
                        redirectToRegisterFlow();
                        return;
                    }

                    setError(
                        fromRegistration
                            ? 'Tu cuenta fue creada, pero no pudimos iniciar sesión automáticamente. Haz clic en "Iniciar sesión con Google".'
                            : errorMessage,
                    );
                    setStatus(null);
                    return;
                }

                const authResult = result.data?.authenticate;

                if (authResult?.__typename === 'InvalidCredentialsError' || authResult?.errorCode) {
                    if (!fromRegistration) {
                        redirectToRegisterFlow();
                        return;
                    }

                    setError(
                        authResult.message ||
                        (fromRegistration
                            ? 'Tu cuenta fue creada, pero no pudimos iniciar sesión automáticamente. Haz clic en "Iniciar sesión con Google".'
                            : 'Credenciales inválidas. ¿Ya tienes una cuenta de administrador/vendedor?'),
                    );
                    setStatus(null);
                    return;
                }

                if (authResult?.id) {
                    setStatus('¡Sesión iniciada! Redirigiendo...');
                    sessionStorage.setItem(POST_LOGIN_RELOAD_KEY, '1');
                    window.location.href = '/dashboard';
                } else {
                    if (!fromRegistration) {
                        redirectToRegisterFlow();
                        return;
                    }

                    setError(
                        fromRegistration
                            ? 'Tu cuenta fue creada, pero no pudimos iniciar sesión automáticamente. Haz clic en "Iniciar sesión con Google".'
                            : 'No se encontró una cuenta con este email. Regístrate como vendedor primero.',
                    );
                    setStatus(null);
                }
            } catch (err) {
                setError(
                    fromRegistration
                        ? 'Tu cuenta fue creada, pero ocurrió un error al iniciar sesión automáticamente. Intenta iniciar sesión con Google.'
                        : (err instanceof Error ? err.message : 'Error de conexión'),
                );
                setStatus(null);
            }
        },
        [adminApiUrl, redirectToRegisterFlow],
    );

    const handleRegistered = useCallback(
        async (_email: string, token: string) => {
            setView('login');
            setError(null);
            await handleGoogleLogin(token, { fromRegistration: true });
        },
        [handleGoogleLogin],
    );

    if (!GOOGLE_CLIENT_ID) {
        return (
            <div className="w-full max-w-sm mx-auto px-4">
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                    Error: VITE_GOOGLE_OAUTH_CLIENT_ID no está configurado. Agrega la variable de entorno
                    para habilitar el login con Google.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-sm mx-auto px-4 flex flex-col gap-4">
            {view === 'login' && (
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                        Iniciar sesión con Google
                    </h3>

                    {error && (
                        <p className="w-full text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                            {error}
                        </p>
                    )}
                    {status && (
                        <p className="w-full text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-center">
                            {status}
                        </p>
                    )}

                    <div className="flex justify-center">
                        <GoogleLoginButton
                            clientId={GOOGLE_CLIENT_ID}
                            onSuccess={handleGoogleLogin}
                            onError={msg => setError(msg)}
                            text="signin_with"
                        />
                    </div>

                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">¿No tienes cuenta?</span>
                        </div>
                    </div>

                    <button
                        className="w-full border border-border rounded-md px-5 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => {
                            setView('register');
                            setError(null);
                            setStatus(null);
                            setRegisterNotice(null);
                        }}
                    >
                        Registrarse como Vendedor
                    </button>
                </div>
            )}

            {view === 'register' && (
                <div className="flex flex-col items-center gap-4">
                    {registerNotice && (
                        <p className="w-full text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-md px-3 py-2">
                            {registerNotice}
                        </p>
                    )}

                    <SellerRegistrationForm
                        clientId={GOOGLE_CLIENT_ID}
                        onRegistered={handleRegistered}
                        adminApiUrl={adminApiUrl}
                    />

                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">¿Ya tienes cuenta?</span>
                        </div>
                    </div>

                    <button
                        className="w-full border border-border rounded-md px-5 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => {
                            setView('login');
                            setError(null);
                            setStatus(null);
                            setRegisterNotice(null);
                        }}
                    >
                        Iniciar sesión
                    </button>
                </div>
            )}
        </div>
    );
}
