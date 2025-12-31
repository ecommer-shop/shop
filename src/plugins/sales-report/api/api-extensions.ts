import gql from 'graphql-tag';

const salesReportType = gql`
  type SalesDetail {
    productName: String!
    quantity: Int!
    unitPrice: Float!
    totalPrice: Float!
    orderCode: String!
  }

  type PaymentMethodDetail {
    method: String!
    amount: Float!
    count: Int!
  }

  type SalesReport {
    id: ID!
    userId: ID
    customerId: ID
    periodStart: DateTime!
    periodEnd: DateTime!
    reportDate: DateTime!
    totalSales: Float!
    totalSoldOrPending: Float!
    salesDetails: [SalesDetail!]
    paymentMethods: [PaymentMethodDetail!]
    observations: String
    month: Int!
    year: Int!
    biweekly: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input GenerateSalesReportInput {
    userId: ID
    customerId: ID
    periodStart: DateTime!
    periodEnd: DateTime!
    observations: String
  }

  input GetSalesReportsInput {
    userId: ID
    customerId: ID
    year: Int
    month: Int
  }
`;

const salesReportQueries = gql`
  extend type Query {
    getSalesReports(input: GetSalesReportsInput): [SalesReport!]!
    getSalesReportById(id: ID!): SalesReport
  }
`;

const salesReportMutations = gql`
  extend type Mutation {
    generateSalesReport(input: GenerateSalesReportInput!): SalesReport!
    deleteSalesReport(id: ID!): Boolean!
    generateMonthlyReports: [SalesReport!]!
  }
`;

export const shopApiExtensions = gql`
  ${salesReportType}
  ${salesReportQueries}
  ${salesReportMutations}
`;



