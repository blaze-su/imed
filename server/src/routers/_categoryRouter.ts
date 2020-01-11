import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import {
	Category,
	Equipment,
	Information,
	Mark,
	Specialization,
	Price,
	Doctor
} from '@models/';

const categoryRouter = Router();
categoryRouter.use(bodyParser.json());

categoryRouter
	.route('/categories/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Category.find({})
			.populate([
				{ path: 'equipmentsId', model: Equipment },
				{ path: 'informationsId', model: Information },
				{
					path: 'doctorsId',
					model: Doctor,
					populate: [
						{ path: 'marksId', model: Mark },
						{ path: 'specializationsId', model: Specialization }
					]
				},
				{
					path: 'pricesId',
					model: Price,
					populate: { path: 'marksId', model: Mark }
				}
			])
			.then(
				category => {
					res.json(category);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

categoryRouter
	.route('/categories/:categoryId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Category.findById(req.params.categoryId)
			.populate([
				{ path: 'equipmentsId', model: Equipment },
				{ path: 'informationsId', model: Information },
				{
					path: 'doctorsId',
					model: Doctor,
					populate: [
						{ path: 'marksId', model: Mark },
						{ path: 'specializationsId', model: Specialization }
					]
				},
				{ path: 'pricesId', model: Price }
			])
			.then(
				category => {
					res.json(category);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { categoryRouter };
