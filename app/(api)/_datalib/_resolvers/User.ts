import { Session } from 'next-auth';

export const UserResolvers = {
  Query: {
    getCurrentUser: async (
      _parent: unknown,
      _args: unknown,
      context: { session?: Session | null }
    ) => {
      if (!context.session || !context.session.user) {
        throw new Error('Unauthorized');
      }

      return {
        email: context.session.user.email,
        name: context.session.user.name,
      };
    },
  },
};

export default UserResolvers;
