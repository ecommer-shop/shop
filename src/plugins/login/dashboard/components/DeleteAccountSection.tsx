import { useState, useEffect } from 'react';
import { useIsSuperAdmin } from '../../../superadminvisibility/dashboard/hooks';

function getAdminApiUrl(): string {
    return `${window.location.origin}/admin-api`;
}

export function DeleteAccountSection() {
    const isSuperAdmin = useIsSuperAdmin();
    const [channelName, setChannelName] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [confirmationInput, setConfirmationInput] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (isSuperAdmin) return;

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
                                    user {
                                        roles {
                                            code
                                            permissions
                                            channels {
                                                code
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                    }),
                });
                const json = await res.json();
                const roles = json?.data?.activeAdministrator?.user?.roles ?? [];
                for (const role of roles) {
                    for (const ch of role.channels ?? []) {
                        if (ch.code) {
                            setChannelName(ch.code);
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
    }, [isSuperAdmin]);

    if (isSuperAdmin === true) return <div style={{ display: 'none' }} />;

    const expectedText = channelName ? `Eliminar ${channelName}` : 'ELIMINAR';
    const canDelete = confirmationInput === expectedText && !deleting && !loading;

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
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                    Escribe <span className="font-bold text-destructive">{expectedText}</span> para confirmar:
                </label>
                <input
                    type="text"
                    value={confirmationInput}
                    onChange={e => setConfirmationInput(e.target.value)}
                    placeholder={expectedText}
                    disabled={loading}
                    className="w-full border border-input bg-background rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                />
            </div>
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
