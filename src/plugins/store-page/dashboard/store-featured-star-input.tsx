import { api, Button } from '@vendure/dashboard';
import type { DashboardFormComponent } from '@vendure/dashboard';
import { useMutation } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { useFormContext, useWatch } from 'react-hook-form';
import { toast } from 'sonner';

const SET_PRODUCT_STORE_FEATURED = `
    mutation SetProductStoreFeatured($productId: ID!, $featured: Boolean!) {
        setProductStoreFeatured(productId: $productId, featured: $featured) {
            id
            customFields {
                storeFeatured
            }
        }
    }
`;

export const StoreFeaturedStarInput: DashboardFormComponent = ({ value, onChange, disabled }) => {
    const { control } = useFormContext();
    const productId = useWatch({ control, name: 'id' });
    const featured = Boolean(value);

    const mutation = useMutation({
        mutationFn: async (next: boolean) => {
            const res = (await api.mutate(SET_PRODUCT_STORE_FEATURED, {
                productId,
                featured: next,
            })) as {
                setProductStoreFeatured: { id: string; customFields: { storeFeatured: boolean | null } };
            };
            return res.setProductStoreFeatured;
        },
        onSuccess: data => {
            onChange(Boolean(data.customFields?.storeFeatured));
            toast.success(data.customFields?.storeFeatured ? 'Marcado como destacado' : 'Destacado desactivado');
        },
        onError: (err: Error) => {
            toast.error(err.message || 'No se pudo actualizar el destacado');
        },
    });

    if (!productId || productId === 'new') {
        return <p className="text-sm text-muted-foreground">Guarda el producto primero para poder destacarlo.</p>;
    }

    const label = 'Destacado en mi tienda';

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <Button
                    type="button"
                    variant={featured ? 'default' : 'outline'}
                    size="icon"
                    className={featured ? 'text-amber-400' : undefined}
                    disabled={disabled || mutation.isPending}
                    onClick={() => mutation.mutate(!featured)}
                    aria-pressed={featured}
                    aria-label={featured ? 'Quitar destacado' : 'Destacar en tienda'}
                >
                    <Star className={featured ? 'h-5 w-5 fill-current' : 'h-5 w-5'} />
                </Button>
                <span className="text-sm font-medium">{label}</span>
            </div>
            <p className="text-xs text-muted-foreground">
                Máximo 3 productos destacados por tienda. Aparecen primero en la página pública de tu tienda.
            </p>
        </div>
    );
};

StoreFeaturedStarInput.displayName = 'StoreFeaturedStarInput';
