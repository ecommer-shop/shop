import gql from 'graphql-tag';

const sharedStoreTypes = gql`
    type Store implements Node {
        id: ID!
        storeName: String!
        channelCode: String!
        channelToken: String
        createdAt: DateTime!
        updatedAt: DateTime!
        isNew: Boolean!
        isDeleted: Boolean!
        deletedAt: DateTime
        adminName: String
        adminEmail: String
        adminLastLogin: DateTime
        productCount: Int
        storeDescription: String
        storeBannerUrl: String
        storePickupAddress: String
        storePickupNeighborhood: String
    }

    type StoreList implements PaginatedList {
        items: [Store!]!
        totalItems: Int!
    }

    input StoreSearchInput {
        query: String!
        take: Int
        skip: Int
    }
`;

export const adminApiExtensions = gql`
    ${sharedStoreTypes}

    type StoreEdge {
        cursor: String!
        node: Store!
    }

    type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        endCursor: String
    }

    type StoreConnection {
        edges: [StoreEdge!]!
        pageInfo: PageInfo!
        totalItems: Int!
        totalActiveStores: Int!
    }

    input StoreFilterInput {
        search: String
        isNew: Boolean
        isDeleted: Boolean
    }

    input StoreSortParameter {
        storeName: SortOrder
        channelCode: SortOrder
        createdAt: SortOrder
    }

    input StoreListWithTotalsListOptions {
        skip: Int
        take: Int
        sort: StoreSortParameter
        filter: StoreFilterInput
    }

    type StoreListWithTotals implements PaginatedList {
        items: [Store!]!
        totalItems: Int!
        totalActiveStores: Int!
    }

    extend type Query {
        stores(first: Int! = 20, after: String, filter: StoreFilterInput): StoreConnection!
        store(id: ID!): Store
        storesList(options: StoreListWithTotalsListOptions): StoreListWithTotals!
        searchStores(input: StoreSearchInput!): StoreList!
    }
`;

export const shopApiExtensions = gql`
    ${sharedStoreTypes}

    extend type Query {
        searchStores(input: StoreSearchInput!): StoreList!
    }
`;
