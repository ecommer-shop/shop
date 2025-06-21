import { LanguageCode, InitialData } from '@vendure/core';

export const initialData: InitialData = {
  defaultLanguage: LanguageCode.es,
  defaultZone: 'Europe/Berlin',
  countries: [],
  taxRates: [],
  shippingMethods: [],
  paymentMethods: [],
  collections: [],
};
