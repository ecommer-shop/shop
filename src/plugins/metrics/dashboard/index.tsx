import { defineDashboardExtension } from '@vendure/dashboard';
import { AdvancedMetricsWidget } from './advanced-metrics-widget';

export default defineDashboardExtension({
    widgets: [
        {
            id: 'advanced-metrics',
            name: 'Métricas avanzadas',
            component: AdvancedMetricsWidget,
            defaultSize: { w: 6, h: 4 },
            minSize: { w: 3, h: 3 },
            maxSize: { w: 6, h: 6 },
        },
    ],
});
