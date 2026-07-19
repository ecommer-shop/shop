import { Button } from '@vendure/dashboard';
import { CheckCircle2, Loader2, Smartphone } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PAYMENT_METHODS } from './graphql-queries';

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

// ─── Tokenization Form (router) ─────────────────────────────────

const WOMPI_TOKEN_POLL_INTERVAL = 2000;
const WOMPI_TOKEN_MAX_ATTEMPTS = 30;

export interface CardDetails {
    lastFour?: string;
    brand?: string;
    expiryMonth?: string;
    expiryYear?: string;
    cardHolderName?: string;
}

export function WompiTokenizationForm({
    paymentMethod,
    onToken,
    onBack,
}: {
    paymentMethod: string;
    onToken: (token: string, sessionId?: string, deviceId?: string, cardDetails?: CardDetails) => void;
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
                <Loader2 className="h-4 w-4 animate-spin" />
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

// ─── CARD Token Form ────────────────────────────────────────────

function detectBrandLocal(number: string): string {
    const n = number.replace(/\s/g, '');
    if (/^4/.test(n)) return 'Visa';
    if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return 'Mastercard';
    if (/^3[47]/.test(n)) return 'American Express';
    if (/^6(?:011|5)/.test(n)) return 'Discover';
    if (/^3(?:0[0-5]|[68])/.test(n)) return 'Diners Club';
    return '';
}

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
            setTimeout(() => onToken(
                res.data.id,
                wompiEnv.sessionId,
                wompiEnv.deviceId,
                {
                    lastFour: number.replace(/\s/g, '').slice(-4),
                    brand: detectBrandLocal(number) || 'Card',
                    expiryMonth,
                    expiryYear,
                    cardHolderName: cardHolder,
                },
            ), 500);
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
                    {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Tokenizando...</> : 'Tokenizar tarjeta'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}

// ─── NEQUI Token Form ───────────────────────────────────────────

function NequiTokenForm({
    wompiEnv,
    onToken,
    onBack,
}: {
    wompiEnv: { sessionId: string; deviceId: string };
    onToken: (token: string, sessionId?: string, deviceId?: string, cardDetails?: CardDetails) => void;
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
                        const cleanPhone = phone.replace(/\D/g, '');
                        setTimeout(() => onToken(
                            statusRes.data.id,
                            wompiEnv.sessionId,
                            wompiEnv.deviceId,
                            { lastFour: cleanPhone.slice(-4), brand: 'Nequi', cardHolderName: cleanPhone },
                        ), 500);
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
                <Loader2 className="h-4 w-4 animate-spin" />
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
                    {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Tokenizando...</> : 'Tokenizar con Nequi'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}

// ─── DAVIPLATA Token Form ───────────────────────────────────────

function DaviplataTokenForm({
    wompiEnv,
    onToken,
    onBack,
}: {
    wompiEnv: { sessionId: string; deviceId: string };
    onToken: (token: string, sessionId?: string, deviceId?: string, cardDetails?: CardDetails) => void;
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
                        const cleanPhone = phone.replace(/\D/g, '');
                        setTimeout(() => onToken(
                            statusRes.data.id,
                            wompiEnv.sessionId,
                            wompiEnv.deviceId,
                            { lastFour: cleanPhone.slice(-4), brand: 'Daviplata', cardHolderName: cleanPhone },
                        ), 500);
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
                        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Verificando...</> : 'Verificar OTP'}
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
                    {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Tokenizando...</> : 'Tokenizar con Daviplata'}
                </Button>
                <Button variant="ghost" size="sm" onClick={onBack} disabled={loading}>Volver</Button>
            </div>
        </div>
    );
}
