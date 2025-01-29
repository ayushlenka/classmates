import { signUp, signIn } from '../_services/Users';

export const Mutation = {
  signUp: async (_, { email, password }) => {
    return await signUp(email, password);
  },
  signIn: async (_, { email, password }) => {
    return await signIn(email, password);
  },
};
