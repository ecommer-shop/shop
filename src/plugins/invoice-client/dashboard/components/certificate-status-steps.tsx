import { Check } from 'lucide-react';

const STEPS = [
    { key: 'docs', label: 'Documentos' },
    { key: 'pay', label: 'Pago certificado' },
    { key: 'review', label: 'Revisión super admin' },
    { key: 'active', label: 'Certificado activo' },
    { key: 'plans', label: 'Comprar paquetes' },
] as const;

export function CertificateStatusSteps({
    certificateStatus,
    certificatePaymentStatus,
    canBuyPlans,
    docsComplete,
}: {
    certificateStatus: string;
    certificatePaymentStatus: string;
    canBuyPlans: boolean;
    docsComplete: boolean;
}) {
    const stepDone: Record<string, boolean> = {
        docs: docsComplete,
        pay: certificatePaymentStatus === 'PAID',
        review: ['UNDER_REVIEW', 'ACTIVE', 'REJECTED'].includes(certificateStatus) && certificatePaymentStatus === 'PAID',
        active: canBuyPlans,
        plans: canBuyPlans,
    };

    const stepCurrent = (() => {
        if (canBuyPlans) return 'plans';
        if (certificateStatus === 'UNDER_REVIEW') return 'review';
        if (certificatePaymentStatus === 'PAID') return 'review';
        if (docsComplete) return 'pay';
        return 'docs';
    })();

    const nextAction = (() => {
        if (certificateStatus === 'EXPIRED' || certificateStatus === 'REJECTED') {
            return 'Renueva: sube documentos de nuevo y paga el certificado.';
        }
        if (canBuyPlans) return 'Puedes comprar paquetes de facturas.';
        if (certificateStatus === 'UNDER_REVIEW') {
            return 'Esperando que el super admin apruebe tu certificado.';
        }
        if (certificatePaymentStatus === 'PAID') return 'Pago recibido; en cola de revisión.';
        if (docsComplete) return 'Siguiente paso: pagar el certificado anual con Wompi.';
        return 'Sube los tres documentos y pulsa «Guardar documentos».';
    })();

    return (
        <div className="space-y-3">
            <ol className="flex flex-wrap gap-2">
                {STEPS.map((step, index) => {
                    const done = stepDone[step.key];
                    const current = step.key === stepCurrent;
                    return (
                        <li
                            key={step.key}
                            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium border ${
                                done
                                    ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/30'
                                    : current
                                      ? 'bg-primary/10 text-primary border-primary/30'
                                      : 'bg-muted text-muted-foreground'
                            }`}
                        >
                            {done ? <Check className="h-3 w-3" /> : <span className="w-3 text-center">{index + 1}</span>}
                            {step.label}
                        </li>
                    );
                })}
            </ol>
            <p className="text-sm text-muted-foreground">{nextAction}</p>
        </div>
    );
}
