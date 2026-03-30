import { useEffect } from 'react';

export const POST_LOGIN_RELOAD_KEY = 'ecommer.postLoginReload';

export function PostLoginReloadBlock() {
    useEffect(() => {
        const shouldReload = sessionStorage.getItem(POST_LOGIN_RELOAD_KEY) === '1';
        if (!shouldReload) {
            return;
        }

        // Remove first to avoid reload loops if anything fails during startup.
        sessionStorage.removeItem(POST_LOGIN_RELOAD_KEY);
        window.location.reload();
    }, []);

    return null;
}
