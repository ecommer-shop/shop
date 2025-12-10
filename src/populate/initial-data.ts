import { InitialData, LanguageCode, Permission } from '@vendure/core';

export const initialData: InitialData = {
  paymentMethods: [
    {
      name: 'Standard Payment',
      handler: {
        code: 'dummy-payment-handler',
        arguments: [{ name: 'automaticSettle', value: 'false' }],
      },
    },
  ],
  roles: [
    {
      code: 'Admin',
      description: 'Administrator',
      permissions: [
        Permission.CreateCatalog,
        Permission.ReadCatalog,
        Permission.UpdateCatalog,
        Permission.DeleteCatalog,
        Permission.CreateSettings,
        Permission.ReadSettings,
        Permission.UpdateSettings,
        Permission.DeleteSettings,
        Permission.CreateCustomer,
        Permission.ReadCustomer,
        Permission.UpdateCustomer,
        Permission.DeleteCustomer,
        Permission.CreateCustomerGroup,
        Permission.ReadCustomerGroup,
        Permission.UpdateCustomerGroup,
        Permission.DeleteCustomerGroup,
        Permission.CreateOrder,
        Permission.ReadOrder,
        Permission.UpdateOrder,
        Permission.DeleteOrder,
        Permission.CreateSystem,
        Permission.ReadSystem,
        Permission.UpdateSystem,
        Permission.DeleteSystem,
      ],
    },
    {
      code: 'customer',
      description: 'Normal Customer',
      permissions: [
        Permission.ReadCatalog,
        Permission.ReadProduct,
        Permission.ReadCustomer,
        Permission.UpdateCustomer,
        Permission.ReadOrder,
      ],
    },
    {
      code: 'vendor',
      description: 'Vendor/Seller',
      permissions: [
        Permission.CreateCatalog,
        Permission.ReadCatalog,
        Permission.UpdateCatalog,
        Permission.DeleteCatalog,
        Permission.CreateProduct,
        Permission.ReadProduct,
        Permission.UpdateProduct,
        Permission.DeleteProduct,
        Permission.ReadOrder,
        Permission.UpdateOrder,
      ],
    },
    {
      code: 'moderator',
      description: 'Store Moderator',
      permissions: [
        Permission.CreateCatalog,
        Permission.ReadCatalog,
        Permission.UpdateCatalog,
        Permission.DeleteCatalog,
        Permission.ReadSettings,
        Permission.UpdateSettings,
        Permission.ReadCustomer,
        Permission.UpdateCustomer,
        Permission.ReadOrder,
        Permission.UpdateOrder,
      ],
    },
    {
      code: 'support',
      description: 'Customer Support',
      permissions: [
        Permission.ReadCatalog,
        Permission.ReadProduct,
        Permission.ReadCustomer,
        Permission.ReadOrder,
      ],
    },
  ],
  defaultLanguage: LanguageCode.en,
  countries: [
    { name: 'Austria', code: 'AT', zone: 'Europe' },
    { name: 'Malaysia', code: 'MY', zone: 'Asia' },
    { name: 'United Kingdom', code: 'GB', zone: 'Europe' },
  ],
  defaultZone: 'Europe',
  taxRates: [
    { name: 'Standard Tax', percentage: 20 },
    { name: 'Reduced Tax', percentage: 10 },
    { name: 'Zero Tax', percentage: 0 },
  ],
  shippingMethods: [
    { name: 'Standard Shipping', price: 500 },
    { name: 'Express Shipping', price: 1000 },
  ],
  collections: [
    {
      name: 'Electronics',
      filters: [
        {
          code: 'facet-value-filter',
          args: { facetValueNames: ['Electronics'], containsAny: false },
        },
      ],
      assetPaths: ['jakob-owens-274337-unsplash.jpg'],
    },
  ],
};
