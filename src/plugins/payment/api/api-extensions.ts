import gql from 'graphql-tag';

const paymentShopApiExtensions = gql`
  extend type Query {
    GetPaymentSignature(
    amountInCents: Int!,
    paymentReference: String!,
    ): String!
  }
`;
export const shopApiExtensions = gql`
  ${paymentShopApiExtensions}
`;
