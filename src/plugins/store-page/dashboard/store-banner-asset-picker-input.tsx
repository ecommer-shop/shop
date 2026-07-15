import { api, AssetPickerDialog, Button } from '@vendure/dashboard';
import type { DashboardFormComponent } from '@vendure/dashboard';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useId, useMemo, useState } from 'react';

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

const CREATE_STORE_ASSET = `
    mutation CreateStoreBannerAsset($input: [CreateAssetInput!]!) {
        createAssets(input: $input) {
            ... on Asset {
                id
                name
                preview
            }
            ... on ErrorResult {
                message
            }
        }
    }
`;

function resolveAssetId(value: unknown): string | null {
    if (typeof value === 'string') {
        return value || null;
    }
    if (Array.isArray(value) && typeof value[0] === 'string') {
        return value[0] || null;
    }
    if (value && typeof value === 'object' && 'id' in value) {
        const id = (value as { id?: string | number | null }).id;
        return id != null ? String(id) : null;
    }
    return null;
}

export const StoreBannerAssetPickerInput: DashboardFormComponent = ({ value, onChange, disabled }) => {
    const inputId = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState<AssetItem | null>(null);

    const selectedAssetId = useMemo(() => resolveAssetId(value), [value]);

    useEffect(() => {
        if (!selectedAssetId) {
            setSelectedAsset(null);
            return;
        }

        if (selectedAsset?.id === selectedAssetId) {
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
    }, [selectedAssetId, selectedAsset?.id]);

    const upload = useMutation({
        mutationFn: async (file: File) => {
            const result = (await api.mutate(CREATE_STORE_ASSET, {
                input: [{ file }],
            })) as { createAssets?: Array<AssetItem | { message?: string }> };

            const created = result.createAssets?.[0];
            if (!created || !('id' in created)) {
                const message =
                    created && 'message' in created ? created.message : 'No se pudo subir la imagen';
                throw new Error(message ?? 'No se pudo subir la imagen');
            }
            return created;
        },
        onSuccess: asset => {
            setSelectedAsset(asset);
            onChange(asset.id);
        },
    });

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
                <input
                    id={inputId}
                    type="file"
                    accept="image/*,.jpg,.jpeg,.png,.webp,.gif"
                    className="sr-only"
                    disabled={disabled || upload.isPending}
                    onChange={event => {
                        const file = event.target.files?.[0];
                        if (file) {
                            upload.mutate(file);
                        }
                        event.target.value = '';
                    }}
                />
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={disabled || upload.isPending}
                    onClick={() => document.getElementById(inputId)?.click()}
                >
                    {upload.isPending ? 'Subiendo…' : 'Subir / seleccionar imagen'}
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    disabled={disabled}
                    onClick={() => setIsOpen(true)}
                >
                    Biblioteca
                </Button>
                {selectedAsset && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        disabled={disabled}
                        onClick={() => {
                            setSelectedAsset(null);
                            onChange(null);
                        }}
                    >
                        Quitar
                    </Button>
                )}
            </div>

            {upload.isError ? (
                <p className="text-xs text-destructive">{String(upload.error)}</p>
            ) : null}

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
                title="Seleccionar imagen"
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
