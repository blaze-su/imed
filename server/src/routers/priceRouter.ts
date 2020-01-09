import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Price } from '@models/';

const priceRouter = Router();
priceRouter.use(bodyParser.json());

priceRouter
	.route('/prices/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Price.find({})
			.populate({ path: 'marksId', model: 'mark' })
			.then(
				price => {
					res.json(price);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

priceRouter
	.route('/prices/:priceId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Price.findById(req.params.priceId)
			.populate([
				{ path: 'marksId', model: 'mark' },
				{
					path: 'categoriesId',
					model: 'category',
					populate: [
						{ path: 'equipmentsId', model: 'equipment' },
						{ path: 'informationsId', model: 'information' },
						{
							path: 'doctorsId',
							model: 'doctor',
							populate: [
								{ path: 'marksId', model: 'mark' },
								{
									path: 'specializationsId',
									model: 'specialization'
								}
							]
						}
					]
				}
			])
			.then(
				price => {
					res.json(price);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { priceRouter };
