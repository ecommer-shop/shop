import { Injectable } from '@nestjs/common';

@Injectable()
export class UrlFormatter {
    /**
     * Transforma URLs en el texto a enlaces con nombres de productos legibles
     * Maneja dos casos:
     * 1. Patrón "**Nombre**: URL" → "**<a href="URL">Nombre</a>**"
     * 2. URL sola → "<a href="URL">NombreProducto</a>"
     */
    formatUrls(text: string): string {
        if (!text) return text;

        // Primero, manejar el patrón "**Nombre**: URL" o "* **Nombre**: URL"
        // Este patrón es común en respuestas de IA con listas
        const patternWithBold = /(\*\*|\*)\s*([^*]+)\s*(\*\*|\*)\s*:\s*(https?:\/\/[^\s<]+)/g;
        
        text = text.replace(patternWithBold, (match, openBold, name, closeBold, url) => {
            // Usar el nombre que ya está en el texto
            return `${openBold}<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>${closeBold}`;
        });

        // Luego, manejar URLs sueltas que no están en el patrón anterior
        const urlRegex = /(https?:\/\/[^\s<]+)/g;
        
        text = text.replace(urlRegex, (url) => {
            // Extraer el slug del producto de la URL
            const slug = this.extractProductSlug(url);
            
            if (slug) {
                // Convertir slug a nombre legible
                const productName = this.slugToProductName(slug);
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${productName}</a>`;
            }
            
            // Si no se pudo extraer el slug, dejar la URL como está
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });

        return text;
    }

    /**
     * Extrae el slug del producto de una URL
     * Ejemplo: "https://stg.ecommer.shop/es/product/zapatos-adiddas" → "zapatos-adiddas"
     */
    private extractProductSlug(url: string): string | null {
        try {
            const urlObj = new URL(url);
            const pathParts = urlObj.pathname.split('/');
            
            // Buscar patrones comunes en las URLs de productos
            // Ej: /es/product/zapatos-adiddas o /en/product/gaming-pc
            const productIndex = pathParts.findIndex(part => part === 'product');
            
            if (productIndex !== -1 && productIndex + 1 < pathParts.length) {
                return pathParts[productIndex + 1];
            }
            
            // Si no hay '/product' en la ruta, usar la última parte
            const lastPart = pathParts[pathParts.length - 1];
            if (lastPart && lastPart.includes('-')) {
                return lastPart;
            }
            
            return null;
        } catch {
            return null;
        }
    }

    /**
     * Convierte un slug a nombre de producto legible
     * Ejemplo: "zapatos-adiddas" → "Zapatos Adiddas"
     */
    private slugToProductName(slug: string): string {
        // Reemplazar guiones por espacios y capitalizar cada palabra
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
}