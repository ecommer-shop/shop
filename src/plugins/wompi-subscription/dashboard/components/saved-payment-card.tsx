import { Button, Badge } from '@vendure/dashboard';
import { Trash2, Star, CreditCard } from 'lucide-react';
import type { SavedPaymentMethod } from '../graphql-queries';

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
            relative border-2 rounded-lg p-4 transition-all
            ${
                method.isDefault
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
            }
        `}
        >
            {method.isDefault && (
                <Badge variant="default" className="absolute top-2 right-2">
                    Predeterminada
                </Badge>
            )}

            {isCurrentMethod && (
                <Badge variant="success" className="absolute top-2 right-24">
                    En uso
                </Badge>
            )}

            <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-8 rounded bg-muted">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                </div>

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
                    <div className="text-xs text-muted-foreground">
                        Expira {method.expiryMonth}/{method.expiryYear}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
                {!method.isDefault && (
                    <Button size="sm" variant="outline" onClick={() => onSetDefault(method.id)}>
                        <Star className="w-3 h-3 mr-1" />
                        Predeterminar
                    </Button>
                )}

                {!isCurrentMethod && (
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onUseForSubscription(method.id)}
                    >
                        Usar para suscripción
                    </Button>
                )}

                <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(method.id)}
                    className="ml-auto"
                >
                    <Trash2 className="w-3 h-3" />
                </Button>
            </div>
        </div>
    );
}
