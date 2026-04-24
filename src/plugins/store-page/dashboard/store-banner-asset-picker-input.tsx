import { api, AssetPickerDialog, Button } from '@vendure/dashboard';
import type { DashboardFormComponent } from '@vendure/dashboard';
import { useEffect, useMemo, useState } from 'react';

type AssetItem = {
    id: string;
    name: string;
    preview?: string | null;
};

const GET_ASSETS_BY_IDS = `
    query GetAssetsByIdsForStoreBanner($options: AssetListOptions) {
        assets(options: $options) {
            items {
                id
                name
                preview
            }
        }
    }
`;

export const StoreBannerAssetPickerInput: DashboardFormComponent = ({ value, onChange, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState<AssetItem | null>(null);

    const selectedAssetId = useMemo(() => {
        if (typeof value === 'string') return value;
        if (Array.isArray(value) && typeof value[0] === 'string') return value[0];
        return null;
    }, [value]);

    useEffect(() => {
        if (!selectedAssetId) {
            setSelectedAsset(null);
            return;
        }

        let isMounted = true;
        void (async () => {
            try {
                const result = (await api.query(GET_ASSETS_BY_IDS, {
                    options: {
                        take: 1,
                        filter: { id: { in: [selectedAssetId] } },
                    },
                })) as { assets?: { items?: AssetItem[] } };

                if (!isMounted) return;
                setSelectedAsset(result.assets?.items?.[0] ?? null);
            } catch {
                if (!isMounted) return;
                setSelectedAsset(null);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [selectedAssetId]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Button type="button" variant="outline" size="sm" disabled={disabled} onClick={() => setIsOpen(true)}>
                    {selectedAsset ? 'Cambiar imagen' : 'Subir / seleccionar imagen'}
                </Button>
                {selectedAsset && (
                    <Button type="button" variant="ghost" size="sm" disabled={disabled} onClick={() => onChange(null)}>
                        Quitar
                    </Button>
                )}
            </div>

            {selectedAsset && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {selectedAsset.preview ? (
                        <img
                            src={selectedAsset.preview}
                            alt={selectedAsset.name}
                            className="h-10 w-10 rounded object-cover border"
                        />
                    ) : null}
                    <span>{selectedAsset.name}</span>
                </div>
            )}

            <AssetPickerDialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                initialSelectedAssets={selectedAsset ? [selectedAsset as any] : []}
                onSelect={assets => {
                    const asset = assets[0] as AssetItem | undefined;
                    setSelectedAsset(asset ?? null);
                    onChange(asset?.id ?? null);
                }}
            />
        </div>
    );
};

StoreBannerAssetPickerInput.displayName = 'StoreBannerAssetPickerInput';
