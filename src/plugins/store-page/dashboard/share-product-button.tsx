import { useChannel, Button } from '@vendure/dashboard';
import { CheckCheck, Share2, Download } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import type { PageContextValue } from '@vendure/dashboard';

export function ShareProductButton({ context }: { context: PageContextValue }) {
    const { activeChannel } = useChannel();
    const [copied, setCopied] = useState(false);

    const slug = (context?.entity as any)?.slug;
    const storeCode = activeChannel?.code;

    const handleCopy = async () => {
        try {
            const productLink = slug
                ? `https://ecommer.shop/es/product/${slug}`
                : window.location.href;
            const storeLink = storeCode
                ? `https://ecommer.shop/es/store/${storeCode}`
                : null;
            const text = [productLink, storeLink].filter(Boolean).join('\n');
            await navigator.clipboard.writeText(text);
            toast.success('Links copiados al portapapeles');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            toast.error('Error al copiar los links');
        }
    };

    const handleDownloadQR = () => {
        const slugFromEntity = (context?.entity as any)?.slug ?? '';
        const imageUrl = (context?.entity as any)?.featuredAsset?.preview 
            ?? (context?.entity as any)?.assets?.[0]?.preview 
            ?? null;
        
        const base = 'https://stg.ecommer.shop/api/product-qr';
        const params = new URLSearchParams({ slug: slugFromEntity });
        if (imageUrl) params.set('image', imageUrl);

        window.open(`${base}?${params.toString()}`, '_blank');
    };

    return (
        <>
            <Button type="button" variant="outline" onClick={handleCopy}>
                {copied
                    ? <CheckCheck className="mr-2 h-4 w-4" />
                    : <Share2 className="mr-2 h-4 w-4" />
                }
                Compartir
            </Button>
            <Button type="button" variant="outline" onClick={handleDownloadQR}>
                <Download className="mr-2 h-4 w-4" />
                Descargar QR
            </Button>
        </>
    );
}
