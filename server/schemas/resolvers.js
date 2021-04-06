/*const { AuthenticationError } = require('apollo-server-express');
const { User, Forum, Post, Reply, Product, Orders } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers ={
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products'
              });
    }
    }
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
    }
};

module.exports = resolvers;*/