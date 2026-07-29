import React from 'react';
import {
    api,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Page,
    PageBlock,
    PageLayout,
    PageTitle,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Tabs,
    TabsList,
    TabsTrigger,
} from '@vendure/dashboard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    GET_MY_PAYOUT_INFO,
    GET_MY_PAYOUT_BATCHES,
    SAVE_MY_PAYOUT_INFO,
} from '../graphql-queries';

const BANKS: Record<string, { name: string; help: string }> = {
    '001': { name: 'Bancolombia', help: 'Ingresa tu numero de cuenta de ahorros o corriente Bancolombia.' },
    '051': { name: 'Davivienda / Daviplata', help: 'Para Daviplata ingresa tu celular registrado. Para cuenta Davivienda ingresa el numero de cuenta.' },
    '507': { name: 'Nequi', help: 'Ingresa tu numero de celular registrado en Nequi. El dinero llega automaticamente.' },
    '013': { name: 'BBVA', help: 'Ingresa tu numero de cuenta BBVA.' },
    '002': { name: 'Banco Popular', help: 'Ingresa tu numero de cuenta del Banco Popular.' },
    '003': { name: 'Banco de Bogota', help: 'Ingresa tu numero de cuenta de Banco de Bogota.' },
};

const DOC_TYPES: Record<string, string> = {
    CC: 'Cedula de Ciudadania (CC)',
    NIT: 'NIT',
    CE: 'Cedula de Extranjeria (CE)',
};

const ACCOUNT_TYPES: Record<string, string> = {
    AHORROS: 'Ahorros',
    CORRIENTE: 'Corriente',
};

const BREB_TYPES: Record<string, string> = {
    ALPHANUMERIC: 'Alfanumerica (@alias)',
    MAIL: 'Email',
    PHONE: 'Telefono',
};

