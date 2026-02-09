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

  type GoogleSheetImportResult {
    jobId: ID!
  }

  extend type Mutation {
    importProductsFromGoogleSheet(sheetUrl: String!): GoogleSheetImportResult!
  }

    input ImportProductInput {
    sku: String!
    name: String!
    description: String
    price: Int!
    stock: Int!
  }

  type ImportProductErrorDetail {
    sku: String!
    error: String!
  }

  type ImportProductSkippedDetail {
    sku: String!
    reason: String!
  }

  type ImportProductsResult {
    success: Boolean!
    message: String!
    importedCount: Int!
    updatedCount: Int!
    failedCount: Int!
    skippedCount: Int!
    errors: [ImportProductErrorDetail!]
    skipped: [ImportProductSkippedDetail!]
  }

  extend type Mutation {
    importProductsFromExcel(
      products: [ImportProductInput!]!
      channelToken: String!
    ): ImportProductsResult!
  }
`;
export const adminApiExtensions = gql`
  ${googleSheetAdminApiExtensions}
`;
