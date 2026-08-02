export const ECOMMER_LAYOUT_VERSION = 2;
export const ECOMMER_LAYOUT_VERSION_KEY = 'ecommer.widgetLayoutVersion';

export type WidgetLayoutEntry = { x: number; y: number; w: number; h: number };

/** Layout del tablero Perspectivas (12 columnas). */
export const RECOMMENDED_WIDGET_LAYOUT: Record<string, WidgetLayoutEntry> = {
    'latest-orders-widget': { x: 0, y: 0, w: 6, h: 7 },
    'orders-summary-widget': { x: 6, y: 0, w: 6, h: 3 },
    'ai-chat-widget': { x: 6, y: 3, w: 6, h: 4 },
    'advanced-metrics': { x: 6, y: 7, w: 6, h: 4 },
    'invoice-quota': { x: 0, y: 7, w: 6, h: 2 },
    'ecommer-share-links': { x: 0, y: 9, w: 6, h: 4 },
    'metrics-widget': { x: 0, y: 13, w: 12, h: 5 },
};

export function layoutsOverlap(a: WidgetLayoutEntry, b: WidgetLayoutEntry): boolean {
    return !(
        a.x + a.w <= b.x ||
        b.x + b.w <= a.x ||
        a.y + a.h <= b.y ||
        b.y + b.h <= a.y
    );
}

export function hasOverlappingLayouts(layout: Record<string, WidgetLayoutEntry>): boolean {
    const entries = Object.values(layout);
    for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
            if (layoutsOverlap(entries[i], entries[j])) {
                return true;
            }
        }
    }
    return false;
}
