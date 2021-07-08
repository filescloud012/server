import { Request, Response, NextFunction } from 'express';
import { Frontends } from '@models';

/**
 * Checks for the Origin Header and assigns the Cors Header if it is Validated
 *
 * @param {Request} req - Express Request Object
 * @param {Response} res - Express Response Object
 * @param {NextFunction} next - Express Next Function
 */
function corsMiddleware(req: Request, res: Response, next: NextFunction): void {
  Frontends.getFrontendUrls()
    .then((domains) => {
      const allowedDomains = domains.map((dom) => dom.domain);
      const { origin } = req.headers;
      if (origin && allowedDomains.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Accept',
      );
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    })
    .catch((error) => {
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error Related to Database',
        error,
      });
    });
}

export default corsMiddleware;
