import { useState, useRef } from 'react';
import { Button, Spinner } from '@vendure/dashboard';
import { X, CheckCircle2, CreditCard, Smartphone } from 'lucide-react';
import { gql, SAVE_PAYMENT_METHOD_FOR_SUBSCRIPTION } from '../graphql-queries';

interface AddPaymentMethodModalProps {
    onClose: () => void;
    onAdded: () => void;
}

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
            Authorization: `Bearer ${publicKey}`,
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || json.error || 'Error en Wompi');
    return json;
}

function detectBrand(number: string): string {
    const n = number.replace(/\s/g, '');
    if (/^4/.test(n)) return 'Visa';
    if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return 'Mastercard';
    if (/^3[47]/.test(n)) return 'American Express';
    if (/^6(?:011|5)/.test(n)) return 'Discover';
    if (/^3(?:0[0-5]|[68])/.test(n)) return 'Diners Club';
    return 'Card';
}

const WOMPI_TOKEN_POLL_INTERVAL = 2000;
const WOMPI_TOKEN_MAX_ATTEMPTS = 30;

export function AddPaymentMethodModal({ onClose, onAdded }: AddPaymentMethodModalProps) {
    const [tab, setTab] = useState<'CARD' | 'NEQUI' | 'DAVIPLATA'>('CARD');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-background border border-border rounded-lg shadow-lg w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Agregar método de pago</h2>
                    <Button size="sm" variant="ghost" onClick={onClose}>
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {/* Method tabs */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setTab('CARD')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            tab === 'CARD'
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <CreditCard className="w-4 h-4" />
                        Tarjeta
                    </button>
                    <button
                        onClick={() => setTab('NEQUI')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            tab === 'NEQUI'
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <Smartphone className="w-4 h-4" />
                        Nequi
                    </button>
                    <button
                        onClick={() => setTab('DAVIPLATA')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            tab === 'DAVIPLATA'
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <Smartphone className="w-4 h-4" />
                        Daviplata
                    </button>
                </div>

                {tab === 'CARD' && <CardForm onAdded={onAdded} onClose={onClose} />}
                {tab === 'NEQUI' && <NequiForm onAdded={onAdded} onClose={onClose} />}
                {tab === 'DAVIPLATA' && <DaviplataForm onAdded={onAdded} onClose={onClose} />}
            </div>
        </div>
    );
}

function CardForm({ onAdded, onClose }: { onAdded: () => void; onClose: () => void }) {
    const [number, setNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [done, setDone] = useState(false);

    async function handleSubmit() {
        if (number.replace(/\s/g, '').length < 13) { setError('Número de tarjeta inválido'); return; }
        if (!expMonth || !expYear) { setError('Fecha de expiración inválida'); return; }
        if (!cvc || cvc.length < 3) { setError('CVC inválido'); return; }
        if (!cardHolder) { setError('Nombre del titular requerido'); return; }

        setIsSaving(true);
        setError(null);

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

            const token: string = res.data.id;
            const lastFour = number.replace(/\s/g, '').slice(-4);
            const brand = detectBrand(number);

            await gql(SAVE_PAYMENT_METHOD_FOR_SUBSCRIPTION, {
                token,
                type: 'CARD',
                lastFour,
                brand,
                expiryMonth: expMonth,
                expiryYear: expYear,
                cardHolderName: cardHolder,
            });

            setDone(true);
            setTimeout(() => onAdded(), 800);
        } catch (err: any) {
            setError(err.message || 'Error al guardar');
        } finally {
            setIsSaving(false);
        }
    }

    if (done) {
        return (
            <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Tarjeta guardada</h3>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {error && <div className="p-3 bg-destructive/10 border border-destructive/50 rounded text-sm text-destructive">{error}</div>}
            <input type="text" value={number} onChange={(e) => { setNumber(e.target.value); setError(null); }} placeholder="Número de tarjeta" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving} maxLength={19} />
            <div className="grid grid-cols-3 gap-2">
                <input type="text" value={expMonth} onChange={(e) => { setExpMonth(e.target.value); setError(null); }} placeholder="Mes (MM)" className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving} maxLength={2} />
                <input type="text" value={expYear} onChange={(e) => { setExpYear(e.target.value); setError(null); }} placeholder="Año (YY)" className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving} maxLength={2} />
                <input type="text" value={cvc} onChange={(e) => { setCvc(e.target.value); setError(null); }} placeholder="CVC" className="px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving} maxLength={4} />
            </div>
            <input type="text" value={cardHolder} onChange={(e) => { setCardHolder(e.target.value); setError(null); }} placeholder="Nombre del titular" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving} />
            <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={onClose} disabled={isSaving}>Cancelar</Button>
                <Button variant="default" onClick={handleSubmit} disabled={isSaving}>{isSaving ? <><Spinner /> Guardando...</> : 'Guardar'}</Button>
            </div>
        </div>
    );
}

