import { useState, useEffect } from 'react';

function getAdminApiUrl(): string {
    return `${window.location.origin}/admin-api`;
}

export function DeleteAccountSection() {
    const [channelName, setChannelName] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [confirmationInput, setConfirmationInput] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const fetchChannelName = async () => {
            try {
                const res = await fetch(getAdminApiUrl(), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        query: `
                            query ActiveAdminChannels {
                                activeAdministrator {
                                    roles {
                                        channels {
                                            name
                                        }
                                    }
                                }
                            }
                        `,
                    }),
                });
                const json = await res.json();
                const roles = json?.data?.activeAdministrator?.roles ?? [];
                for (const role of roles) {
                    for (const ch of role.channels ?? []) {
                        if (ch.name) {
                            setChannelName(ch.name);
                            return;
                        }
                    }
                }
            } catch {
                // Silently fail
            } finally {
                setLoading(false);
            }
        };
        fetchChannelName();
    }, []);

    const expectedText = channelName ? `Eliminar ${channelName}` : '';
    const canDelete = confirmationInput === expectedText && !deleting;

    const handleDelete = async () => {
        if (!canDelete) return;
        setDeleting(true);
        try {
            const res = await fetch(getAdminApiUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    query: `
                        mutation DeleteSellerAccount {
                            deleteSellerAccount {
                                success
                                message
                            }
                        }
                    `,
                }),
            });
            const json = await res.json();
            const data = json?.data?.deleteSellerAccount;
            if (data?.success) {
                alert(data.message);
                window.location.href = '/dashboard/login';
            } else {
                alert(data?.message ?? 'Error al eliminar la cuenta.');
            }
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Error de conexión');
        } finally {
            setDeleting(false);
        }
    };

    if (loading) return null;

    return (
        <div className="border border-destructive/30 rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-destructive">
                Zona de peligro
            </h3>
            <p className="text-sm text-muted-foreground">
                Eliminar tu cuenta es una acción permanente. Al hacerlo:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Perderás acceso al panel de administración</li>
                <li>Tus productos y variantes serán deshabilitados</li>
                <li>Tu suscripción será cancelada</li>
                <li>Tus datos personales serán anonimizados</li>
                <li>No podrás recuperar tu cuenta</li>
            </ul>
            {channelName && (
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                        Escribe <span className="font-bold text-destructive">{expectedText}</span> para confirmar:
                    </label>
                    <input
                        type="text"
                        value={confirmationInput}
                        onChange={e => setConfirmationInput(e.target.value)}
                        placeholder={expectedText}
                        className="w-full border border-input bg-background rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                </div>
            )}
            <button
                disabled={!canDelete}
                onClick={handleDelete}
                className="w-full bg-destructive text-destructive-foreground rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-destructive/90 transition-colors cursor-pointer"
            >
                {deleting ? 'Eliminando cuenta...' : 'Eliminar mi cuenta permanentemente'}
            </button>
        </div>
    );
}
