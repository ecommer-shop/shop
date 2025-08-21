import gql from 'graphql-tag';

const paymentShopApiExtensions = gql`
  extend type Query {
    GetPaymentSignature(amountInCents: Int!): String!
  }
`;
export const shopApiExtensions = gql`
  ${paymentShopApiExtensions}
`;
