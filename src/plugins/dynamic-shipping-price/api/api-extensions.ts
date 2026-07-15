import gql from 'graphql-tag';

const dynamicShippingPriceShopApiExtensions = gql`
    extend type Mutation {
        setDynamicShippingPrice(price: Int!): Boolean!
    }
`;

export const shopApiExtensions = gql`
    ${dynamicShippingPriceShopApiExtensions}
`;
