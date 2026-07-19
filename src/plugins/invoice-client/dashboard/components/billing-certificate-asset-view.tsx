import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@vendure/dashboard';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

export type BillingCertAsset = {
    id: string;
    name: string;
    preview?: string | null;
    source?: string | null;
    mimeType?: string | null;
    type?: string | null;
};

function isPdfAsset(asset: BillingCertAsset): boolean {
    const name = asset.name?.toLowerCase() ?? '';
    return (
        asset.mimeType?.toLowerCase().includes('pdf') === true ||
        name.endsWith('.pdf')
    );
}

function isImageAsset(asset: BillingCertAsset): boolean {
    return (
        asset.type === 'IMAGE' ||
        asset.mimeType?.toLowerCase().startsWith('image/') === true
    );
}

function resolveFileUrl(asset: BillingCertAsset): string {
    return (asset.source || asset.preview || '').trim();
}

/** Descarga o abre el archivo sin mutaciones ni borrado del asset en Vendure. */
function triggerDownload(asset: BillingCertAsset): void {
    const url = resolveFileUrl(asset);
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = asset.name || 'documento';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export function BillingCertificateAssetView({
    assetId,
    assetsById,
    compact = false,
}: {
    assetId: string | null | undefined;
    assetsById: Record<string, BillingCertAsset>;
    compact?: boolean;
}) {
    const [open, setOpen] = useState(false);

    if (!assetId) {
        return <span className="text-xs text-muted-foreground">Sin documento</span>;
    }

    const asset = assetsById[assetId];
    if (!asset) {
        return <span className="text-xs text-muted-foreground font-mono">Cargando…</span>;
    }

    const fileUrl = resolveFileUrl(asset);
    const canInteract = fileUrl.length > 0;
    const pdf = isPdfAsset(asset);
    const image = isImageAsset(asset);

    return (
        <>
            <div className="min-w-0 rounded-md border bg-muted/20 p-2 space-y-2">
                <button
                    type="button"
                    className="flex w-full min-w-0 items-center gap-2 text-left rounded-sm hover:bg-muted/50 p-1 -m-1 transition-colors disabled:opacity-50"
                    disabled={!canInteract}
                    onClick={() => canInteract && setOpen(true)}
                    title={canInteract ? 'Ver en pantalla grande' : 'Archivo no disponible'}
                >
                    {asset.preview && image ? (
                        <img
                            src={asset.preview}
                            alt={asset.name}
                            className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} rounded border object-cover shrink-0`}
                        />
                    ) : (
                        <div
                            className={`${compact ? 'h-10 w-10' : 'h-12 w-12'} rounded border bg-background flex items-center justify-center text-[10px] font-medium text-muted-foreground shrink-0`}
                        >
                            {pdf ? 'PDF' : 'DOC'}
                        </div>
                    )}
                    <span className="min-w-0 flex-1 break-all text-xs font-medium">{asset.name}</span>
                </button>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap">
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-auto min-h-7 w-full text-xs sm:w-auto"
                        disabled={!canInteract}
                        onClick={() => setOpen(true)}
                    >
                        <Eye className="h-3.5 w-3.5 mr-1" />
                        Ver
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-auto min-h-7 w-full text-xs sm:w-auto"
                        disabled={!canInteract}
                        onClick={() => triggerDownload(asset)}
                    >
                        <Download className="h-3.5 w-3.5 mr-1" />
                        Descargar
                    </Button>
                </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-[95vw] w-full sm:max-w-5xl max-h-[95vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle>{asset.name}</DialogTitle>
                        <DialogDescription>
                            Vista previa del documento.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 min-h-0 overflow-auto rounded-md border bg-muted/30 p-2">
                        {!canInteract ? (
                            <p className="text-sm text-muted-foreground p-4">
                                No se pudo cargar la URL del archivo.
                            </p>
                        ) : pdf ? (
                            <iframe
                                src={fileUrl}
                                title={asset.name}
                                className="w-full h-[min(80vh,720px)] rounded bg-white"
                            />
                        ) : image ? (
                            <img
                                src={fileUrl}
                                alt={asset.name}
                                className="mx-auto max-h-[min(80vh,720px)] w-auto max-w-full object-contain rounded"
                            />
                        ) : (
                            <iframe
                                src={fileUrl}
                                title={asset.name}
                                className="w-full h-[min(80vh,720px)] rounded bg-white"
                            />
                        )}
                    </div>
                    <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                        <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={() => setOpen(false)}>
                            Cerrar
                        </Button>
                        <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => triggerDownload(asset)}>
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
