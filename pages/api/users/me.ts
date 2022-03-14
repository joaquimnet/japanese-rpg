import { NextApiRequest, NextApiResponse } from 'next';
import { routeHelper } from '../../../utils/route-helper';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const run = routeHelper({
    GET: async (req, res) => {
      res.status(200).json({
        message: 'GET request successful',
      });
    },
  });
  await run(req, res);
};

export default handler;
