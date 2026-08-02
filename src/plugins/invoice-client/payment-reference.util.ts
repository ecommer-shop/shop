/** Códigos de plan conocidos (para parsear referencias legacy con guiones en el canal). */
export const INVOICE_PLAN_CODES = [
  'starter',
  'plus',
  'pro',
  'pyme',
  'business',
  'elite',
  'infinity',
] as const;

const PLAN_PREFIX = 'PLAN::';
const CERT_PREFIX = 'CERT::';

/** Referencia Wompi para compra de paquete (soporta códigos de canal con guiones). */
export function buildPlanPaymentReference(channelCode: string, planCode: string): string {
  return `${PLAN_PREFIX}${channelCode}::${planCode}::${Date.now()}`;
}

export function buildCertPaymentReference(channelCode: string): string {
  // Wompi acepta alfanumérico, guiones y guiones bajos (no `::`).
  return `CERT-${channelCode}-${Date.now()}`;
}

export function parsePlanPaymentReference(
  reference: string,
): { channelCode: string; planCode: string } | null {
  if (reference.startsWith(PLAN_PREFIX)) {
    const body = reference.slice(PLAN_PREFIX.length);
    const parts = body.split('::');
    if (parts.length >= 3 && parts[0] && parts[1]) {
      return { channelCode: parts[0], planCode: parts[1] };
    }
    return null;
  }

  if (!reference.startsWith('PLAN-')) {
    return null;
  }

  const rest = reference.slice('PLAN-'.length);
  for (const planCode of INVOICE_PLAN_CODES) {
    const marker = `-${planCode}-`;
    const idx = rest.lastIndexOf(marker);
    if (idx >= 0) {
      return {
        channelCode: rest.slice(0, idx),
        planCode,
      };
    }
  }
  return null;
}

export function parseCertPaymentReference(reference: string): string | null {
  if (reference.startsWith(CERT_PREFIX)) {
    const body = reference.slice(CERT_PREFIX.length);
    const channelCode = body.split('::')[0];
    return channelCode || null;
  }
  if (reference.startsWith('CERT-')) {
    const rest = reference.slice('CERT-'.length);
    const lastDash = rest.lastIndexOf('-');
    if (lastDash <= 0) {
      return rest || null;
    }
    const maybeTs = rest.slice(lastDash + 1);
    if (/^\d+$/.test(maybeTs)) {
      return rest.slice(0, lastDash);
    }
    return rest;
  }
  return null;
}
