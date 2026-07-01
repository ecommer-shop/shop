import { useState, useEffect } from 'react';

export const SUPERADMIN_LOCALSTORAGE_KEY = 'ecommer.isSuperAdmin';

function getAdminApiUrl(): string {
    return `${window.location.origin}/admin-api`;
}

export function hideFromSuperAdmin(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(SUPERADMIN_LOCALSTORAGE_KEY) !== 'true';
}

export function showOnlyForSuperAdmin(): boolean {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(SUPERADMIN_LOCALSTORAGE_KEY) === 'true';
}

export function useIsSuperAdmin(): boolean | null {
    const stored = typeof window !== 'undefined'
        ? localStorage.getItem(SUPERADMIN_LOCALSTORAGE_KEY)
        : null;

    const [isSuperAdmin, setIsSuperAdmin] = useState<boolean | null>(
        stored === 'true' ? true : stored === 'false' ? false : null,
    );

    useEffect(() => {
        fetch(getAdminApiUrl(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                query: `
                    query CheckSuperAdmin {
                        activeAdministrator {
                            user {
                                roles {
                                    code
                                    permissions
                                }
                            }
                        }
                    }
                `,
            }),
        })
            .then(res => res.json())
            .then(json => {
                const roles = json?.data?.activeAdministrator?.user?.roles ?? [];
                const hasSuperAdmin = roles.some(
                    (r: any) => r.code === '__super_admin' || r.permissions?.includes?.('SuperAdmin'),
                );
                setIsSuperAdmin(hasSuperAdmin);
                localStorage.setItem(SUPERADMIN_LOCALSTORAGE_KEY, hasSuperAdmin ? 'true' : 'false');
            })
            .catch(() => setIsSuperAdmin(false));
    }, []);

    return isSuperAdmin;
}
