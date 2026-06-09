import { Card, CardContent } from '@vendure/dashboard';
import { Check, ShoppingBag, Globe, CheckCircle2 } from 'lucide-react';

interface PlanFeatureEntry {
    id: number;
    feature: { code: string; name: string; type: string };
    value: string;
}

interface Plan {
    id: number;
    name: string;
    price: number;
    billingInterval: string;
    description?: string;
    planFeatures: PlanFeatureEntry[];
}

const PLAN_META: Record<string, { Icon: any; gradient: string }> = {
    Free: {
        Icon: CheckCircle2,
        gradient: 'from-green-500/10 to-emerald-500/5',
    },
    Tienda: {
        Icon: ShoppingBag,
        gradient: 'from-purple-500/10 to-blue-500/5',
    },
    Omnichannel: {
        Icon: Globe,
        gradient: 'from-blue-500/10 to-cyan-500/5',
    },
};

export function PlanCard({
    plan,
    current,
    clickable,
    onSelect,
}: {
    plan: Plan;
    current: boolean;
    clickable: boolean;
    onSelect: () => void;
}) {
    const meta = PLAN_META[plan.name] ?? PLAN_META.Free;
    const { Icon } = meta;

    return (
        <Card
            onClick={clickable ? onSelect : undefined}
            className={[
                'relative overflow-hidden border transition-all duration-200',
                current ? 'ring-2 ring-primary' : '',
                clickable ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg' : 'cursor-default',
            ].join(' ')}
        >
            {current && (
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full z-10">
                    Plan actual
                </span>
            )}

            <div className={`bg-gradient-to-br ${meta.gradient} p-6 space-y-4`}>
                <div className="flex justify-center">
                    <Icon className="h-10 w-10 text-muted-foreground" />
                </div>

                <div className="text-center">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.description && (
                        <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                    )}
                </div>

                <div className="text-center">
                    {plan.price === 0 ? (
                        <span className="text-3xl font-bold">Gratis</span>
                    ) : (
                        <span className="text-3xl font-bold">
                            ${plan.price.toLocaleString('es-CO')}
                            <span className="text-sm font-normal text-muted-foreground">/mes</span>
                        </span>
                    )}
                </div>

                <ul className="space-y-2 text-sm">
                    {plan.planFeatures.map((pf) => (
                        <li key={pf.id} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                            <span>
                                {pf.feature.type === 'numeric'
                                    ? `${pf.value} ${pf.feature.name.toLowerCase()}`
                                    : pf.feature.name}
                            </span>
                        </li>
                    ))}
                </ul>

                {clickable && (
                    <div className="pt-2 text-center text-sm font-semibold text-primary">
                        {plan.price === 0 ? 'Seleccionar' : 'Suscribirse'} →
                    </div>
                )}
            </div>
        </Card>
    );
}
