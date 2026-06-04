import { api, Button, Label } from '@vendure/dashboard';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

type AssetPreview = { id: string; name: string; preview?: string | null };

const CREATE_ASSET = `
mutation CreateBillingCertificateAsset($input: [CreateAssetInput!]!) {
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

const GET_ASSET = `
query GetBillingCertAsset($options: AssetListOptions) {
  assets(options: $options) {
    items { id name preview }
  }
}
`;

export function BillingCertificateDocField({
    label,
    hint,
    assetId,
    onAssetIdChange,
}: {
    label: string;
    hint: string;
    assetId: string;
    onAssetIdChange: (id: string) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<AssetPreview | null>(null);

    useEffect(() => {
        if (!assetId.trim()) {
            setPreview(null);
            return;
        }
        let mounted = true;
        void api
            .query<{ assets: { items: AssetPreview[] } }>(GET_ASSET, {
                options: { take: 1, filter: { id: { in: [assetId] } } },
            })
            .then((res) => {
                if (mounted) setPreview(res.assets?.items?.[0] ?? null);
            })
            .catch(() => {
                if (mounted) setPreview(null);
            });
        return () => {
            mounted = false;
        };
    }, [assetId]);

    const upload = useMutation({
        mutationFn: async (file: File) => {
            const res = await api.mutate<{ createAssets: Array<AssetPreview | { message: string }> }>(
                CREATE_ASSET,
                { input: [{ file }] },
            );
            const created = res.createAssets?.[0];
            if (!created || !('id' in created)) {
                const msg = created && 'message' in created ? created.message : 'No se pudo subir el archivo';
                throw new Error(msg);
            }
            return created;
        },
        onSuccess: (asset) => {
            onAssetIdChange(asset.id);
            setPreview(asset);
        },
    });

    return (
        <div className="space-y-2 rounded-lg border p-3">
            <Label>{label}</Label>
            <p className="text-xs text-muted-foreground leading-snug">{hint}</p>
            {preview ? (
                <div className="flex items-center gap-2 text-sm">
                    {preview.preview ? (
                        <img src={preview.preview} alt={preview.name} className="h-10 w-10 rounded border object-cover" />
                    ) : null}
                    <span className="truncate">{preview.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => onAssetIdChange('')}>
                        Quitar
                    </Button>
                </div>
            ) : (
                <p className="text-xs text-muted-foreground">Sin archivo</p>
            )}
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,image/*,application/pdf"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) upload.mutate(file);
                    e.target.value = '';
                }}
            />
            <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={upload.isPending}
                onClick={() => inputRef.current?.click()}
            >
                {upload.isPending ? 'Subiendo…' : 'Subir archivo'}
            </Button>
            {upload.isError ? (
                <p className="text-xs text-destructive">{String(upload.error)}</p>
            ) : null}
        </div>
    );
}
