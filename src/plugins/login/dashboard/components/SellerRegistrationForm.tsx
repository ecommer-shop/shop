import { useState } from 'react';
import { GoogleLoginButton } from './GoogleLoginButton';

interface SellerRegistrationFormProps {
    clientId: string;
    onRegistered: (email: string) => void;
    adminApiUrl: string;
}

export function SellerRegistrationForm({
    clientId,
    onRegistered,
    adminApiUrl,
}: SellerRegistrationFormProps) {
    const [shopName, setShopName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleGoogleSuccess = async (idToken: string) => {
        if (!shopName.trim()) {
            setError('Ingresa el nombre de tu tienda antes de continuar');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(adminApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    query: `
                        mutation RegisterSellerWithGoogle($input: RegisterSellerWithGoogleInput!) {
                            registerSellerWithGoogle(input: $input) {
                                success
                                email
                            }
                        }
                    `,
                    variables: {
                        input: {
                            token: idToken,
                            shopName: shopName.trim(),
                        },
                    },
                }),
            });

            const result = await response.json();

            if (result.errors?.length) {
                const msg = result.errors[0]?.message || 'Error al registrar vendedor';
                setError(msg);
                return;
            }

            const data = result.data?.registerSellerWithGoogle;
            if (data?.success) {
                setSuccess(
                    `¡Registro exitoso! Se creó tu tienda "${shopName}" con el email ${data.email}. Ahora inicia sesión con Google.`,
                );
                onRegistered(data.email);
            } else {
                setError('Error inesperado en el registro');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full py-4 flex flex-col gap-3">
            <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                    Registrarse como Vendedor
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                    Crea tu tienda en Ecommer. Tu nombre y email se obtienen de Google.
                </p>
            </div>

            {error && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                    {error}
                </p>
            )}
            {success && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                    {success}
                </p>
            )}

            {!success && (
                <>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="shopName"
                            className="text-sm font-medium text-foreground"
                        >
                            Nombre de tu tienda *
                        </label>
                        <input
                            id="shopName"
                            type="text"
                            value={shopName}
                            onChange={e => setShopName(e.target.value)}
                            placeholder="Ej: Mi Tienda Online"
                            disabled={loading}
                            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div className="flex justify-center mt-1">
                        <GoogleLoginButton
                            clientId={clientId}
                            onSuccess={handleGoogleSuccess}
                            onError={msg => setError(msg)}
                            text="signup_with"
                            disabled={loading || !shopName.trim()}
                        />
                    </div>

                    {loading && (
                        <p className="text-sm text-muted-foreground text-center mt-1">
                            Registrando vendedor...
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
