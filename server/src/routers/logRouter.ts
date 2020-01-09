import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { LogSearch } from '@models/';

const logRouter = Router();
logRouter.use(bodyParser.json());

logRouter
	.route('/logsearch/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		LogSearch.find({})
			.then(
				log => {
					res.json(log);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

logRouter
	.route('/logsearch/:logId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		LogSearch.findById(req.params.logId)
			.then(
				log => {
					res.json(log);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { logRouter };
