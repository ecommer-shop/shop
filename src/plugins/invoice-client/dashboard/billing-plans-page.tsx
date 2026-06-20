import {
    api,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@vendure/dashboard';
import { ArrowLeft, Info, Wallet } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { CONTRACT_VERSION } from '../../wompi-subscription/contract-constants';
import { BillingCertificateDocField } from './components/billing-certificate-doc-field';
import { CertificateStatusSteps } from './components/certificate-status-steps';
import { InvoicePlanCard, type InvoicePlanCardPlan } from './components/invoice-plan-card';
import { InvoicePlanPaymentStep } from './invoice-plan-payment-step';
import {
    CREATE_PENDING_INVOICE_PLAN,
    PURCHASE_INVOICE_PLAN_WITH_PAYMENT,
    type InvoicePlanPendingResult,
} from './invoice-plan-payment-queries';

const WOMPI_PENDING_KEY = 'billing-wompi-pending-ref';

const CERT_ANNUAL_PRICE_COP = 199_000;

/** Qu? debe subir el vendedor en cada campo (visible en el paso de certificado). */
const CERTIFICATE_DOCUMENTS_GUIDE: {
    key: 'chamber' | 'rut' | 'nit';
    label: string;
    hint: string;
}[] = [
        {
            key: 'chamber',
            label: 'C?mara de Comercio',
            hint: 'Certificado de existencia y representaci?n legal vigente (PDF o imagen legible).',
        },
        {
            key: 'rut',
            label: 'RUT',
            hint: 'Registro ?nico Tributario actualizado de la empresa o persona jur?dica (PDF/imagen).',
        },
        {
            key: 'nit',
            label: 'NIT',
            hint: 'Documento o pantallazo donde se vea el NIT de la tienda, coincidente con el registrado en Matias.',
        },
    ];

const QUERY = `
query BillingPlansDashboardData {
  myBillingPlanState {
    channelId
    channelCode
    sellerName
    certificateStatus
    certificatePaymentStatus
    certificateType
    certificateExpiresAt
    certificatePaidAt
    certificateReviewNote
    documents { chamber rut nit }
    invoicesRemaining
    canBuyPlans
    matiasTokenConfigured
    matiasPrefixConfigured
    matiasResolutionConfigured
    matiasProfileComplete
    purchaseHistory {
      purchasedAt
      planCode
      planName
      invoicesAdded
      priceCop
      paymentReference
      source
    }
  }
  billingInvoicePlans {
    code
    name
    invoices
    priceCop
  }
}
`;

const SUBMIT_CERT = `
mutation SubmitBillingCertificate($input: SubmitBillingCertificateInput!) {
  submitBillingCertificate(input: $input) {
    channelId
    certificateStatus
    certificatePaymentStatus
    documents { chamber rut nit }
  }
}
`;

const CONFIRM_CERT_PAYMENT = `
mutation ConfirmCertPayment {
  confirmMyBillingCertificatePayment {
    channelId
    certificateStatus
    certificatePaymentStatus
    certificatePaidAt
  }
}
`;

const GET_PAYMENT_SIGNATURE = `
query BillingWompiPaymentSignature($amountInCents: Int!, $paymentReference: String!) {
  billingWompiPaymentSignature(amountInCents: $amountInCents, paymentReference: $paymentReference)
}
`;

type BillingPlanState = {
    channelId: string;
    channelCode: string;
    sellerName: string | null;
    certificateStatus: string;
    certificatePaymentStatus: string;
    certificateType: string | null;
    certificateExpiresAt: string | null;
    certificatePaidAt: string | null;
    certificateReviewNote: string | null;
    documents: { chamber: string | null; rut: string | null; nit: string | null };
    invoicesRemaining: number;
    canBuyPlans: boolean;
    matiasTokenConfigured: boolean;
    matiasPrefixConfigured: boolean;
    matiasResolutionConfigured: boolean;
    matiasProfileComplete: boolean;
    purchaseHistory: {
        purchasedAt: string;
        planCode: string;
        planName: string;
        invoicesAdded: number;
        priceCop: number;
        paymentReference: string | null;
        source: string;
    }[];
};

type Step = 'overview' | 'certificate' | 'plans' | 'payment';

function statusBadge(status: string, payment: string) {
    if (status === 'ACTIVE' && payment === 'PAID') {
        return { label: 'Certificado activo', className: 'bg-emerald-500/15 text-emerald-700' };
    }
    if (status === 'UNDER_REVIEW') {
        return { label: 'En revisi?n (super admin)', className: 'bg-blue-500/15 text-blue-700' };
    }
    if (status === 'REJECTED') {
        return { label: 'Certificado rechazado', className: 'bg-destructive/15 text-destructive' };
    }
    if (status === 'EXPIRED') {
        return { label: 'Certificado vencido', className: 'bg-amber-500/15 text-amber-800' };
    }
    if (payment === 'PAID' && status !== 'ACTIVE') {
        return { label: 'Pago confirmado ? pendiente aprobaci?n', className: 'bg-amber-500/15 text-amber-800' };
    }
    return { label: 'Certificado pendiente', className: 'bg-muted text-muted-foreground' };
}

export function BillingPlansPage() {
    const [step, setStep] = useState<Step>('overview');
    const [selectedPlan, setSelectedPlan] = useState<InvoicePlanCardPlan | null>(null);
    const [paymentTab, setPaymentTab] = useState('token');
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [showTokenForm, setShowTokenForm] = useState(false);
    const [planPendingResult, setPlanPendingResult] = useState<InvoicePlanPendingResult | null>(null);
    const [chamberRef, setChamberRef] = useState('');
    const [rutRef, setRutRef] = useState('');
    const [nitRef, setNitRef] = useState('');
    const [paymentRef, setPaymentRef] = useState<string | null>(null);
    const [wompiPolling, setWompiPolling] = useState(false);
    const [paymentNotice, setPaymentNotice] = useState<string | null>(null);
    const pollCountRef = useRef(0);
    const invoicesBeforePlanPayRef = useRef<number | null>(null);

    const { data, refetch, isLoading, error } = useQuery({
        queryKey: ['billing-plans-dashboard'],
        queryFn: () => api.query<{ myBillingPlanState: BillingPlanState; billingInvoicePlans: InvoicePlanCardPlan[] }>(QUERY),
    });

    const state = data?.myBillingPlanState;
    const plans = data?.billingInvoicePlans ?? [];
    const canBuyPlans = !!state?.canBuyPlans;
    const certificateReady = state?.certificateStatus === 'ACTIVE' && state.certificatePaymentStatus === 'PAID';
    const waitingMatiasProfile = !!certificateReady && !state?.matiasProfileComplete;
    const docsComplete = !!(chamberRef.trim() && rutRef.trim() && nitRef.trim());
    const docsSavedOnServer =
        !!state?.documents?.chamber?.trim() &&
        !!state?.documents?.rut?.trim() &&
        !!state?.documents?.nit?.trim();
    const needsRenewal = state?.certificateStatus === 'EXPIRED' || state?.certificateStatus === 'REJECTED';

    useEffect(() => {
        if (!state?.documents) return;
        setChamberRef(state.documents.chamber ?? '');
        setRutRef(state.documents.rut ?? '');
        setNitRef(state.documents.nit ?? '');
    }, [state?.documents]);

    useEffect(() => {
        const pending = sessionStorage.getItem(WOMPI_PENDING_KEY);
        if (pending) {
            setPaymentRef(pending);
            setWompiPolling(true);
            setPaymentNotice('Verificando pago con Wompi?');
            pollCountRef.current = 0;
        }
    }, []);

    useEffect(() => {
        if (!wompiPolling) return;
        const id = setInterval(() => {
            pollCountRef.current += 1;
            void refetch().then((result) => {
                const st = result.data?.myBillingPlanState;
                if (paymentRef?.startsWith('CERT-') && st?.certificatePaymentStatus === 'PAID') {
                    setWompiPolling(false);
                    sessionStorage.removeItem(WOMPI_PENDING_KEY);
                    setPaymentNotice('Pago del certificado confirmado. Tu tr?mite est? en revisi?n.');
                }
                const before = invoicesBeforePlanPayRef.current;
                if (
                    paymentRef?.startsWith('PLAN-') &&
                    st &&
                    before != null &&
                    st.invoicesRemaining > before
                ) {
                    setWompiPolling(false);
                    sessionStorage.removeItem(WOMPI_PENDING_KEY);
                    setPaymentNotice('Paquete de facturas acreditado correctamente.');
                }
            });
            if (pollCountRef.current >= 40) {
                setWompiPolling(false);
                setPaymentNotice(
                    'Si ya pagaste, espera unos minutos y recarga la p?gina. Si el saldo no cambia, contacta soporte con la referencia de pago.',
                );
            }
        }, 3000);
        return () => clearInterval(id);
    }, [wompiPolling, paymentRef, refetch]);

    const submitCert = useMutation({
        mutationFn: async () => {
            await api.mutate(SUBMIT_CERT, {
                input: {
                    chamber: chamberRef.trim(),
                    rut: rutRef.trim(),
                    nit: nitRef.trim(),
                    certificateType: 'ANNUAL',
                },
            });
        },
        onSuccess: () => {
            setStep('certificate');
            setPaymentNotice('Documentos guardados. Ya puedes pagar el certificado.');
            refetch();
        },
    });

    const confirmCertPay = useMutation({
        mutationFn: async () => api.mutate(CONFIRM_CERT_PAYMENT, {}),
        onSuccess: () => refetch(),
    });

    const openWompiCheckout = async (amountCop: number, reference: string) => {
        setPaymentRef(reference);
        sessionStorage.setItem(WOMPI_PENDING_KEY, reference);
        setWompiPolling(true);
        pollCountRef.current = 0;
        setPaymentNotice('Redirigiendo a Wompi. Al volver, actualizaremos el estado autom?ticamente.');
        const res = await api.query<{ billingWompiPaymentSignature: string }>(GET_PAYMENT_SIGNATURE, {
            amountInCents: amountCop * 100,
            paymentReference: reference,
        });
        const base = (window as unknown as { __WOMPI_PUBLIC_KEY__?: string }).__WOMPI_PUBLIC_KEY__?.startsWith('pub_test_')
            ? 'https://checkout.wompi.co/l'
            : 'https://checkout.wompi.co/l';
        window.open(
            `${base}/${res.billingWompiPaymentSignature}?redirect-url=${encodeURIComponent(window.location.href)}`,
            '_blank',
        );
    };

    const startWompiCertificatePayment = async () => {
        if (!state?.channelCode) return;
        const reference = `CERT-${state.channelCode}-${Date.now()}`;
        await openWompiCheckout(CERT_ANNUAL_PRICE_COP, reference);
    };

    const handleSelectPlan = (plan: InvoicePlanCardPlan) => {
        if (!canBuyPlans) return;
        setSelectedPlan(plan);
        setStep('payment');
        setPlanPendingResult(null);
        setShowTokenForm(false);
        setSelectedMethod(null);
        setPaymentNotice(null);
        invoicesBeforePlanPayRef.current = state?.invoicesRemaining ?? 0;
    };

    const handlePlanPayment = async () => {
        if (!selectedPlan || !selectedMethod) return;
        const isTokenFlow = ['CARD', 'NEQUI', 'DAVIPLATA', 'BANCOLOMBIA_TRANSFER'].includes(selectedMethod);
        if (isTokenFlow) {
            setShowTokenForm(true);
            return;
        }
        setPaymentProcessing(true);
        setPaymentNotice(null);
        try {
            const data = await api.mutate<{
                createPendingInvoicePlanPurchase: InvoicePlanPendingResult;
            }>(CREATE_PENDING_INVOICE_PLAN, {
                planCode: selectedPlan.code,
                paymentMethod: selectedMethod,
                clickwrapAccepted: true,
                contractVersion: CONTRACT_VERSION,
            });
            const result = data.createPendingInvoicePlanPurchase;
            setPlanPendingResult(result);
            setPaymentRef(result.reference);
            if (result.reference) {
                sessionStorage.setItem(WOMPI_PENDING_KEY, result.reference);
            }
            if (result.applied) {
                setPaymentNotice('Paquete de facturas acreditado correctamente.');
                await refetch();
            } else if (!result.asyncPaymentUrl && !result.qrImage) {
                setWompiPolling(true);
                setPaymentNotice('Pago en proceso. Actualizaremos el cupo al confirmarse.');
            }
        } catch (e: unknown) {
            setPaymentNotice(e instanceof Error ? e.message : 'Error al iniciar el pago.');
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handlePlanTokenReceived = async (token: string, sessionId?: string, deviceId?: string) => {
        if (!selectedPlan || !selectedMethod) return;
        setPaymentProcessing(true);
        try {
            const data = await api.mutate<{
                purchaseInvoicePlanWithPayment: InvoicePlanPendingResult;
            }>(PURCHASE_INVOICE_PLAN_WITH_PAYMENT, {
                planCode: selectedPlan.code,
                paymentMethod: selectedMethod,
                token,
                clickwrapAccepted: true,
                contractVersion: CONTRACT_VERSION,
                sessionId: sessionId ?? null,
                deviceId: deviceId ?? null,
            });
            const result = data.purchaseInvoicePlanWithPayment;
            setPlanPendingResult(result);
            setPaymentRef(result.reference);
            if (result.reference) {
                sessionStorage.setItem(WOMPI_PENDING_KEY, result.reference);
            }
            if (result.applied) {
                setPaymentNotice('Paquete de facturas acreditado correctamente.');
                setSelectedPlan(null);
                setStep('overview');
                await refetch();
            } else {
                setWompiPolling(true);
                setPaymentNotice('Pago en proceso. Si ya se cobró, el cupo se actualizará en unos segundos.');
            }
        } catch (e: unknown) {
            setPaymentNotice(e instanceof Error ? e.message : 'Error al procesar el pago.');
        } finally {
            setPaymentProcessing(false);
            setShowTokenForm(false);
        }
    };

    const handlePlanPaymentSuccess = () => {
        setSelectedPlan(null);
        setStep('overview');
        setPlanPendingResult(null);
        setShowTokenForm(false);
        setSelectedMethod(null);
        setWompiPolling(true);
        setPaymentNotice('Verificando pago con Wompi…');
        pollCountRef.current = 0;
        void refetch();
    };

    const monthlyCertAlert =
        state?.certificateType === 'MONTHLY' &&
        state.certificateExpiresAt &&
        new Date(state.certificateExpiresAt).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000;

    const badge = state ? statusBadge(state.certificateStatus, state.certificatePaymentStatus) : null;

    if (isLoading) {
        return (
            <Page pageId="billing-plans">
                <PageTitle>Planes de facturaci?n</PageTitle>
                <p className="text-sm text-muted-foreground">Cargando?</p>
            </Page>
        );
    }

    if (error) {
        return (
            <Page pageId="billing-plans">
                <PageTitle>Planes de facturaci?n</PageTitle>
                <Card className="border-destructive/50">
                    <CardContent className="py-6 text-sm text-destructive">{String(error)}</CardContent>
                </Card>
            </Page>
        );
    }

    return (
        <Page pageId="billing-plans">
            <PageTitle>Planes de facturaci?n</PageTitle>
            <PageLayout>
                {step !== 'plans' && (
                    <PageBlock column="main" blockId="header">
                        <Card>
                            <CardHeader>
                                <CardTitle>Estado de facturaci?n electr?nica</CardTitle>
                                <CardDescription>
                                    Canal: {state?.channelCode ?? '?'} ? Cupo restante: {state?.invoicesRemaining ?? 0} facturas
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <CertificateStatusSteps
                                    certificateStatus={state?.certificateStatus ?? 'NONE'}
                                    certificatePaymentStatus={state?.certificatePaymentStatus ?? 'UNPAID'}
                                    canBuyPlans={canBuyPlans}
                                    docsComplete={docsComplete}
                                    matiasProfileComplete={state?.matiasProfileComplete ?? false}
                                />
                                {paymentNotice && (
                                    <p className="text-sm rounded-md border bg-muted/50 p-2">{paymentNotice}</p>
                                )}
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    {badge && (
                                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badge.className}`}>
                                            {badge.label}
                                        </span>
                                    )}
                                    {state?.certificateExpiresAt && canBuyPlans && (
                                        <span className="text-xs text-muted-foreground">
                                            Vence: {new Date(state.certificateExpiresAt).toLocaleDateString('es-CO')}
                                        </span>
                                    )}
                                </div>
                                {monthlyCertAlert && (
                                    <p className="text-sm text-amber-700 rounded-md border border-amber-500/30 bg-amber-500/10 p-2">
                                        Tu certificado mensual vence pronto. Renueva el pago para seguir emitiendo facturas.
                                    </p>
                                )}
                                {state?.certificateReviewNote && (
                                    <p className="text-sm text-muted-foreground max-w-xl">{state.certificateReviewNote}</p>
                                )}
                            </CardContent>
                        </Card>
                    </PageBlock>
                )}

                {step === 'overview' && (
                    <>
                        {!certificateReady && (
                            <PageBlock column="main" blockId="cert-required">
                                <Card className="border-amber-500/30 bg-amber-500/5">
                                    <CardHeader>
                                        <CardTitle>
                                            {needsRenewal ? 'Renueva tu certificado' : 'Primero adquiere tu certificado'}
                                        </CardTitle>
                                        <CardDescription>
                                            Para emitir facturas con Matias necesitas certificado activo. Debes subir:{' '}
                                            {CERTIFICATE_DOCUMENTS_GUIDE.map((d) => d.label).join(', ')}; pagar el certificado
                                            anual (${CERT_ANNUAL_PRICE_COP.toLocaleString('es-CO')}) y esperar validaci?n del super
                                            admin.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button onClick={() => setStep('certificate')}>Iniciar certificado</Button>
                                    </CardContent>
                                </Card>
                            </PageBlock>
                        )}

                        {waitingMatiasProfile && (
                            <PageBlock column="main" blockId="matias-profile-pending">
                                <Card className="border-blue-500/30 bg-blue-500/5">
                                    <CardHeader>
                                        <CardTitle>En espera de asignación Matias</CardTitle>
                                        <CardDescription>
                                            Tu certificado ya está aprobado. Falta que el superadmin configure el token,
                                            prefijo y resolución Matias para habilitar la compra de paquetes.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm">
                                        <p>Token: {state?.matiasTokenConfigured ? 'configurado' : 'pendiente'}</p>
                                        <p>Prefijo: {state?.matiasPrefixConfigured ? 'configurado' : 'pendiente'}</p>
                                        <p>Resolución: {state?.matiasResolutionConfigured ? 'configurada' : 'pendiente'}</p>
                                    </CardContent>
                                </Card>
                            </PageBlock>
                        )}

                        {canBuyPlans && (
                            <PageBlock column="main" blockId="plans-cta">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Paquetes de facturas</CardTitle>
                                        <CardDescription>
                                            Los paquetes no vencen. Solo se descuenta al emitir facturas exitosas.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button onClick={() => setStep('plans')}>Ver planes y comprar</Button>
                                    </CardContent>
                                </Card>
                            </PageBlock>
                        )}

                        {(state?.purchaseHistory?.length ?? 0) > 0 && (
                            <PageBlock column="main" blockId="purchase-history">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Historial de compras</CardTitle>
                                        <CardDescription>?ltimos paquetes de facturas adquiridos.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Fecha</TableHead>
                                                    <TableHead>Plan</TableHead>
                                                    <TableHead>Facturas</TableHead>
                                                    <TableHead>Valor</TableHead>
                                                    <TableHead>Origen</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {state!.purchaseHistory.map((row, i) => (
                                                    <TableRow key={`${row.purchasedAt}-${i}`}>
                                                        <TableCell>
                                                            {new Date(row.purchasedAt).toLocaleString('es-CO')}
                                                        </TableCell>
                                                        <TableCell>{row.planName}</TableCell>
                                                        <TableCell>+{row.invoicesAdded}</TableCell>
                                                        <TableCell>${row.priceCop.toLocaleString('es-CO')}</TableCell>
                                                        <TableCell className="text-xs">{row.source}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </PageBlock>
                        )}
                    </>
                )}

                {step === 'certificate' && (
                    <PageBlock column="main" blockId="certificate-flow">
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={() => setStep('overview')}>
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                                <div>
                                    <CardTitle>Certificado de facturaci?n electr?nica</CardTitle>
                                    <CardDescription>
                                        Documentos obligatorios y pago anual. Tras el pago, un super admin valida y activa el certificado.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {needsRenewal && (
                                    <p className="text-sm text-amber-800 rounded-md border border-amber-500/30 bg-amber-500/10 p-3">
                                        Tu certificado est? {state?.certificateStatus === 'EXPIRED' ? 'vencido' : 'rechazado'}.
                                        Vuelve a subir documentos, guardar y pagar el certificado anual.
                                    </p>
                                )}

                                <CertificateStatusSteps
                                    certificateStatus={state?.certificateStatus ?? 'NONE'}
                                    certificatePaymentStatus={state?.certificatePaymentStatus ?? 'UNPAID'}
                                    canBuyPlans={canBuyPlans}
                                    docsComplete={docsComplete}
                                    matiasProfileComplete={state?.matiasProfileComplete ?? false}
                                />

                                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <Info className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                        <div className="space-y-2 text-sm">
                                            <p className="font-medium">Documentos que debes subir</p>
                                            <p className="text-muted-foreground">
                                                Usa ?Subir archivo? en cada campo (PDF, JPG o PNG). Luego pulsa ?Guardar
                                                documentos? antes de pagar con Wompi.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
                                    <BillingCertificateDocField
                                        label={CERTIFICATE_DOCUMENTS_GUIDE[0].label}
                                        hint={CERTIFICATE_DOCUMENTS_GUIDE[0].hint}
                                        assetId={chamberRef}
                                        onAssetIdChange={setChamberRef}
                                    />
                                    <BillingCertificateDocField
                                        label={CERTIFICATE_DOCUMENTS_GUIDE[1].label}
                                        hint={CERTIFICATE_DOCUMENTS_GUIDE[1].hint}
                                        assetId={rutRef}
                                        onAssetIdChange={setRutRef}
                                    />
                                    <BillingCertificateDocField
                                        label={CERTIFICATE_DOCUMENTS_GUIDE[2].label}
                                        hint={CERTIFICATE_DOCUMENTS_GUIDE[2].hint}
                                        assetId={nitRef}
                                        onAssetIdChange={setNitRef}
                                    />
                                </div>

                                <div className="rounded-lg border bg-muted/40 p-4">
                                    <p className="text-sm font-medium">Certificado anual</p>
                                    <p className="text-2xl font-bold">${CERT_ANNUAL_PRICE_COP.toLocaleString('es-CO')} COP</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => submitCert.mutate()}
                                        disabled={submitCert.isPending || !docsComplete}
                                    >
                                        Guardar documentos
                                    </Button>
                                    <Button
                                        onClick={startWompiCertificatePayment}
                                        disabled={
                                            !state?.channelCode ||
                                            !docsSavedOnServer ||
                                            state?.certificatePaymentStatus === 'PAID' ||
                                            wompiPolling
                                        }
                                        title={
                                            !docsSavedOnServer
                                                ? 'Primero guarda los tres documentos'
                                                : undefined
                                        }
                                    >
                                        <Wallet className="mr-2 h-4 w-4" />
                                        Pagar con Wompi (checkout)
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => confirmCertPay.mutate()}
                                        disabled={confirmCertPay.isPending || state?.certificatePaymentStatus === 'PAID'}
                                    >
                                        Marcar pago confirmado (admin / pruebas)
                                    </Button>
                                </div>

                                {paymentRef && (
                                    <p className="text-xs text-muted-foreground">
                                        Referencia de pago: <span className="font-mono">{paymentRef}</span>
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </PageBlock>
                )}

                {step === 'plans' && (
                    <PageBlock column="main" blockId="plans-grid">
                        <div className="mb-4 flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setStep('overview')}>
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                            <h2 className="text-lg font-semibold">Elige un paquete de facturas</h2>
                            <p className="text-sm text-muted-foreground">
                                El saldo se acumula. Puedes comprar otro paquete aunque tengas facturas restantes.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {plans.map((plan) => (
                                <InvoicePlanCard
                                    key={plan.code}
                                    plan={plan}
                                    disabled={!canBuyPlans}
                                    onSelect={() => handleSelectPlan(plan)}
                                />
                            ))}
                        </div>
                    </PageBlock>
                )}

                {step === 'payment' && selectedPlan && (
                    <PageBlock column="main" blockId="plan-payment">
                        {paymentNotice && (
                            <p className="text-sm rounded-md border bg-muted/50 p-2 mb-4">{paymentNotice}</p>
                        )}
                        <InvoicePlanPaymentStep
                            plan={selectedPlan}
                            paymentTab={paymentTab}
                            setPaymentTab={setPaymentTab}
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                            onPay={handlePlanPayment}
                            paymentProcessing={paymentProcessing}
                            showTokenForm={showTokenForm}
                            onCloseTokenForm={() => setShowTokenForm(false)}
                            onTokenReceived={handlePlanTokenReceived}
                            pendingResult={planPendingResult}
                            onSuccess={handlePlanPaymentSuccess}
                            onBack={() => {
                                setStep('plans');
                                setSelectedPlan(null);
                                setPlanPendingResult(null);
                                setShowTokenForm(false);
                                setSelectedMethod(null);
                            }}
                        />
                    </PageBlock>
                )}
            </PageLayout>
        </Page>
    );
}