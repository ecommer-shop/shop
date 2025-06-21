import { InitialData, LanguageCode, CurrencyCode } from '@vendure/core';

export const initialData: InitialData = {
  // your other defaults
  defaultLanguage: LanguageCode.es,
  defaultZone: 'CO', // must match one of the zones below

  // define the countries you need
  countries: [],

  // define your zones

  taxRates: [
    {
      name: 'Standard Tax',
      percentage: 19,
    },
  ],

  shippingMethods: [],
  paymentMethods: [],
  collections: [],
  // …any other fields your initialData needs
};
