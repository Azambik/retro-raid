const { AuthenticationError } = require('apollo-server-express');
const { User, Forum, Post, Reply, Product, Orders } = require('../models');
const { signToken } = require('../utils/auth');
//was working on user quey but still need to be able to create a user
const resolvers ={
    Query: {
             // get all users
             users: async () => {
                return User.find()
                .select('-__v -password')
                .populate('Post')
                .populate('Reply');
            },
            // get a user by username
            user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('Post')
            .populate('Reply');
        },
        Forum: async (parent, { _id }) => {
            return Forum.findOne({ _id });
          },
        Forums: async (parent, { username}) => {
           const params = username ? { username } : {};
           return Forum.find(params).sort({ createdAt: -1 });
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            return User.create(args)
        }
    }
};

module.exports = resolvers;