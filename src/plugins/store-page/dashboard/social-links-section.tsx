import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

type SocialLinkEntry = {
    platform: string;
    username: string;
    dmLink: string;
    profileUrl: string;
    displayName: string | null;
    avatarUrl: string | null;
    inPipeline: boolean;
    inboxId: string | null;
    platformAccountId: string | null;
    status: string;
};

const PLATFORMS = [
    { value: 'whatsapp', label: 'WhatsApp', icon: '💬', color: '#25D366' },
    { value: 'facebook', label: 'Facebook', icon: '👍', color: '#1877F2' },
    { value: 'instagram', label: 'Instagram', icon: '📷', color: '#E4405F' },
];

function getAdminApiUrl(): string {
    return `${window.location.origin}/admin-api`;
}

const GET_SOCIAL_LINKS = `
    query GetSellerSocialLinks {
        sellerSocialLinks {
            platform
            username
            dmLink
            profileUrl
            displayName
            avatarUrl
            inPipeline
            inboxId
            platformAccountId
            status
        }
    }
`;

const UPDATE_SOCIAL_LINKS = `
    mutation UpdateSellerSocialLinks($input: [SocialLinkInput!]!) {
        updateSellerSocialLinks(input: $input)
    }
`;

const DISCONNECT_PLATFORM = `
    mutation DisconnectSocialPlatform($platform: String!) {
        disconnectSocialPlatform(platform: $platform)
    }
`;

function generateDmLink(platform: string, username: string): string {
    if (!username) return '';
    switch (platform) {
        case 'whatsapp':
            return `https://wa.me/${username.replace(/[^0-9]/g, '')}`;
        case 'facebook':
            return `https://m.me/${username}`;
        case 'instagram':
            return `https://instagram.com/${username.replace(/^@/, '')}`;
        default:
            return '';
    }
}

function generateProfileUrl(platform: string, username: string): string {
    if (!username) return '';
    switch (platform) {
        case 'whatsapp':
            return `https://wa.me/${username.replace(/[^0-9]/g, '')}`;
        case 'facebook':
            return `https://facebook.com/${username}`;
        case 'instagram':
            return `https://instagram.com/${username.replace(/^@/, '')}`;
        default:
            return '';
    }
}

function openOAuthPopup(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const width = 600;
        const height = 700;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;
        const popup = window.open(
            url,
            'oauth',
            `width=${width},height=${height},left=${left},top=${top}`,
        );
        if (!popup) {
            reject(new Error('Pop-up bloqueado. Permite ventanas emergentes e intenta de nuevo.'));
            return;
        }
        const interval = setInterval(() => {
            try {
                if (popup.closed) {
                    clearInterval(interval);
                    resolve('');
                }
            } catch {
                clearInterval(interval);
                resolve('');
            }
        }, 500);
        setTimeout(() => {
            clearInterval(interval);
            resolve('');
        }, 120000);
    });
}

async function graphql(query: string, variables?: Record<string, any>) {
    const res = await fetch(getAdminApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors?.length) {
        throw new Error(json.errors[0].message);
    }
    return json.data;
}

