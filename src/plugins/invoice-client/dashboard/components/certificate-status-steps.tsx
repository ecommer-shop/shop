import { Check } from 'lucide-react';

const STEPS = [
    { key: 'docs', label: 'Documentos', shortLabel: 'Docs' },
    { key: 'pay', label: 'Pago certificado', shortLabel: 'Pago' },
    { key: 'review', label: 'Revisión ', shortLabel: 'Revisión' },
    { key: 'active', label: 'Certificado activo', shortLabel: 'Activo' },
    { key: 'matias', label: 'Perfil Matias', shortLabel: 'Matias' },
    { key: 'plans', label: 'Comprar paquetes', shortLabel: 'Paquetes' },
] as const;

export function CertificateStatusSteps({
    certificateStatus,
    certificatePaymentStatus,
    canBuyPlans,
    docsComplete,
    matiasProfileComplete = canBuyPlans,
}: {
    certificateStatus: string;
    certificatePaymentStatus: string;
    canBuyPlans: boolean;
    docsComplete: boolean;
    matiasProfileComplete?: boolean;
}) {
    const certificateReady = certificateStatus === 'ACTIVE' && certificatePaymentStatus === 'PAID';
    const stepDone: Record<string, boolean> = {
        docs: docsComplete,
        pay: certificatePaymentStatus === 'PAID',
        review: ['UNDER_REVIEW', 'ACTIVE', 'REJECTED'].includes(certificateStatus) && certificatePaymentStatus === 'PAID',
        active: certificateReady,
        matias: matiasProfileComplete,
        plans: canBuyPlans,
    };

    const stepCurrent = (() => {
        if (canBuyPlans) return 'plans';
        if (certificateReady && !matiasProfileComplete) return 'matias';
        if (certificateStatus === 'UNDER_REVIEW') return 'review';
        if (certificatePaymentStatus === 'PAID') return 'review';
        if (docsComplete) return 'pay';
        return 'docs';
    })();

    const nextAction = (() => {
        if (certificateStatus === 'REJECTED') {
            return 'Documentos rechazados: corrige los archivos según el motivo y pulsa «Guardar documentos». No debes pagar otra vez si ya pagaste.';
        }
        if (certificateStatus === 'EXPIRED') {
            return 'Renueva: sube documentos de nuevo y paga el certificado.';
        }
        if (canBuyPlans) return 'Puedes comprar paquetes de facturas.';
        if (certificateReady && !matiasProfileComplete) {
            return 'Esperando que se configure la facturacion para esta tienda.';
        }
        if (certificateStatus === 'UNDER_REVIEW') {
            return 'Esperando que se apruebe tu certificado.';
        }
        if (certificatePaymentStatus === 'PAID') return 'Pago recibido; en cola de revision.';
        if (docsComplete) return 'Siguiente paso: pagar el certificado anual con Wompi.';
        return 'Sube los documentos y el logo de la tienda, luego pulsa «Guardar documentos».';
    })();

    return (
        <div className="min-w-0 space-y-3">
            <div className="-mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
                <ol className="flex w-max min-w-full gap-2 sm:w-auto sm:flex-wrap">
                    {STEPS.map((step, index) => {
                        const done = stepDone[step.key];
                        const current = step.key === stepCurrent;
                        return (
                            <li
                                key={step.key}
                                className={`flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${
                                    done
                                        ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/30'
                                        : current
                                          ? 'bg-primary/10 text-primary border-primary/30'
                                          : 'bg-muted text-muted-foreground'
                                }`}
                            >
                                {done ? <Check className="h-3 w-3 shrink-0" /> : <span className="w-3 shrink-0 text-center">{index + 1}</span>}
                                <span className="sm:hidden">{step.shortLabel}</span>
                                <span className="hidden sm:inline">{step.label}</span>
                            </li>
                        );
                    })}
                </ol>
            </div>
            <p className="text-sm text-muted-foreground break-words leading-relaxed">{nextAction}</p>
        </div>
    );
}
