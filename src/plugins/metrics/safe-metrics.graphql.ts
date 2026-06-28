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

    extend type Query {
        advancedMetricSummaries(input: AdvancedMetricSummaryInput): [AdvancedMetricSummary!]!
    }
`;
