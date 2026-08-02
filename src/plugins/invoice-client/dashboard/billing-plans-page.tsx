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
import { BillingCertificateRejectionAlert } from './components/billing-certificate-rejection-alert';
import { CertificateStatusSteps } from './components/certificate-status-steps';
import { InvoicePlanCard, type InvoicePlanCardPlan } from './components/invoice-plan-card';
import { InvoicePlanPaymentStep } from './invoice-plan-payment-step';
import {
    CHECK_BILLING_CERTIFICATE_PAYMENT_STATUS,
    CHECK_INVOICE_PLAN_PURCHASE_STATUS,
    CREATE_PENDING_BILLING_CERTIFICATE,
    CREATE_PENDING_INVOICE_PLAN,
    PURCHASE_BILLING_CERTIFICATE_WITH_PAYMENT,
    PURCHASE_INVOICE_PLAN_WITH_PAYMENT,
    type InvoicePlanPendingResult,
} from './invoice-plan-payment-queries';

const WOMPI_PENDING_KEY = 'billing-wompi-pending-ref';

type PendingWompiPayment = {
    reference: string;
    transactionId: string | null;
    invoicesBefore: number | null;
};

const CERT_ANNUAL_PRICE_COP = 199_000;

/** Qué debe subir el vendedor en cada campo (visible en el paso de certificado). */
const CERTIFICATE_DOCUMENTS_GUIDE: {
    key: 'chamber' | 'rut' | 'nit' | 'dianResolution' | 'storeLogo';
    label: string;
    hint: string;
    accept?: string;
}[] = [
        {
            key: 'chamber',
            label: 'Cámara de Comercio',
            hint: 'Certificado de existencia y representación legal vigente (PDF o imagen legible).',
        },
        {
            key: 'rut',
            label: 'RUT',
            hint: 'Registro único Tributario actualizado de la empresa o persona jurídica (PDF/imagen).',
        },
        {
            key: 'nit',
            label: 'NIT',
            hint: 'Documento o pantallazo donde se vea el NIT de la tienda',
        },
        {
            key: 'dianResolution',
            label: 'Resolución DIAN',
            hint: 'Documento PDF o imagen de la resolución DIAN de facturación electrónica vigente.',
        },
        {
            key: 'storeLogo',
            label: 'Logo de la tienda',
            hint: 'Imagen del logo de la tienda (JPG, PNG o WebP). Se usa para identificar la marca en el proceso.',
            accept: '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp',
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
    documents { chamber rut nit dianResolution storeLogo }
    invoicesRemaining
    canBuyPlans
    matiasCompanyIdConfigured
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
    documents { chamber rut nit dianResolution storeLogo }
  }
}
`;

const CERTIFICATE_PAYMENT_PLAN: InvoicePlanCardPlan = {
    code: 'certificate-annual',
    name: 'Certificado anual',
    invoices: 0,
    priceCop: CERT_ANNUAL_PRICE_COP,
    detailLine: 'Pago único anual del certificado de facturación',
};

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
    documents: {
        chamber: string | null;
        rut: string | null;
        nit: string | null;
        dianResolution: string | null;
        storeLogo: string | null;
    };
    invoicesRemaining: number;
    canBuyPlans: boolean;
    matiasCompanyIdConfigured: boolean;
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

type Step = 'overview' | 'certificate' | 'certificate-payment' | 'plans' | 'payment';

function statusBadge(status: string, payment: string) {
    if (status === 'ACTIVE' && payment === 'PAID') {
        return { label: 'Certificado activo', className: 'bg-emerald-500/15 text-emerald-700' };
    }
    if (status === 'UNDER_REVIEW') {
        return { label: 'En revisión', className: 'bg-blue-500/15 text-blue-700' };
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
    const [dianResolutionRef, setDianResolutionRef] = useState('');
    const [storeLogoRef, setStoreLogoRef] = useState('');
    const [paymentRef, setPaymentRef] = useState<string | null>(null);
    const [paymentTransactionId, setPaymentTransactionId] = useState<string | null>(null);
    const [wompiPolling, setWompiPolling] = useState(false);
    const [paymentNotice, setPaymentNotice] = useState<string | null>(null);
    const pollCountRef = useRef(0);
    const invoicesBeforePlanPayRef = useRef<number | null>(null);

    const savePendingPayment = (payment: PendingWompiPayment) => {
        sessionStorage.setItem(WOMPI_PENDING_KEY, JSON.stringify(payment));
    };

    const clearPendingPayment = () => {
        sessionStorage.removeItem(WOMPI_PENDING_KEY);
    };

    const { data, refetch, isLoading, error } = useQuery({
        queryKey: ['billing-plans-dashboard'],
        queryFn: () => api.query<{ myBillingPlanState: BillingPlanState; billingInvoicePlans: InvoicePlanCardPlan[] }>(QUERY),
    });

    const state = data?.myBillingPlanState;
    const plans = data?.billingInvoicePlans ?? [];
    const canBuyPlans = !!state?.canBuyPlans;
    const certificateReady = state?.certificateStatus === 'ACTIVE' && state.certificatePaymentStatus === 'PAID';
    const waitingMatiasProfile = !!certificateReady && !state?.matiasProfileComplete;
    const docsComplete = !!(
        chamberRef.trim() &&
        rutRef.trim() &&
        nitRef.trim() &&
        dianResolutionRef.trim() &&
        storeLogoRef.trim()
    );
    const docsSavedOnServer =
        !!state?.documents?.chamber?.trim() &&
        !!state?.documents?.rut?.trim() &&
        !!state?.documents?.nit?.trim() &&
        !!state?.documents?.dianResolution?.trim() &&
        !!state?.documents?.storeLogo?.trim();
    const needsRenewal = state?.certificateStatus === 'EXPIRED' || state?.certificateStatus === 'REJECTED';
    const isRejected = state?.certificateStatus === 'REJECTED';
    const rejectionNote = state?.certificateReviewNote?.trim() ?? '';
    const certPaymentAlreadyMade = state?.certificatePaymentStatus === 'PAID';
    const rejectedResubmitWithoutPayment = isRejected && certPaymentAlreadyMade;

    useEffect(() => {
        if (!state?.documents) return;
        setChamberRef(state.documents.chamber ?? '');
        setRutRef(state.documents.rut ?? '');
        setNitRef(state.documents.nit ?? '');
        setDianResolutionRef(state.documents.dianResolution ?? '');
        setStoreLogoRef(state.documents.storeLogo ?? '');
    }, [state?.documents]);

    useEffect(() => {
        const raw = sessionStorage.getItem(WOMPI_PENDING_KEY);
        if (raw) {
            let pending: PendingWompiPayment;
            try {
                const parsed = JSON.parse(raw) as PendingWompiPayment;
                pending = {
                    reference: parsed.reference,
                    transactionId: parsed.transactionId ?? null,
                    invoicesBefore: parsed.invoicesBefore ?? null,
                };
            } catch {
                pending = { reference: raw, transactionId: null, invoicesBefore: null };
            }
            setPaymentRef(pending.reference);
            setPaymentTransactionId(pending.transactionId);
            invoicesBeforePlanPayRef.current = pending.invoicesBefore;
            setWompiPolling(true);
            setPaymentNotice('Verificando pago con Wompi…');
            pollCountRef.current = 0;
        }
    }, []);

    useEffect(() => {
        if (!wompiPolling) return;
        const id = setInterval(() => {
            pollCountRef.current += 1;
            void (async () => {
                if (paymentRef?.startsWith('PLAN')) {
                    if (paymentTransactionId) {
                        const data = await api.mutate<{
                            checkInvoicePlanPurchaseStatus: InvoicePlanPendingResult;
                        }>(CHECK_INVOICE_PLAN_PURCHASE_STATUS, {
                            reference: paymentRef,
                            transactionId: paymentTransactionId,
                        });
                        if (data.checkInvoicePlanPurchaseStatus.applied) {
                            setWompiPolling(false);
                            clearPendingPayment();
                            setPlanPendingResult(null);
                            setSelectedPlan(null);
                            setStep('overview');
                            setPaymentNotice('Paquete de facturas acreditado correctamente.');
                            await refetch();
                            return;
                        }
                    }
                }
                if (paymentRef?.startsWith('CERT') && paymentTransactionId) {
                    const data = await api.mutate<{
                        checkBillingCertificatePaymentStatus: InvoicePlanPendingResult;
                    }>(CHECK_BILLING_CERTIFICATE_PAYMENT_STATUS, {
                        reference: paymentRef,
                        transactionId: paymentTransactionId,
                    });
                    if (data.checkBillingCertificatePaymentStatus.applied) {
                        setWompiPolling(false);
                        clearPendingPayment();
                        setPaymentNotice('Pago del certificado confirmado. Tu trámite está en revisión.');
                        setStep('certificate');
                        await refetch();
                        return;
                    }
                }
                const result = await refetch();
                const st = result.data?.myBillingPlanState;
                if (paymentRef?.startsWith('CERT') && st?.certificatePaymentStatus === 'PAID') {
                    setWompiPolling(false);
                    clearPendingPayment();
                    setPaymentNotice('Pago del certificado confirmado. Tu trámite está en revisión.');
                    setStep('certificate');
                }
                const purchasedByReference =
                    !!paymentRef &&
                    st?.purchaseHistory?.some((row) => row.paymentReference === paymentRef);
                const before = invoicesBeforePlanPayRef.current;
                if (
                    paymentRef?.startsWith('PLAN') &&
                    st &&
                    (purchasedByReference || (before != null && st.invoicesRemaining > before))
                ) {
                    setWompiPolling(false);
                    clearPendingPayment();
                    setPlanPendingResult(null);
                    setSelectedPlan(null);
                    setStep('overview');
                    setPaymentNotice('Paquete de facturas acreditado correctamente.');
                }
            })().catch((e) => {
                setPaymentNotice(e instanceof Error ? e.message : 'No se pudo verificar el pago con Wompi.');
            });
            if (pollCountRef.current >= 40) {
                setWompiPolling(false);
                setPaymentNotice(
                    'Si ya pagaste, espera unos minutos y recarga la página. Si el saldo no cambia, contacta soporte con la referencia de pago.',
                );
            }
        }, 3000);
        return () => clearInterval(id);
    }, [wompiPolling, paymentRef, paymentTransactionId, refetch]);

    const submitCert = useMutation({
        mutationFn: async () => {
            const result = await api.mutate<{ submitBillingCertificate: BillingPlanState }>(SUBMIT_CERT, {
                input: {
                    chamber: chamberRef.trim(),
                    rut: rutRef.trim(),
                    nit: nitRef.trim(),
                    dianResolution: dianResolutionRef.trim(),
                    storeLogo: storeLogoRef.trim(),
                    certificateType: 'ANNUAL',
                },
            });
            return result.submitBillingCertificate;
        },
        onSuccess: (updated) => {
            setStep('certificate');
            const backToReview =
                updated.certificateStatus === 'UNDER_REVIEW' && updated.certificatePaymentStatus === 'PAID';
            setPaymentNotice(
                backToReview
                    ? 'Documentos guardados. Tu trámite volvió a revisión del super admin. No necesitas pagar de nuevo.'
                    : 'Documentos guardados. Ya puedes pagar el certificado.',
            );
            refetch();
        },
    });

    const startCertificatePaymentStep = () => {
        if (!state?.channelCode || !docsSavedOnServer) return;
        setStep('certificate-payment');
        setPlanPendingResult(null);
        setShowTokenForm(false);
        setSelectedMethod(null);
        setPaymentNotice(null);
    };

    const handleCertificatePayment = async () => {
        if (!selectedMethod) return;
        const isTokenFlow = ['CARD', 'NEQUI', 'DAVIPLATA', 'BANCOLOMBIA_TRANSFER'].includes(selectedMethod);
        if (isTokenFlow) {
            setShowTokenForm(true);
            return;
        }
        setPaymentProcessing(true);
        setPaymentNotice(null);
        try {
            const data = await api.mutate<{
                createPendingBillingCertificatePayment: InvoicePlanPendingResult;
            }>(CREATE_PENDING_BILLING_CERTIFICATE, {
                paymentMethod: selectedMethod,
                clickwrapAccepted: true,
                contractVersion: CONTRACT_VERSION,
            });
            const result = data.createPendingBillingCertificatePayment;
            setPlanPendingResult(result);
            setPaymentRef(result.reference);
            setPaymentTransactionId(result.transactionId ?? null);
            if (result.reference) {
                savePendingPayment({
                    reference: result.reference,
                    transactionId: result.transactionId ?? null,
                    invoicesBefore: null,
                });
            }
            if (result.applied) {
                clearPendingPayment();
                setPaymentNotice('Pago del certificado confirmado. Tu trámite está en revisión.');
                await refetch();
            } else if (!result.asyncPaymentUrl && !result.qrImage) {
                setWompiPolling(true);
                setPaymentNotice('Pago en proceso. Actualizaremos el estado al confirmarse.');
            }
        } catch (e: unknown) {
            setPaymentNotice(e instanceof Error ? e.message : 'Error al iniciar el pago del certificado.');
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handleCertificateTokenReceived = async (token: string, sessionId?: string, deviceId?: string) => {
        if (!selectedMethod) return;
        setShowTokenForm(false);
        setPaymentProcessing(true);
        setPaymentNotice(null);
        try {
            const data = await api.mutate<{
                purchaseBillingCertificateWithPayment: InvoicePlanPendingResult;
            }>(PURCHASE_BILLING_CERTIFICATE_WITH_PAYMENT, {
                paymentMethod: selectedMethod,
                token,
                clickwrapAccepted: true,
                contractVersion: CONTRACT_VERSION,
                sessionId: sessionId ?? null,
                deviceId: deviceId ?? null,
            });
            const result = data.purchaseBillingCertificateWithPayment;
            setPlanPendingResult(result);
            setPaymentRef(result.reference);
            setPaymentTransactionId(result.transactionId ?? null);
            if (result.reference) {
                savePendingPayment({
                    reference: result.reference,
                    transactionId: result.transactionId ?? null,
                    invoicesBefore: null,
                });
            }
            if (result.applied) {
                clearPendingPayment();
                setPaymentNotice('Pago del certificado confirmado. Tu trámite está en revisión.');
                await refetch();
            } else {
                setWompiPolling(true);
                setPaymentNotice('Pago en proceso. Actualizaremos el estado al confirmarse.');
            }
        } catch (e: unknown) {
            setPlanPendingResult(null);
            setPaymentNotice(e instanceof Error ? e.message : 'Error al procesar el pago del certificado.');
        } finally {
            setPaymentProcessing(false);
        }
    };

    const handleCertificatePaymentSuccess = async () => {
        setWompiPolling(true);
        pollCountRef.current = 0;
        setStep('certificate');
        setPlanPendingResult(null);
        setShowTokenForm(false);
        setSelectedMethod(null);
        await refetch();
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
            setPaymentTransactionId(result.transactionId ?? null);
            if (result.reference) {
                savePendingPayment({
                    reference: result.reference,
                    transactionId: result.transactionId ?? null,
                    invoicesBefore: invoicesBeforePlanPayRef.current,
                });
            }
            if (result.applied) {
                clearPendingPayment();
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
        setShowTokenForm(false);
        setPaymentProcessing(true);
        setPaymentNotice(null);
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
            setPaymentTransactionId(result.transactionId ?? null);
            if (result.reference) {
                savePendingPayment({
                    reference: result.reference,
                    transactionId: result.transactionId ?? null,
                    invoicesBefore: invoicesBeforePlanPayRef.current,
                });
            }
            if (result.applied) {
                clearPendingPayment();
                setPaymentNotice('Paquete de facturas acreditado correctamente.');
                setSelectedPlan(null);
                setStep('overview');
                setPlanPendingResult(result);
                await refetch();
            } else {
                setPlanPendingResult(result);
                setWompiPolling(true);
                pollCountRef.current = 0;
                setPaymentNotice('Pago en proceso. Si ya se cobró, el cupo se actualizará en unos segundos.');
            }
        } catch (e: unknown) {
            setPlanPendingResult(null);
            setPaymentNotice(e instanceof Error ? e.message : 'Error al procesar el pago.');
        } finally {
            setPaymentProcessing(false);
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
                <PageTitle>Planes de facturación</PageTitle>
                <p className="text-sm text-muted-foreground">Cargando...</p>
            </Page>
        );
    }

    if (error) {
        return (
            <Page pageId="billing-plans">
                <PageTitle>Planes de facturación</PageTitle>
                <Card className="border-destructive/50">
                    <CardContent className="py-6 text-sm text-destructive">{String(error)}</CardContent>
                </Card>
            </Page>
        );
    }

    return (
        <Page pageId="billing-plans">
            <PageTitle>Planes de facturación</PageTitle>
            <PageLayout>
                {step !== 'plans' && (
                    <PageBlock column="main" blockId="header">
                        <Card className="min-w-0 overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-lg sm:text-xl">Estado de facturación electrónica</CardTitle>
                                <CardDescription className="break-words">
                                    Canal: {state?.channelCode ?? '?'} · Cupo restante: {state?.invoicesRemaining ?? 0} facturas
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="min-w-0 space-y-4">
                                <CertificateStatusSteps
                                    certificateStatus={state?.certificateStatus ?? 'NONE'}
                                    certificatePaymentStatus={state?.certificatePaymentStatus ?? 'UNPAID'}
                                    canBuyPlans={canBuyPlans}
                                    docsComplete={docsComplete}
                                    matiasProfileComplete={state?.matiasProfileComplete ?? false}
                                />
                                {paymentNotice && (
                                    <p className="text-sm rounded-md border bg-muted/50 p-3 break-words leading-relaxed">{paymentNotice}</p>
                                )}
                                <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                                    {badge && (
                                        <span className={`max-w-full rounded-full px-3 py-1.5 text-xs font-medium break-words text-center sm:text-left ${badge.className}`}>
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
                                {isRejected && rejectionNote ? (
                                    <BillingCertificateRejectionAlert
                                        note={rejectionNote}
                                        paymentAlreadyMade={certPaymentAlreadyMade}
                                    />
                                ) : null}
                                {isRejected && !rejectionNote ? (
                                    <p className="text-sm text-destructive rounded-md border border-destructive/30 bg-destructive/10 p-3">
                                        Tu certificado fue rechazado. Debes volver a subir los documentos y pulsar
                                        «Guardar documentos».
                                        {certPaymentAlreadyMade ? ' No necesitas pagar de nuevo.' : null}
                                    </p>
                                ) : null}
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
                                            {isRejected
                                                ? 'Certificado rechazado — corrige tus documentos'
                                                : needsRenewal
                                                  ? 'Renueva tu certificado'
                                                  : 'Primero adquiere tu certificado'}
                                        </CardTitle>
                                        <CardDescription>
                                            {isRejected
                                                ? certPaymentAlreadyMade
                                                    ? 'Corrige los documentos según el motivo del rechazo. No necesitas pagar de nuevo.'
                                                    : 'Corrige los documentos según el motivo del rechazo y vuelve a tramitar el certificado.'
                                                : `Para emitir facturas necesitas certificado activo. Debes subir: ${CERTIFICATE_DOCUMENTS_GUIDE.map((d) => d.label).join(', ')}; pagar el certificado anual ($${CERT_ANNUAL_PRICE_COP.toLocaleString('es-CO')}) y esperar validación del super admin.`}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {isRejected && rejectionNote ? (
                                            <BillingCertificateRejectionAlert
                                                note={rejectionNote}
                                                compact
                                                paymentAlreadyMade={certPaymentAlreadyMade}
                                            />
                                        ) : null}
                                        <Button className="w-full sm:w-auto" onClick={() => setStep('certificate')}>
                                            {isRejected ? 'Corregir documentos' : 'Iniciar certificado'}
                                        </Button>
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
                                            Tu certificado ya está aprobado. Configuraremos tu perfil para habilitar la compra de
                                            paquetes.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 text-sm">
                                        <p>
                                            Perfil Matias:{' '}
                                            {state?.matiasProfileComplete ? 'completo' : 'pendiente'}
                                        </p>
                                        <p>
                                            Company ID:{' '}
                                            {state?.matiasCompanyIdConfigured ? 'configurado' : 'pendiente'}
                                        </p>
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
                                        <Button className="w-full sm:w-auto" onClick={() => setStep('plans')}>Ver planes y comprar</Button>
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
                                    <CardContent className="min-w-0">
                                        <div className="overflow-x-auto -mx-2 px-2 sm:mx-0 sm:px-0">
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
                                        </div>
                                    </CardContent>
                                </Card>
                            </PageBlock>
                        )}
                    </>
                )}

                {step === 'certificate' && (
                    <PageBlock column="main" blockId="certificate-flow">
                        <Card className="min-w-0 overflow-hidden">
                            <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start">
                                <Button variant="ghost" size="icon" className="shrink-0 self-start" onClick={() => setStep('overview')}>
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                                <div className="min-w-0 flex-1">
                                    <CardTitle className="text-lg sm:text-xl">Certificado de facturación electrónica</CardTitle>
                                    <CardDescription className="break-words mt-1">
                                            {isRejected
                                                ? certPaymentAlreadyMade
                                                    ? 'Corrige los documentos indicados y guárdalos. Tu pago ya está confirmado.'
                                                    : 'Corrige los documentos indicados, guárdalos y completa el pago del certificado.'
                                                : 'Documentos obligatorios y pago anual. Tras el pago, se valida y activa el certificado.'}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="min-w-0 space-y-6">
                                {isRejected && rejectionNote ? (
                                    <BillingCertificateRejectionAlert
                                        note={rejectionNote}
                                        compact
                                        paymentAlreadyMade={certPaymentAlreadyMade}
                                    />
                                ) : null}
                                {needsRenewal && !isRejected && (
                                    <p className="text-sm text-amber-800 rounded-md border border-amber-500/30 bg-amber-500/10 p-3">
                                        Tu certificado está vencido. Vuelve a subir documentos, guardar y pagar el certificado anual.
                                    </p>
                                )}
                                {needsRenewal && isRejected && !rejectionNote && (
                                    <p className="text-sm text-amber-800 rounded-md border border-amber-500/30 bg-amber-500/10 p-3">
                                        Tu certificado fue rechazado. Vuelve a subir documentos y pulsa «Guardar documentos».
                                        {certPaymentAlreadyMade ? ' No necesitas pagar de nuevo.' : ' Luego completa el pago del certificado.'}
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
                                                Usa «Subir archivo» en cada campo (PDF, JPG o PNG). Luego pulsa «Guardar
                                                documentos»
                                                {rejectedResubmitWithoutPayment
                                                    ? '. Tu pago ya está confirmado; no necesitas pagar otra vez.'
                                                    : ' antes de pagar con Wompi.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                    {CERTIFICATE_DOCUMENTS_GUIDE.map((doc) => {
                                        const valueByKey = {
                                            chamber: chamberRef,
                                            rut: rutRef,
                                            nit: nitRef,
                                            dianResolution: dianResolutionRef,
                                            storeLogo: storeLogoRef,
                                        } as const;
                                        const setterByKey = {
                                            chamber: setChamberRef,
                                            rut: setRutRef,
                                            nit: setNitRef,
                                            dianResolution: setDianResolutionRef,
                                            storeLogo: setStoreLogoRef,
                                        } as const;
                                        return (
                                            <BillingCertificateDocField
                                                key={doc.key}
                                                label={doc.label}
                                                hint={doc.hint}
                                                assetId={valueByKey[doc.key]}
                                                onAssetIdChange={setterByKey[doc.key]}
                                                accept={doc.accept}
                                            />
                                        );
                                    })}
                                </div>

                                <div className="rounded-lg border bg-muted/40 p-4">
                                    {rejectedResubmitWithoutPayment ? (
                                        <>
                                            <p className="text-sm font-medium text-emerald-700">Pago del certificado confirmado</p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Ya pagaste el certificado anual. Solo debes corregir los documentos y guardarlos
                                                para volver a revisión.
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-sm font-medium">Certificado anual</p>
                                            <p className="text-2xl font-bold">${CERT_ANNUAL_PRICE_COP.toLocaleString('es-CO')} COP</p>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                                    <Button
                                        variant="outline"
                                        className="h-auto min-h-9 w-full whitespace-normal py-2 text-left sm:w-auto sm:text-center"
                                        onClick={() => submitCert.mutate()}
                                        disabled={submitCert.isPending || !docsComplete}
                                    >
                                        {rejectedResubmitWithoutPayment ? 'Guardar y reenviar a revisión' : 'Guardar documentos'}
                                    </Button>
                                    {!rejectedResubmitWithoutPayment ? (
                                        <Button
                                            className="h-auto min-h-9 w-full whitespace-normal py-2 sm:w-auto"
                                            onClick={startCertificatePaymentStep}
                                            disabled={
                                                !state?.channelCode ||
                                                !docsSavedOnServer ||
                                                state?.certificatePaymentStatus === 'PAID' ||
                                                wompiPolling
                                            }
                                            title={
                                                !docsSavedOnServer
                                                    ? 'Primero guarda todos los documentos y el logo'
                                                    : undefined
                                            }
                                        >
                                            <Wallet className="mr-2 h-4 w-4 shrink-0" />
                                            Pagar con Wompi
                                        </Button>
                                    ) : null}
                                </div>

                                {paymentRef?.startsWith('CERT') && (
                                    <p className="text-xs text-muted-foreground break-all">
                                        Referencia de pago: <span className="font-mono">{paymentRef}</span>
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </PageBlock>
                )}

                {step === 'certificate-payment' && (
                    <PageBlock column="main" blockId="certificate-payment">
                        {paymentNotice && (
                            <p className="text-sm rounded-md border bg-muted/50 p-3 mb-4 break-words leading-relaxed">{paymentNotice}</p>
                        )}
                        <InvoicePlanPaymentStep
                            plan={CERTIFICATE_PAYMENT_PLAN}
                            productKind="certificate"
                            paymentTab={paymentTab}
                            setPaymentTab={setPaymentTab}
                            selectedMethod={selectedMethod}
                            setSelectedMethod={setSelectedMethod}
                            onPay={handleCertificatePayment}
                            paymentProcessing={paymentProcessing}
                            showTokenForm={showTokenForm}
                            onCloseTokenForm={() => setShowTokenForm(false)}
                            onTokenReceived={handleCertificateTokenReceived}
                            pendingResult={planPendingResult}
                            onSuccess={handleCertificatePaymentSuccess}
                            onBack={() => {
                                setStep('certificate');
                                setPlanPendingResult(null);
                                setShowTokenForm(false);
                                setSelectedMethod(null);
                            }}
                        />
                    </PageBlock>
                )}

                {step === 'plans' && (
                    <PageBlock column="main" blockId="plans-grid">
                        <div className="mb-4 flex flex-col gap-3 min-w-0">
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setStep('overview')}>
                                    <ArrowLeft className="h-4 w-4" />
                                </Button>
                                <h2 className="text-base font-semibold sm:text-lg">Elige un paquete de facturas</h2>
                            </div>
                            <p className="text-sm text-muted-foreground break-words leading-relaxed">
                                El saldo se acumula. Puedes comprar otro paquete aunque tengas facturas restantes.
                            </p>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
                            <p className="text-sm rounded-md border bg-muted/50 p-3 mb-4 break-words leading-relaxed">{paymentNotice}</p>
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