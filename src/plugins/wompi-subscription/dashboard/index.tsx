import { defineDashboardExtension } from '@vendure/dashboard';
import { BillingPage } from './billing-page';

export default defineDashboardExtension({
    routes: [
        {
            path: '/billing',
            loader: () => ({ breadcrumb: 'Facturación y Plan' }),
            navMenuItem: {
                id: 'billing',
                sectionId: 'settings',
                title: 'Facturación y Plan',
                url: '/billing',
            },
            component: () => <BillingPage />,
        },
    ],
});
