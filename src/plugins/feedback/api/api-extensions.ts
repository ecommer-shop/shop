import gql from 'graphql-tag';

export const adminApiExtensions = gql`
    enum FeedbackVoteValue {
        ok
        not_ok
    }

    enum FeedbackPostStatus {
        under_review
        planned
        in_progress
        done
        declined
    }

    type FeedbackPost {
        id: ID!
        createdAt: DateTime!
        title: String!
        description: String!
        category: String!
        status: FeedbackPostStatus!
        prioritized: Boolean!
        adminNote: String
        authorName: String!
        okVotes: Int!
        notOkVotes: Int!
        myVote: FeedbackVoteValue
        commentCount: Int!
        mine: Boolean!
    }

    type FeedbackComment {
        id: ID!
        createdAt: DateTime!
        authorName: String!
        text: String!
        mine: Boolean!
    }

    input CreateFeedbackPostInput {
        title: String!
        description: String!
        category: String!
    }

    input UpdateFeedbackPostInput {
        title: String
        description: String
        category: String
    }

    extend type Query {
        feedbackPosts: [FeedbackPost!]!
        feedbackComments(postId: ID!): [FeedbackComment!]!
    }

    extend type Mutation {
        createFeedbackPost(input: CreateFeedbackPostInput!): FeedbackPost!
        updateFeedbackPost(postId: ID!, input: UpdateFeedbackPostInput!): FeedbackPost!
        voteFeedbackPost(postId: ID!, value: FeedbackVoteValue!): FeedbackPost!
        addFeedbackComment(postId: ID!, text: String!): FeedbackComment!
        updateFeedbackComment(commentId: ID!, text: String!): FeedbackComment!
        deleteFeedbackComment(commentId: ID!): Boolean!
        setFeedbackPostStatus(postId: ID!, status: FeedbackPostStatus!): FeedbackPost!
        setFeedbackPostPriority(postId: ID!, prioritized: Boolean!, adminNote: String): FeedbackPost!
        deleteFeedbackPost(postId: ID!): Boolean!
    }
`;
