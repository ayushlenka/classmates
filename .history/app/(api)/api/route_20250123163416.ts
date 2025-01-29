import { NextApiHandler } from 'next';
import apolloServer from '../_datalib/apolloServer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = apolloServer.createHandler({
  path: '/api/graphql',
});

export default handler;
