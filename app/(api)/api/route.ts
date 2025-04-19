import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import typeDefs from '@datalib/_typeDefs/User';
import resolvers from '@datalib/_resolvers/User';
import NextAuth from 'next-auth';
import { authOptions } from '../auth/nextauth'; // ✅ Ensure correct path

// ✅ Create Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const apolloHandler = startServerAndCreateNextHandler(apolloServer);
const authHandler = NextAuth(authOptions); // ✅ NextAuth handler

export async function GET(req: Request) {
  if (req.url?.includes('/api/auth/')) {
    return authHandler(req); // ✅ Route NextAuth requests to NextAuth handler
  }
  return apolloHandler(req); // ✅ Otherwise, route to Apollo Server
}

export async function POST(req: Request) {
  if (req.url?.includes('/api/auth/')) {
    return authHandler(req); // ✅ Route NextAuth requests to NextAuth handler
  }
  return apolloHandler(req); // ✅ Otherwise, route to Apollo Server
}
