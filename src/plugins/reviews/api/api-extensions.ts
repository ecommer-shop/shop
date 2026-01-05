import gql from 'graphql-tag';

export const adminApiExtensions = gql`
  type Review implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    code: String!
    rating: Int!
    comment: String!
    approved: Boolean!
    product: Product!
    customer: Customer!
  }

  type ReviewList implements PaginatedList {
    items: [Review!]!
    totalItems: Int!
  }

  # Generated at run-time by Vendure
  input ReviewListOptions

  extend type Query {
    review(id: ID!): Review
    reviews(options: ReviewListOptions): ReviewList!
  }

  input CreateReviewInput {
    code: String!
    rating: Int!
    comment: String!
    productId: ID!
  }

  input UpdateReviewInput {
    id: ID!
    rating: Int
    comment: String
    approved: Boolean
  }

  extend type Mutation {
    createReview(input: CreateReviewInput!): Review!
    updateReview(input: UpdateReviewInput!): Review!
    approveReview(id: ID!): Review!
    deleteReview(id: ID!): DeletionResponse!
  }
`;

