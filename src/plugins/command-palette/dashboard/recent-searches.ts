const STORAGE_KEY = 'ecommer-cmd-recents';
const MAX_ITEMS = 10;

interface RecentEntry {
    id: string;
    timestamp: number;
}

export function getRecentCommands(): string[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const entries: RecentEntry[] = JSON.parse(raw);
        const dedup = new Map<string, RecentEntry>();
        for (const e of entries) {
            const existing = dedup.get(e.id);
            if (!existing || e.timestamp > existing.timestamp) {
                dedup.set(e.id, e);
            }
        }
        return Array.from(dedup.values())
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, MAX_ITEMS)
            .map(e => e.id);
    } catch {
        return [];
    }
}

export function addRecentCommand(id: string): void {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const entries: RecentEntry[] = raw ? JSON.parse(raw) : [];
        entries.unshift({ id, timestamp: Date.now() });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.slice(0, MAX_ITEMS * 2)));
    } catch {
        // silently ignore
    }
}

export function clearRecentCommands(): void {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // silently ignore
    }
}
