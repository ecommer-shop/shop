import { Button, Card, CardContent } from '@vendure/dashboard';
import { Wallet } from 'lucide-react';
import { EmptyState } from '../../shared/dashboard/empty-state';
import { PlanCard } from './components/plan-card';
import { Plan } from './graphql-queries';

export function PlansStep({
    plans,
    currentPlanName,
    onSelect,
    onBack,
}: {
    plans: Plan[];
    currentPlanName?: string;
    onSelect: (plan: Plan) => void;
    onBack: () => void;
}) {
    const displayPlans = plans.length > 0 ? plans : [];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    {currentPlanName ? 'Elige un nuevo plan' : 'Elige tu plan'}
                </p>
                <Button variant="ghost" size="sm" onClick={onBack}>Volver</Button>
            </div>

            {displayPlans.length === 0 && (
                <Card>
                    <CardContent>
                        <EmptyState
                            icon={Wallet}
                            title="No hay planes disponibles"
                            hint="Estamos preparando los planes. Vuelve a intentarlo en unos minutos."
                        />
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {displayPlans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        current={currentPlanName?.toLowerCase() === plan.name.toLowerCase()}
                        clickable={currentPlanName?.toLowerCase() !== plan.name.toLowerCase()}
                        onSelect={() => onSelect(plan)}
                    />
                ))}
            </div>
        </div>
    );
}