function NequiForm({ onAdded, onClose }: { onAdded: () => void; onClose: () => void }) {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState<'idle' | 'tokenizing' | 'waiting' | 'done' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const handleStart = async () => {
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 7) { setErrorMsg('Ingresa un número válido'); return; }

        setStatus('tokenizing');
        setIsSaving(true);
        setErrorMsg(null);

        try {
            const res = await wompiFetch('/v1/tokens/nequi', {
                method: 'POST',
                body: JSON.stringify({ phone_number: cleanPhone }),
            });

            const tokenId: string = res.data.id;
            setStatus('waiting');

            let attempts = 0;
            const poll = setInterval(async () => {
                attempts++;
                try {
                    const statusRes = await wompiFetch(`/v1/tokens/nequi/${tokenId}`);
                    if (statusRes.data.status === 'APPROVED') {
                        clearInterval(poll);
                        const lastFour = cleanPhone.slice(-4);
                        await gql(SAVE_PAYMENT_METHOD_FOR_SUBSCRIPTION, {
                            token: statusRes.data.id,
                            type: 'NEQUI',
                            lastFour,
                            brand: 'Nequi',
                            expiryMonth: '',
                            expiryYear: '',
                            cardHolderName: cleanPhone,
                        });
                        setStatus('done');
                        setTimeout(() => onAdded(), 800);
                    } else if (statusRes.data.status === 'DECLINED' || statusRes.data.status === 'ERROR') {
                        clearInterval(poll);
                        setStatus('error');
                        setErrorMsg('Fue rechazado en Nequi');
                    }
                } catch { }
                if (attempts >= WOMPI_TOKEN_MAX_ATTEMPTS) {
                    clearInterval(poll);
                    setStatus('error');
                    setErrorMsg('Tiempo de espera agotado');
                }
            }, WOMPI_TOKEN_POLL_INTERVAL);

            pollRef.current = poll;
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err.message || 'Error al conectar con Nequi');
        } finally {
            setIsSaving(false);
        }
    };

    if (status === 'done') {
        return (
            <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Nequi guardado</h3>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Recibirás una notificación en la app de Nequi para confirmar.</p>
            {errorMsg && <div className="p-3 bg-destructive/10 border border-destructive/50 rounded text-sm text-destructive">{errorMsg}</div>}
            <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); setErrorMsg(null); }} placeholder="Teléfono Nequi" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" disabled={isSaving || status === 'waiting'} maxLength={10} />
            {status === 'waiting' && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Esperando confirmación...</div>
            )}
            <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={onClose} disabled={isSaving}>Cancelar</Button>
                <Button variant="default" onClick={handleStart} disabled={isSaving || status === 'waiting'}>{isSaving ? <><Spinner /> Procesando...</> : 'Tokenizar con Nequi'}</Button>
            </div>
        </div>
    );
}

