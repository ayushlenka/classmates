import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import typeDefs from '@datalib/_typeDefs/User';
import resolvers from '@datalib/_resolvers/User';

// ✅ Create Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer);

export async function GET(req: Request) {
  return handler(req);
}

export async function POST(req: Request) {
  return handler(req);
}
