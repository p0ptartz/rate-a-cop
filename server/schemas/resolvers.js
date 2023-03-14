const { AuthenticationError } = require('apollo-server-express');
const { Department, Feedback, Location, User, } = require('../models');
const { authMiddleware, signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        feedbacks: async () => {
            return Feedback.find().sort({ createdAt: -1 });
        },

        feedback: async (parent, { feedbackId }) => {
            return Feedback.findOne({ _id: feedbackId });
        },
        locations: async () => {
            return Location.find().sort({ createdAt: -1 })
        },
        // location: async (parent, { locationId }) => {
        //     return Location.findOne({ _id: locationId });
        // },
        departments: async () => {
            return Department.find().sort({ createdAt: -1 });
        },
        // department: async (parent, { departmentId }) => {
        // return Department.findOne({ _id: departmentId });
        // }, 
        users: async () => {
            return User.find().sort({ createdAt: -1 })
        }

    },

    Mutation: {
        // login: async (parent, { username, password }) => {
        //     const user = await User.findOne({ username });

        //     if (!user) {
        //         throw new AuthenticationError('No user found with this username');
        //     }

        //     const correctPw = await user.isCorrectPassword(password);

        //     if (!correctPw) {
        //         throw new AuthenticationError('Incorrect credentials');
        //     }

        //     const token = signToken(user);

        //     return { token, user };
        // },
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            // const token = signToken(user);
            return user; //removed token
        },


        addFeedback: async (parent, { review, rating }) => {
            console.log("checking")
            const feedback = await Feedback.create({ review, rating });

            return feedback;
        },
        addLocation: async (parent, { name, departments, officers }) => {
            const location = await Location.create({
                name, departments, officers
            })
            return location
        }

    }
}

module.exports = resolvers;
