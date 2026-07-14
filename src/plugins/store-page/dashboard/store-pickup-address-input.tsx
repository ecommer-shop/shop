import { Input, api } from '@vendure/dashboard';
import type { DashboardFormComponent } from '@vendure/dashboard';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
    GoogleMapPicker,
    MapPickerSelection,
} from '@/plugins/login/dashboard/components/GoogleMapPicker';

const GOOGLE_MAPS_SCRIPT_ID = 'ecommer-google-maps-places-script';

const LOGIN_CONFIG_QUERY = `
    query GetLoginConfigForPickupAddress {
        loginConfig {
            googleMapsApiKey
        }
    }
`;

function getPlaceAddressComponent(place: any, componentTypes: string[]): string | null {
    const components = place?.address_components;
    if (!Array.isArray(components)) {
        return null;
    }
    const match = components.find((component: any) =>
        componentTypes.some(type => component.types?.includes(type)),
    );
    return match?.long_name || null;
}

function getNeighborhood(place: any): string | null {
    return getPlaceAddressComponent(place, [
        'neighborhood',
        'sublocality_level_1',
        'sublocality',
        'locality',
    ]);
}

export const StorePickupAddressInput: DashboardFormComponent = ({
    value,
    onChange,
    onBlur,
    name,
    disabled,
    ref,
}) => {
    const { setValue, getValues } = useFormContext();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const autocompleteRef = useRef<any>(null);
    const [mapsReady, setMapsReady] = useState(false);
    const [isMapPickerOpen, setIsMapPickerOpen] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);

    const { data } = useQuery({
        queryKey: ['ecommer-login-config-maps-key'],
        queryFn: () => api.query(LOGIN_CONFIG_QUERY) as Promise<any>,
        staleTime: Infinity,
    });
    const googleMapsApiKey: string = data?.loginConfig?.googleMapsApiKey ?? '';

    const applySelection = useCallback(
        (selection: MapPickerSelection) => {
            onChange(selection.address);
            const options = { shouldDirty: true, shouldValidate: true };
            setValue('customFields.storePickupLatitude', selection.latitude, options);
            setValue('customFields.storePickupLongitude', selection.longitude, options);
            setValue('customFields.storePickupNeighborhood', selection.neighborhood ?? '', options);
            setValue('customFields.storePickupGooglePlaceId', selection.googlePlaceId ?? '', options);
        },
        [onChange, setValue],
    );

    const initializeAutocomplete = useCallback(() => {
        const maps = (window as any).google?.maps;
        if (!maps?.places || !inputRef.current || autocompleteRef.current) {
            if (maps?.places) {
                setMapsReady(true);
            }
            return;
        }

        autocompleteRef.current = new maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: 'co' },
            fields: ['address_components', 'formatted_address', 'geometry', 'name', 'place_id'],
            types: ['geocode', 'establishment'],
        });

        autocompleteRef.current.addListener('place_changed', () => {
            const place = autocompleteRef.current.getPlace();
            const location = place?.geometry?.location;
            const latitude = typeof location?.lat === 'function' ? location.lat() : null;
            const longitude = typeof location?.lng === 'function' ? location.lng() : null;
            const address = place?.formatted_address || place?.name;

            if (!address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
                return;
            }

            applySelection({
                address,
                latitude,
                longitude,
                neighborhood: getNeighborhood(place),
                googlePlaceId: place?.place_id || null,
            });
        });

        setMapsReady(true);
    }, [applySelection]);

    useEffect(() => {
        if (!googleMapsApiKey) {
            return;
        }

        if ((window as any).google?.maps?.places) {
            initializeAutocomplete();
            return;
        }

        let script = document.getElementById(GOOGLE_MAPS_SCRIPT_ID) as HTMLScriptElement | null;
        if (!script) {
            script = document.createElement('script');
            script.id = GOOGLE_MAPS_SCRIPT_ID;
            script.src =
                `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(googleMapsApiKey)}` +
                '&libraries=places&language=es&region=CO';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }

        script.addEventListener('load', initializeAutocomplete);
        script.addEventListener('error', () => {
            setLoadError('No se pudo cargar Google Maps. Revisa la API key configurada.');
        });

        return () => {
            script?.removeEventListener('load', initializeAutocomplete);
        };
    }, [googleMapsApiKey, initializeAutocomplete]);

    const toCoordinate = (raw: unknown) => {
        if (raw == null || raw === '') return null;
        const coordinate = Number(typeof raw === 'string' ? raw.replace(',', '.') : raw);
        return Number.isFinite(coordinate) ? coordinate : null;
    };
    const currentLatitude = toCoordinate(getValues('customFields.storePickupLatitude'));
    const currentLongitude = toCoordinate(getValues('customFields.storePickupLongitude'));
    const hasCoordinates =
        currentLatitude !== null &&
        currentLongitude !== null &&
        !(currentLatitude === 0 && currentLongitude === 0);

    return (
        <div className="flex flex-col gap-1.5">
            <Input
                ref={(element: HTMLInputElement | null) => {
                    inputRef.current = element;
                    if (typeof ref === 'function') {
                        ref(element);
                    }
                }}
                name={name}
                value={typeof value === 'string' ? value : ''}
                disabled={disabled}
                onBlur={onBlur}
                placeholder="Busca la dirección de tu tienda"
                onChange={event => onChange(event.target.value || null)}
            />
            {mapsReady && (
                <button
                    type="button"
                    onClick={() => setIsMapPickerOpen(true)}
                    disabled={disabled}
                    className="self-start text-xs font-medium text-primary underline underline-offset-2 hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    📍 Seleccionar ubicación en el mapa
                </button>
            )}
            {loadError && <p className="text-xs text-destructive">{loadError}</p>}
            {isMapPickerOpen && (
                <GoogleMapPicker
                    initialLatitude={hasCoordinates ? currentLatitude : undefined}
                    initialLongitude={hasCoordinates ? currentLongitude : undefined}
                    onLocationSelect={selection => {
                        applySelection(selection);
                        setIsMapPickerOpen(false);
                    }}
                    onClose={() => setIsMapPickerOpen(false)}
                />
            )}
        </div>
    );
};

StorePickupAddressInput.displayName = 'StorePickupAddressInput';
