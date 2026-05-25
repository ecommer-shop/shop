import {
    Page,
    PageLayout,
    PageBlock,
    PageTitle,
    Card,
    CardContent,
    Button,
    Badge,
    Spinner,
    Tabs,
    TabsList,
    TabsTrigger,
} from '@vendure/dashboard';
import { CreditCard, ExternalLink } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PlanCard } from './components/plan-card';

// ─── GraphQL documents ──────────────────────────────────────────

const MY_SUBSCRIPTION_QUERY = `
  query MySubscription {
    mySubscription {
      id
      status
      startsAt
      endsAt
      gracePeriodStart
      autoRenew
      plan {
        id
        name
        price
        billingInterval
        description
        planFeatures {
          id
          feature { code name type }
          value
        }
      }
      paymentMethodType
      paymentFlowType
      productLimit
      variationLimit
      hasAIAccess
      hasElectronicBilling
    }
  }
`;

const ALL_PLANS_QUERY = `
  query AllPlans {
    allPlans {
      id
      name
      price
      billingInterval
      description
      planFeatures {
        id
        feature { code name type }
        value
      }
    }
  }
`;

const CREATE_SUBSCRIPTION_MUTATION = `
  mutation CreateSubscriptionWithPayment($token: String!, $planId: Int!, $paymentMethod: String!) {
    createSubscriptionWithPayment(token: $token, planId: $planId, paymentMethod: $paymentMethod) {
      id
      status
      startsAt
      endsAt
      autoRenew
      plan { id name }
    }
  }
`;

const CREATE_PENDING_MUTATION = `
  mutation CreatePendingSubscription($planId: Int!, $paymentMethod: String!) {
    createPendingSubscription(planId: $planId, paymentMethod: $paymentMethod) {
      id
      status
      asyncPaymentUrl
      qrImage
      transactionId
      plan { id name }
    }
  }
`;

const STOP_AUTO_RENEW_MUTATION = `
  mutation StopAutoRenew($subscriptionId: Int!) {
    stopAutoRenew(subscriptionId: $subscriptionId) {
      id
      status
      autoRenew
    }
  }
`;

const GET_PAYMENT_SIGNATURE_QUERY = `
    query GetWompiIntegritySignature($amountInCents: Int!, $paymentReference: String!){
        GetWompiIntegritySignature(amountInCents: $amountInCents, paymentReference: $paymentReference)
    }
`;

const CANCEL_SUBSCRIPTION_MUTATION = `
  mutation CancelSubscription($subscriptionId: Int!) {
    cancelSubscription(subscriptionId: $subscriptionId) {
      id
      status
      plan { id name }
    }
  }
`;

// ─── Types ──────────────────────────────────────────────────────

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

interface Subscription {
    id: number;
    status: string;
    startsAt?: string;
    endsAt?: string;
    gracePeriodStart?: string;
    autoRenew: boolean;
    plan: Plan;
    paymentMethodType?: string;
    paymentFlowType?: string;
    productLimit?: number;
    variationLimit?: number;
    hasAIAccess?: boolean;
    hasElectronicBilling?: boolean;
}

// ─── Payment method config ──────────────────────────────────────

interface PaymentMethodOption {
    type: string;
    label: string;
    flow: 'recurrent' | 'manual';
}

const PAYMENT_METHODS: PaymentMethodOption[] = [
    { type: 'CARD', label: 'Tarjeta crédito/débito', flow: 'recurrent' },
    { type: 'NEQUI', label: 'Nequi', flow: 'recurrent' },
    { type: 'DAVIPLATA', label: 'Daviplata', flow: 'recurrent' },
    { type: 'BANCOLOMBIA_TRANSFER', label: 'Transferencia Bancolombia', flow: 'recurrent' },
    { type: 'PSE', label: 'PSE', flow: 'manual' },
    { type: 'BANCOLOMBIA_QR', label: 'Bancolombia QR', flow: 'manual' },
    { type: 'BANCOLOMBIA_COLLECT', label: 'Bancolombia Recogida', flow: 'manual' },
    { type: 'PCOL', label: 'Pago contra entrega', flow: 'manual' },
    { type: 'BANCOLOMBIA_BNPL', label: 'Bancolombia Cuotas', flow: 'manual' },
    { type: 'SU_PLUS', label: 'Su Plus', flow: 'manual' },
];

// ─── Helpers ────────────────────────────────────────────────────

