import { Card } from '@vendure/dashboard';
import { Check, FileText, Sparkles } from 'lucide-react';

export type InvoicePlanCardPlan = {
    code: string;
    name: string;
    invoices: number;
    priceCop: number;
    /** Texto bajo el precio en el paso de pago (certificado u otros). */
    detailLine?: string;
};

const PLAN_FEATURES: { icon: typeof FileText; label: string | ((n: number) => string) }[] = [
    { icon: FileText, label: (n) => `${n} facturas incluidas` },
    { icon: Sparkles, label: 'No vencen: se descuentan solo al emitir' },
    { icon: Check, label: 'Facturación electrónica Matias' },
];

export function InvoicePlanCard({
    plan,
    current,
    disabled,
    onSelect,
}: {
    plan: InvoicePlanCardPlan;
    current?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
}) {
    return (
        <Card
            onClick={disabled ? undefined : onSelect}
            className={[
                'relative min-w-0 overflow-hidden border transition-all duration-200',
                current ? 'ring-2 ring-primary' : '',
                disabled ? 'cursor-not-allowed opacity-70' : onSelect ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg' : 'cursor-default',
            ].join(' ')}
        >
            {current && (
                <span className="absolute top-3 right-3 z-10 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                    Plan actual
                </span>
            )}

            <div className="bg-gradient-to-br from-[#13174b]/90 to-[#10133f]/90 p-6 space-y-4 text-white">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-wide text-white/70">{plan.name}</p>
                    <p className="mt-1 text-3xl font-bold">{plan.invoices}</p>
                    <p className="text-sm text-white/70">facturas en el paquete</p>
                </div>

                <div className="text-center">
                    <span className="text-3xl font-bold">${plan.priceCop.toLocaleString('es-CO')}</span>
                    <span className="text-sm font-normal text-white/70"> COP</span>
                </div>

                <ul className="space-y-2 text-sm">
                    {PLAN_FEATURES.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <f.icon className="h-4 w-4 shrink-0 text-emerald-400" />
                            <span>{typeof f.label === 'function' ? f.label(plan.invoices) : f.label}</span>
                        </li>
                    ))}
                </ul>

                {onSelect && (
                    <div className="pt-2 text-center text-sm font-semibold text-primary">
                        {disabled ? 'Requiere certificado activo' : 'Comprar paquete →'}
                    </div>
                )}
            </div>
        </Card>
    );
}