import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Specialization } from '@models/';

const specializationRouter = Router();
specializationRouter.use(bodyParser.json());

specializationRouter
	.route('/specializations/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Specialization.find({})
			.then(
				specialization => {
					res.json(specialization);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

specializationRouter
	.route('/specializations/:specializationId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Specialization.findById(req.params.specializationId)
			.then(
				specialization => {
					res.json(specialization);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { specializationRouter };
