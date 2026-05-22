import gql from 'graphql-tag';

export const wompiSubscriptionShopApiExtensions = gql`
  enum SubscriptionStatus {
    ACTIVE
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
    productLimit: Int
    variationLimit: Int
    hasAIAccess: Boolean
    hasElectronicBilling: Boolean
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
  }

  extend type Mutation {
    cancelAutoRenew: CustomerSubscription
    createSubscriptionWithPayment(
      token: String!
      planId: Int!
    ): CustomerSubscription
  }
`;

export const shopApiExtensions = gql`
  ${wompiSubscriptionShopApiExtensions}
`;