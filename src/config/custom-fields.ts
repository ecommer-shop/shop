import type { VendureConfig } from '@vendure/core';
import { Asset, LanguageCode } from '@vendure/core';

/**
 * Custom fields para ProductVariant (peso y dimensiones).
 * Si cambias esto recuerda generar migración de DB.
 */
export const customFields: VendureConfig['customFields'] = {
  Address: [
    {
      name: 'latitude',
      type: 'float',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Latitude' },
        { languageCode: LanguageCode.es, value: 'Latitud' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Google Maps latitude for delivery calculations',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Latitud de Google Maps para calculos de domicilio',
        },
      ],
    },
    {
      name: 'longitude',
      type: 'float',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Longitude' },
        { languageCode: LanguageCode.es, value: 'Longitud' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Google Maps longitude for delivery calculations',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Longitud de Google Maps para calculos de domicilio',
        },
      ],
    },
    {
      name: 'neighborhood',
      type: 'string',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Neighborhood' },
        { languageCode: LanguageCode.es, value: 'Barrio' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Neighborhood detected from Google Maps address components',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Barrio detectado desde los componentes de dirección de Google Maps',
        },
      ],
    },
    {
      name: 'googlePlaceId',
      type: 'string',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Google Place ID' },
        { languageCode: LanguageCode.es, value: 'ID de lugar de Google' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Google Maps place identifier for the selected delivery address',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Identificador de Google Maps para la dirección de entrega seleccionada',
        },
      ],
    },
  ],
  Administrator: [
    {
      name: 'storeDescription',
      type: 'text',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Store description' },
        { languageCode: LanguageCode.es, value: 'Descripción de la tienda' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Public description shown on the seller store page',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Descripción pública mostrada en la página de la tienda',
        },
      ],
    },
    {
      name: 'storeBannerUrl',
      type: 'relation',
      entity: Asset,
      nullable: true,
      public: true,
      eager: true,
      ui: { component: 'ecommer-store-banner-asset-picker', fullWidth: true },
      label: [
        { languageCode: LanguageCode.en, value: 'Store banner' },
        { languageCode: LanguageCode.es, value: 'Banner de la tienda' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Banner image for the public store page (Admin profile)',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Imagen de banner para la tienda pública (perfil de administrador)',
        },
      ],
    },
    {
      name: 'storePickupAddress',
      type: 'string',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Pickup address' },
        { languageCode: LanguageCode.es, value: 'Dirección de recogida' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Store pickup address used as delivery origin',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Dirección de la tienda usada como origen del domicilio',
        },
      ],
    },
    {
      name: 'storePickupLatitude',
      type: 'float',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Pickup latitude' },
        { languageCode: LanguageCode.es, value: 'Latitud de recogida' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Store pickup latitude used as delivery origin',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Latitud de la tienda usada como origen del domicilio',
        },
      ],
    },
    {
      name: 'storePickupLongitude',
      type: 'float',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Pickup longitude' },
        { languageCode: LanguageCode.es, value: 'Longitud de recogida' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Store pickup longitude used as delivery origin',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Longitud de la tienda usada como origen del domicilio',
        },
      ],
    },
    {
      name: 'storePickupNeighborhood',
      type: 'string',
      nullable: true,
      public: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Pickup neighborhood' },
        { languageCode: LanguageCode.es, value: 'Barrio de recogida' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Store pickup neighborhood used as delivery origin',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Barrio de la tienda usado como origen del domicilio',
        },
      ],
    },
    {
      name: 'storePickupGooglePlaceId',
      type: 'string',
      nullable: true,
      public: true,
      ui: { component: 'ecommer-store-pickup-map-preview', fullWidth: true },
      label: [
        { languageCode: LanguageCode.en, value: 'Pickup Google Place ID' },
        { languageCode: LanguageCode.es, value: 'ID de Google de recogida' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Google Maps place identifier for the store pickup address',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Identificador de Google Maps para la dirección de recogida de la tienda',
        },
      ],
    },
  ],
  Customer: [
    {
      name: 'acceptedTermsAndPrivacy',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.en, value: 'Accepted Terms & Privacy Policy' },
        { languageCode: LanguageCode.es, value: 'Aceptó Términos y Política de Privacidad' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Whether the customer accepted the terms and conditions and privacy policy at registration',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Si el cliente aceptó los términos y condiciones y la política de privacidad al registrarse',
        },
      ],
    },
    {
      name: 'confirmedLegalAge',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.en, value: 'Confirmed Legal Age' },
        { languageCode: LanguageCode.es, value: 'Confirmó ser mayor de edad' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Whether the customer confirmed being of legal age at registration',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Si el cliente confirmó ser mayor de edad al registrarse',
        },
      ],
    },
    {
      name: 'clerkId',
      type: 'string',
      nullable: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Clerk User ID' },
        { languageCode: LanguageCode.es, value: 'ID de usuario en Clerk' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'The Clerk external user identifier linked to this customer',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Identificador externo de Clerk vinculado a este cliente',
        },
      ],
    },
  ],
  Seller: [
    {
      name: 'acceptedTermsAndPrivacy',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.en, value: 'Accepted Terms & Privacy Policy' },
        { languageCode: LanguageCode.es, value: 'Aceptó Términos y Política de Privacidad' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Whether the seller accepted the terms and conditions and privacy policy at registration',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Si el vendedor aceptó los términos y condiciones y la política de privacidad al registrarse',
        },
      ],
    },
    {
      name: 'confirmedLegalAge',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.en, value: 'Confirmed Legal Age' },
        { languageCode: LanguageCode.es, value: 'Confirmó ser mayor de edad' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Whether the seller confirmed being of legal age at registration',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Si el vendedor confirmó ser mayor de edad al registrarse',
        },
      ],
    },
  ],
  Product: [
    {
      name: 'storeFeatured',
      type: 'boolean',
      defaultValue: false,
      public: true,
      label: [
        { languageCode: LanguageCode.es, value: 'Destacado en mi tienda' },
        { languageCode: LanguageCode.en, value: 'Featured in my store' },
      ],
      description: [
        {
            languageCode: LanguageCode.es,
            value: 'Máximo 3 productos destacados por tienda. Actívalo con la estrella en el panel de producto.',
        },
        {
            languageCode: LanguageCode.en,
            value: 'Up to 3 featured products per store. Toggle with the star on the product screen.',
        },
      ],
      ui: { component: 'ecommer-store-featured-star' },
    },
    {
      name: 'hidden',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.es, value: 'Oculto por límite del plan' },
        { languageCode: LanguageCode.en, value: 'Hidden by plan limit' },
      ],
    },
    {
      name: 'hiddenAt',
      type: 'datetime',
      nullable: true,
      label: [
        { languageCode: LanguageCode.es, value: 'Oculto desde' },
        { languageCode: LanguageCode.en, value: 'Hidden since' },
      ],
    },
  ],
  ProductVariant: [
    {
      name: 'weight',
      type: 'float',
      label: [
        { languageCode: LanguageCode.en, value: 'Weight (grams)' },
        { languageCode: LanguageCode.es, value: 'Peso (gramos)' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Product weight in grams',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Peso del producto en gramos',
        },
      ],
    },
    {
      name: 'height',
      type: 'float',
      label: [
        { languageCode: LanguageCode.en, value: 'Height (cm)' },
        { languageCode: LanguageCode.es, value: 'Altura (cm)' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Product height in centimeters',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Altura del producto en centímetros',
        },
      ],
    },
    {
      name: 'length',
      type: 'float',
      label: [
        { languageCode: LanguageCode.en, value: 'Length (cm)' },
        { languageCode: LanguageCode.es, value: 'Largo (cm)' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Product length in centimeters',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Largo del producto en centímetros',
        },
      ],
    },
    {
      name: 'width',
      type: 'float',
      label: [
        { languageCode: LanguageCode.en, value: 'Width (cm)' },
        { languageCode: LanguageCode.es, value: 'Ancho (cm)' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Product width in centimeters',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Ancho del producto en centímetros',
        },
      ],
    },
    {
      name: 'hidden',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.es, value: 'Oculto por límite del plan' },
        { languageCode: LanguageCode.en, value: 'Hidden by plan limit' },
      ],
    },
    {
      name: 'hiddenAt',
      type: 'datetime',
      nullable: true,
      label: [
        { languageCode: LanguageCode.es, value: 'Oculto desde' },
        { languageCode: LanguageCode.en, value: 'Hidden since' },
      ],
    },
  ],
  PaymentMethod: [
    {
      name: 'accountNumber',
      type: 'string',
      nullable: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Account Number' },
        { languageCode: LanguageCode.es, value: 'Numero de cuenta' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Bank account number where Ecommer transfers seller payouts',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Numero de cuenta bancaria donde Ecommer transfiere las ventas',
        },
      ],
    },
    {
      name: 'bankName',
      type: 'string',
      nullable: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Bank' },
        { languageCode: LanguageCode.es, value: 'Banco' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Bank where Ecommer sends seller payouts',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Banco al cual Ecommer transfiere las ventas',
        },
      ],
    },
    {
      name: 'bankCertificationPdf',
      type: 'string',
      nullable: true,
      label: [
        { languageCode: LanguageCode.en, value: 'Bank certification (PDF)' },
        { languageCode: LanguageCode.es, value: 'Certificacion bancaria (PDF)' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'PDF document uploaded as bank certification',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Documento PDF cargado como certificacion bancaria',
        },
      ],
    },
    {
      name: 'bankCertificationVerified',
      type: 'boolean',
      defaultValue: false,
      label: [
        { languageCode: LanguageCode.en, value: 'Bank certification verified' },
        { languageCode: LanguageCode.es, value: 'Certificacion bancaria verificada' },
      ],
      description: [
        {
          languageCode: LanguageCode.en,
          value: 'Whether the uploaded bank certification has been verified',
        },
        {
          languageCode: LanguageCode.es,
          value: 'Indica si la certificacion bancaria cargada fue verificada',
        },
      ],
    },
  ],
};
