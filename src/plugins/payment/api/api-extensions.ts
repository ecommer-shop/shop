import gql from 'graphql-tag';

const paymentShopApiExtensions = gql`
  type PaymentMethodExtra {
    name: String
    brand: String
    lastFour: String
    isThreeDs: Boolean
    threeDsAuth: ThreeDsAuth
  }

  type ThreeDsAuth {
    currentStep: String
    currentStepStatus: String
    threeDsMethodData: String
  }

  type WompiTransactionResult {
    transactionId: String!
    status: String!
    reference: String!
    amountInCents: Int!
    paymentMethodExtra: PaymentMethodExtra
    asyncPaymentUrl: String
    qrImage: String
  }

  type WompiTransactionStatus {
    id: String!
    status: String!
    statusMessage: String
    paymentMethodExtra: PaymentMethodExtra
  }

  type ConfirmPaymentResult {
    success: Boolean!
    orderCode: String
    errorMessage: String
    receiptUrl: String
  }

  type SavedPaymentMethod {
    id: ID!
    type: String!
    wompiPaymentSourceId: String!
    lastFour: String!
    brand: String!
    expiryMonth: String!
    expiryYear: String!
    cardHolderName: String
    isDefault: Boolean!
    createdAt: DateTime!
  }

  type DeletePaymentMethodResult {
    success: Boolean!
  }

  input InitWompiTransactionInput {
    token: String
    acceptanceToken: String
    customerEmail: String!
    amountInCents: Int!
    reference: String!
    currency: String!
    saveCard: Boolean!
    paymentMethodCode: String!
    sessionId: String
    deviceId: String
    financialInstitutionCode: String
    userType: String
    userLegalIdType: String
    userLegalId: String
    paymentDescription: String
    paymentMethodDetails: JSON
  }

  input InitWompiSavedCardTransactionInput {
    paymentSourceId: String!
    acceptanceToken: String!
    customerEmail: String!
    amountInCents: Int!
    reference: String!
    currency: String!
  }

  input ConfirmWompiPaymentInput {
    transactionId: String!
    saveCard: Boolean!
  }

  extend type Query {
    GetPaymentSignature(amountInCents: Int!, paymentReference: String!): String!
    getWompiTransactionStatus(transactionId: String!): WompiTransactionStatus!
    savedPaymentMethods: [SavedPaymentMethod!]!
  }

  type WompiPaymentSourceResult {
    id: Int!
    type: String!
    status: String!
    publicData: JSON
  }

  input CreateWompiPaymentSourceInput {
    token: String!
    type: String!
    customerEmail: String!
    acceptanceToken: String!
  }

  extend type Mutation {
    initWompiTransaction(input: InitWompiTransactionInput!): WompiTransactionResult!
    initWompiSavedCardTransaction(input: InitWompiSavedCardTransactionInput!): WompiTransactionResult!
    createWompiPaymentSource(input: CreateWompiPaymentSourceInput!): WompiPaymentSourceResult!
    confirmWompiPayment(input: ConfirmWompiPaymentInput!): ConfirmPaymentResult!
    deleteSavedPaymentMethod(id: ID!): DeletePaymentMethodResult!
    setDefaultPaymentMethod(id: ID!): SavedPaymentMethod
  }
`;

export const shopApiExtensions = gql`
  ${paymentShopApiExtensions}
`;
