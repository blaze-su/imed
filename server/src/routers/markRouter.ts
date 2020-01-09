import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Mark } from '@models/';

const markRouter = Router();
markRouter.use(bodyParser.json());

markRouter
	.route('/marks/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Mark.find({})
			.then(
				mark => {
					res.json(mark);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

markRouter
	.route('/marks/:markId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Mark.findById(req.params.markId)
			.then(
				mark => {
					res.json(mark);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { markRouter };
