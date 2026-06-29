export function Filters({
    stores,
    selectedStore,
    onStoreChange,
    days,
    onDaysChange,
}: {
    stores: { id: string; storeName: string }[];
    selectedStore?: string;
    onStoreChange: (id: string | undefined) => void;
    days: number;
    onDaysChange: (d: number) => void;
}) {
    return (
        <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
            <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-muted-foreground">Tienda:</label>
                <select
                    className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                    value={selectedStore ?? ''}
                    onChange={e => onStoreChange(e.target.value || undefined)}
                >
                    <option value="">Todas las tiendas</option>
                    {stores.map(s => (
                        <option key={s.id} value={s.id}>{s.storeName}</option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-1 rounded-lg border bg-muted/30 p-0.5">
                {[7, 30, 90].map(d => (
                    <button
                        key={d}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            days === d
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-muted-foreground hover:bg-muted'
                        }`}
                        onClick={() => onDaysChange(d)}
                    >
                        {d} días
                    </button>
                ))}
            </div>
        </div>
    );
}
