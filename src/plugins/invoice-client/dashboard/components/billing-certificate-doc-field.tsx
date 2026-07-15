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
    accept = '.pdf,.jpg,.jpeg,.png,image/*,application/pdf',
}: {
    label: string;
    hint: string;
    assetId: string;
    onAssetIdChange: (id: string) => void;
    /** MIME / extensiones aceptadas por el input file. */
    accept?: string;
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
        <div className="min-w-0 space-y-2 rounded-lg border p-3">
            <Label className="break-words">{label}</Label>
            <p className="text-xs text-muted-foreground leading-snug break-words">{hint}</p>
            {preview ? (
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 min-w-0">
                    <div className="flex min-w-0 items-center gap-2">
                        {preview.preview ? (
                            <img src={preview.preview} alt={preview.name} className="h-10 w-10 shrink-0 rounded border object-cover" />
                        ) : null}
                        <span className="min-w-0 break-all text-sm">{preview.name}</span>
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="shrink-0 self-start sm:self-auto"
                        onClick={() => onAssetIdChange('')}
                    >
                        Quitar
                    </Button>
                </div>
            ) : (
                <p className="text-xs text-muted-foreground">Sin archivo</p>
            )}
            <input
                ref={inputRef}
                type="file"
                accept={accept}
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
                className="w-full sm:w-auto"
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
