import { defineDashboardExtension } from '@vendure/dashboard';
import { ShippingMethodsPage } from './shipping-methods-page';

export default defineDashboardExtension({
    routes: [
        {
            path: '/shipping-methods',
            loader: () => ({ breadcrumb: 'Métodos de envío' }),
            navMenuItem: {
                id: 'shipping-methods',
                sectionId: 'settings',
                title: 'Métodos de envío',
                url: '/shipping-methods',
            },
            component: () => <ShippingMethodsPage />,
        },
    ],
});
