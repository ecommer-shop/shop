import gql from 'graphql-tag';

const aiChatAdminApiExtensions = gql`
  type ChatResponse {
    response: String!
    error: String
  }

  input ChatHistoryInput {
    role: String!
    content: String!
  }

  extend type Mutation {
    sendChatMessage(message: String!, history: [ChatHistoryInput!]): ChatResponse!
  }
`;
export const adminApiExtensions = gql`
  ${aiChatAdminApiExtensions}
`;
