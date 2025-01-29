import { NextApiHandler } from 'next';
import apolloServer from '../_datalib/apolloServer';

const handler: NextApiHandler = apolloServer.createHandler({
  path: '/api/graphql',
});

export default handler;
