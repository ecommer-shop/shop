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
import { CreditCard, ExternalLink, CheckCircle2, Loader2, Smartphone } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PlanCard } from './components/plan-card';

// ─── GraphQL documents ──────────────────────────────────────────

const MY_SUBSCRIPTION_QUERY = `
  query MySubscription($customerEmail: String) {
    mySubscription(customerEmail: $customerEmail) {
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

const ACTIVE_ADMIN_QUERY = `
  query ActiveAdmin {
    activeAdministrator {
      emailAddress
    }
  }
`;

const CREATE_SUBSCRIPTION_MUTATION = `
  mutation CreateSubscriptionWithPayment($token: String!, $planId: Int!, $paymentMethod: String!, $customerEmail: String, $sessionId: String, $deviceId: String) {
    createSubscriptionWithPayment(token: $token, planId: $planId, paymentMethod: $paymentMethod, customerEmail: $customerEmail, sessionId: $sessionId, deviceId: $deviceId) {
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
  mutation CreatePendingSubscription($planId: Int!, $paymentMethod: String!, $customerEmail: String) {
    createPendingSubscription(planId: $planId, paymentMethod: $paymentMethod, customerEmail: $customerEmail) {
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
  mutation StopAutoRenew($subscriptionId: Int!, $customerEmail: String) {
    stopAutoRenew(subscriptionId: $subscriptionId, customerEmail: $customerEmail) {
      id
      status
      autoRenew
    }
  }
`;

const CANCEL_SUBSCRIPTION_MUTATION = `
  mutation CancelSubscription($subscriptionId: Int!, $customerEmail: String) {
    cancelSubscription(subscriptionId: $subscriptionId, customerEmail: $customerEmail) {
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
    description: string;
}

const PAYMENT_METHODS: PaymentMethodOption[] = [
    { type: 'CARD', label: 'Tarjeta crédito/débito', flow: 'recurrent', description: 'Se cobra automáticamente cada período — no necesitas hacer nada' },
    { type: 'NEQUI', label: 'Nequi', flow: 'recurrent', description: 'Requiere aprobación por notificación push en tu celular en cada renovación' },
    { type: 'DAVIPLATA', label: 'Daviplata', flow: 'recurrent', description: 'Requiere aprobación por notificación push en tu celular en cada renovación' },
    { type: 'BANCOLOMBIA_TRANSFER', label: 'Transferencia Bancolombia', flow: 'recurrent', description: 'Se cobra automáticamente desde tu cuenta Bancolombia' },
    { type: 'PSE', label: 'PSE', flow: 'manual', description: 'Debes iniciar sesión en tu banco y pagar antes del vencimiento' },
    { type: 'BANCOLOMBIA_QR', label: 'Bancolombia QR', flow: 'manual', description: 'Debes escanear el código QR y pagar antes del vencimiento' },
    { type: 'BANCOLOMBIA_COLLECT', label: 'Bancolombia Recogida', flow: 'manual', description: 'Debes pagar la factura en Bancolombia antes del vencimiento' },
    { type: 'PCOL', label: 'Pago contra entrega', flow: 'manual', description: 'Debes pagar contra entrega antes del vencimiento' },
    { type: 'BANCOLOMBIA_BNPL', label: 'Bancolombia Cuotas', flow: 'manual', description: 'Debes pagar en cuotas antes del vencimiento' },
    { type: 'SU_PLUS', label: 'Su Plus', flow: 'manual', description: 'Debes pagar con Su Plus antes del vencimiento' },
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

    const [showTokenForm, setShowTokenForm] = useState(false);
    const [pendingResult, setPendingResult] = useState<any>(null);
    const [adminEmail, setAdminEmail] = useState<string | undefined>();

    useEffect(() => {
        gql<{ activeAdministrator: { emailAddress: string } }>(ACTIVE_ADMIN_QUERY)
            .then(d => setAdminEmail(d.activeAdministrator.emailAddress))
            .catch(() => { });
    }, []);

    const loadData = useCallback(async () => {
        try {
            const [subData, plansData] = await Promise.all([
                gql<{ mySubscription: Subscription | null }>(MY_SUBSCRIPTION_QUERY, { customerEmail: adminEmail }),
                gql<{ allPlans: Plan[] }>(ALL_PLANS_QUERY),
            ]);
            setSub(subData.mySubscription ?? null);
            setPlans(plansData.allPlans ?? []);
        } catch (e: any) {
            setError(e.message);
        }
    }, [adminEmail]);

    useEffect(() => { if (adminEmail) loadData(); }, [adminEmail, loadData]);

    const handleSelectPlan = (plan: Plan) => {
        if (sub?.plan?.name?.toLowerCase() === plan.name.toLowerCase()) {
            setError('Ya tienes este plan activo');
            return;
        }
        setSelectedPlan(plan);
        setStep('payment');
        setError(null);
        setPendingResult(null);
        setShowTokenForm(false);
        setSelectedMethod(null);
    };

    const handleStopAutoRenew = async () => {
        if (!sub) return;
        setActionLoading('stopAutoRenew');
        try {
            const data = await gql<{ stopAutoRenew: Subscription }>(STOP_AUTO_RENEW_MUTATION, {
                subscriptionId: Number(sub.id),
                customerEmail: adminEmail,
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
            await gql(CANCEL_SUBSCRIPTION_MUTATION, {
                subscriptionId: Number(sub.id),
                customerEmail: adminEmail,
            });
            loadData();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setActionLoading(null);
        }
    };

    const handlePayment = async () => {
        if (!selectedPlan || !selectedMethod) return;

        const method = PAYMENT_METHODS.find(m => m.type === selectedMethod);
        if (!method) throw new Error('Método de pago no válido');

        if (method.flow === 'recurrent') {
            setShowTokenForm(true);
            return;
        }

        setPaymentProcessing(true);
        setError(null);

        try {
            const data = await gql<{ createPendingSubscription: any }>(CREATE_PENDING_MUTATION, {
                planId: Number(selectedPlan.id),
                paymentMethod: selectedMethod,
                customerEmail: adminEmail || null,
            });
            setPendingResult(data.createPendingSubscription);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handleCloseTokenForm = useCallback(() => {
        setShowTokenForm(false);
    }, []);

    const handleWidgetTokenReceived = async (token: string, sessionId?: string, deviceId?: string) => {
        if (!selectedPlan || !selectedMethod) return;
        setPaymentProcessing(true);
        try {
            const data = await gql<{ createSubscriptionWithPayment: any }>(CREATE_SUBSCRIPTION_MUTATION, {
                token,
                planId: Number(selectedPlan.id),
                paymentMethod: selectedMethod,
                customerEmail: adminEmail || null,
                sessionId: sessionId || null,
                deviceId: deviceId || null,
            });
            setSelectedPlan(null);
            setStep('view');
            loadData();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setPaymentProcessing(false);
            setShowTokenForm(false);
        }
    };

    const handlePaymentSuccess = () => {
        setSelectedPlan(null);
        setStep('view');
        setPendingResult(null);
        setShowTokenForm(false);
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
                            showTokenForm={showTokenForm}
                            onCloseTokenForm={handleCloseTokenForm}
                            onTokenReceived={handleWidgetTokenReceived}
                            pendingResult={pendingResult}
                            onSuccess={handlePaymentSuccess}
                            onBack={() => { setStep('plans'); setSelectedPlan(null); setPendingResult(null); setShowTokenForm(false); setSelectedMethod(null); }}
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
                                ${(sub.plan?.price ?? 0).toLocaleString('es-CO')}/mes
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
                        {sub.plan.name !== 'Free' && (sub.status === 'ACTIVE' || sub.status === 'GRACE_PERIOD') && (
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
    showTokenForm,
    onTokenReceived,
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
    showTokenForm: boolean;
    onCloseTokenForm: () => void;
    onTokenReceived: (token: string, sessionId?: string, deviceId?: string) => void;
    pendingResult: any;
    onSuccess: () => void;
    onBack: () => void;
}) {
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

    const [formVisible, setFormVisible] = useState(false);
    useEffect(() => {
        if (showTokenForm && selectedMethod) setFormVisible(true);
    }, [showTokenForm, selectedMethod]);

    if (formVisible && selectedMethod) {
        return (
            <Card>
                <CardContent className="py-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold">
                            Tokenizar: {PAYMENT_METHODS.find(m => m.type === selectedMethod)?.label}
                        </h3>
                        <p className="text-2xl font-bold mt-1">
                            ${plan.price.toLocaleString('es-CO')}
                            <span className="text-sm font-normal text-muted-foreground">/mes</span>
                        </p>
                    </div>
                    <WompiTokenizationForm
                        paymentMethod={selectedMethod}
                        onToken={onTokenReceived}
                        onBack={() => { setFormVisible(false); onCloseTokenForm(); }}
                    />
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
                            {selectedMethod ? (
                                <>
                                    <p className="font-medium text-primary">
                                        {PAYMENT_METHODS.find(m => m.type === selectedMethod)?.label}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {PAYMENT_METHODS.find(m => m.type === selectedMethod)?.description}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="font-medium text-primary">Pago automático recurrente</p>
                                    <p className="text-muted-foreground">
                                        Estos métodos se tokenizan (almacenan de forma segura) y se cobran
                                        automáticamente cada período de facturación.
                                    </p>
                                </>
                            )}
                        </CardContent>
                    </Card>
                )}

                {paymentTab === 'manual' && (
                    <Card className="border-warning/30 bg-warning/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            {selectedMethod ? (
                                <>
                                    <p className="font-medium text-warning-foreground">
                                        {PAYMENT_METHODS.find(m => m.type === selectedMethod)?.label}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {PAYMENT_METHODS.find(m => m.type === selectedMethod)?.description}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="font-medium text-warning-foreground">Pago manual</p>
                                    <p className="text-muted-foreground">
                                        Estos métodos requieren que realices el pago <strong>antes del vencimiento</strong>
                                        {' '}de cada período. Si no pagas a tiempo, la suscripción entrará en
                                        período de gracia y luego será suspendida.
                                    </p>
                                </>
                            )}
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
                                    {method.description}
                                </span>
                            </div>
                        </Button>
                    ))}
                </div>

                {selectedMethod && isRecurrent(selectedMethod) && (
                    <Button variant="default" onClick={onPay} disabled={paymentProcessing}>
                        {paymentProcessing ? 'Procesando...' : `Tokenizar con ${PAYMENT_METHODS.find(m => m.type === selectedMethod)?.label}`}
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

                <Button variant="ghost" size="sm" onClick={onBack} disabled={paymentProcessing}>
                    Cancelar
                </Button>
            </CardContent>
        </Card>
    );
}

// ─── Wompi API helpers ──────────────────────────────────────────

function getWompiApiBaseUrl(): string {
    const key = (window as any).__WOMPI_PUBLIC_KEY__;
    return key?.startsWith('pub_test_') ? 'https://sandbox.wompi.co' : 'https://production.wompi.co';
}

async function wompiFetch(path: string, options?: RequestInit): Promise<any> {
    const publicKey = (window as any).__WOMPI_PUBLIC_KEY__;
    if (!publicKey) throw new Error('Wompi no está configurado');
    const res = await fetch(`${getWompiApiBaseUrl()}${path}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${publicKey}`,
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || json.error || 'Error en Wompi');
    return json;
}

// ─── WompiJS ($wompi) loading & initialization ─────────────────

const WOMPI_JS_URL = 'https://wompijs.wompi.com/libs/js/v1.js';
const WOMPI_JS_ID = 'wompi-js-script';

function loadWompiJSScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return reject();
        if ((window as any).$wompi) return resolve();
        if (document.getElementById(WOMPI_JS_ID)) {
            const check = () => {
                if ((window as any).$wompi) return resolve();
                setTimeout(check, 100);
            };
            check();
            return;
        }
        const script = document.createElement('script');
        script.id = WOMPI_JS_ID;
        script.src = WOMPI_JS_URL;
        script.setAttribute('data-public-key', (window as any).__WOMPI_PUBLIC_KEY__);
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load WompiJS'));
        document.head.appendChild(script);
    });
}

function initWompiJS(): Promise<{ sessionId: string; deviceId: string }> {
    return new Promise((resolve, reject) => {
        loadWompiJSScript()
            .then(() => {
                (window as any).$wompi.initialize((data: any, error: any) => {
                    if (error) return reject(error);
                    resolve({
                        sessionId: data.sessionId,
                        deviceId: data.deviceData?.deviceID || '',
                    });
                });
            })
            .catch(reject);
    });
}

// ─── Tokenization Form ─────────────────────────────────────────

const WOMPI_TOKEN_POLL_INTERVAL = 2000;
const WOMPI_TOKEN_MAX_ATTEMPTS = 30;

function WompiTokenizationForm({
    paymentMethod,
    onToken,
    onBack,
}: {
    paymentMethod: string;
    onToken: (token: string, sessionId?: string, deviceId?: string) => void;
    onBack: () => void;
}) {
    const [wompiEnv, setWompiEnv] = useState<{ sessionId: string; deviceId: string } | null>(null);
    const [envLoading, setEnvLoading] = useState(true);
    const [envError, setEnvError] = useState<string | null>(null);

    useEffect(() => {
        initWompiJS()
            .then((env) => {
                setWompiEnv(env);
                setEnvLoading(false);
            })
            .catch((e) => {
                setEnvError('Error al inicializar WompiJS');
                setEnvLoading(false);
            });
    }, []);

    if (envLoading) {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner />
                Inicializando entorno seguro...
            </div>
        );
    }

    if (envError) {
        return (
            <div className="space-y-4">
                <div className="text-sm text-destructive p-3 border border-destructive/30 rounded">
                    {envError}
                </div>
                <Button variant="ghost" size="sm" onClick={onBack}>Volver</Button>
            </div>
        );
    }

    if (paymentMethod === 'NEQUI') {
        return <NequiTokenForm wompiEnv={wompiEnv!} onToken={onToken} onBack={onBack} />;
    }

    if (paymentMethod === 'DAVIPLATA') {
        return <DaviplataTokenForm wompiEnv={wompiEnv!} onToken={onToken} onBack={onBack} />;
    }

    if (paymentMethod === 'CARD') {
        return <CardTokenForm wompiEnv={wompiEnv!} onToken={onToken} onBack={onBack} />;
    }

    return (
        <div className="space-y-4">
            <div className="text-sm text-muted-foreground p-3 border rounded">
                Tokenización no implementada para {paymentMethod}
            </div>
            <Button variant="ghost" size="sm" onClick={onBack}>Volver</Button>
        </div>
    );
}

// ─── NEQUI Token Form ──────────────────────────────────────────

function NequiTokenForm({
    wompiEnv,
    onToken,
    onBack,
}: {
    wompiEnv: { sessionId: string; deviceId: string };
    onToken: (token: string, sessionId?: string, deviceId?: string) => void;
    onBack: () => void;
}) {
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState<'form' | 'waiting' | 'done' | 'error'>('form');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleStart = async () => {
        if (!phone || phone.length < 7) {
            setErrorMsg('Ingresa un número de teléfono válido');
            return;
        }
        setLoading(true);
        setErrorMsg(null);
        try {
            const res = await wompiFetch('/v1/tokens/nequi', {
                method: 'POST',
                body: JSON.stringify({ phone_number: phone }),
            });
            const tokenId: string = res.data.id;
            setStep('waiting');

            let attempts = 0;
            const poll = setInterval(async () => {
                attempts++;
                try {
                    const statusRes = await wompiFetch(`/v1/tokens/nequi/${tokenId}`);
                    if (statusRes.data.status === 'APPROVED') {
                        clearInterval(poll);
                        setStep('done');
                        setTimeout(() => onToken(statusRes.data.id, wompiEnv.sessionId, wompiEnv.deviceId), 500);
                    } else if (statusRes.data.status === 'DECLINED' || statusRes.data.status === 'ERROR') {
                        clearInterval(poll);
                        setStep('error');
                        setErrorMsg('La tokenización fue rechazada');
                    }
                } catch { }
                if (attempts >= WOMPI_TOKEN_MAX_ATTEMPTS) {
                    clearInterval(poll);
                    setStep('error');
                    setErrorMsg('Tiempo de espera agotado');
                }
            }, WOMPI_TOKEN_POLL_INTERVAL);
        } catch (e: any) {
            setErrorMsg(e.message || 'Error al tokenizar');
            setStep('error');
        } finally {
            setLoading(false);
        }
    };

    if (step === 'waiting') {
        return (
            <div className="text-center py-8 space-y-4">
                <Smartphone className="h-12 w-12 mx-auto text-primary animate-pulse" />
                <h3 className="font-semibold">Esperando confirmación en Nequi</h3>
                <p className="text-sm text-muted-foreground">
                    Revisa la app de Nequi en tu celular y acepta la suscripción.
                </p>
                <Spinner />
            </div>
        );
    }

    if (step === 'done') {
        return (
            <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Nequi tokenizado exitosamente</h3>
                <p className="text-sm text-muted-foreground">Creando suscripción...</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
                Ingresa tu número de celular registrado en Nequi. Recibirás una notificación en la app para confirmar.
            </p>
            <input
                type="tel"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrorMsg(null); }}
                placeholder="Teléfono Nequi (ej: 3991111111)"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
            />
            {errorMsg && (
                <div className="text-sm text-destructive p-2 border border-destructive/30 rounded">{errorMsg}</div>
            )}
            <div className="flex gap-3">
                <Button variant="default" onClick={handleStart} disabled={loading}>
                    {loading ? <><Spinner /> Tokenizando...</> : 'Tokenizar con Nequi'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}

// ─── DAVIPLATA Token Form ──────────────────────────────────────

function DaviplataTokenForm({
    wompiEnv,
    onToken,
    onBack,
}: {
    wompiEnv: { sessionId: string; deviceId: string };
    onToken: (token: string, sessionId?: string, deviceId?: string) => void;
    onBack: () => void;
}) {
    const [docType, setDocType] = useState('CC');
    const [docNumber, setDocNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [step, setStep] = useState<'form' | 'otp' | 'waiting' | 'done' | 'error'>('form');
    const [otp, setOtp] = useState('');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const tokenIdRef = useRef<string | null>(null);
    const otpValidateUrlRef = useRef<string | null>(null);
    const authTokenRef = useRef<string | null>(null);

    const handleTokenize = async () => {
        if (!phone || phone.length < 7) {
            setErrorMsg('Ingresa un número de teléfono válido');
            return;
        }
        setLoading(true);
        setErrorMsg(null);
        try {
            const res = await wompiFetch('/v1/tokens/daviplata', {
                method: 'POST',
                body: JSON.stringify({
                    type_document: docType,
                    number_document: docNumber,
                    product_number: phone,
                }),
            });
            const d = res.data;
            tokenIdRef.current = d.id;
            authTokenRef.current = d.url_services.token;
            otpValidateUrlRef.current = d.url_services.code_otp_validate;

            await fetch(d.url_services.code_otp_send, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${d.url_services.token}` },
            });

            setStep('otp');
        } catch (e: any) {
            setErrorMsg(e.message || 'Error al tokenizar');
            setStep('error');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || otp.length < 4) {
            setErrorMsg('Ingresa el código OTP');
            return;
        }
        setLoading(true);
        setErrorMsg(null);
        try {
            await fetch(otpValidateUrlRef.current!, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authTokenRef.current}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: otp }),
            });

            setStep('waiting');

            let attempts = 0;
            const poll = setInterval(async () => {
                attempts++;
                try {
                    const statusRes = await wompiFetch(`/v1/tokens/daviplata/${tokenIdRef.current}`);
                    if (statusRes.data.status === 'APPROVED') {
                        clearInterval(poll);
                        setStep('done');
                        setTimeout(() => onToken(statusRes.data.id, wompiEnv.sessionId, wompiEnv.deviceId), 500);
                    } else if (statusRes.data.status === 'DECLINED' || statusRes.data.status === 'ERROR') {
                        clearInterval(poll);
                        setStep('error');
                        setErrorMsg('La tokenización fue rechazada');
                    }
                } catch { }
                if (attempts >= WOMPI_TOKEN_MAX_ATTEMPTS) {
                    clearInterval(poll);
                    setStep('error');
                    setErrorMsg('Tiempo de espera agotado');
                }
            }, WOMPI_TOKEN_POLL_INTERVAL);
        } catch (e: any) {
            setErrorMsg(e.message || 'Error al verificar OTP');
            setStep('error');
        } finally {
            setLoading(false);
        }
    };

    if (step === 'waiting') {
        return (
            <div className="text-center py-8 space-y-4">
                <Loader2 className="h-12 w-12 mx-auto text-primary animate-spin" />
                <h3 className="font-semibold">Verificando código OTP...</h3>
            </div>
        );
    }

    if (step === 'done') {
        return (
            <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Daviplata tokenizado exitosamente</h3>
                <p className="text-sm text-muted-foreground">Creando suscripción...</p>
            </div>
        );
    }

    if (step === 'otp') {
        return (
            <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                    Hemos enviado un código OTP a tu celular. Ingrésalo para confirmar.
                </p>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => { setOtp(e.target.value); setErrorMsg(null); }}
                    placeholder="Código OTP (sandbox: 574829)"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={loading}
                />
                {errorMsg && (
                    <div className="text-sm text-destructive p-2 border border-destructive/30 rounded">{errorMsg}</div>
                )}
                <div className="flex gap-3">
                    <Button variant="default" onClick={handleVerifyOtp} disabled={loading}>
                        {loading ? <><Spinner /> Verificando...</> : 'Verificar OTP'}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setStep('form')} disabled={loading}>Volver</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
                Ingresa los datos de tu cuenta Daviplata para tokenizarla.
            </p>
            <select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
            >
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="NIT">NIT</option>
                <option value="PP">Pasaporte</option>
            </select>
            <input
                type="text"
                value={docNumber}
                onChange={(e) => { setDocNumber(e.target.value); setErrorMsg(null); }}
                placeholder="Número de documento"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
            />
            <input
                type="tel"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setErrorMsg(null); }}
                placeholder="Teléfono Daviplata (sandbox: 3991111111)"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
            />
            {errorMsg && (
                <div className="text-sm text-destructive p-2 border border-destructive/30 rounded">{errorMsg}</div>
            )}
            <div className="flex gap-3">
                <Button variant="default" onClick={handleTokenize} disabled={loading}>
                    {loading ? <><Spinner /> Tokenizando...</> : 'Tokenizar con Daviplata'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}

// ─── CARD Token Form ───────────────────────────────────────────

function CardTokenForm({
    wompiEnv,
    onToken,
    onBack,
}: {
    wompiEnv: { sessionId: string; deviceId: string };
    onToken: (token: string, sessionId?: string, deviceId?: string) => void;
    onBack: () => void;
}) {
    const [number, setNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState<'form' | 'done' | 'error'>('form');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleTokenize = async () => {
        if (number.length < 13) {
            setErrorMsg('Número de tarjeta inválido');
            return;
        }
        if (!expMonth || !expYear) {
            setErrorMsg('Fecha de expiración inválida');
            return;
        }
        if (!cvc || cvc.length < 3) {
            setErrorMsg('CVC inválido');
            return;
        }
        if (!cardHolder) {
            setErrorMsg('Nombre del titular requerido');
            return;
        }

        setLoading(true);
        setErrorMsg(null);
        try {
            const res = await wompiFetch('/v1/tokens/cards', {
                method: 'POST',
                body: JSON.stringify({
                    number: number.replace(/\s/g, ''),
                    cvc,
                    exp_month: expMonth,
                    exp_year: expYear,
                    card_holder: cardHolder,
                }),
            });
            setStep('done');
            setTimeout(() => onToken(res.data.id, wompiEnv.sessionId, wompiEnv.deviceId), 500);
        } catch (e: any) {
            setErrorMsg(e.message || 'Error al tokenizar tarjeta');
            setStep('error');
        } finally {
            setLoading(false);
        }
    };

    if (step === 'done') {
        return (
            <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Tarjeta tokenizada exitosamente</h3>
                <p className="text-sm text-muted-foreground">Creando suscripción...</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
                Ingresa los datos de tu tarjeta. La información se envía directamente a Wompi de forma segura.
            </p>
            <input
                type="text"
                value={number}
                onChange={(e) => { setNumber(e.target.value); setErrorMsg(null); }}
                placeholder="Número de tarjeta"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
                maxLength={19}
            />
            <div className="grid grid-cols-3 gap-2">
                <input
                    type="text"
                    value={expMonth}
                    onChange={(e) => { setExpMonth(e.target.value); setErrorMsg(null); }}
                    placeholder="Mes (MM)"
                    className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={loading}
                    maxLength={2}
                />
                <input
                    type="text"
                    value={expYear}
                    onChange={(e) => { setExpYear(e.target.value); setErrorMsg(null); }}
                    placeholder="Año (YY)"
                    className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={loading}
                    maxLength={2}
                />
                <input
                    type="text"
                    value={cvc}
                    onChange={(e) => { setCvc(e.target.value); setErrorMsg(null); }}
                    placeholder="CVC"
                    className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={loading}
                    maxLength={4}
                />
            </div>
            <input
                type="text"
                value={cardHolder}
                onChange={(e) => { setCardHolder(e.target.value); setErrorMsg(null); }}
                placeholder="Nombre del titular"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={loading}
            />
            {errorMsg && (
                <div className="text-sm text-destructive p-2 border border-destructive/30 rounded">{errorMsg}</div>
            )}
            <div className="flex gap-3">
                <Button variant="default" onClick={handleTokenize} disabled={loading}>
                    {loading ? <><Spinner /> Tokenizando...</> : 'Tokenizar tarjeta'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}
