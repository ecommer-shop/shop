import { Input } from '@vendure/dashboard';
import type { DashboardFormComponent } from '@vendure/dashboard';
import { useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

function toCoordinate(value: unknown) {
    if (value == null || value === '') return null;
    const normalized = typeof value === 'string' ? value.replace(',', '.') : value;
    const coordinate = Number(normalized);
    return Number.isFinite(coordinate) ? coordinate : null;
}

function firstString(...values: unknown[]) {
    const value = values.find(item => typeof item === 'string' && item.trim().length > 0);
    return typeof value === 'string' ? value : null;
}

export const StorePickupMapPreviewInput: DashboardFormComponent = ({
    value,
    onChange,
    onBlur,
    name,
    disabled,
    ref,
}) => {
    const { control } = useFormContext();
    const formValues = useWatch({ control }) as Record<string, any> | undefined;
    const customFields = formValues?.customFields ?? {};
    const latitude = toCoordinate(customFields.storePickupLatitude ?? formValues?.storePickupLatitude);
    const longitude = toCoordinate(customFields.storePickupLongitude ?? formValues?.storePickupLongitude);
    const pickupAddress = firstString(customFields.storePickupAddress, formValues?.storePickupAddress);
    const hasCoordinates = latitude !== null && longitude !== null && !(latitude === 0 && longitude === 0);

    const mapUrl = useMemo(() => {
        if (!hasCoordinates) return null;
        const query = `${latitude},${longitude}`;
        return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
    }, [hasCoordinates, latitude, longitude]);

    const mapsLink = hasCoordinates
        ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        : null;

    return (
        <div className="flex flex-col gap-3">
            <Input
                ref={ref}
                name={name}
                value={typeof value === 'string' ? value : ''}
                disabled={disabled}
                onBlur={onBlur}
                onChange={event => onChange(event.target.value || null)}
            />

            {hasCoordinates && mapUrl && mapsLink ? (
                <div className="rounded-md border border-green-200 bg-green-50 px-3 py-3 text-sm text-green-800">
                    <p className="font-medium">Mapa de la direccion de recogida</p>
                    {pickupAddress && <p className="mt-1 text-xs text-green-900">{pickupAddress}</p>}
                    <p className="mt-1 text-xs">
                        Coordenadas: {latitude.toFixed(6)}, {longitude.toFixed(6)}
                    </p>
                    <iframe
                        title="Mapa de la direccion de recogida"
                        src={mapUrl}
                        className="mt-3 h-52 w-full rounded-md border border-green-200 bg-white"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-xs font-medium text-green-700 underline underline-offset-2 hover:text-green-900"
                    >
                        Ver en Google Maps
                    </a>
                </div>
            ) : null}
        </div>
    );
};

StorePickupMapPreviewInput.displayName = 'StorePickupMapPreviewInput';