export function SocialLinksSection() {
    const [links, setLinks] = useState<SocialLinkEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [connecting, setConnecting] = useState<string | null>(null);

    const loadLinks = useCallback(async () => {
        try {
            const data = await graphql(GET_SOCIAL_LINKS);
            setLinks(data?.sellerSocialLinks ?? []);
        } catch (e: any) {
            toast.error('Error al cargar redes sociales');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadLinks();
    }, [loadLinks]);

    useEffect(() => {
        const handler = async (event: MessageEvent) => {
            if (event.data?.type === 'oauth-code') {
                const code = event.data.code;
                const state = event.data.state || '';
                const platform = state.startsWith('ig_') ? 'instagram' : 'facebook';
                try {
                    setConnecting(platform);
                    const mutationName = platform === 'facebook' ? 'connectFacebook' : 'connectInstagram';
                    const mutation = `mutation Connect($code: String!) { ${mutationName}(authCode: $code) { username } }`;
                    await graphql(mutation, { code });
                    const label = PLATFORMS.find(p => p.value === platform)?.label || platform;
                    toast.success(`${label} conectado`);
                    await loadLinks();
                } catch (e: any) {
                    toast.error(e.message || 'Error al conectar');
                } finally {
                    setConnecting(null);
                }
            }
        };
        window.addEventListener('message', handler);
        return () => window.removeEventListener('message', handler);
    }, [loadLinks]);

    const handleUsernameChange = (index: number, username: string) => {
        setLinks(prev => {
            const next = [...prev];
            const entry = { ...next[index] };
            entry.username = username;
            entry.dmLink = generateDmLink(entry.platform, username);
            entry.profileUrl = generateProfileUrl(entry.platform, username);
            next[index] = entry;
            return next;
        });
    };

    const handleDmLinkChange = (index: number, dmLink: string) => {
        setLinks(prev => {
            const next = [...prev];
            next[index] = { ...next[index], dmLink };
            return next;
        });
    };

    const handleInboxIdChange = (index: number, inboxId: string) => {
        setLinks(prev => {
            const next = [...prev];
            next[index] = { ...next[index], inboxId };
            return next;
        });
    };

    const addPlatform = (platform: string) => {
        const platformDef = PLATFORMS.find(p => p.value === platform);
        if (!platformDef) return;
        if (links.some(l => l.platform === platform)) {
            toast.error(`${platformDef.label} ya está agregado`);
            return;
        }
        setLinks(prev => [
            ...prev,
            {
                platform,
                username: '',
                dmLink: '',
                profileUrl: '',
                displayName: null,
                avatarUrl: null,
                inPipeline: platform === 'whatsapp',
                inboxId: null,
                platformAccountId: null,
                status: 'manual',
            },
        ]);
    };

    const removePlatform = async (index: number) => {
        const link = links[index];
        if (link.status === 'active') {
            try {
                await graphql(DISCONNECT_PLATFORM, { platform: link.platform });
                toast.success(`${PLATFORMS.find(p => p.value === link.platform)?.label} desconectado`);
            } catch (e: any) {
                toast.error(e.message);
                return;
            }
        }
        setLinks(prev => prev.filter((_, i) => i !== index));
        if (link.status !== 'active') {
            await saveLinks(links.filter((_, i) => i !== index));
        }
    };

    const saveLinks = async (data: SocialLinkEntry[]) => {
        setSaving(true);
        try {
            const input = data.map(l => ({
                platform: l.platform,
                username: l.username,
                dmLink: l.dmLink,
                profileUrl: l.profileUrl,
                displayName: l.displayName,
                avatarUrl: l.avatarUrl,
                inPipeline: l.inPipeline,
                inboxId: l.inboxId,
                platformAccountId: l.platformAccountId,
                status: l.status,
            }));
            await graphql(UPDATE_SOCIAL_LINKS, { input });
            toast.success('Redes sociales guardadas');
        } catch (e: any) {
            toast.error(e.message || 'Error al guardar');
        } finally {
            setSaving(false);
        }
    };

    const handleSave = () => saveLinks(links);

    const handleOAuth = async (platform: 'facebook' | 'instagram') => {
        const queryName = platform === 'facebook' ? 'getFacebookOAuthUrl' : 'getInstagramOAuthUrl';
        const query = `query GetOAuthUrl { ${queryName} }`;
        try {
            const data = await graphql(query);
            const url = data?.[queryName];
            if (!url) {
                toast.error('Error al obtener URL de conexión');
                return;
            }
            openOAuthPopup(url);
        } catch (e: any) {
            toast.error(e.message || 'Error al conectar');
        }
    };

    if (loading) {
        return (
            <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold">Redes Sociales</h3>
                <p className="text-sm text-muted-foreground">Cargando...</p>
            </div>
        );
    }

    return (
        <div className="border rounded-lg p-6 space-y-4">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 className="text-lg font-semibold">Redes Sociales</h3>
                    <p className="text-sm text-muted-foreground">
                        Configura tus redes para que los compradores puedan contactarte
                    </p>
                </div>
            </div>

            {links.length === 0 && (
                <p className="text-sm text-muted-foreground">
                    No has configurado ninguna red social todavía. Agrega una abajo.
                </p>
            )}

            <div className="space-y-4">
                {links.map((link, index) => {
                    const platformDef = PLATFORMS.find(p => p.value === link.platform);
                    return (
                        <div
                            key={link.platform}
                            style={{
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '20px' }}>{platformDef?.icon}</span>
                                    <span style={{ fontWeight: 600, color: platformDef?.color }}>
                                        {platformDef?.label}
                                    </span>
                                    {link.status === 'active' && (
                                        <span
                                            style={{
                                                fontSize: '11px',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                background: '#22c55e20',
                                                color: '#22c55e',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Conectado
                                        </span>
                                    )}
                                    {link.status === 'manual' && (
                                        <span
                                            style={{
                                                fontSize: '11px',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                background: '#6b728020',
                                                color: '#6b7280',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Manual
                                        </span>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removePlatform(index)}
                                    style={{
                                        padding: '4px 10px',
                                        borderRadius: '6px',
                                        border: '1px solid #ef4444',
                                        background: 'transparent',
                                        color: '#ef4444',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>

                            {link.status === 'active' && (
                                <div style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
                                    <p>
                                        <strong>Usuario:</strong> {link.username}
                                    </p>
                                    {link.displayName && (
                                        <p>
                                            <strong>Nombre:</strong> {link.displayName}
                                        </p>
                                    )}
                                    <p>
                                        <strong>Link DM:</strong>{' '}
                                        <a href={link.dmLink} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>
                                            {link.dmLink}
                                        </a>
                                    </p>
                                </div>
                            )}

                            {link.status === 'manual' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div>
                                        <label
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                color: 'var(--muted-foreground)',
                                                marginBottom: '4px',
                                                display: 'block',
                                            }}
                                        >
                                            {link.platform === 'whatsapp'
                                                ? 'Número de WhatsApp (ej: 573001234567)'
                                                : link.platform === 'facebook'
                                                  ? 'Usuario o ID de página de Facebook'
                                                  : 'Usuario de Instagram'}
                                        </label>
                                        <input
                                            type="text"
                                            value={link.username}
                                            onChange={e => handleUsernameChange(index, e.target.value)}
                                            placeholder={
                                                link.platform === 'whatsapp'
                                                    ? '573001234567'
                                                    : link.platform === 'facebook'
                                                      ? 'tu.pagina'
                                                      : 'tu_usuario'
                                            }
                                            style={{
                                                width: '100%',
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                border: '1px solid var(--border)',
                                                background: 'var(--background)',
                                                fontSize: '14px',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                color: 'var(--muted-foreground)',
                                                marginBottom: '4px',
                                                display: 'block',
                                            }}
                                        >
                                            Link de DM (editable)
                                        </label>
                                        <input
                                            type="text"
                                            value={link.dmLink}
                                            onChange={e => handleDmLinkChange(index, e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '8px 12px',
                                                borderRadius: '6px',
                                                border: '1px solid var(--border)',
                                                background: 'var(--background)',
                                                fontSize: '14px',
                                                outline: 'none',
                                                color: 'var(--muted-foreground)',
                                            }}
                                        />
                                    </div>

                                    {link.platform === 'whatsapp' && (
                                        <div>
                                            <label
                                                style={{
                                                    fontSize: '12px',
                                                    fontWeight: 500,
                                                    color: 'var(--muted-foreground)',
                                                    marginBottom: '4px',
                                                    display: 'block',
                                                }}
                                            >
                                                ID del inbox en Chatwoot (opcional)
                                            </label>
                                            <input
                                                type="text"
                                                value={link.inboxId ?? ''}
                                                onChange={e => handleInboxIdChange(index, e.target.value)}
                                                placeholder="Ej: 2"
                                                style={{
                                                    width: '100%',
                                                    padding: '8px 12px',
                                                    borderRadius: '6px',
                                                    border: '1px solid var(--border)',
                                                    background: 'var(--background)',
                                                    fontSize: '14px',
                                                    outline: 'none',
                                                }}
                                            />
                                        </div>
                                    )}

                                    {link.platform !== 'whatsapp' && (
                                        <button
                                            type="button"
                                            onClick={() => handleOAuth(link.platform as 'facebook' | 'instagram')}
                                            disabled={connecting === link.platform}
                                            style={{
                                                padding: '8px 16px',
                                                borderRadius: '6px',
                                                border: 'none',
                                                background: platformDef?.color,
                                                color: '#fff',
                                                cursor: 'pointer',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                opacity: connecting === link.platform ? 0.6 : 1,
                                            }}
                                        >
                                            {connecting === link.platform
                                                ? 'Conectando...'
                                                : `Conectar ${platformDef?.label}`}
                                        </button>
                                    )}
                                </div>
                            )}

                            <div style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
                                {link.inPipeline ? (
                                    <span style={{ color: '#f59e0b', fontWeight: 500 }}>
                                        Chatwoot → SimetrIA (in-pipeline)
                                    </span>
                                ) : (
                                    <span>Enlace directo (fuera de pipeline)</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {PLATFORMS.filter(p => !links.some(l => l.platform === p.value)).map(platform => (
                    <button
                        key={platform.value}
                        type="button"
                        onClick={() => addPlatform(platform.value)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '6px',
                            border: '1px solid var(--border)',
                            background: 'var(--background)',
                            cursor: 'pointer',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                    >
                        <span>{platform.icon}</span>
                        Agregar {platform.label}
                    </button>
                ))}
            </div>

            {links.length > 0 && (
                <button
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                    style={{
                        padding: '10px 24px',
                        borderRadius: '6px',
                        border: 'none',
                        background: '#6366f1',
                        color: '#fff',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '14px',
                        opacity: saving ? 0.6 : 1,
                    }}
                >
                    {saving ? 'Guardando...' : 'Guardar'}
                </button>
            )}
        </div>
    );
}
