import { useEffect, useState } from 'react';
import { Card, CardContent, Button, Spinner } from '@vendure/dashboard';
import { Plus, CreditCard } from 'lucide-react';
import { SavedPaymentCard } from './saved-payment-card';
import { AddPaymentMethodModal } from './add-payment-method-modal';
import {
    gql,
    MY_SAVED_PAYMENT_METHODS,
    DELETE_SAVED_PAYMENT_METHOD_FOR_SUBSCRIPTION,
    SET_DEFAULT_PAYMENT_METHOD_FOR_SUBSCRIPTION,
    USE_SAVED_PAYMENT_METHOD_FOR_SUBSCRIPTION,
    type SavedPaymentMethod,
} from '../graphql-queries';

interface SavedPaymentMethodsSectionProps {
    currentPaymentSourceId?: string | null;
    onSubscriptionUpdated?: () => void;
}

export function SavedPaymentMethodsSection({
    currentPaymentSourceId,
    onSubscriptionUpdated,
}: SavedPaymentMethodsSectionProps) {
    const [methods, setMethods] = useState<SavedPaymentMethod[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        loadMethods();
    }, []);

    async function loadMethods() {
        try {
            setIsLoading(true);
            const data = await gql<{ mySavedPaymentMethods: SavedPaymentMethod[] }>(
                MY_SAVED_PAYMENT_METHODS,
            );
            setMethods(data.mySavedPaymentMethods || []);
        } catch (error) {
            console.error('Error loading saved payment methods:', error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm('¿Eliminar este método de pago?')) return;

        try {
            await gql(DELETE_SAVED_PAYMENT_METHOD_FOR_SUBSCRIPTION, { id });
            setMethods(methods.filter((m) => m.id !== id));
        } catch (error) {
            console.error('Error deleting payment method:', error);
        }
    }

    async function handleSetDefault(id: string) {
        try {
            await gql(SET_DEFAULT_PAYMENT_METHOD_FOR_SUBSCRIPTION, { id });
            setMethods(methods.map((m) => ({ ...m, isDefault: m.id === id })));
        } catch (error) {
            console.error('Error setting default:', error);
        }
    }

    async function handleUseForSubscription(id: string) {
        if (!confirm('¿Usar este método de pago para la suscripción?')) return;

        try {
            await gql(USE_SAVED_PAYMENT_METHOD_FOR_SUBSCRIPTION, { paymentMethodId: id });
            onSubscriptionUpdated?.();
            alert('Método de pago actualizado para la suscripción');
        } catch (error) {
            console.error('Error using payment method:', error);
            alert('Error al actualizar el método de pago');
        }
    }

    function handleMethodAdded() {
        setShowAddModal(false);
        loadMethods();
    }

    if (isLoading) {
        return (
            <Card>
                <CardContent className="flex items-center justify-center py-8">
                    <Spinner />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold">Métodos de pago guardados</h3>
                        <p className="text-sm text-muted-foreground">
                            Gestiona tus tarjetas para pagos de suscripción
                        </p>
                    </div>
                    <Button size="sm" onClick={() => setShowAddModal(true)}>
                        <Plus className="w-4 h-4 mr-1" />
                        Agregar
                    </Button>
                </div>

                {methods.length === 0 ? (
                    <div className="text-center py-8">
                        <CreditCard className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                        <p className="text-muted-foreground">
                            No tienes métodos de pago guardados
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {methods.map((method) => (
                            <SavedPaymentCard
                                key={method.id}
                                method={method}
                                onDelete={handleDelete}
                                onSetDefault={handleSetDefault}
                                onUseForSubscription={handleUseForSubscription}
                                isCurrentMethod={currentPaymentSourceId === method.id}
                            />
                        ))}
                    </div>
                )}
            </CardContent>

            {showAddModal && (
                <AddPaymentMethodModal
                    onClose={() => setShowAddModal(false)}
                    onAdded={handleMethodAdded}
                />
            )}
        </Card>
    );
}
