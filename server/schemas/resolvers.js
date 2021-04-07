const { AuthenticationError } = require('apollo-server-express');
const { User, Forum, Post, Reply, Product, Orders } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
            }
        }
    },
};

module.exports = resolvers;