import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Event, Specialization, Mark, Describe, Table, Doctor } from '@models/';

const eventRouter = Router();
eventRouter.use(bodyParser.json());

eventRouter
	.route('/events/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Event.find({})
			.populate([
				{
					path: 'doctorsId',
					model: Doctor,
					populate: [
						{ path: 'marksId', model: Mark },
						{ path: 'specializationsId', model: Specialization }
					]
				},
				{ path: 'tablesId', model: Table },
				{ path: 'describesId', model: Describe }
			])
			.then(
				event => {
					res.json(event);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Event.create(req.body)
			.then(
				event => {
					res.json(event);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

eventRouter
	.route('/events/:eventsId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Event.findById(req.params.eventsId)
			.populate([
				{
					path: 'doctorsId',
					model: Doctor,
					populate: [
						{ path: 'marksId', model: Mark },
						{ path: 'specializationsId', model: Specialization }
					]
				},
				{ path: 'tablesId', model: Table },
				{ path: 'describesId', model: Describe }
			])
			.then(
				event => {
					res.json(event);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { eventRouter };
