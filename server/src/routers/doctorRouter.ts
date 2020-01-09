import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Doctor, Mark, Specialization, File } from '@models/';

const doctorRouter = Router();
doctorRouter.use(bodyParser.json());

doctorRouter
	.route('/doctors/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Doctor.find({})
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
