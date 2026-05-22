import { DashboardRouteDefinition, defineDashboardExtension } from '@vendure/dashboard';
import MetricsWrapper from './MetricsWrapper';
import { MetricsDetailPage } from './metrics-detail';

const metricsDetailRoute: DashboardRouteDefinition = {
    path: '/metrics',
    loader: () => ({ breadcrumb: 'Análisis de Métricas' }),
    navMenuItem: {
        id: 'metrics',
        sectionId: 'sales',
        title: 'Análisis de Métricas',
        url: '/metrics',
    },
    component: () => <MetricsDetailPage />,
};

export default defineDashboardExtension({
    routes: [metricsDetailRoute],
    widgets: [
        {
            id: 'advanced-metrics',
            name: 'Métricas avanzadas',
            component: MetricsWrapper,
            defaultSize: { w: 6, h: 3 },
            minSize: { w: 3, h: 3 },
            maxSize: { w: 6, h: 6 },
        },
    ],
});
