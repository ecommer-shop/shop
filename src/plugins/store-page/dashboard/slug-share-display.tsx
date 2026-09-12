import { useState } from 'react';
import { Share2, CheckCheck, Download } from 'lucide-react';
import { toast } from 'sonner';
import type { CellContext } from '@tanstack/react-table';

export function SlugShareDisplay(context: CellContext<any, any>) {
    const [copied, setCopied] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const slug = context.getValue() as string;

    if (!slug) return <span className="text-muted-foreground">—</span>;

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const link = `https://ecommer.shop/es/product/${slug}`;
            await navigator.clipboard.writeText(link);
            toast.success('Link copiado');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            toast.error('Error al copiar');
        }
    };

    const handleDownloadQR = () => {
        const base = 'https://stg.ecommer.shop/api/product-qr';
        const params = new URLSearchParams({ slug });
        window.open(`${base}?${params.toString()}`, '_blank');
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground truncate max-w-[160px]">{slug}</span>
            <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 p-1 rounded hover:bg-muted transition-colors"
                title="Copiar link del producto"
            >
                {copied
                    ? <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                    : <Share2 className="h-3.5 w-3.5 text-muted-foreground" />
                }
            </button>
            <button
                type="button"
                onClick={handleDownloadQR}
                className="shrink-0 p-1 rounded hover:bg-muted transition-colors"
                title="Descargar QR del producto"
            >
                <Download className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
        </div>
    );
}