import { useEffect } from 'react';

export const POST_LOGIN_RELOAD_KEY = 'ecommer.postLoginReload';

const VENDURE_SELECTED_CHANNEL_TOKEN_KEY = 'vendure-selected-channel-token';

function getAdminApiUrl(): string {
    const origin = window.location.origin;
    return `${origin}/admin-api`;
}

/**
 * Después del login (redirect a /dashboard) ejecuta 2 cosas:
 * 1) Hace un reload único (tu comportamiento actual)
 * 2) Sincroniza los permisos del vendedor contra el channel activo que el frontend ya eligió en localStorage.
 */
export function PostLoginReloadBlock() {
    useEffect(() => {
        const shouldReload = sessionStorage.getItem(POST_LOGIN_RELOAD_KEY) === '1';
        if (!shouldReload) {
            return;
        }

        sessionStorage.removeItem(POST_LOGIN_RELOAD_KEY);

        // 1) Sync por channel (según localStorage) antes del reload final.
        const rawChannelToken = localStorage.getItem(VENDURE_SELECTED_CHANNEL_TOKEN_KEY);
        const channelToken = rawChannelToken?.replace(/"/g, '') ?? '';

        if (channelToken) {
            const adminApiUrl = getAdminApiUrl();
            void fetch(adminApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    query: `
                        mutation SyncSellerChannelAfterLogin($channelToken: String!) {
                            syncSellerChannelAfterLogin(channelToken: $channelToken)
                        }
                    `,
                    variables: { channelToken },
                }),
            }).catch(() => {
                // No romper el dashboard si falla la sync.
            });
        }

        // 2) Evita loops con reload único.
        window.location.reload();
    }, []);

    return null;
}