async function gql<T>(query: string, variables?: Record<string, any>): Promise<T> {
    const res = await fetch('/admin-api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);
    return json.data as T;
}

function statusColor(status: string): 'success' | 'warning' | 'danger' | 'default' {
    switch (status) {
        case 'ACTIVE': return 'success';
        case 'PENDING_PAYMENT':
        case 'GRACE_PERIOD': return 'warning';
        case 'SUSPENDED':
        case 'CANCELLED': return 'danger';
        default: return 'default';
    }
}

function isRecurrent(type: string): boolean {
    return PAYMENT_METHODS.find(m => m.type === type)?.flow === 'recurrent';
}
function isManual(type: string): boolean {
    return PAYMENT_METHODS.find(m => m.type === type)?.flow === 'manual';
}

function statusLabel(status: string): string {
    const labels: Record<string, string> = {
        ACTIVE: 'Activa',
        PENDING_PAYMENT: 'Pago pendiente',
        GRACE_PERIOD: 'Período de gracia',
        SUSPENDED: 'Suspendida',
        CANCELLED: 'Cancelada',
    };
    return labels[status] ?? status;
}

// ─── Page component ─────────────────────────────────────────────

export function BillingPage() {
    const [step, setStep] = useState<'view' | 'plans' | 'payment'>('view');
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [sub, setSub] = useState<Subscription | null | undefined>(undefined);
    const [plans, setPlans] = useState<Plan[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [actionLoading, setActionLoading] = useState<string | null>(null);
    const [paymentTab, setPaymentTab] = useState<string>('recurrent');
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    // Widget states
    const [widgetToken, setWidgetToken] = useState<string | null>(null);
    const [pendingResult, setPendingResult] = useState<any>(null);

    const loadData = useCallback(async () => {
        try {
            const [subData, plansData] = await Promise.all([
                gql<{ mySubscription: Subscription | null }>(MY_SUBSCRIPTION_QUERY),
                gql<{ allPlans: Plan[] }>(ALL_PLANS_QUERY),
            ]);
            setSub(subData.mySubscription ?? null);
            setPlans(plansData.allPlans ?? []);
        } catch (e: any) {
            setError(e.message);
        }
    }, []);

    useEffect(() => { loadData(); }, [loadData]);

    const handleSelectPlan = (plan: Plan) => {
        setSelectedPlan(plan);
        setStep('payment');
        setError(null);
        setPendingResult(null);
        setWidgetToken(null);
        setSelectedMethod(null);
    };

    const handleStopAutoRenew = async () => {
        if (!sub) return;
        setActionLoading('stopAutoRenew');
        try {
            const data = await gql<{ stopAutoRenew: Subscription }>(STOP_AUTO_RENEW_MUTATION, {
                subscriptionId: Number(sub.id),
            });
            setSub(prev => prev ? { ...prev, autoRenew: data.stopAutoRenew.autoRenew } : prev);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setActionLoading(null);
        }
    };

    const handleCancel = async () => {
        if (!sub) return;
        setActionLoading('cancel');
        try {
            const data = await gql<{ cancelSubscription: Subscription }>(CANCEL_SUBSCRIPTION_MUTATION, {
                subscriptionId: Number(sub.id),
            });
            setSub(prev => prev ? {
                ...prev,
                status: data.cancelSubscription.status,
                plan: data.cancelSubscription.plan,
            } : prev);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setActionLoading(null);
        }
    };

    const handlePayment = async () => {
        if (!selectedPlan || !selectedMethod) return;
        setPaymentProcessing(true);
        setError(null);

        try {
            const method = PAYMENT_METHODS.find(m => m.type === selectedMethod);
            if (!method) throw new Error('Método de pago no válido');

            if (method.flow === 'recurrent') {
                setWidgetToken('awaiting_widget');
                return;
            }

            const data = await gql<{ createPendingSubscription: any }>(CREATE_PENDING_MUTATION, {
                planId: selectedPlan.id,
                paymentMethod: selectedMethod,
            });
            setPendingResult(data.createPendingSubscription);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handleWidgetTokenReceived = async (token: string) => {
        if (!selectedPlan || !selectedMethod) return;
        setPaymentProcessing(true);
        try {
            const data = await gql<{ createSubscriptionWithPayment: any }>(CREATE_SUBSCRIPTION_MUTATION, {
                token,
                planId: selectedPlan.id,
                paymentMethod: selectedMethod,
            });
            setSelectedPlan(null);
            setStep('view');
            loadData();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setPaymentProcessing(false);
            setWidgetToken(null);
        }
    };

    const handlePaymentSuccess = () => {
        setSelectedPlan(null);
        setStep('view');
        setPendingResult(null);
        setWidgetToken(null);
        loadData();
    };

    const availableMethods = paymentTab === 'recurrent'
        ? PAYMENT_METHODS.filter(m => m.flow === 'recurrent')
        : PAYMENT_METHODS.filter(m => m.flow === 'manual');

    return (
        <Page pageId="billing-page">
            <PageTitle>
                <span className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Facturación y Plan
                </span>
            </PageTitle>

            <PageLayout>
                <PageBlock column="main">
                    {error && (
                        <Card className="mb-4 border-destructive/50 bg-destructive/5">
                            <CardContent className="flex items-center justify-between">
                                <span className="text-sm text-destructive">{error}</span>
                                <Button variant="ghost" size="sm" onClick={() => setError(null)}>Cerrar</Button>
                            </CardContent>
                        </Card>
                    )}

                    {step === 'payment' && selectedPlan && (
                        <PaymentStep
                            plan={selectedPlan}
                            paymentTab={paymentTab}
                            setPaymentTab={setPaymentTab}
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                            onPay={handlePayment}
                            paymentProcessing={paymentProcessing}
                            widgetToken={widgetToken}
                            onWidgetToken={handleWidgetTokenReceived}
                            pendingResult={pendingResult}
                            onSuccess={handlePaymentSuccess}
                            onBack={() => { setStep('plans'); setSelectedPlan(null); setPendingResult(null); setWidgetToken(null); setSelectedMethod(null); }}
                        />
                    )}

                    {step === 'plans' && (
                        <PlansStep
                            plans={plans}
                            currentPlanName={sub?.plan?.name}
                            onSelect={handleSelectPlan}
                            onBack={() => setStep('view')}
                        />
                    )}

                    {step === 'view' && (
                        <ViewStep
                            sub={sub}
                            onShowPlans={() => setStep('plans')}
                            onStopAutoRenew={handleStopAutoRenew}
                            onCancel={handleCancel}
                            actionLoading={actionLoading}
                        />
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}

// ─── Sub-steps ──────────────────────────────────────────────────

function ViewStep({
    sub,
    onShowPlans,
    onStopAutoRenew,
    onCancel,
    actionLoading,
}: {
    sub: Subscription | null | undefined;
    onShowPlans: () => void;
    onStopAutoRenew: () => void;
    onCancel: () => void;
    actionLoading: string | null;
}) {
    if (sub === undefined) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center py-20">
                    <Spinner />
                </CardContent>
            </Card>
        );
    }

    if (sub === null) {
        return (
            <Card>
                <CardContent className="text-center py-12 space-y-4">
                    <CreditCard className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="text-lg font-semibold">Sin plan activo</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Aún no tienes un plan de suscripción. Elige uno para acceder a todas las funcionalidades.
                    </p>
                    <Button variant="default" onClick={onShowPlans}>
                        Ver planes disponibles
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardContent className="py-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">{sub.plan.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                ${sub.plan.price.toLocaleString('es-CO')}/mes
                            </p>
                        </div>
                        <Badge variant={statusColor(sub.status)}>{statusLabel(sub.status)}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-muted-foreground">Renovación automática:</span>{' '}
                            {sub.autoRenew ? 'Sí' : 'No'}
                        </div>
                        {sub.endsAt && (
                            <div>
                                <span className="text-muted-foreground">Finaliza:</span>{' '}
                                {new Date(sub.endsAt).toLocaleDateString('es-CO')}
                            </div>
                        )}
                        {sub.paymentMethodType && (
                            <div>
                                <span className="text-muted-foreground">Método de pago:</span>{' '}
                                {sub.paymentMethodType}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-3 border-t">
                        <Button variant="default" onClick={onShowPlans}>Cambiar plan</Button>
                        {sub.autoRenew && sub.status === 'ACTIVE' && (
                            <Button variant="outline" onClick={onStopAutoRenew} disabled={actionLoading === 'stopAutoRenew'}>
                                {actionLoading === 'stopAutoRenew' ? 'Desactivando...' : 'Detener renovación'}
                            </Button>
                        )}
                        {(sub.status === 'ACTIVE' || sub.status === 'GRACE_PERIOD') && (
                            <Button variant="destructive" onClick={onCancel} disabled={actionLoading === 'cancel'}>
                                {actionLoading === 'cancel' ? 'Cancelando...' : 'Cancelar suscripción'}
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            {sub.status === 'GRACE_PERIOD' && (
                <Card className="border-warning/50 bg-warning/5">
                    <CardContent>
                        <p className="text-sm text-warning-foreground">
                            Tu suscripción está en período de gracia. Realiza el pago para evitar la suspensión.
                        </p>
                    </CardContent>
                </Card>
            )}

            {sub.status === 'SUSPENDED' && (
                <Card className="border-destructive/50 bg-destructive/5">
                    <CardContent>
                        <p className="text-sm text-destructive-foreground">
                            Tu suscripción ha sido suspendida. Activa un nuevo plan para reactivar tu cuenta.
                        </p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

function PlansStep({
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
                    <CardContent className="text-center py-10 text-muted-foreground">
                        No hay planes disponibles.
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

function PaymentStep({
    plan,
    paymentTab,
    setPaymentTab,
    selectedMethod,
    setSelectedMethod,
    onPay,
    paymentProcessing,
    widgetToken,
    onWidgetToken,
    pendingResult,
    onSuccess,
    onBack,
}: {
    plan: Plan;
    paymentTab: string;
    setPaymentTab: (tab: string) => void;
    selectedMethod: string | null;
    setSelectedMethod: (method: string | null) => void;
    onPay: () => void;
    paymentProcessing: boolean;
    widgetToken: string | null;
    onWidgetToken: (token: string) => void;
    pendingResult: any;
    onSuccess: () => void;
    onBack: () => void;
}) {
    const [loadWidget, setLoadWidget] = useState(false);

    useEffect(() => {
        if (widgetToken === 'awaiting_widget' && selectedMethod) {
            setLoadWidget(true);
        }
    }, [widgetToken, selectedMethod]);

    const handleOpenWidget = () => {
        if (!selectedMethod) return;
        setLoadWidget(true);
    };

    if (pendingResult?.asyncPaymentUrl) {
        return (
            <Card>
                <CardContent className="text-center py-10 space-y-4">
                    <ExternalLink className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="text-lg font-semibold">Redirigiendo al método de pago</h3>
                    <p className="text-sm text-muted-foreground">
                        Serás redirigido a {pendingResult.asyncPaymentUrl} para completar el pago.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Button
                            variant="default"
                            onClick={() => window.open(pendingResult.asyncPaymentUrl, '_blank')}
                        >
                            Ir a pagar
                        </Button>
                        <Button variant="outline" onClick={onSuccess}>
                            Ya pagué
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (pendingResult?.qrImage) {
        return (
            <Card>
                <CardContent className="text-center py-10 space-y-4">
                    <h3 className="text-lg font-semibold">Pago por QR</h3>
                    <img
                        src={pendingResult.qrImage}
                        alt="QR de pago"
                        className="mx-auto w-48 h-48 object-contain"
                    />
                    <p className="text-sm text-muted-foreground">
                        Escanea el QR con tu app bancaria para pagar.
                    </p>
                    <Button variant="outline" onClick={onSuccess}>
                        Ya pagué
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="py-6 space-y-6">
                <div>
                    <h3 className="text-lg font-semibold">Pago: {plan.name}</h3>
                    <p className="text-2xl font-bold mt-1">
                        ${plan.price.toLocaleString('es-CO')}
                        <span className="text-sm font-normal text-muted-foreground">/mes</span>
                    </p>
                </div>

                <Tabs value={paymentTab} onValueChange={(v) => { setPaymentTab(v); setSelectedMethod(null); }}>
                    <TabsList>
                        <TabsTrigger value="recurrent">Pago recurrente (suscripción)</TabsTrigger>
                        <TabsTrigger value="manual">Pago manual</TabsTrigger>
                    </TabsList>
                </Tabs>

                {paymentTab === 'recurrent' && (
                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-primary">Pago automático recurrente</p>
                            <p className="text-muted-foreground">
                                Estos métodos se tokenizan (almacenan de forma segura) y se cobran
                                automáticamente cada período de facturación. No necesitas hacer nada
                                después del primer pago.
                            </p>
                        </CardContent>
                    </Card>
                )}

                {paymentTab === 'manual' && (
                    <Card className="border-warning/30 bg-warning/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-warning-foreground">Pago manual</p>
                            <p className="text-muted-foreground">
                                Estos métodos requieren que realices el pago <strong>antes del vencimiento</strong>
                                {' '}de cada período. Si no pagas a tiempo, la suscripción entrará en
                                período de gracia y luego será suspendida.
                            </p>
                        </CardContent>
                    </Card>
                )}

                <div className="grid grid-cols-2 gap-2">
                    {(paymentTab === 'recurrent'
                        ? PAYMENT_METHODS.filter(m => m.flow === 'recurrent')
                        : PAYMENT_METHODS.filter(m => m.flow === 'manual')
                    ).map((method) => (
                        <Button
                            key={method.type}
                            variant={selectedMethod === method.type ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedMethod(method.type)}
                            className="justify-start h-auto py-2"
                        >
                            <div className="flex flex-col items-start">
                                <span>{method.label}</span>
                                <span className={`text-[10px] leading-tight ${selectedMethod === method.type ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                    {method.flow === 'recurrent' ? 'Pago automático recurrente' : 'Pago manual antes del vencimiento'}
                                </span>
                            </div>
                        </Button>
                    ))}
                </div>

                {selectedMethod && isRecurrent(selectedMethod) && !loadWidget && (
                    <Button variant="default" onClick={handleOpenWidget} disabled={paymentProcessing}>
                        Abrir formulario de pago
                    </Button>
                )}

                {selectedMethod && isManual(selectedMethod) && (
                    <Button
                        variant="default"
                        onClick={onPay}
                        disabled={paymentProcessing}
                    >
                        {paymentProcessing ? 'Procesando...' : `Pagar con ${PAYMENT_METHODS.find(m => m.type === selectedMethod)?.label}`}
                    </Button>
                )}

                {loadWidget && selectedMethod && isRecurrent(selectedMethod) && (
                    <WompiPaymentWidget
                        paymentMethod={selectedMethod}
                        amountInCents={Math.round(plan.price * 100)}
                        reference={`SUB-${plan.id}-${Date.now()}`}
                        onToken={onWidgetToken}
                        loading={paymentProcessing}
                    />
                )}

                <Button variant="ghost" size="sm" onClick={onBack} disabled={paymentProcessing}>
                    Cancelar
                </Button>
            </CardContent>
        </Card>
    );
}

const WOMPI_SCRIPT_URL = 'https://checkout.wompi.co/widget.js';
const WOMPI_SCRIPT_ID = 'wompi-widget-script';

function loadWompiScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return reject(new Error('Not browser'));
        if ((window as any).WidgetCheckout) return resolve();
        if (document.getElementById(WOMPI_SCRIPT_ID)) {
            const check = () => {
                if ((window as any).WidgetCheckout) return resolve();
                setTimeout(check, 100);
            };
            check();
            return;
        }
        const script = document.createElement('script');
        script.id = WOMPI_SCRIPT_ID;
        script.src = WOMPI_SCRIPT_URL;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Wompi widget'));
        document.head.appendChild(script);
    });
}

function WompiPaymentWidget({
    paymentMethod,
    amountInCents,
    reference,
    onToken,
    loading,
}: {
    paymentMethod: string;
    amountInCents: number;
    reference: string;
    onToken: (token: string) => void;
    loading: boolean;
}) {
    const [state, setState] = useState<'loading-script' | 'loading-signature' | 'ready' | 'error'>('loading-script');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const widgetRef = useRef<HTMLDivElement>(null);
    const widgetOpened = useRef(false);
    useEffect(() => {
        const publicKey = (window as any).__WOMPI_PUBLIC_KEY__;
        if (!publicKey) {
            setErrorMsg('Wompi no está configurado. Contacta al administrador.');
            setState('error');
            return;
        }

        loadWompiScript()
            .then(async () => {
                setState('loading-signature');
                const signature = await gql<{ GetWompiIntegritySignature: string }>(GET_PAYMENT_SIGNATURE_QUERY, {
                    amountInCents,
                    paymentReference: reference,
                });
                console.log('Wompi integrity signature:', signature);
                return signature
            })
            .then((data) => {
                const signature = data.GetWompiIntegritySignature;
                widgetOpened.current = true;
                setTimeout(() => {
                    try {
                        const widget = new (window as any).WidgetCheckout({
                            currency: 'COP',
                            publicKey: (window as any).__WOMPI_PUBLIC_KEY__,
                            amountInCents,
                            reference,
                            signature: {
                                integrity: signature,
                            },
                        });
                        widget.open((data: any) => {
                            if (data?.token) {
                                onToken(data.token);
                            }
                        });
                    } catch (e) {
                        console.error('Wompi widget error:', e);
                        setErrorMsg('Error al abrir el formulario de pago');
                        setState('error');
                    }
                }, 300);
                setState('ready');
            })
            .catch((e: any) => {
                setErrorMsg(e.message || 'Error al preparar el pago');
                setState('error');
            });
    }, [amountInCents, reference, paymentMethod, onToken]);

    if (loading) {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner />
                Procesando pago...
            </div>
        );
    }

    if (state === 'error') {
        return (
            <div className="text-sm text-destructive p-3 border border-destructive/30 rounded">
                {errorMsg}
            </div>
        );
    }

    if (state !== 'ready') {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner />
                {state === 'loading-signature' ? 'Preparando pago...' : 'Cargando formulario de pago...'}
            </div>
        );
    }

    return <div ref={widgetRef} />;
}
