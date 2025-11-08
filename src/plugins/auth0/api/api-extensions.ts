import gql from 'graphql-tag';

export const shopApiExtensions = gql`
  input AuthExternalInput {
    token: String!
  }

  extend type Mutation {
    authenticateAuth0(input: AuthExternalInput!): JSON!
  }
`;
