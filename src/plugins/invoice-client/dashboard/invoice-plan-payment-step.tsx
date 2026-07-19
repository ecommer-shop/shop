import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Tabs, TabsList, TabsTrigger } from '@vendure/dashboard';
import { ExternalLink, Loader2 } from 'lucide-react';
import { WompiTokenizationForm } from '../../wompi-subscription/dashboard/WompiPaymentWidget';
import { CONTRACT_CONTENT } from '../../wompi-subscription/contract-constants';
import type { InvoicePlanCardPlan } from './components/invoice-plan-card';
import { PAYMENT_METHODS, isManual, isRecurrent } from './invoice-plan-payment-queries';

const TOKENIZABLE_PAYMENT_METHODS = new Set(['CARD', 'NEQUI', 'DAVIPLATA']);

export function InvoicePlanPaymentStep({
    plan,
    paymentTab,
    setPaymentTab,
    selectedMethod,
    setSelectedMethod,
    onPay,
    paymentProcessing,
    showTokenForm,
    onCloseTokenForm,
    onTokenReceived,
    pendingResult,
    onSuccess,
    onBack,
    productKind = 'invoice-plan',
}: {
    plan: InvoicePlanCardPlan;
    paymentTab: string;
    setPaymentTab: (tab: string) => void;
    selectedMethod: string | null;
    setSelectedMethod: (method: string | null) => void;
    onPay: () => void;
    paymentProcessing: boolean;
    showTokenForm: boolean;
    onCloseTokenForm: () => void;
    onTokenReceived: (token: string, sessionId?: string, deviceId?: string) => void;
    pendingResult: { asyncPaymentUrl?: string | null; qrImage?: string | null; applied?: boolean } | null;
    onSuccess: () => void;
    onBack: () => void;
    productKind?: 'invoice-plan' | 'certificate';
}) {
    const isCertificate = productKind === 'certificate';
    const detailLine =
        plan.detailLine ??
        (isCertificate
            ? 'Pago único anual del certificado'
            : `${plan.invoices} facturas — pago único (no es suscripción)`);

    if (pendingResult?.applied) {
        return (
            <Card>
                <CardContent className="text-center py-10 space-y-4">
                    <h3 className="text-lg font-semibold">Pago confirmado</h3>
                    <p className="text-sm text-muted-foreground">
                        {isCertificate
                            ? 'El pago del certificado quedó registrado. Tu trámite pasa a revisión.'
                            : 'El paquete de facturas ya fue acreditado a tu tienda.'}
                    </p>
                    <Button variant="default" className="w-full sm:w-auto" onClick={onSuccess}>
                        {isCertificate ? 'Volver al certificado' : 'Volver a planes'}
                    </Button>
                </CardContent>
            </Card>
        );
    }

    if (pendingResult?.asyncPaymentUrl) {
        return (
            <Card>
                <CardContent className="text-center py-10 space-y-4">
                    <ExternalLink className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="text-lg font-semibold">Completa el pago</h3>
                    <p className="text-sm text-muted-foreground">
                        Serás redirigido para finalizar el pago de {plan.name}.
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                        <Button variant="default" className="w-full sm:w-auto" onClick={() => window.open(pendingResult.asyncPaymentUrl!, '_blank')}>
                            Ir a pagar
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto" onClick={onSuccess}>
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
                        {isCertificate
                            ? 'Escanea el QR con tu app bancaria. Al aprobarse, el certificado queda en revisión.'
                            : 'Escanea el QR con tu app bancaria. Al aprobarse, las facturas se acreditan solas.'}
                    </p>
                    <Button variant="outline" className="w-full sm:w-auto" onClick={onSuccess}>
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
                            Pagar: {plan.name}
                        </h3>
                        <p className="text-2xl font-bold mt-1">
                            ${plan.priceCop.toLocaleString('es-CO')} COP
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {detailLine}
                        </p>
                    </div>
                    <WompiTokenizationForm
                        paymentMethod={selectedMethod}
                        onToken={onTokenReceived}
                        onBack={() => {
                            setFormVisible(false);
                            onCloseTokenForm();
                        }}
                    />
                </CardContent>
            </Card>
        );
    }

    return <InvoicePlanPaymentForm
        plan={plan}
        detailLine={detailLine}
        paymentTab={paymentTab}
        setPaymentTab={setPaymentTab}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        onPay={onPay}
        paymentProcessing={paymentProcessing}
        onBack={onBack}
        isCertificate={isCertificate}
    />;
}

// ─── Main payment form with Clickwrap Agreement ───────────────────

