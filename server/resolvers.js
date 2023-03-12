const User = require('./models/User');

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    },
    updateUser: async (_, { id, input }) => {
      const user = await User.findByIdAndUpdate(id, input, { new: true });
      return user;
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);
      return user;
    }
  }
};

module.exports = resolvers;
