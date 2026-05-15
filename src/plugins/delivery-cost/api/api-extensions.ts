import gql from 'graphql-tag';

const deliveryCostShopApiExtensions = gql`
    input DeliveryCostInput {
        origin: String!
        destination: String!
    }

    type DeliveryCostMoney {
        value: Float!
        currency: String!
    }

    type DeliveryCostMetric {
        value: Float!
        unit: String!
        text: String
    }

    type DeliveryCostResult {
        success: Boolean!
        price: DeliveryCostMoney
        distance: DeliveryCostMetric
        duration: DeliveryCostMetric
        error: String
    }

    extend type Query {
        calculateDeliveryCost(input: DeliveryCostInput!): DeliveryCostResult!
    }
`;

export const shopApiExtensions = gql`
    ${deliveryCostShopApiExtensions}
`;
