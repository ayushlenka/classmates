import Users from '../_services/Users'; // ✅ Import the correct way

interface SignInArgs {
  email: string;
  password: string;
}

const resolvers = {
  Mutation: {
    signUp: async (_: unknown, args: SignInArgs) => {
      return await Users.signUp(args.email, args.password);
    },
    signIn: async (_: unknown, args: SignInArgs) => {
      return await Users.signIn(args.email, args.password);
    },
  },
};

export default resolvers;
