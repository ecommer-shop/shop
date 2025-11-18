import type { VendureConfig } from '@vendure/core';
import { LanguageCode } from '@vendure/core';

/**
 * Custom fields para ProductVariant (peso y dimensiones).
 * Si cambias esto recuerda generar migración de DB.
 */
export const customFields: VendureConfig['customFields'] = {
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
};
