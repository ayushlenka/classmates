import { gql } from 'apollo-server-micro';

export default gql`
  type User {
    id: ID!
    email: String!
    createdAt: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  extend type Mutation {
    signUp(email: String!, password: String!): AuthPayload
    signIn(email: String!, password: String!): AuthPayload
  }
`;
