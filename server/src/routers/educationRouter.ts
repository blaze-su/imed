import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Education } from '@models/';

const educationRouter = Router();
educationRouter.use(bodyParser.json());

educationRouter
	.route('/educations/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Education.find({})
			.then(
				education => {
					res.json(education);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Education.create(req.body)
			.then(
				education => {
					res.json(education);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});
educationRouter
	.route('/educations/:educationsId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Education.findById(req.params.educationsId)
			.then(
				education => {
					res.json(education);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});
export { educationRouter };
