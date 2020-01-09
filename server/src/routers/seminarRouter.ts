import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Seminar } from '@models/';

const seminarRouter = Router();
seminarRouter.use(bodyParser.json());

seminarRouter
	.route('/seminars/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Seminar.find({})
			.then(
				seminar => {
					res.json(seminar);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Seminar.create(req.body)
			.then(
				seminar => {
					console.log('Фотография добавлена');
					res.json(seminar);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.put((req: Request, res: Response): void => {
		// res.stutusCode = 403;
		res.status(403).end('PUT не поддерживается на /seminars');
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Seminar.remove({})
			.then(
				resp => {
					res.json(resp);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

seminarRouter
	.route('/seminars/:seminarId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Seminar.findById(req.params.seminarId)
			.then(
				seminar => {
					res.json(seminar);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response): void => {
		res.status(403).end(
			'POST не поддерживается на /seminars/' + req.params.seminarId
		);
	})
	.put((req: Request, res: Response, next: NextFunction): void => {
		Seminar.findByIdAndUpdate(
			req.params.seminarId,
			{
				$set: req.body
			},
			{
				new: true
			}
		)
			.then(
				seminar => {
					res.json(seminar);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Seminar.findByIdAndRemove(req.params.seminarId)
			.then(
				resp => {
					res.json({ message: 'удалена' });
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { seminarRouter };
