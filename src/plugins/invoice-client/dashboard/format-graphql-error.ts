/**
 * Errores de red/GraphQL en el dashboard: mensajes breves para vendedores (sin detalles técnicos).
 */

function httpStatusUserHint(err: unknown): string | null {
    const raw = String((err as { message?: string }).message ?? '');
    const m = /Http Status (\d+)/i.exec(raw);
    if (!m) {
        return null;
    }
    const code = parseInt(m[1], 10);
    if (code === 401 || code === 403) {
        return 'No tienes permiso para ver esta información.';
    }
    if (code >= 500) {
        return 'El servicio no está disponible en este momento. Intenta más tarde.';
    }
    return null;
}

/**
 * Mensaje breve para la UI del dashboard. No expone trazas, SQL, variables de entorno ni instrucciones F12.
 * `whenEmptyOrUnknown` se usa cuando no hay una pista clara de permisos o disponibilidad (p. ej. mensaje vacío del servidor).
 */
export function userFacingDashboardError(err: unknown, whenEmptyOrUnknown: string): Error {
    const httpHint = httpStatusUserHint(err);
    const text = httpHint ?? whenEmptyOrUnknown;
    const e = new Error(text);
    (e as Error & { cause?: unknown }).cause = err;
    return e;
}

const TECH = /column\s|relation\s|does not exist|syntax error|ECONNREFUSED|SELECT\s|INSERT\s|at\s+\w+\s/i;

/**
 * Un detalle breve del primer error GraphQL si parece legible (sin SQL ni trazas). Para mostrar debajo del mensaje genérico.
 */
export function optionalPublicGraphQlDetail(err: unknown): string | null {
    const root = (err as Error & { cause?: unknown })?.cause ?? err;
    const anyRoot = root as { fieldErrors?: Array<{ message?: string }> };
    const m = anyRoot.fieldErrors?.[0]?.message;
    if (typeof m !== 'string' || m.trim().length < 3) {
        return null;
    }
    const t = m.replace(/^GraphQL Request Error:\s*/i, '').trim();
    if (!t || TECH.test(t)) {
        return null;
    }
    return t.length > 220 ? `${t.slice(0, 217)}…` : t;
}
