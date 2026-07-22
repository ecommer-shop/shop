import { Button, Badge } from '@vendure/dashboard';
import { Trash2, Star } from 'lucide-react';
import type { SavedPaymentMethod } from '../graphql-queries';

function PaymentMethodIcon({ brand, type }: { brand: string; type: string }) {
    const b = brand.toLowerCase();
    if (b === 'nequi') {
        return (
            <div className="flex items-center justify-center w-10 h-7 rounded overflow-hidden bg-white">
                <svg viewBox="0 0 95 30" preserveAspectRatio="xMidYMid meet" className="w-full h-full" fill="none">
                    <path d="M5.38.86H1.45a.83.83 0 0 0-.83.83v3.34c0 .458.372.83.83.83h3.93a.83.83 0 0 0 .83-.83V1.69a.83.83 0 0 0-.83-.83" fill="#CA0080"/>
                    <path d="M29.4.86h-3.39c-.46 0-.83.38-.83.83v13.55c0 .28-.36.38-.49.13L16.81 1.22a.71.71 0 0 0-.64-.36h-5.64c-.46 0-.83.38-.83.83v21.65c0 .46.38.83.83.83h3.39c.46 0 .83-.38.83-.83V9.38c0-.28.36-.38.49-.13l8.1 14.57c.13.23.36.36.64.36h5.39c.46 0 .83-.38.83-.83V1.68c0-.46-.38-.83-.83-.83h.03zm8.29 12.55c.49-2.19 1.77-3.16 3.7-3.16 1.72 0 3.2 1 3.41 3.16zm12.1 2.31c0-6.1-3.97-9.13-8.33-9.13-5.67 0-8.9 3.93-8.9 9.23 0 6.03 4.06 8.9 8.77 8.9s7.46-2.43 8.2-5.59c.1-.41-.13-.77-.74-.77h-2.67c-.3 0-.57.16-.7.46-.67 1.46-1.74 2.23-3.8 2.23-2.33 0-3.9-1.46-4.13-4.43h11.46c.49 0 .83-.36.83-.9zm43.58-8.7h-3.4a.83.83 0 0 0-.83.83v15.5c0 .458.372.83.83.83h3.4a.83.83 0 0 0 .83-.83V7.85a.83.83 0 0 0-.83-.83M60.36 20.85c-2.23 0-3.8-1.64-3.8-5.16s1.57-5.36 3.8-5.36 3.8 1.7 3.8 5.36-1.57 5.16-3.8 5.16m7.72-13.83h-3.39c-.46 0-.83.38-.83.83v.84c-1.01-1.19-2.68-2.01-4.87-2.01-4.9 0-7.49 4.43-7.49 9.13 0 4.1 2.13 8.7 7.39 8.7 1.88 0 3.88-.9 4.97-2.17v6.67c0 .46.38.83.83.83h3.39c.46 0 .83-.38.83-.83V7.88c0-.46-.38-.83-.83-.83z" fill="#200020"/>
                </svg>
            </div>
        );
    }
    if (b === 'daviplata') {
        return <div className="flex items-center justify-center w-10 h-7 rounded bg-[#D32F2F] text-white font-bold text-[8px] leading-none overflow-hidden">DAVI</div>;
    }
    if (b === 'mastercard') {
        return (
            <div className="flex items-center justify-center w-10 h-7 rounded overflow-hidden bg-white">
                <svg viewBox="0 0 50 30" className="w-7 h-4">
                    <circle cx="15" cy="15" r="12" fill="#EB001B" opacity="0.9"/>
                    <circle cx="35" cy="15" r="12" fill="#F79E1B" opacity="0.85"/>
                </svg>
            </div>
        );
    }
    if (b === 'visa') {
        return <div className="flex items-center justify-center w-10 h-7 rounded bg-[#1A1F71] text-white font-bold text-[9px] leading-none overflow-hidden">VISA</div>;
    }
    return <div className="flex items-center justify-center w-10 h-7 rounded bg-gray-200 text-[9px] font-semibold text-gray-500 uppercase overflow-hidden">{brand.substring(0, 4)}</div>;
}

interface SavedPaymentCardProps {
    method: SavedPaymentMethod;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
    onUseForSubscription: (id: string) => void;
    isCurrentMethod?: boolean;
}

export function SavedPaymentCard({
    method,
    onDelete,
    onSetDefault,
    onUseForSubscription,
    isCurrentMethod,
}: SavedPaymentCardProps) {
    return (
        <div
            className={`
            relative border-2 rounded-lg p-3 md:p-4 transition-all
            ${
                method.isDefault
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
            }
        `}
        >
            <div className="flex flex-wrap gap-2 items-start justify-end mb-1">
                {method.isDefault && (
                    <Badge variant="default">Default</Badge>
                )}
                {isCurrentMethod && (
                    <Badge variant="success">En uso</Badge>
                )}
            </div>

            <div className="flex items-start gap-3 mb-3">
                <PaymentMethodIcon brand={method.brand} type={method.type} />

                <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{method.brand}</div>
                    <div className="font-mono text-sm text-muted-foreground">
                        •••• {method.lastFour}
                    </div>
                    {method.cardHolderName && (
                        <div className="text-xs text-muted-foreground truncate mt-1">
                            {method.cardHolderName}
                        </div>
                    )}
                    {method.type === 'CARD' && method.expiryMonth && (
                        <div className="text-xs text-muted-foreground">
                            Expira {method.expiryMonth}/{method.expiryYear}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border">
                {!method.isDefault && (
                    <Button size="sm" variant="outline" onClick={() => onSetDefault(method.id)}>
                        <Star className="w-3 h-3 mr-1" />
                        Default
                    </Button>
                )}

                {!isCurrentMethod && (
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onUseForSubscription(method.id)}
                    >
                        Usar
                    </Button>
                )}

                <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(method.id)}
                    className="ml-auto sm:ml-auto"
                >
                    <Trash2 className="w-3 h-3" />
                </Button>
            </div>
        </div>
    );
}
