import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

import typeDefs from '../_datalib/_typeDefs/User';
import resolvers from '../_datalib/_resolvers/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: NextApiRequest }) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    if (token) {
      try {
        const user = jwt.verify(token, JWT_SECRET);
        return { user };
      } catch (err) {
        throw new Error('Invalid or expired token');
      }
    }

    return {};
  },
});

export default apolloServer;