function InvoicePlanPaymentForm({
    plan,
    detailLine,
    paymentTab,
    setPaymentTab,
    selectedMethod,
    setSelectedMethod,
    onPay,
    paymentProcessing,
    onBack,
    isCertificate,
}: {
    plan: InvoicePlanCardPlan;
    detailLine: string;
    paymentTab: string;
    setPaymentTab: (tab: string) => void;
    selectedMethod: string | null;
    setSelectedMethod: (method: string | null) => void;
    onPay: () => void;
    paymentProcessing: boolean;
    onBack: () => void;
    isCertificate: boolean;
}) {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showFullContract, setShowFullContract] = useState(false);

    const handleAcceptChange = (checked: boolean) => {
        setTermsAccepted(checked);
    };

    const handlePay = () => {
        if (!termsAccepted) return;
        onPay();
    };

    return (
        <Card className="min-w-0 overflow-hidden">
            <CardContent className="min-w-0 py-6 space-y-6">
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold break-words">Pago: {plan.name}</h3>
                    <p className="text-2xl font-bold mt-1">
                        ${plan.priceCop.toLocaleString('es-CO')} COP
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {detailLine}
                    </p>
                </div>

                <Tabs value={paymentTab} onValueChange={(v) => { setPaymentTab(v); setSelectedMethod(null); }}>
                    <TabsList className="flex h-auto w-full flex-col gap-1 sm:flex-row sm:h-9">
                        <TabsTrigger value="token" className="w-full whitespace-normal py-2 text-center sm:w-auto sm:py-1">
                            Tarjeta / Nequi / Daviplata
                        </TabsTrigger>
                        <TabsTrigger value="manual" className="w-full whitespace-normal py-2 text-center sm:w-auto sm:py-1">
                            PSE / QR / otros
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                {paymentTab === 'token' && (
                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-primary">Pago inmediato con tokenización</p>
                            <p className="text-muted-foreground">
                                {isCertificate
                                    ? 'Tokenizas tu método de pago de forma segura con Wompi y se cobra el certificado al instante.'
                                    : 'Tokenizas tu método de pago de forma segura con Wompi y se cobra el paquete al instante.'}
                            </p>
                        </CardContent>
                    </Card>
                )}

                {paymentTab === 'manual' && (
                    <Card className="border-warning/30 bg-warning/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-warning-foreground">Pago manual</p>
                            <p className="text-muted-foreground">
                                {isCertificate
                                    ? 'Completa el pago en el banco o app indicada. Al aprobarse, el certificado pasa a revisión.'
                                    : 'Completa el pago en el banco o app indicada. Al aprobarse, el cupo de facturas se suma automáticamente.'}
                            </p>
                        </CardContent>
                    </Card>
                )}

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {(paymentTab === 'token'
                        ? PAYMENT_METHODS.filter((m) => TOKENIZABLE_PAYMENT_METHODS.has(m.type))
                        : PAYMENT_METHODS.filter((m) => m.flow === 'manual')
                    ).map((method) => (
                        <Button
                            key={method.type}
                            variant={selectedMethod === method.type ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedMethod(method.type)}
                            className="h-auto min-h-10 w-full justify-start whitespace-normal py-2 text-left"
                        >
                            <div className="flex min-w-0 flex-col items-start gap-0.5">
                                <span className="break-words">{method.label}</span>
                                <span
                                    className={`text-[10px] leading-snug break-words ${selectedMethod === method.type ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                                >
                                    {method.description}
                                </span>
                            </div>
                        </Button>
                    ))}
                </div>

                {/* ── Clickwrap Agreement ── */}
                <div className="min-w-0 rounded-lg border border-border bg-muted/30 overflow-hidden">
                    <div className="flex flex-col gap-2 border-b border-border bg-muted/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-semibold break-words">
                            Contrato de compra — Certificado de Facturación
                        </span>
                        <button
                            type="button"
                            onClick={() => setShowFullContract(!showFullContract)}
                            className="text-xs text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
                        >
                            {showFullContract ? 'Ocultar contrato' : 'Ver contrato completo'}
                        </button>
                    </div>

                    {showFullContract && (
                        <div
                            className="px-4 py-4 max-h-64 overflow-y-auto"
                            style={{ scrollbarWidth: 'thin' }}
                        >
                            <pre
                                className="text-xs text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed"
                            >
                                {CONTRACT_CONTENT}
                            </pre>
                        </div>
                    )}

                    <div className="px-4 py-3 flex items-start gap-3">
                        <input
                            id="invoice-plan-terms-checkbox"
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => handleAcceptChange(e.target.checked)}
                            disabled={paymentProcessing}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-primary cursor-pointer"
                        />
                        <label
                            htmlFor="invoice-plan-terms-checkbox"
                            className="min-w-0 flex-1 text-sm leading-snug cursor-pointer select-none break-words"
                        >
                            He leído y acepto íntegramente los{' '}
                            <button
                                type="button"
                                onClick={() => setShowFullContract(true)}
                                className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
                            >
                                términos y condiciones del contrato de compra
                            </button>
                            {' '}del Certificado de Facturación ECOMMER S.A.S. Esta aceptación tiene plena validez jurídica conforme a la{' '}
                            <span className="font-medium">Ley 527 de 1999</span>.
                        </label>
                    </div>

                    {!termsAccepted && selectedMethod && (
                        <p className="px-4 pb-3 text-xs text-amber-700 dark:text-amber-400">
                            Debes aceptar el contrato para continuar con el pago.
                        </p>
                    )}
                </div>

                {selectedMethod && isRecurrent(selectedMethod) && (
                    <Button
                        variant="default"
                        className="h-auto min-h-10 w-full whitespace-normal py-2 sm:w-auto"
                        onClick={handlePay}
                        disabled={paymentProcessing || !termsAccepted}
                        title={!termsAccepted ? 'Acepta los términos y condiciones para continuar' : undefined}
                    >
                        {paymentProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Procesando...
                            </>
                        ) : (
                            `Pagar con ${PAYMENT_METHODS.find((m) => m.type === selectedMethod)?.label}`
                        )}
                    </Button>
                )}

                {selectedMethod && isManual(selectedMethod) && (
                    <Button
                        variant="default"
                        className="h-auto min-h-10 w-full whitespace-normal py-2 sm:w-auto"
                        onClick={handlePay}
                        disabled={paymentProcessing || !termsAccepted}
                        title={!termsAccepted ? 'Acepta los términos y condiciones para continuar' : undefined}
                    >
                        {paymentProcessing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Procesando...
                            </>
                        ) : (
                            `Continuar con ${PAYMENT_METHODS.find((m) => m.type === selectedMethod)?.label}`
                        )}
                    </Button>
                )}

                <Button variant="ghost" size="sm" className="w-full sm:w-auto" onClick={onBack} disabled={paymentProcessing}>
                    Cancelar
                </Button>
            </CardContent>
        </Card>
    );
}
