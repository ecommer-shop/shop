import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { api } from '@vendure/dashboard';
import { loadFacebookSDK, fbLogin } from './facebook-sdk';

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

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
    </svg>
);

const PLATFORMS = [
    { value: 'whatsapp', label: 'WhatsApp', icon: WhatsAppIcon, color: '#25D366' },
    { value: 'facebook', label: 'Facebook', icon: FacebookIcon, color: '#1877F2' },
    { value: 'instagram', label: 'Instagram', icon: InstagramIcon, color: '#E4405F' },
];

const FACEBOOK_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID || '1789597475329797';

async function graphql(query: string, variables?: Record<string, any>) {
    const result = await api.query(query, variables);
    if (result.errors?.length) {
        throw new Error(result.errors[0].message);
    }
    return result;
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

const CONNECT_FACEBOOK_WITH_TOKEN = `
    mutation ConnectFB($token: String!) {
        connectFacebookWithToken(accessToken: $token) {
            username
            displayName
            status
        }
    }
`;

const CONNECT_INSTAGRAM_WITH_TOKEN = `
    mutation ConnectIG($token: String!) {
        connectInstagramWithToken(accessToken: $token) {
            username
            displayName
            status
        }
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
        const scope =
            platform === 'facebook'
                ? 'pages_show_list,pages_read_engagement,pages_manage_metadata,instagram_basic,public_profile'
                : 'instagram_business_basic';
        const mutation =
            platform === 'facebook' ? CONNECT_FACEBOOK_WITH_TOKEN : CONNECT_INSTAGRAM_WITH_TOKEN;
        const platformName =
            platform === 'facebook' ? 'Facebook' : 'Instagram';

        try {
            setConnecting(platform);
            await loadFacebookSDK(FACEBOOK_APP_ID);
            const response = await fbLogin({ scope });

            if (!response.authResponse?.accessToken) {
                toast.error(`Conexión con ${platformName} cancelada`);
                return;
            }

            const accessToken = response.authResponse.accessToken;
            await graphql(mutation, { token: accessToken });
            toast.success(`${platformName} conectado`);
            await loadLinks();
        } catch (e: any) {
            toast.error(e.message || `Error al conectar con ${platformName}`);
        } finally {
            setConnecting(null);
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
                                    <span className="text-foreground">
                                        {platformDef && <platformDef.icon />}
                                    </span>
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
                        <span className="text-foreground"><platform.icon /></span>
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
