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
    mySubscription(customerEmail: String): CustomerSubscription
    allPlans: [Plan!]!
    checkProductLimit(channelToken: String, customerEmail: String): SubscriptionCheckResult
    checkVariationLimit(channelToken: String, customerEmail: String): SubscriptionCheckResult
    checkFeatureAccess(featureCode: String!, customerEmail: String): Boolean
    GetWompiIntegritySignature(amountInCents: Int!, paymentReference: String!): String!
  }

  extend type Mutation {
    cancelAutoRenew(customerEmail: String): CustomerSubscription
    createSubscriptionWithPayment(
      token: String!
      planId: Int!
      paymentMethod: String!
      customerEmail: String
      sessionId: String
      deviceId: String
    ): CustomerSubscription
    createPendingSubscription(
      planId: Int!
      paymentMethod: String!
      customerEmail: String
    ): PendingSubscriptionResult
    stopAutoRenew(subscriptionId: Int!, customerEmail: String): CustomerSubscription
    cancelSubscription(subscriptionId: Int!, customerEmail: String): CustomerSubscription
  }
`;

export const shopApiExtensions = gql`
  ${wompiSubscriptionShopApiExtensions}
`;
