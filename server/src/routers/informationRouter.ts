import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Information } from '@models/';

const informationRouter = Router();
informationRouter.use(
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false })
);

informationRouter
	.route('/informations/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Information.find({})
			.then(
				information => {
					res.json(information);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

informationRouter
	.route('/informations/:informationId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Information.findById(req.params.informationId)
			.then(
				information => {
					res.json(information);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { informationRouter };
