import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Vacancy } from '@models/';

const vacancyRouter = Router();
vacancyRouter.use(bodyParser.json());

vacancyRouter
	.route('/vacancies/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.find({})
			.then(
				vacancy => {
					res.json(vacancy);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.create(req.body)
			.then(
				vacancy => {
					console.log('Фотография добавлена');
					res.json(vacancy);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.put((req: Request, res: Response): void => {
		// res.stutusCode = 403;
		res.status(403).end('PUT не поддерживается на /vacancies');
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.remove({})
			.then(
				resp => {
					res.json(resp);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

vacancyRouter
	.route('/vacancies/:vacancyId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.findById(req.params.vacancyId)
			.then(
				vacancy => {
					res.json(vacancy);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response): void => {
		res.status(403).end(
			'POST не поддерживается на /vacancies/' + req.params.vacancyId
		);
	})
	.put((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.findByIdAndUpdate(
			req.params.vacancyId,
			{
				$set: req.body
			},
			{
				new: true
			}
		)
			.then(
				vacancy => {
					res.json(vacancy);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Vacancy.findByIdAndRemove(req.params.vacancyId)
			.then(
				resp => {
					res.json({ message: 'удалена' });
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { vacancyRouter };
