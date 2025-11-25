import gql from 'graphql-tag';

const mercadoPagoAdminApiExtensions = gql`
  extend type Query {
    createMercadoPagoPreference(id: ID!): Boolean!
  }
`;
export const adminApiExtensions = gql`
  ${mercadoPagoAdminApiExtensions}
`;
