import { useState, useCallback, useEffect } from 'react';
import { GoogleLoginButton } from './components/GoogleLoginButton';
import { SellerRegistrationForm } from './components/SellerRegistrationForm';
import { POST_LOGIN_RELOAD_KEY } from './components/PostLoginReloadBlock';

const FALLBACK_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID || '';

// Detectar la URL del Admin API basándose en la URL actual del dashboard
function getAdminApiUrl(): string {
    const origin = window.location.origin;
    return `${origin}/admin-api`;
}

type AuthView = 'home' | 'login' | 'register';

export function App() {
    const [view, setView] = useState<AuthView>('home');
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [registerNotice, setRegisterNotice] = useState<string | null>(null);
    const [googleClientId, setGoogleClientId] = useState<string>(FALLBACK_GOOGLE_CLIENT_ID);
    const [configLoaded, setConfigLoaded] = useState<boolean>(!!FALLBACK_GOOGLE_CLIENT_ID);

    const redirectToRegisterFlow = useCallback(() => {
        setView('register');
        setError(null);
        setStatus(null);
        setRegisterNotice(
            'No encontramos una cuenta registrada con este correo. Completa el formulario para crear tu tienda.',
        );
    }, []);

    const adminApiUrl = getAdminApiUrl();

    useEffect(() => {
        // Resolve public login config at runtime to avoid depending on Vite build-time env vars.
        if (googleClientId) {
            return;
        }

        const loadLoginConfig = async () => {
            try {
                const response = await fetch(adminApiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        query: `
                            query LoginConfig {
                                loginConfig {
                                    googleOAuthClientId
                                }
                            }
                        `,
                    }),
                });

                const result = await response.json();
                const runtimeClientId = result?.data?.loginConfig?.googleOAuthClientId;

                if (typeof runtimeClientId === 'string' && runtimeClientId.trim()) {
                    setGoogleClientId(runtimeClientId);
                }
            } catch {
                // Keep existing fallback behavior when runtime config cannot be fetched.
            } finally {
                setConfigLoaded(true);
            }
        };

        void loadLoginConfig();
    }, [adminApiUrl, googleClientId]);

    const handleGoogleLogin = useCallback(
        async (idToken: string, fromRegistration = false) => {
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
                    document.body.classList.remove('hide-native-login');
                    setTimeout(() => {
                        window.location.href = '/dashboard';
                    }, 500);
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

    const handleRegistered = useCallback((_email: string) => {
        setTimeout(() => setView('login'), 3000);
    }, []);

    useEffect(() => {
        if (view === 'login') {
            document.body.classList.remove('hide-native-login');
        } else {
            document.body.classList.add('hide-native-login');
        }

        return () => {
            document.body.classList.remove('hide-native-login');
        };
    }, [view]);

    if (!configLoaded) {
        return (
            <div className="w-full max-w-sm mx-auto px-4">
                <p className="text-sm text-muted-foreground bg-muted border border-border rounded-md px-3 py-2">
                    Cargando configuración de login...
                </p>
            </div>
        );
    }

    if (!googleClientId) {
        return (
            <div className="w-full max-w-sm mx-auto px-4">
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                    Error: GOOGLE_OAUTH_CLIENT_ID no está configurado en el backend. Agrega la variable de
                    entorno para habilitar el login con Google.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-sm mx-auto px-4 flex flex-col gap-4">
            {view === 'home' && (
                <div className="flex flex-col items-center gap-4 py-4 pb-8">
                    <h3 className="text-xl font-bold tracking-tight text-foreground text-center">
                        Bienvenido a Ecommer
                    </h3>
                    <p className="text-sm text-muted-foreground text-center -mt-2">
                        El futuro del comercio colaborativo
                    </p>
                    
                    <button
                        className="w-full bg-primary text-primary-foreground rounded-md px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                        onClick={() => {
                            setView('login');
                            setError(null);
                            setStatus(null);
                        }}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        className="w-full border border-border rounded-md px-5 py-3 text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => {
                            setView('register');
                            setError(null);
                            setStatus(null);
                        }}
                    >
                        Registrarse como Vendedor
                    </button>
                </div>
            )}

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
                            clientId={googleClientId}
                            onSuccess={handleGoogleLogin}
                            onError={msg => setError(msg)}
                            text="signin_with"
                        />
                    </div>

                    <button
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer self-start"
                        onClick={() => {
                            setView('home');
                            setError(null);
                            setStatus(null);
                            setRegisterNotice(null);
                        }}
                    >
                        ← Volver
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
                        clientId={googleClientId}
                        onRegistered={(email, token) => handleGoogleLogin(token, true)}
                        adminApiUrl={adminApiUrl}
                    />

                    <button
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer self-start"
                        onClick={() => {
                            setView('home');
                            setError(null);
                            setStatus(null);
                        }}
                    >
                        ← Volver
                    </button>

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
