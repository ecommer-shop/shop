import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Tabs, TabsList, TabsTrigger } from '@vendure/dashboard';
import { ExternalLink, Loader2 } from 'lucide-react';
import { WompiTokenizationForm } from '../../wompi-subscription/dashboard/WompiPaymentWidget';
import type { InvoicePlanCardPlan } from './components/invoice-plan-card';
import { PAYMENT_METHODS, isManual, isRecurrent } from './invoice-plan-payment-queries';

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
}) {
    if (pendingResult?.applied) {
        return (
            <Card>
                <CardContent className="text-center py-10 space-y-4">
                    <h3 className="text-lg font-semibold">Pago confirmado</h3>
                    <p className="text-sm text-muted-foreground">
                        El paquete de facturas ya fue acreditado a tu tienda.
                    </p>
                    <Button variant="default" onClick={onSuccess}>
                        Volver a planes
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
                        Serás redirigido para finalizar el pago del paquete {plan.name}.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        <Button variant="default" onClick={() => window.open(pendingResult.asyncPaymentUrl!, '_blank')}>
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
                        Escanea el QR con tu app bancaria. Al aprobarse, las facturas se acreditan solas.
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
                            Pagar paquete: {plan.name}
                        </h3>
                        <p className="text-2xl font-bold mt-1">
                            ${plan.priceCop.toLocaleString('es-CO')} COP
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {plan.invoices} facturas en el paquete
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

    return (
        <Card>
            <CardContent className="py-6 space-y-6">
                <div>
                    <h3 className="text-lg font-semibold">Pago: {plan.name}</h3>
                    <p className="text-2xl font-bold mt-1">
                        ${plan.priceCop.toLocaleString('es-CO')} COP
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {plan.invoices} facturas — pago único (no es suscripción)
                    </p>
                </div>

                <Tabs value={paymentTab} onValueChange={(v) => { setPaymentTab(v); setSelectedMethod(null); }}>
                    <TabsList>
                        <TabsTrigger value="token">Tarjeta / Nequi / Daviplata</TabsTrigger>
                        <TabsTrigger value="manual">PSE / QR / otros</TabsTrigger>
                    </TabsList>
                </Tabs>

                {paymentTab === 'token' && (
                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-primary">Pago inmediato con tokenización</p>
                            <p className="text-muted-foreground">
                                Tokenizas tu método de pago de forma segura con Wompi y se cobra el paquete al instante.
                            </p>
                        </CardContent>
                    </Card>
                )}

                {paymentTab === 'manual' && (
                    <Card className="border-warning/30 bg-warning/5">
                        <CardContent className="py-3 text-sm space-y-1">
                            <p className="font-medium text-warning-foreground">Pago manual</p>
                            <p className="text-muted-foreground">
                                Completa el pago en el banco o app indicada. Al aprobarse, el cupo de facturas se suma automáticamente.
                            </p>
                        </CardContent>
                    </Card>
                )}

                <div className="grid grid-cols-2 gap-2">
                    {(paymentTab === 'token'
                        ? PAYMENT_METHODS.filter((m) => m.flow === 'recurrent')
                        : PAYMENT_METHODS.filter((m) => m.flow === 'manual')
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
                                <span
                                    className={`text-[10px] leading-tight ${selectedMethod === method.type ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                                >
                                    {method.description}
                                </span>
                            </div>
                        </Button>
                    ))}
                </div>

                {selectedMethod && isRecurrent(selectedMethod) && (
                    <Button variant="default" onClick={onPay} disabled={paymentProcessing}>
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
                    <Button variant="default" onClick={onPay} disabled={paymentProcessing}>
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

                <Button variant="ghost" size="sm" onClick={onBack} disabled={paymentProcessing}>
                    Cancelar
                </Button>
            </CardContent>
        </Card>
    );
}
