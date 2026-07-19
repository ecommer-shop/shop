import { defineDashboardExtension } from '@vendure/dashboard';
import { App } from './App';
import { LoginLogo } from './components/LoginLogo';
import { DeleteAccountSection } from './components/DeleteAccountSection';

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
                    <h1 className="text-2xl font-semibold tracking-tight">Bienvenido a Ecommer $$$</h1>
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
            id: 'delete-account-section',
            location: {
                pageId: 'profile',
                column: 'main',
                position: { blockId: 'custom-fields', order: 'after' },
            },
            component: DeleteAccountSection,
            shouldRender: () => {
                if (typeof window === 'undefined') return false;
                return localStorage.getItem('ecommer.isSuperAdmin') !== 'true';
            },
        },
    ],
});