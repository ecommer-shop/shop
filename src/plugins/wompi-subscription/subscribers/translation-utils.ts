export const PLACEHOLDER_NAMES = new Set(['sin nombre', 'untitled', 'unnamed', 'product', 'variante', 'variant', '']);

export function hasValidTranslation(translations: Array<{ name?: string | null }> | undefined): boolean {
    if (!translations?.length) return false;
    return translations.some(t => {
        const name = t.name?.trim().toLowerCase();
        return !!name && !PLACEHOLDER_NAMES.has(name);
    });
}

export function getProductFallbackName(id: number, channelCode: string): { name: string; slug: string; description: string } {
    const name = `Producto ${id} de ${channelCode}`;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    const description = 'Sin descripci\u00f3n';
    return { name, slug, description };
}

export function getVariantFallbackName(id: number, productId: number, channelCode: string): string {
    return `Variante ${id} de ${productId} de ${channelCode}`;
}
