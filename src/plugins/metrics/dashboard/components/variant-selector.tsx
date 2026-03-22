import { Input } from '@vendure/dashboard';
import { useMemo, useState } from 'react';

interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    product: {
        id: string;
        name: string;
    };
}

export function VariantSelector({
    variants,
    selectedIds,
    onChange,
}: {
    variants: ProductVariant[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVariants = useMemo(() => {
        if (!searchTerm) return variants;
        return variants.filter(
            (v) =>
                v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [variants, searchTerm]);

    const selectedVariants = variants.filter((v) => selectedIds.includes(v.id));

    return (
        <div className="space-y-2">
            <Input
                placeholder="Buscar por nombre, SKU o producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
            />
            <div className="flex flex-wrap gap-2 pb-2">
                {selectedVariants.map((v) => (
                    <div
                        key={v.id}
                        className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                        <span>{v.product.name} - {v.sku}</span>
                        <button
                            className="ml-1 hover:opacity-70"
                            onClick={() =>
                                onChange(selectedIds.filter((id) => id !== v.id))
                            }
                            title="Remover"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            {searchTerm && filteredVariants.length > 0 && (
                <div className="border rounded-md max-h-48 overflow-y-auto bg-background">
                    {filteredVariants.slice(0, 10).map((v) => {
                        const isSelected = selectedIds.includes(v.id);
                        return (
                            <button
                                key={v.id}
                                className={`w-full text-left px-3 py-2 text-sm hover:bg-accent ${isSelected ? 'bg-accent' : ''
                                    }`}
                                onClick={() => {
                                    if (isSelected) {
                                        onChange(selectedIds.filter((id) => id !== v.id));
                                    } else {
                                        onChange([...selectedIds, v.id]);
                                    }
                                    setSearchTerm('');
                                }}
                            >
                                <div className="font-medium">{v.product.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    SKU: {v.sku}
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}