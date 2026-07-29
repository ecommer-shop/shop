import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    type PayoutBatch {
        id: ID!
        reference: String!
        periodStart: DateTime!
        periodEnd: DateTime!
        totalAmount: Int!
        totalPlatformFee: Int!
        transactionCount: Int!
        successCount: Int!
        skippedCount: Int!
        status: String!
        csvFileName: String
        paidAt: DateTime
        createdAt: DateTime!
        updatedAt: DateTime!
        transactions: [PayoutTransaction!]
    }

    type PayoutTransaction {
        id: ID!
        sellerId: Int!
        sellerName: String!
        channelToken: String!
        amount: Int!
        platformFee: Int!
        orderCodes: String!
        legalIdType: String
        legalId: String
        accountType: String
        accountNumber: String
        bankCode: String
        brebKey: String
        brebKeyType: String
        status: String!
        notes: String
        createdAt: DateTime!
    }

    type PendingPayoutReport {
        totalSellers: Int!
        totalAmount: Int!
        totalPlatformFee: Int!
        sellersWithoutBankInfo: [String!]!
    }

    input CreatePayoutBatchInput {
        periodStart: DateTime!
        periodEnd: DateTime!
    }

    input SavePayoutInfoInput {
        legalIdType: String
        legalId: String
        accountType: String
        accountNumber: String
        bankCode: String
        brebKey: String
        brebKeyType: String
    }

    type SellerPayoutInfo {
        legalIdType: String
        legalId: String
        accountType: String
        accountNumber: String
        bankCode: String
        brebKey: String
        brebKeyType: String
        brebVerified: Boolean!
    }

    extend type Query {
        payoutBatches: [PayoutBatch!]!
        payoutBatch(id: ID!): PayoutBatch
        pendingPayoutReport(periodStart: DateTime!, periodEnd: DateTime!): PendingPayoutReport!
        myPayoutInfo: SellerPayoutInfo!
        myPayoutBatches: [PayoutBatch!]!
    }

    extend type Mutation {
        createPayoutBatch(input: CreatePayoutBatchInput!): PayoutBatch!
        confirmPayoutBatch(id: ID!): PayoutBatch!
        cancelPayoutBatch(id: ID!): PayoutBatch!
        downloadPayoutCsv(id: ID!): String!
        saveMyPayoutInfo(input: SavePayoutInfoInput!): SellerPayoutInfo!
    }
`;
