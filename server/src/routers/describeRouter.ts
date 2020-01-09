import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Describe } from '@models/';

const describeRouter = Router();
describeRouter.use(bodyParser.json());

describeRouter
	.route('/describes/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Describe.find({})
			.then(
				describe => {
					res.json(describe);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Describe.create(req.body)
			.then(
				describe => {
					res.json(describe);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

describeRouter
	.route('/describes/:describesId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Describe.findById(req.params.describesId)
			.then(
				describe => {
					res.json(describe);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { describeRouter };
