const { gql } = require('apollo-server-express');
//users querys fine but db is empty.need a way to get all users and user by name
const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
  }
type Query {
  users: User
  user(username: String!): User
  Forums(username: String): [Forum]
  Forum(_id: ID!): Forum
  Subforums(username: String): [Subforum]
  Subforum(_id: ID!): Subforum
  Posts(username: String): [Post]
  Post(_id: ID!): Post
  Replys(username: String): [Reply]
  Reply(_id: ID!): Reply
  
}
type Mutation {
  addUser(firstName: String!, lastName: String!, userName: String!, email: String!): User
}

# //the rest of the forum elements need ways to load the data and query it. 
type Forum {
  name: String
  subforum: [Subforum]
}
type Subforum {
  name: String
  createdAt: String
  post: [Post]
}
type Post {
  _id: ID
  postText: String
  createdAt: String
  username: String
  reply: [Reply]
}
type Reply{
  _id: ID
  replyText: String
  createdAt: String
  username: String
}
`;

module.exports = typeDefs