import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Equipment } from '@models/';

const equipmentRouter = Router();
equipmentRouter.use(
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false })
);

equipmentRouter
	.route('/equipments/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Equipment.find({})
			.then(
				equipment => {
					res.json(equipment);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

equipmentRouter
	.route('/equipments/:equipmentId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Equipment.findById(req.params.equipmentId)
			.then(
				equipment => {
					res.json(equipment);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { equipmentRouter };
