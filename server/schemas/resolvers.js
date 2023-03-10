const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select('-_v -password')
                .populate('books');

                return userData; 
            }

            throw new AuthenticationError('Not logged in'); 
        }, 
        users: async () => {
            return User.find()
            .select('-_v -password')
            .populate('books')
        },
        user: async(parent, {username}) => {
            return User.findOne({username})
            .select('-_v -password')
            .populate('books');
        },
        savedBooks: async(parent, {username}) => {
            const params = username ? {username} : {};
            return Book.find(params).sort({createdAt: -1});
        },
        book: async(parent, {_id}) => {
            return Book.findOne({_id});
        }
    },
    Mutation: {
        // addUser: async(parent, args) => {
        //     const user = await User.create(args);
        //     const token = signToken(user);

        //     return {token, user};
        // },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user){
                throw new AuthenticationError('Incorrect email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);
            return {token,user};

        }

    }
};

module.exports = resolvers; 