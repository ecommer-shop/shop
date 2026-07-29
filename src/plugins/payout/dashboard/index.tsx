import { defineDashboardExtension } from '@vendure/dashboard';
import { PayoutListPage } from './pages/payout-list';
import { PayoutNewPage } from './pages/payout-new';
import { PayoutDetailPage } from './pages/payout-detail';
import { PayoutSettingsPage } from './pages/payout-settings';

export default defineDashboardExtension({
    routes: [
        {
            path: '/payouts',
            loader: () => ({ breadcrumb: 'Liquidaciones' }),
            navMenuItem: {
                id: 'payouts',
                sectionId: 'settings',
                title: 'Dispersiones',
                url: '/payouts',
                requiresPermission: ['SuperAdmin'],
            },
            component: () => <PayoutListPage />,
        },
        {
            path: '/payouts/new',
            loader: () => ({ breadcrumb: 'Nueva liquidación' }),
            component: () => <PayoutNewPage />,
        },
        {
            path: '/payouts/$id',
            loader: () => ({ breadcrumb: 'Detalle de liquidación' }),
            component: (route: any) => <PayoutDetailPage route={route} />,
        },
        {
            path: '/payout-settings',
            loader: () => ({ breadcrumb: 'Configurar pago' }),
            navMenuItem: {
                id: 'payout-settings',
                sectionId: 'settings',
                title: 'Liquidaciones',
                url: '/payout-settings',
            },
            component: () => <PayoutSettingsPage />,
        },
    ],
});
