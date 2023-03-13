const { Department, Feedback, Location, User } = require('../models');

const resolvers = {
    Query: {
        feedbacks: async() => {
            return Feedback.find().sort({ createdAt: -1 });
        },

        feedback: async(parent, { feedbackId }) => {
            return Feedback.findOne({ _id: feedbackId });
        },
    },

    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addUser: async (parent, { username, password })=> {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        addFeedback: async (parent, { review, rating }) => {
            const feedback = await Feedback.create({ review, rating });
            return feedback;
        },
        
    }
}

module.exports = resolvers;