const fmt = (v: number) => `$${(v / 100).toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;
const fd = (d: string) => new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });

export function PayoutSettingsPage() {
    const queryClient = useQueryClient();

    const { data: infoData, isLoading: infoLoading } = useQuery({
        queryKey: ['myPayoutInfo'],
        queryFn: () => api.query<{ myPayoutInfo: any }>(GET_MY_PAYOUT_INFO),
    });

    const { data: batchesData } = useQuery({
        queryKey: ['myPayoutBatches'],
        queryFn: () => api.query<{ myPayoutBatches: any[] }>(GET_MY_PAYOUT_BATCHES),
    });

    const info = infoData?.myPayoutInfo;
    const batches = batchesData?.myPayoutBatches ?? [];

    const saveMutation = useMutation({
        mutationFn: (input: any) => api.mutate(SAVE_MY_PAYOUT_INFO, { input }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['myPayoutInfo'] });
        },
    });

    const [legalIdType, setLegalIdType] = React.useState('');
    const [legalId, setLegalId] = React.useState('');
    const [accountType, setAccountType] = React.useState('');
    const [accountNumber, setAccountNumber] = React.useState('');
    const [bankCode, setBankCode] = React.useState('');
    const [brebKey, setBrebKey] = React.useState('');
    const [brebKeyType, setBrebKeyType] = React.useState('');

    React.useEffect(() => {
        if (info) {
            setLegalIdType(info.legalIdType || '');
            setLegalId(info.legalId || '');
            setAccountType(info.accountType || '');
            setAccountNumber(info.accountNumber || '');
            setBankCode(info.bankCode || '');
            setBrebKey(info.brebKey || '');
            setBrebKeyType(info.brebKeyType || '');
        }
    }, [info]);

    const [activeTab, setActiveTab] = React.useState('settings');

    const handleSave = () => {
        saveMutation.mutate({
            legalIdType: legalIdType || null,
            legalId: legalId || null,
            accountType: accountType || null,
            accountNumber: accountNumber || null,
            bankCode: bankCode || null,
            brebKey: brebKey || null,
            brebKeyType: brebKeyType || null,
        });
    };

    const isPhoneField = bankCode === '507' || bankCode === '051';

    if (infoLoading) {
        return (
            <Page pageId="payout-settings">
                <PageTitle><span>Liquidaciones - Configurar pago</span></PageTitle>
            </Page>
        );
    }

    return (
        <Page pageId="payout-settings">
            <PageTitle><span>Liquidaciones - Configurar pago</span></PageTitle>
            <PageLayout>
                <PageBlock column="main">

                    {/* Banner explicativo */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm mb-6">
                        <p className="font-semibold text-blue-800 dark:text-blue-200">Como recibiras tus pagos</p>
                        <p className="text-blue-700 dark:text-blue-300 mt-1">
                            Cada 15 dias te transferimos el dinero de tus ventas realizadas. Elige como quieres recibirlo:
                        </p>
                        <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                            <li><strong>Cuenta bancaria</strong> — Recibe en Bancolombia, Davivienda, BBVA y otros bancos.</li>
                            <li><strong>Nequi</strong> — Recibe directo en tu Nequi. Solo necesitas tu celular.</li>
                            <li><strong>Llave BRE-B</strong> — Recibe sin dar datos bancarios, usando tu email, telefono o alias.</li>
                        </ul>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList>
                            <TabsTrigger value="settings">Configurar pago</TabsTrigger>
                            <TabsTrigger value="history">Historial de pagos</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    {activeTab === 'settings' && (
                        <Card>
                            <CardHeader><CardTitle>Donde recibir tu dinero</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {saveMutation.isError && (
                                    <div className="text-red-500 text-sm">{(saveMutation.error as any)?.message}</div>
                                )}
                                {saveMutation.isSuccess && (
                                    <div className="text-green-600 text-sm">Datos guardados exitosamente</div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label>Tipo de documento</Label>
                                        <Select value={legalIdType} onValueChange={setLegalIdType}>
                                            <SelectTrigger><SelectValue placeholder="Seleccionar...">{legalIdType ? DOC_TYPES[legalIdType] || legalIdType : undefined}</SelectValue></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CC">Cedula de Ciudadania (CC)</SelectItem>
                                                <SelectItem value="NIT">NIT</SelectItem>
                                                <SelectItem value="CE">Cedula de Extranjeria (CE)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-1">
                                        <Label>Numero de documento</Label>
                                        <Input value={legalId} onChange={e => setLegalId(e.target.value)} placeholder="1234567890" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Label>Banco</Label>
                                    <Select value={bankCode} onValueChange={setBankCode}>
                                        <SelectTrigger><SelectValue placeholder="Selecciona tu banco...">{bankCode ? (BANKS[bankCode]?.name || bankCode) : undefined}</SelectValue></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="001">Bancolombia - Cuenta de ahorros o corriente</SelectItem>
                                            <SelectItem value="051">Davivienda / Daviplata - Celular o cuenta</SelectItem>
                                            <SelectItem value="507">Nequi - Solo numero de celular</SelectItem>
                                            <SelectItem value="013">BBVA - Cuenta bancaria</SelectItem>
                                            <SelectItem value="002">Banco Popular - Cuenta bancaria</SelectItem>
                                            <SelectItem value="003">Banco de Bogota - Cuenta bancaria</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label>{isPhoneField ? 'Celular registrado' : 'Tipo de cuenta'}</Label>
                                        {!isPhoneField ? (
                                            <Select value={accountType} onValueChange={setAccountType}>
                                                <SelectTrigger><SelectValue placeholder="Seleccionar...">{accountType ? ACCOUNT_TYPES[accountType] || accountType : undefined}</SelectValue></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="AHORROS">Ahorros</SelectItem>
                                                    <SelectItem value="CORRIENTE">Corriente</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input value={isPhoneField ? accountNumber : ''} disabled placeholder="No aplica" />
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <Label>{isPhoneField ? 'Celular registrado' : 'Numero de cuenta'}</Label>
                                        <Input
                                            value={accountNumber}
                                            onChange={e => setAccountNumber(e.target.value)}
                                            placeholder={isPhoneField ? '3001234567' : 'Numero de cuenta bancaria'}
                                        />
                                        {bankCode && BANKS[bankCode] && (
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {BANKS[bankCode].help}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t pt-4 mt-4">
                                    <p className="text-sm font-medium mb-2">Alternativa: Llave BRE-B</p>
                                    <p className="text-xs text-muted-foreground mb-3">
                                        La llave BRE-B te permite recibir pagos sin compartir datos bancarios. Solo necesitas una llave asociada a tu cuenta bancaria (email, telefono o alias).
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <Label>Llave BRE-B</Label>
                                            <Input value={brebKey} onChange={e => setBrebKey(e.target.value)} placeholder="@alias, email o telefono" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label>Tipo de llave</Label>
                                            <Select value={brebKeyType} onValueChange={setBrebKeyType}>
                                                <SelectTrigger><SelectValue placeholder="Seleccionar...">{brebKeyType ? BREB_TYPES[brebKeyType] || brebKeyType : undefined}</SelectValue></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ALPHANUMERIC">Alfanumerica (@alias)</SelectItem>
                                                    <SelectItem value="MAIL">Email</SelectItem>
                                                    <SelectItem value="PHONE">Telefono</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <Button variant="default" onClick={handleSave} disabled={saveMutation.isPending}>
                                    {saveMutation.isPending ? 'Guardando...' : 'Guardar datos de pago'}
                                </Button>

                                {info?.brebVerified && (
                                    <p className="text-sm text-green-600">Llave BRE-B verificada</p>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === 'history' && (
                        <Card>
                            <CardHeader><CardTitle>Historial de pagos</CardTitle></CardHeader>
                            <CardContent>
                                {batches.length === 0 ? (
                                    <p className="text-muted-foreground">No hay pagos registrados todavia.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {batches.map((b: any) => (
                                            <div key={b.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                                <div>
                                                    <p className="font-medium">{b.reference}</p>
                                                    <p className="text-sm text-muted-foreground">{fd(b.periodStart)} — {fd(b.periodEnd)}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold">{fmt(b.totalAmount)}</p>
                                                    <p className="text-sm text-muted-foreground">{b.paidAt ? fd(b.paidAt) : b.status}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </PageBlock>
            </PageLayout>
        </Page>
    );
}
