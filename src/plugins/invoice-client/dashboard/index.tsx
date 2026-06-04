import { DashboardRouteDefinition, defineDashboardExtension } from '@vendure/dashboard';
import { InvoicesPage } from './invoices-page';
import { InvoiceQuotaWidget } from './invoice-quota-widget';
import { MatiasStoresPage } from './matias-stores-page';
import { BillingPlansPage } from './billing-plans-page';
import { BillingCertificatesReviewPage } from './billing-certificates-review-page';

const invoicesRoute: DashboardRouteDefinition = {
    path: '/invoices',
    loader: () => ({ breadcrumb: 'Facturas' }),
    navMenuItem: {
        id: 'invoices-matias',
        sectionId: 'sales',
        title: 'Facturas',
        url: '/invoices',
    },
    component: () => <InvoicesPage />,
};

const matiasStoresRoute: DashboardRouteDefinition = {
    path: '/matias-tiendas',
    loader: () => ({ breadcrumb: 'Matias por tienda' }),
    navMenuItem: {
        id: 'matias-billing-stores',
        sectionId: 'sales',
        title: 'Matias por tienda',
        url: '/matias-tiendas',
    },
    component: () => <MatiasStoresPage />,
};

const billingPlansRoute: DashboardRouteDefinition = {
    path: '/planes-facturacion',
    loader: () => ({ breadcrumb: 'Planes de facturación' }),
    navMenuItem: {
        id: 'billing-plans',
        sectionId: 'settings',
        title: 'Planes de facturación',
        url: '/planes-facturacion',
    },
    component: () => <BillingPlansPage />,
};

const billingCertificatesReviewRoute: DashboardRouteDefinition = {
    path: '/certificados-facturacion',
    loader: () => ({ breadcrumb: 'Validación de certificados' }),
    navMenuItem: {
        id: 'billing-certificates-review',
        sectionId: 'settings',
        title: 'Validación de certificados',
        url: '/certificados-facturacion',
    },
    component: () => <BillingCertificatesReviewPage />,
};

export default defineDashboardExtension({
    routes: [invoicesRoute, matiasStoresRoute, billingPlansRoute, billingCertificatesReviewRoute],
    widgets: [
        {
            id: 'invoice-quota',
            name: 'Cupo de facturación',
            component: InvoiceQuotaWidget,
            defaultSize: { w: 4, h: 2 },
            minSize: { w: 3, h: 2 },
            maxSize: { w: 6, h: 3 },
        },
    ],
});
