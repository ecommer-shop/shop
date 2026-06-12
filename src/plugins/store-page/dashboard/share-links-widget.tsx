import { useState } from 'react';
import { api, useChannel } from '@vendure/dashboard';
import { Copy, CheckCheck, Download, Store } from 'lucide-react';
import { toast } from 'sonner';

const GET_CHANNEL_PRODUCTS = `
    query GetChannelProducts {
        products(options: { take: 50 }) {
            items {
                id
                name
                slug
                featuredAsset {
                    preview
                }
            }
        }
    }
`;

type Product = {
    id: string;
    name: string;
    slug: string;
    featuredAsset?: { preview?: string } | null;
};

export function ShareLinksWidget() {
    const { activeChannel } = useChannel();
    const [products, setProducts] = useState<Product[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [copiedStore, setCopiedStore] = useState(false);

    useState(() => {
        api.query(GET_CHANNEL_PRODUCTS).then((result: any) => {
            setProducts(result?.products?.items ?? []);
            setLoaded(true);
        });
    });

    const handleCopyStore = async () => {
        const link = `https://ecommer.shop/es/store/${activeChannel?.code}`;
        await navigator.clipboard.writeText(link);
        toast.success('Link de tu tienda copiado');
        setCopiedStore(true);
        setTimeout(() => setCopiedStore(false), 2000);
    };

    const handleCopyProduct = async (slug: string) => {
        const link = `https://ecommer.shop/es/product/${slug}`;
        await navigator.clipboard.writeText(link);
        toast.success('Link del producto copiado');
        setCopiedId(slug);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleDownloadQR = (slug: string, imageUrl?: string | null) => {
        const params = new URLSearchParams({ slug });
        if (imageUrl) params.set('image', imageUrl);
        window.open(`https://stg.ecommer.shop/api/product-qr?${params.toString()}`, '_blank');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div style={{ overflowY: 'auto', flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

                {/* Instrucciones */}
                <div style={{ borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--muted)', padding: '12px' }}>
                    <p style={{ fontWeight: 600, marginBottom: '4px', margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        📢 Comparte tu tienda y productos
                    </p>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '12px', lineHeight: '1.5', margin: 0 }}>
                        Copia los links y compártelos en WhatsApp, Facebook o Instagram. Descarga la imagen con QR para volantes o stickers.
                    </p>
                </div>

                {/* Link tienda */}
                <div style={{ borderRadius: '8px', border: '1px solid var(--border)', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: '11px', color: 'var(--muted-foreground)', margin: '0 0 2px' }}>Tu tienda completa</p>
                        <p style={{ fontSize: '13px', fontWeight: 500, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            ecommer.shop/es/store/{activeChannel?.code}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleCopyStore}
                        style={{ flexShrink: 0, padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--foreground)' }}
                    >
                        {copiedStore ? <CheckCheck style={{ width: 14, height: 14, color: '#22c55e' }} /> : <Copy style={{ width: 14, height: 14 }} />}
                        Copiar
                    </button>
                </div>

                {/* Productos */}
                <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted-foreground)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                    Tus productos
                </p>

                {!loaded && <p style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>Cargando productos...</p>}

                {products.map(product => (
                    <div key={product.id} style={{ borderRadius: '8px', border: '1px solid var(--border)', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {product.featuredAsset?.preview ? (
                            <img
                                src={product.featuredAsset.preview}
                                alt={product.name}
                                style={{ width: 36, height: 36, borderRadius: '6px', objectFit: 'cover', border: '1px solid var(--border)', flexShrink: 0 }}
                            />
                        ) : (
                            <div style={{ width: 36, height: 36, borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--muted)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Store style={{ width: 18, height: 18, color: 'var(--muted-foreground)' }} />
                            </div>
                        )}
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: '13px', fontWeight: 500, margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</p>
                            <p style={{ fontSize: '11px', color: 'var(--muted-foreground)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>/{product.slug}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                            <button
                                type="button"
                                onClick={() => handleCopyProduct(product.slug)}
                                style={{ padding: '6px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted-foreground)' }}
                                title="Copiar link"
                            >
                                {copiedId === product.slug ? <CheckCheck style={{ width: 15, height: 15, color: '#22c55e' }} /> : <Copy style={{ width: 15, height: 15 }} />}
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDownloadQR(product.slug, product.featuredAsset?.preview)}
                                style={{ padding: '6px', borderRadius: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--muted-foreground)' }}
                                title="Descargar QR"
                            >
                                <Download style={{ width: 15, height: 15 }} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}