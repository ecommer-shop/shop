import { defineDashboardExtension } from '@vendure/dashboard';
import { CommandPaletteTrigger } from './CommandPaletteTrigger';

export default defineDashboardExtension({
    toolbarItems: [
        {
            id: 'command-palette-trigger',
            component: CommandPaletteTrigger,
            position: { itemId: 'alerts', order: 'before' },
        },
    ],
});
