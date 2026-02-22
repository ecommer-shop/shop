export function formatTableValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 0,
        })}`;
    }
    return value.toLocaleString();
}

export function formatPdfValue(value: number, type: string): string {
    if (type === 'currency') {
        return `$${(value / 100).toLocaleString('es-CO', {
            minimumFractionDigits: 2,
        })}`;
    }
    return value.toLocaleString('es-CO');
}

export function formatDateForPdf(date: Date): string {
    return date.toLocaleDateString('es-CO');
}

export function formatDateForFile(date: Date): string {
    return date.toISOString().slice(0, 10);
}