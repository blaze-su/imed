import * as bodyParser from 'body-parser';

import { Doctor, File, Mark, Specialization } from '@models/';
import { NextFunction, Request, Response, Router } from 'express';

const doctorRouter = Router();
doctorRouter.use(bodyParser.json());

doctorRouter
	.route('/doctors/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Doctor.find({}).sort('sort')
			.populate([
				{ path: 'marksId', model: Mark },
				{ path: 'specializationsId', model: Specialization },
				{ path: 'filesId', model: File }
			])
			.then(
				doctor => {
					res.json(doctor);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

doctorRouter
	.route('/doctors/:doctorId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Doctor.findById(req.params.doctorId)
			.populate([
				{ path: 'marksId', model: Mark },
				{ path: 'specializationsId', model: Specialization },
				{ path: 'filesId', model: File }
			])
			.then(
				doctor => {
					res.json(doctor);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { doctorRouter };