function DaviplataForm({ onAdded, onClose }: { onAdded: () => void; onClose: () => void }) {
    const [docType, setDocType] = useState('CC');
    const [docNumber, setDocNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState<'form' | 'tokenizing' | 'otp' | 'waiting' | 'done' | 'error'>('form');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const tokenIdRef = useRef<string | null>(null);
    const otpValidateUrlRef = useRef<string | null>(null);
    const authTokenRef = useRef<string | null>(null);

    const handleTokenize = async () => {
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 7) { setErrorMsg('Ingresa un teléfono válido'); return; }

        setStep('tokenizing');
        setIsSaving(true);
        setErrorMsg(null);

        try {
            const res = await wompiFetch('/v1/tokens/daviplata', {
                method: 'POST',
                body: JSON.stringify({
                    type_document: docType,
                    number_document: docNumber,
                    product_number: cleanPhone,
                }),
            });

            const d = res.data;
            tokenIdRef.current = d.id;
            authTokenRef.current = d.url_services.token;
            otpValidateUrlRef.current = d.url_services.code_otp_validate;

            await fetch(d.url_services.code_otp_send, {
                method: 'POST',
                headers: { Authorization: `Bearer ${d.url_services.token}` },
            });

            setStep('otp');
        } catch (err: any) {
            setStep('error');
            setErrorMsg(err.message || 'Error al conectar con Daviplata');
        } finally {
            setIsSaving(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (otp.length < 4) { setErrorMsg('Ingresa el código OTP'); return; }

        setStep('waiting');
        setIsSaving(true);
        setErrorMsg(null);

        try {
            await fetch(otpValidateUrlRef.current!, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authTokenRef.current}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: otp }),
            });

            let attempts = 0;
            const poll = setInterval(async () => {
                attempts++;
                try {
                    const statusRes = await wompiFetch(`/v1/tokens/daviplata/${tokenIdRef.current}`);
                    if (statusRes.data.status === 'APPROVED') {
                        clearInterval(poll);
                        const cleanPhone = phone.replace(/\D/g, '');
                        const lastFour = cleanPhone.slice(-4);
                        await gql(SAVE_PAYMENT_METHOD_FOR_SUBSCRIPTION, {
                            token: statusRes.data.id,
                            type: 'DAVIPLATA',
                            lastFour,
                            brand: 'Daviplata',
                            expiryMonth: '',
                            expiryYear: '',
                            cardHolderName: cleanPhone,
                        });
                        setStep('done');
                        setTimeout(() => onAdded(), 800);
                    } else if (statusRes.data.status === 'DECLINED' || statusRes.data.status === 'ERROR') {
                        clearInterval(poll);
                        setStep('error');
                        setErrorMsg('Verificación rechazada');
                    }
                } catch { }
                if (attempts >= WOMPI_TOKEN_MAX_ATTEMPTS) {
                    clearInterval(poll);
                    setStep('error');
                    setErrorMsg('Tiempo de espera agotado');
                }
            }, WOMPI_TOKEN_POLL_INTERVAL);
        } catch (err: any) {
            setStep('error');
            setErrorMsg(err.message || 'Error al verificar OTP');
        } finally {
            setIsSaving(false);
        }
    };

    if (step === 'done') {
        return (
            <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="h-12 w-12 mx-auto text-success" />
                <h3 className="font-semibold">Daviplata guardado</h3>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {errorMsg && <div className="p-3 bg-destructive/10 border border-destructive/50 rounded text-sm text-destructive">{errorMsg}</div>}

            {step === 'form' && (
                <>
                    <p className="text-sm text-muted-foreground">Recibirás un código OTP por SMS para confirmar.</p>
                    <select value={docType} onChange={(e) => setDocType(e.target.value)} className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="CC">Cédula de Ciudadanía</option>
                        <option value="CE">Cédula de Extranjería</option>
                        <option value="NIT">NIT</option>
                        <option value="PP">Pasaporte</option>
                    </select>
                    <input type="text" value={docNumber} onChange={(e) => setDocNumber(e.target.value.replace(/\D/g, ''))} placeholder="Número de documento" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" maxLength={12} />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} placeholder="Teléfono Daviplata" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" maxLength={10} />
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={onClose}>Cancelar</Button>
                        <Button variant="default" onClick={handleTokenize} disabled={isSaving}>{isSaving ? <><Spinner /> Procesando...</> : 'Tokenizar'}</Button>
                    </div>
                </>
            )}

            {step === 'otp' && (
                <>
                    <p className="text-sm text-muted-foreground">Ingresa el código OTP enviado a tu celular.</p>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="Código OTP" className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary text-center text-lg tracking-widest" maxLength={6} />
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={() => setStep('form')} disabled={isSaving}>Volver</Button>
                        <Button variant="default" onClick={handleVerifyOtp} disabled={isSaving}>{isSaving ? <><Spinner /> Verificando...</> : 'Verificar OTP'}</Button>
                    </div>
                </>
            )}

            {step === 'waiting' && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Spinner /> Verificando código...</div>
            )}
        </div>
    );
}