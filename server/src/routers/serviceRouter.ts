import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Service, Doctor } from '@models/';

const serviceRouter = Router();
serviceRouter.use(bodyParser.json());

serviceRouter
	.route('/services/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Service.find({})
			.populate({ path: 'doctorsId', model: Doctor })
			.then(
				service => {
					res.json(service);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

serviceRouter
	.route('/services/:serviceId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Service.findById(req.params.serviceId)
			.populate({ path: 'doctorsId', model: Doctor })
			.then(
				service => {
					res.json(service);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { serviceRouter };
