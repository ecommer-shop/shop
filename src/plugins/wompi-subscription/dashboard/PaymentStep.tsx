import { useState, useEffect } from 'react';
import { Button, Card, CardContent, Tabs, TabsList, TabsTrigger, Spinner } from '@vendure/dashboard';
import { ExternalLink } from 'lucide-react';
import { Plan, PAYMENT_METHODS, isRecurrent, isManual } from './graphql-queries';
import { WompiTokenizationForm } from './WompiPaymentWidget';

export function PaymentStep({
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
    plan: Plan;
    paymentTab: string;
    setPaymentTab: (tab: string) => void;
    selectedMethod: string | null;
    setSelectedMethod: (method: string | null) => void;
    onPay: () => void;
    paymentProcessing: boolean;
    showTokenForm: boolean;
    onCloseTokenForm: () => void;
    onTokenReceived: (token: string, sessionId?: string, deviceId?: string, cardDetails?: { lastFour?: string; brand?: string; expiryMonth?: string; expiryYear?: string; cardHolderName?: string }) => void;
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
