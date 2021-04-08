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
  
}
`;

module.exports = typeDefs
//the rest of the forum elements need ways to load the data and query it. 
/*
type Forum {
  name: string
  subforum: [Subforum]
}
type Subforum {
  category: Number
  name: String
  createdAt: string
  post: [Post]
}
type Post {
  _id: ID
  category: Number
  postText: String
  createdAt: String
  username: String
  reply: [Reply]
}
type Reply{
  _id: ID
  replyText: String
  createdAt: string
  username: string
}


//working on some of the query defs disabled to work on one at a time
  Forums(username: String): [Forum]
  Forum(_id: ID!): Forum
  Subforums(username: String): [Subforum]
  Subforum(_id: ID!): Subforum
  Posts(username: String): [Post]
  Post(_id: ID!): Post
  Replys(username: String): [Reply]
  Reply(_id: ID!): Reply

*/