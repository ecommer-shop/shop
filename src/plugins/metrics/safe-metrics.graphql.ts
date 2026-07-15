import gql from 'graphql-tag';

export const adminSchema = gql`
    type AdvancedMetricSummary {
        code: String!
        title: String!
        type: AdvancedMetricType!
        allowProductSelection: Boolean!
        labels: [String!]!
        series: [AdvancedMetricSeries!]!
    }

    enum AdvancedMetricType {
        currency
        number
    }

    type AdvancedMetricSeries {
        name: String!
        values: [Float!]!
    }

    input AdvancedMetricSummaryInput {
        variantIds: [ID!]
    }

    type TopProduct {
        productVariantId: ID!
        productName: String!
        sku: String!
        quantity: Int!
        revenue: Int!
    }

    input TopProductsInput {
        variantIds: [ID!]
    }

    type OrderStatusBreakdown {
        state: String!
        count: Int!
        percentage: Float!
    }

    extend type Query {
        advancedMetricSummaries(input: AdvancedMetricSummaryInput): [AdvancedMetricSummary!]!
        topProducts(input: TopProductsInput): [TopProduct!]!
        orderStatusDistribution: [OrderStatusBreakdown!]!
    }
`;
