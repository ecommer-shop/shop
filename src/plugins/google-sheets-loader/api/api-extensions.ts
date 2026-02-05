import gql from 'graphql-tag';

const googleSheetAdminApiExtensions = gql`
  type GoogleSheet implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    code: String!
  }

  type GoogleSheetList implements PaginatedList {
    items: [GoogleSheet!]!
    totalItems: Int!
  }

  # Generated at run-time by Vendure
  input GoogleSheetListOptions

  extend type Query {
    googleSheet(id: ID!): GoogleSheet
    googleSheets(options: GoogleSheetListOptions): GoogleSheetList!
  }

  input CreateGoogleSheetInput {
    code: String!
  }

  input UpdateGoogleSheetInput {
    id: ID!
    code: String
  }

  extend type Mutation {
    createGoogleSheet(input: CreateGoogleSheetInput!): GoogleSheet!
    updateGoogleSheet(input: UpdateGoogleSheetInput!): GoogleSheet!
    deleteGoogleSheet(id: ID!): DeletionResponse!
  }
`;
export const adminApiExtensions = gql`
  ${googleSheetAdminApiExtensions}
`;
