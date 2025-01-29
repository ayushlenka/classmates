import { ApolloServer } from 'apollo-server-micro';
import typeDefs from './_typeDefs';
import resolvers from './_resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Include user info in the context if needed for authenticated requests
    const auth = req.headers.authorization || '';
    const token = auth.replace('Bearer ', '');
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        return { user };
      } catch {
        throw new Error('Invalid or expired token');
      }
    }
    return {};
  },
});

module.exports = apolloServer;
