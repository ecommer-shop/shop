import gql from 'graphql-tag';

export const shopApiExtensions = gql`
  input AuthExternalInputTest {
    token: String!
  }

  type ExternalAuthRole {
    id: ID!
    code: String!
    description: String
  }

    type ExternalAuthPermission {
    code: String!
    permission: String
  }

  type ExternalAuthResult {
    id: ID!
    identifier: String!
    email: String!
    sessionToken: String
    roles: [ExternalAuthRole!]!
    permissions: JSON!
  }

  extend type Mutation {
    authenticateExternal(input: AuthExternalInputTest!): ExternalAuthResult!
  }

`;