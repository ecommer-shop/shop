import gql from 'graphql-tag';

const invoiceType = gql`
  type InvoiceListItem {
    id: ID!
    orderCode: String!
    prefix: String!
    documentNumber: String!
    typeDocumentId: Int!
    operationTypeId: Int!
    status: String!
    statusMessage: String
    customerName: String!
    customerDni: String!
    customerEmail: String
    subtotal: String!
    taxTotal: String!
    total: String!
    currencyCode: String!
    pdfUrl: String
    xmlUrl: String
    createdAt: DateTime!
  }

  type InvoiceListResult {
    items: [InvoiceListItem!]!
    total: Int!
  }

  input InvoiceListFilterInput {
    dateFrom: DateTime
    dateTo: DateTime
    customerDni: String
    status: String
  }

  input InvoiceListOptionsInput {
    filter: InvoiceListFilterInput
    take: Int
    skip: Int
  }

  type InvoiceTotalsByDayRow {
    date: String!
    subtotal: String!
    taxTotal: String!
    total: String!
    count: Int!
  }

  type InvoiceTotalsByMonthRow {
    year: Int!
    month: Int!
    subtotal: String!
    taxTotal: String!
    total: String!
    count: Int!
  }
`;

const adminQueries = gql`
  extend type Query {
    invoices(options: InvoiceListOptionsInput): InvoiceListResult!
    invoiceTotalsByDay(dateFrom: DateTime!, dateTo: DateTime!): [InvoiceTotalsByDayRow!]!
    invoiceTotalsByMonth(dateFrom: DateTime!, dateTo: DateTime!): [InvoiceTotalsByMonthRow!]!
  }
`;

const shopQueries = gql`
  extend type Query {
    myInvoices(take: Int, skip: Int): InvoiceListResult!
  }
`;

export const adminApiExtensions = gql`
  ${invoiceType}
  ${adminQueries}
`;

export const shopApiExtensions = gql`
  ${invoiceType}
  ${shopQueries}
`;

