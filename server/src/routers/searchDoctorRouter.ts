import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Doctor, Specialization } from '@models/';

const searchDoctorRouter = Router();
searchDoctorRouter.use(bodyParser.json());

searchDoctorRouter
	.route('/searchDoctor/:searchDoctorId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Doctor.find({ $text: { $search: req.params.searchDoctorId } })
			.populate({ path: 'specializationsId', model: Specialization })
			.then(
				doctor => {
					res.json(doctor);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { searchDoctorRouter };
