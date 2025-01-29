import { signUp, signIn } from '../_services/Users';

const resolvers = {
  Mutation: {
    signUp: async (_, { email, password }) => {
      return await signUp(email, password);
    },
    signIn: async (_, { email, password }) => {
      return await signIn(email, password);
    },
  },
};

export default resolvers;
