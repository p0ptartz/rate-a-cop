const { AuthenticationError } = require('apollo-server-express');
const { Department, Feedback, Location, User, Officer } = require('../models');
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
        },
        officers: async () => {
            return Officer.find().sort({ createdAt: -1 });
        },
        officer: async (parent, { officerId }) => {
            return Officer.findOne({ officerId: officerId });
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


        addFeedback: async (parent, { review, rating, city }) => {

            const feedback = await Feedback.create({ review, rating, city });

            return feedback;
        },
        addLocation: async (parent, { name, departments, officers, city, searchQuery }) => {
            const location = await Location.create({
                name, departments, officers, city, searchQuery
            })
            return location
        },

        addOfficer: async (parent, { name, position, officerId }) => {
            const officer = await Officer.create({
                name, position, officerId
            })
            return officer
        },
        addDepartment: async (parent, { name }) => {
            const department = await Department.create({
                name
            })
            return department
        }

    }
}

module.exports = resolvers;
