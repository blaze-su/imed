import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Contr } from '@models/';

const contrRouter = Router();
contrRouter.use(bodyParser.json());

contrRouter
	.route('/contrs/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Contr.find({})
			.then(
				contr => {
					res.json(contr);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Contr.create(req.body)
			.then(
				contr => {
					res.json(contr);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});
contrRouter
	.route('/contrs/:contrsId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Contr.findById(req.params.contrsId)
			.then(
				contr => {
					res.json(contr);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { contrRouter };
