import { defineDashboardExtension } from '@vendure/dashboard';
import { StoreList } from './pages/StoreList';
import { StoreDetail } from './pages/StoreDetail';
import { AnalyticsSection } from './analytics/AnalyticsSection';

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
    ],
    pageBlocks: [
        {
            id: 'store-analytics',
            location: {
                pageId: 'store-list',
                column: 'full',
                position: { blockId: 'list-table', order: 'after' },
            },
            component: AnalyticsSection,
        },
    ],
});
