import type { VendureConfig } from '@vendure/core';
import { LanguageCode } from '@vendure/core';

/**
 * Custom fields para ProductVariant (peso y dimensiones).
 * Si cambias esto recuerda generar migración de DB.
 */
export const customFields: VendureConfig['customFields'] = {
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
      ui: {
        component: 'payment-method-pdf-upload-input',
      },
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
