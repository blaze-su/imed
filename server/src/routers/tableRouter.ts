import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Table } from '@models/';

const tableRouter = Router();
tableRouter.use(bodyParser.json());

tableRouter
	.route('/tables/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Table.find({})
			.then(
				table => {
					res.json(table);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Table.create(req.body)
			.then(
				table => {
					res.json(table);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});
tableRouter
	.route('/tables/:tablesId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Table.findById(req.params.tablesId)
			.then(
				table => {
					res.json(table);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { tableRouter };
