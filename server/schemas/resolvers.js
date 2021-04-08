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
    },
};

module.exports = resolvers;