import { defineDashboardExtension } from '@vendure/dashboard';
import { App } from './App';
import { LoginLogo } from './components/LoginLogo';
import { PostLoginReloadBlock, POST_LOGIN_RELOAD_KEY } from './components/PostLoginReloadBlock';

defineDashboardExtension({
    routes: [{
        path: '/login-custom',
        authenticated: false,
        component: () => {
            return <App />;
        }
    }],

    // Inject into the default `/login` page
    login: {
        logo: {
            component: LoginLogo,
        },
        beforeForm: {
            component: () => (
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Bienvenido a Ecommer</h1>
                    <p className="text-sm text-muted-foreground">Inicia sesión para acceder al panel de administración</p>
                </div>
            ),
        },
        afterForm: {
            component: () => {
                return <App />;
            },
        },
    },

    pageBlocks: [
        {
            id: 'post-login-reload-block',
            location: {
                pageId: 'insights',
                column: 'full',
                position: { blockId: 'widgets', order: 'before' },
            },
            component: PostLoginReloadBlock,
            shouldRender: () => {
                if (typeof window === 'undefined') {
                    return false;
                }
                return sessionStorage.getItem(POST_LOGIN_RELOAD_KEY) === '1';
            },
        },
    ],
});