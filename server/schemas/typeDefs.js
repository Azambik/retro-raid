const { gql } = require('apollo-server-express');
//users querys fine but db is empty.need a way to get all users and user by name
const typeDefs = gql`
type User {
    _id: ID
    userName: String
    email: String
    password: String
  }
  type Auth {
    token: ID
    user: User
  }

type Forum {
  _id: ID
  name: String
}

type Post {
  _id: ID
  name: String
  postText: String
  createdAt: String
  username: String
  forum: Forum
  reply: [Reply]
}
type Reply{
  _id: ID
  replyText: String
  createdAt: String
  username: String
}

type Query {
  forums: [Forum]
  users: [User]
  user(username: String!): User
  Forums: [Forum]
  Forum(_id: ID!): Forum
  posts(username: String): [Post]
  Post(_id: ID!): [Post]
  Replys(username: String): [Reply]
  Reply(_id: ID!): Reply
  
}
type Mutation {
  addUser( userName: String!, email: String!, password: String!): Auth
  login( email: String!, password: String!): Auth
}
`;

module.exports = typeDefs