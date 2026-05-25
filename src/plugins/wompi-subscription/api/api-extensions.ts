import gql from 'graphql-tag';

export const wompiSubscriptionShopApiExtensions = gql`
  enum SubscriptionStatus {
    ACTIVE
    PENDING_PAYMENT
    GRACE_PERIOD
    SUSPENDED
    CANCELLED
  }

  enum BillingInterval {
    monthly
    yearly
  }

  enum FeatureType {
    numeric
    boolean
  }

  enum PaymentFlowType {
    RECURRENTE
    MANUAL
  }

  type Plan {
    id: ID!
    name: String!
    price: Float!
    billingInterval: BillingInterval!
    description: String
    planFeatures: [PlanFeature!]!
  }

  type Feature {
    id: ID!
    code: String!
    name: String!
    type: FeatureType!
  }

  type PlanFeature {
    id: ID!
    plan: Plan!
    feature: Feature!
    value: String!
  }

  type CustomerSubscription {
    id: ID!
    status: SubscriptionStatus!
    startsAt: DateTime
    endsAt: DateTime
    gracePeriodStart: DateTime
    autoRenew: Boolean!
    plan: Plan!
    paymentMethodType: String
    paymentFlowType: String
    productLimit: Int
    variationLimit: Int
    hasAIAccess: Boolean
    hasElectronicBilling: Boolean
  }

  type PendingSubscriptionResult {
    id: ID!
    status: SubscriptionStatus!
    startsAt: DateTime
    endsAt: DateTime
    autoRenew: Boolean!
    plan: Plan!
    paymentMethodType: String
    paymentFlowType: String
    asyncPaymentUrl: String
    qrImage: String
    transactionId: String
  }

  type SubscriptionFeatureUsage {
    featureCode: String!
    currentValue: Int!
    limit: Int!
    remaining: Int!
  }

  type SubscriptionCheckResult {
    allowed: Boolean!
    current: Int!
    limit: Int!
  }

  extend type Query {
    mySubscription: CustomerSubscription
    allPlans: [Plan!]!
    checkProductLimit: SubscriptionCheckResult
    checkFeatureAccess(featureCode: String!): Boolean
    GetWompiIntegritySignature(amountInCents: Int!, paymentReference: String!): String!
  }

  extend type Mutation {
    cancelAutoRenew: CustomerSubscription
    createSubscriptionWithPayment(
      token: String!
      planId: Int!
      paymentMethod: String!
    ): CustomerSubscription
    createPendingSubscription(
      planId: Int!
      paymentMethod: String!
    ): PendingSubscriptionResult
    stopAutoRenew(subscriptionId: Int!): CustomerSubscription
    cancelSubscription(subscriptionId: Int!): CustomerSubscription
  }
`;

export const shopApiExtensions = gql`
  ${wompiSubscriptionShopApiExtensions}
`;
