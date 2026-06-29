import { defineDashboardExtension } from '@vendure/dashboard';
import { StoreList } from './pages/StoreList';
import { StoreDetail } from './pages/StoreDetail';
import { AnalyticsPage } from './analytics/AnalyticsPage';

export default defineDashboardExtension({
    routes: [
        {
            path: '/stores',
            navMenuItem: {
                sectionId: 'settings',
                id: 'store-management',
                title: 'Tiendas',
                url: '/stores',
            },
            loader: () => ({ breadcrumb: 'Gestión de Tiendas' }),
            component: (route: any) => <StoreList route={route} />,
        },
        {
            path: '/stores/$id',
            loader: () => ({ breadcrumb: 'Detalle de la Tienda' }),
            component: (route: any) => <StoreDetail route={route} />,
        },
        {
            path: '/analytics',
            navMenuItem: {
                sectionId: 'settings',
                id: 'store-analytics',
                title: 'Analíticas',
                url: '/analytics',
            },
            loader: () => ({ breadcrumb: 'Analíticas de Tiendas' }),
            component: () => <AnalyticsPage />,
        },
    ],
});
