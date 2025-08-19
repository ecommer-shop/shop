import gql from 'graphql-tag';

const wompiShopApiExtensions = gql`
  extend type Query {
    getWompiSignature(amountInCents: Int!): String!
  }
`;
export const shopApiExtensions = gql`
  ${wompiShopApiExtensions}
`;
