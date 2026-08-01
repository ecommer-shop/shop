import { AlertTriangle } from 'lucide-react';

export function BillingCertificateRejectionAlert({
    note,
    compact = false,
    paymentAlreadyMade = true,
}: {
    note: string;
    compact?: boolean;
    /** Si ya pagó el certificado, no debe volver a pagar al corregir documentos. */
    paymentAlreadyMade?: boolean;
}) {
    return (
        <div
            className={`min-w-0 rounded-md border border-destructive/40 bg-destructive/10 text-destructive ${
                compact ? 'p-3 space-y-2' : 'p-4 space-y-3'
            }`}
        >
            <div className="flex items-start gap-2 min-w-0">
                <AlertTriangle className={`${compact ? 'h-4 w-4' : 'h-5 w-5'} shrink-0 mt-0.5`} />
                <div className="min-w-0 flex-1 space-y-2">
                    <p className={`${compact ? 'text-sm' : 'text-base'} font-semibold`}>
                        Documentos rechazados por el super admin
                    </p>
                    <p className={`${compact ? 'text-xs' : 'text-sm'} text-destructive/90 break-words`}>
                        Debes corregir y volver a subir los documentos (Cámara, RUT, NIT, Resolución DIAN y logo de la
                        tienda) y
                        pulsar «Guardar documentos».
                        {paymentAlreadyMade
                            ? ' Tu pago ya está confirmado: no necesitas pagar de nuevo.'
                            : ' Luego deberás completar el pago del certificado.'}
                    </p>
                    <div className={`rounded-md border border-destructive/20 bg-background/80 ${compact ? 'p-2' : 'p-3'}`}>
                        <p className={`${compact ? 'text-[10px]' : 'text-xs'} font-medium uppercase tracking-wide text-muted-foreground mb-1`}>
                            Motivo del rechazo
                        </p>
                        <p className={`${compact ? 'text-xs' : 'text-sm'} whitespace-pre-wrap text-foreground`}>{note}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
