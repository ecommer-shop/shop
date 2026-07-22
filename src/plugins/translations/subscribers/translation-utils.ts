import { LanguageCode } from '@vendure/common/lib/generated-types';

export const PLACEHOLDER_NAMES = new Set(['sin nombre', 'untitled', 'unnamed', 'product', 'variante', 'variant', '']);

export function hasValidTranslation(
    translations: Array<{ name?: string | null; languageCode?: string }> | undefined,
    languageCode: string = LanguageCode.es,
): boolean {
    if (!translations?.length) return false;
    return translations.some(t => {
        if (t.languageCode !== languageCode) return false;
        const name = t.name?.trim().toLowerCase();
        return !!name && !PLACEHOLDER_NAMES.has(name);
    });
}

export function getProductFallbackName(id: number, channelCode: string): { name: string; slug: string; description: string } {
    const name = `Producto ${id} de ${channelCode}`;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    return { name, slug, description: 'Sin descripción' };
}

export function getVariantFallbackName(id: number, productId: number, channelCode: string): string {
    return `Variante ${id} de ${productId} de ${channelCode}`;
}

export function getNameFromExisting(
    translations: Array<{ languageCode?: string; name?: string | null }> | null | undefined,
    targetLang: string,
    fallbackFn: () => string,
): string {
    if (translations && translations.length > 0) {
        const valid = translations.find(t =>
            t.languageCode !== targetLang
            && t.name?.trim()
            && !PLACEHOLDER_NAMES.has(t.name.trim().toLowerCase()),
        );
        if (valid && valid.name) return valid.name.trim();
    }
    return fallbackFn();
}

export function getSlugFromName(name: string): string {
    return name.toLowerCase().replace(/[^a-záéíóúñü0-9\s-]/g, '').replace(/\s+/g, '-');
}
