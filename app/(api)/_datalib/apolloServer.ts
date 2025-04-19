import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import typeDefs from '../_datalib/_typeDefs/User';
import resolvers from '../_datalib/_resolvers/User';
import { authOptions } from '../auth/nextauth';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({
    req,
    res,
  }: {
    req: NextApiRequest;
    res: NextApiResponse;
  }) => {
    const session = await getServerSession(req, res, authOptions);

    return { session };
  },
});

export default apolloServer;
