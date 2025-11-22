import gql from 'graphql-tag';

const servientregaShopApiExtensions = gql`
  extend type Query {
    getCitiesDepartament(countryId: Int!, language: String): JSON! 
  }

  extend type Query {
    getCitiesOrigin(countryId: Int!, productID: Int!, language: String): JSON! 
  }

  extend type Query {
    getCitiesAutocompleteOrigin(countryId: Int!, productID: Int!, language: String, cityName: String): JSON! 
  }
    
  extend type Query {
    getQuote(originCityId: Int!, destinationCityId: Int!, largoCm: Int!, altoCm: Int!, anchoCm: Int!, pesoKg: Int!, valorDeclaradoCOP: Int!, productId: Int!, language: String): JSON! 
  }

  extend type Query {
    getRestrictions: JSON! 
  }
  
  extend type Query {
    getNetworkRestrictions(paisOrigen: Int!, ciudadOrigen: Int!, paisDestino: Int!, ciudadDestino: Int!, productId: Int!, peso: Int!, largo: Int!, alto: Int!, ancho: Int!): JSON! 
  }

  extend type Query {
    servientregaProducts: JSON!
  }

  extend type Query {
    adminOnlyEndpoint: JSON!
  }

  extend type Query {
    debugUserRoles: JSON!
  }

`;
export const shopApiExtensions = gql`
  ${servientregaShopApiExtensions}
`;
