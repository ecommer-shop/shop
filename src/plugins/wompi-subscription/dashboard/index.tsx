import { defineDashboardExtension } from '@vendure/dashboard';
import { BillingPage } from './billing-page';

export default defineDashboardExtension({
    routes: [
        {
            path: '/billing',
            loader: () => ({ breadcrumb: 'Plan' }),
            navMenuItem: {
                id: 'billing',
                sectionId: 'settings',
                title: 'Plan',
                url: '/billing',
            },
            component: () => <BillingPage />,
        },
    ],
});
