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
    orderCode: String
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

  type MatiasBillingStoreRow {
    channelId: ID!
    channelCode: String!
    sellerName: String
    billingActive: Boolean!
    remaining: Int
    matiasTokenConfigured: Boolean!
    matiasInvoicePrefix: String
    matiasResolutionNumber: String
    matiasEmitProfileComplete: Boolean!
  }

  input UpdateMatiasBillingStoreInput {
    channelId: ID!
    billingActive: Boolean!
    invoiceLimitRemaining: Int
    matiasInvoicePrefix: String
    matiasResolutionNumber: String
    matiasAccessToken: String
  }

  type MatiasGlobalInvoicePool {
    defaultChannelCode: String!
    total: Int
    sellableRemaining: Int
  }

  input UpdateMatiasGlobalInvoicePoolInput {
    total: Int
    sellableRemaining: Int
  }

  type BillingCertificateDocs {
    chamber: String
    rut: String
    nit: String
  }

  type BillingPlanState {
    channelId: ID!
    channelCode: String!
    sellerName: String
    certificateStatus: String!
    certificatePaymentStatus: String!
    certificateType: String
    certificateExpiresAt: DateTime
    certificatePaidAt: DateTime
    certificateReviewNote: String
    documents: BillingCertificateDocs!
    invoicesRemaining: Int!
    canBuyPlans: Boolean!
    purchaseHistory: [BillingPlanPurchaseEntry!]!
  }

  type BillingInvoicePlan {
    code: String!
    name: String!
    invoices: Int!
    priceCop: Int!
  }

  type BillingPlanPurchaseEntry {
    purchasedAt: DateTime!
    planCode: String!
    planName: String!
    invoicesAdded: Int!
    priceCop: Int!
    paymentReference: String
    source: String!
  }

  input SubmitBillingCertificateInput {
    chamber: String!
    rut: String!
    nit: String!
    certificateType: String!
  }

  input ApproveBillingCertificateInput {
    channelId: ID!
    approve: Boolean!
    note: String
  }

  input ConfirmBillingPlanPaymentInput {
    planCode: String!
    channelId: ID
  }

  type InvoiceCreationFailureItem {
    orderId: ID!
    orderCode: String!
    error: String!
    failedAt: DateTime!
  }

  type InvoiceCreationFailureList {
    items: [InvoiceCreationFailureItem!]!
    total: Int!
  }

  type InvoiceEmissionQueueStatus {
    pendingCount: Int!
    runningCount: Int!
    retryingCount: Int!
    activeTotal: Int!
  }

  type CurrentInvoiceQuotaStatus {
    channelId: ID!
    channelCode: String!
    billingActive: Boolean!
    remaining: Int
    hasPlan: Boolean!
    isBlocked: Boolean!
    matiasTokenConfigured: Boolean!
    matiasPrefixConfigured: Boolean!
    matiasResolutionConfigured: Boolean!
    matiasInvoicePrefix: String
  }

  type InvoiceMatiasActionResult {
    success: Boolean!
    message: String
    status: String
    matiasInvoiceId: String
    error: String
    pdfUrl: String
    xmlUrl: String
  }
`;

const adminQueries = gql`
  extend type Query {
    invoices(options: InvoiceListOptionsInput): InvoiceListResult!
    invoiceTotalsByDay(dateFrom: DateTime!, dateTo: DateTime!): [InvoiceTotalsByDayRow!]!
    invoiceTotalsByMonth(dateFrom: DateTime!, dateTo: DateTime!): [InvoiceTotalsByMonthRow!]!
    myBillingPlanState: BillingPlanState!
    billingInvoicePlans: [BillingInvoicePlan!]!
    matiasBillingStores: [MatiasBillingStoreRow!]!
    matiasGlobalInvoicePool: MatiasGlobalInvoicePool!
    billingCertificateReviewQueue: [BillingPlanState!]!
    billingWompiPaymentSignature(amountInCents: Int!, paymentReference: String!): String!
    invoiceCreationFailures(take: Int, skip: Int): InvoiceCreationFailureList!
    invoiceEmissionQueueStatus: InvoiceEmissionQueueStatus!
    currentInvoiceQuotaStatus: CurrentInvoiceQuotaStatus!
  }
`;

const adminMutations = gql`
  extend type Mutation {
    updateMatiasGlobalInvoicePool(input: UpdateMatiasGlobalInvoicePoolInput!): MatiasGlobalInvoicePool!
    updateMatiasBillingStore(input: UpdateMatiasBillingStoreInput!): MatiasBillingStoreRow!
    submitBillingCertificate(input: SubmitBillingCertificateInput!): BillingPlanState!
    confirmMyBillingCertificatePayment: BillingPlanState!
    approveBillingCertificate(input: ApproveBillingCertificateInput!): BillingPlanState!
    confirmBillingPlanPayment(input: ConfirmBillingPlanPaymentInput!): BillingPlanState!
    syncInvoiceFromMatias(invoiceId: ID!, orderCode: String!): InvoiceMatiasActionResult!
    resendInvoiceMatiasEmail(invoiceId: ID!, orderCode: String!, email: String): InvoiceMatiasActionResult!
  }
`;

const shopQueries = gql`
  extend type Query {
    myInvoices(take: Int, skip: Int): InvoiceListResult!
    myBillingPlanState: BillingPlanState!
    billingInvoicePlans: [BillingInvoicePlan!]!
  }
`;

const shopMutations = gql`
  extend type Mutation {
    submitBillingCertificate(input: SubmitBillingCertificateInput!): BillingPlanState!
    confirmMyBillingCertificatePayment: BillingPlanState!
    confirmMyBillingPlanPayment(planCode: String!): BillingPlanState!
  }
`;

export const adminApiExtensions = gql`
  ${invoiceType}
  ${adminQueries}
  ${adminMutations}
`;

export const shopApiExtensions = gql`
  ${invoiceType}
  ${shopQueries}
  ${shopMutations}
`;

