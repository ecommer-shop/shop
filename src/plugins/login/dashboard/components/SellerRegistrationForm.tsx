import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleLoginButton } from './GoogleLoginButton';
import { GoogleMapPicker, MapPickerSelection } from './GoogleMapPicker';

interface SellerRegistrationFormProps {
    clientId: string;
    googleMapsApiKey: string;
    onRegistered: (email: string, token: string) => void | Promise<void>;
    adminApiUrl: string;
}

type PickupAddressSelection = {
    address: string;
    latitude: number;
    longitude: number;
    neighborhood: string | null;
    googlePlaceId: string | null;
};

const GOOGLE_MAPS_SCRIPT_ID = 'ecommer-google-maps-places-script';

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

export function SellerRegistrationForm({
    clientId,
    googleMapsApiKey,
    onRegistered,
    adminApiUrl,
}: SellerRegistrationFormProps) {
    const [shopName, setShopName] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [pickupAddress, setPickupAddress] = useState('');
    const [pickupSelection, setPickupSelection] = useState<PickupAddressSelection | null>(null);
    const [mapsReady, setMapsReady] = useState(false);
    const [isMapPickerOpen, setIsMapPickerOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const pickupInputRef = useRef<HTMLInputElement | null>(null);
    const pickupMapContainerRef = useRef<HTMLDivElement | null>(null);
    const pickupMapRef = useRef<any>(null);
    const pickupMarkerRef = useRef<any>(null);
    const autocompleteRef = useRef<any>(null);

    const TERMS_URL = 'https://ecommer-stg-product-images.s3.us-east-2.amazonaws.com/TemsAndConds.pdf';
    const PRIVACY_URL = 'https://ecommer-stg-product-images.s3.us-east-2.amazonaws.com/politica_de_privacidad.pdf';

    const hasPickupCoordinates =
        pickupSelection !== null &&
        Number.isFinite(pickupSelection.latitude) &&
        Number.isFinite(pickupSelection.longitude);

    const canSubmit =
        shopName.trim().length > 0 &&
        acceptedTerms &&
        hasPickupCoordinates &&
        !loading;

    const initializeAutocomplete = useCallback(() => {
        const maps = (window as any).google?.maps;
        if (!maps?.places || !pickupInputRef.current || autocompleteRef.current) {
            return;
        }

        autocompleteRef.current = new maps.places.Autocomplete(pickupInputRef.current, {
            componentRestrictions: { country: 'co' },
            fields: ['address_components', 'formatted_address', 'geometry', 'name', 'place_id'],
            types: ['geocode', 'establishment'],
        });

        autocompleteRef.current.addListener('place_changed', () => {
            const place = autocompleteRef.current.getPlace();
            const location = place?.geometry?.location;
            const latitude = typeof location?.lat === 'function' ? location.lat() : null;
            const longitude = typeof location?.lng === 'function' ? location.lng() : null;
            const address = place?.formatted_address || place?.name || pickupAddress;

            if (!address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
                setPickupSelection(null);
                setError('Selecciona una dirección válida desde Google Maps.');
                return;
            }

            const selection = {
                address,
                latitude,
                longitude,
                neighborhood: getNeighborhood(place),
                googlePlaceId: place?.place_id || null,
            };

            setPickupAddress(address);
            setPickupSelection(selection);
            setError(null);
        });

        setMapsReady(true);
    }, [pickupAddress]);

    useEffect(() => {
        if (!googleMapsApiKey) {
            setMapsReady(false);
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
            setError('No se pudo cargar Google Maps. Revisa la API key configurada.');
        });

        return () => {
            script?.removeEventListener('load', initializeAutocomplete);
        };
    }, [googleMapsApiKey, initializeAutocomplete]);

    useEffect(() => {
        if (!hasPickupCoordinates || !pickupSelection) {
            pickupMarkerRef.current?.setMap?.(null);
            pickupMarkerRef.current = null;
            pickupMapRef.current = null;
            return;
        }

        const maps = (window as any).google?.maps;
        const container = pickupMapContainerRef.current;
        if (!maps || !container) {
            return;
        }

        const position = {
            lat: pickupSelection.latitude,
            lng: pickupSelection.longitude,
        };

        if (!pickupMapRef.current) {
            pickupMapRef.current = new maps.Map(container, {
                center: position,
                zoom: 17,
                clickableIcons: false,
                fullscreenControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                gestureHandling: 'cooperative',
            });
        } else {
            pickupMapRef.current.setCenter(position);
            pickupMapRef.current.setZoom(17);
        }

        pickupMarkerRef.current?.setMap?.(null);
        pickupMarkerRef.current = new maps.Marker({
            map: pickupMapRef.current,
            position,
            title: pickupSelection.address,
        });
    }, [hasPickupCoordinates, pickupSelection]);

    const handlePickupInputChange = (value: string) => {
        setPickupAddress(value);
        setPickupSelection(null);
        setError(null);
    };

    const handleMapPickerSelect = (selection: MapPickerSelection) => {
        setPickupAddress(selection.address);
        setPickupSelection(selection);
        setError(null);
        setIsMapPickerOpen(false);
    };

    const handleGoogleSuccess = async (idToken: string) => {
        if (!shopName.trim()) {
            setError('Ingresa el nombre de tu tienda antes de continuar');
            return;
        }

        if (!hasPickupCoordinates || !pickupSelection) {
            setError('Selecciona una dirección de recogida desde Google Maps para guardar sus coordenadas.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(adminApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    query: `
                        mutation RegisterSellerWithGoogle($input: RegisterSellerWithGoogleInput!) {
                            registerSellerWithGoogle(input: $input) {
                                success
                                email
                            }
                        }
                    `,
                    variables: {
                        input: {
                            token: idToken,
                            shopName: shopName.trim(),
                            pickupAddress: pickupSelection.address,
                            pickupLatitude: pickupSelection.latitude,
                            pickupLongitude: pickupSelection.longitude,
                            pickupNeighborhood: pickupSelection.neighborhood,
                            pickupGooglePlaceId: pickupSelection.googlePlaceId,
                        },
                    },
                }),
            });

            const result = await response.json();

            if (result.errors?.length) {
                const msg = result.errors[0]?.message || 'Error al registrar vendedor';
                setError(msg);
                return;
            }

            const data = result.data?.registerSellerWithGoogle;
            if (data?.success) {
                setSuccess(
                    `Registro exitoso. Se creó tu tienda "${shopName}" con el email ${data.email}. Iniciando sesión automáticamente...`,
                );
                
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                    event: 'seller_create_store',
                    seller_id: data.email,
                    plan_type: 'free'
                });

                await onRegistered(data.email, idToken);
            } else {
                setError('Error inesperado en el registro');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full py-4 flex flex-col gap-3">
            <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                    Registrarse como Vendedor
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                    Crea tu tienda en Ecommer. Tu nombre y email se obtienen de Google.
                </p>
            </div>

            {error && (
                <p className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                    {error}
                </p>
            )}
            {success && (
                <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                    {success}
                </p>
            )}

            {!success && (
                <>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="shopName"
                            className="text-sm font-medium text-foreground"
                        >
                            Nombre de tu tienda *
                        </label>
                        <input
                            id="shopName"
                            type="text"
                            value={shopName}
                            onChange={e => setShopName(e.target.value)}
                            placeholder="Ej: Mi Tienda Online"
                            disabled={loading}
                            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="pickupAddress"
                            className="text-sm font-medium text-foreground"
                        >
                            Dirección de recogida *
                        </label>
                        <input
                            ref={pickupInputRef}
                            id="pickupAddress"
                            type="text"
                            value={pickupAddress}
                            onChange={e => handlePickupInputChange(e.target.value)}
                            placeholder="Busca la dirección de tu tienda"
                            disabled={loading || !googleMapsApiKey}
                            className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        {mapsReady && (
                            <button
                                type="button"
                                onClick={() => setIsMapPickerOpen(true)}
                                disabled={loading}
                                className="self-start text-xs font-medium text-primary underline underline-offset-2 hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                📍 Seleccionar ubicación en el mapa
                            </button>
                        )}
                        {!googleMapsApiKey && (
                            <p className="text-xs text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2">
                                Configura GOOGLE_MAPS_API_KEY o NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el backend para seleccionar direcciones.
                            </p>
                        )}
                        {googleMapsApiKey && !mapsReady && (
                            <p className="text-xs text-muted-foreground">
                                Cargando buscador de Google Maps...
                            </p>
                        )}
                        {hasPickupCoordinates && pickupSelection && (
                            <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
                                <p className="font-medium">Dirección seleccionada desde Google Maps</p>
                                <p className="mt-1 text-xs text-green-900">
                                    {pickupSelection.address}
                                </p>
                                <p className="mt-1 text-xs">
                                    {pickupSelection.neighborhood && (
                                        <span>Barrio: {pickupSelection.neighborhood}. </span>
                                    )}
                                    Coordenadas: {pickupSelection.latitude.toFixed(6)}, {pickupSelection.longitude.toFixed(6)}
                                </p>
                                <div
                                    ref={pickupMapContainerRef}
                                    className="mt-3 h-40 w-full overflow-hidden rounded-md border border-green-200 bg-white"
                                    aria-label="Mapa de la dirección de recogida"
                                />
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${pickupSelection.latitude},${pickupSelection.longitude}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex text-xs font-medium text-green-700 underline underline-offset-2 hover:text-green-900"
                                >
                                    Ver en Google Maps
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="flex items-start gap-2 mt-1">
                        <input
                            id="acceptTerms"
                            type="checkbox"
                            checked={acceptedTerms}
                            onChange={e => setAcceptedTerms(e.target.checked)}
                            disabled={loading}
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border border-input accent-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <label htmlFor="acceptTerms" className="text-xs text-muted-foreground leading-snug cursor-pointer select-none">
                            He leído y acepto los{' '}
                            <a
                                href={TERMS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-primary/80"
                            >
                                Términos y Condiciones
                            </a>{' '}
                            y la{' '}
                            <a
                                href={PRIVACY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-primary/80"
                            >
                                Política de Privacidad
                            </a>
                            , y confirmo que soy mayor de edad.
                        </label>
                    </div>

                    <div className="flex justify-center mt-1">
                        <GoogleLoginButton
                            clientId={clientId}
                            onSuccess={handleGoogleSuccess}
                            onError={msg => setError(msg)}
                            text="signup_with"
                            disabled={!canSubmit}
                        />
                    </div>

                    {loading && (
                        <p className="text-sm text-muted-foreground text-center mt-1">
                            Registrando vendedor...
                        </p>
                    )}

                    {isMapPickerOpen && (
                        <GoogleMapPicker
                            initialLatitude={pickupSelection?.latitude}
                            initialLongitude={pickupSelection?.longitude}
                            onLocationSelect={handleMapPickerSelect}
                            onClose={() => setIsMapPickerOpen(false)}
                        />
                    )}
                </>
            )}
        </div>
    );
}
