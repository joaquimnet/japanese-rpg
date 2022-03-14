import { NextApiRequest, NextApiResponse } from 'next';

type RequestHandlerFunc = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

interface RequestHandlers {
  GET?: RequestHandlerFunc;
  POST?: RequestHandlerFunc;
  PUT?: RequestHandlerFunc;
  DELETE?: RequestHandlerFunc;
  PATCH?: RequestHandlerFunc;
}

export const routeHelper = (requestHandlers) => {
  const { GET, POST, PUT, DELETE, PATCH } = requestHandlers;

  return async function run(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
      case 'GET':
        if (GET) {
          await GET(req, res);
        } else {
          res.status(405).end();
        }
        break;
      case 'POST':
        if (POST) {
          await POST(req, res);
        } else {
          res.status(405).end();
        }
        break;
      case 'PUT':
        if (PUT) {
          await PUT(req, res);
        } else {
          res.status(405).end();
        }
        break;
      case 'DELETE':
        if (DELETE) {
          await DELETE(req, res);
        } else {
          res.status(405).end();
        }
        break;
      case 'PATCH':
        if (PATCH) {
          await PATCH(req, res);
        } else {
          res.status(405).end();
        }
        break;
      default:
        res.status(405).end();
    }
  };
};
