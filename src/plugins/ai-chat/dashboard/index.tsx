import { defineDashboardExtension, DashboardRouteDefinition } from '@vendure/dashboard';
import { AiChatPage } from './AiChatPage';
import { AiChatWindow } from './AiChatWindow';

const aiChatRoute: DashboardRouteDefinition = {
    path: '/ai-chat',
    loader: () => ({ breadcrumb: 'Asistente IA' }),
    navMenuItem: {
        id: 'ai-chat',
        sectionId: 'catalog',
        title: 'Asistente IA',
        url: '/ai-chat',
    },
    component: () => <AiChatPage />,
};

export default defineDashboardExtension({
    routes: [aiChatRoute],
    widgets: [
        {
            id: 'ai-chat-widget',
            name: 'Asistente IA',
            component: AiChatWindow,
            defaultSize: { w: 6, h: 4 },
            minSize: { w: 4, h: 3 },
            maxSize: { w: 12, h: 6 },
        },
    ],
});